export interface TimeRange {
  open: string; // HH:MM format
  close: string;
}

export interface DaySchedule {
  day: number; // 0 = Sunday, 1 = Monday, etc.
  ranges: TimeRange[];
}

// Orari del salone:
// Mar-Mer: 09:00–12:30, 14:30–18:30
// Gio: 09:00–18:30
// Ven-Sab: 08:30–18:30
// Dom-Lun: Chiuso
export const businessHours: DaySchedule[] = [
  { day: 0, ranges: [] }, // Domenica - Chiuso
  { day: 1, ranges: [] }, // Lunedì - Chiuso
  { day: 2, ranges: [{ open: "09:00", close: "12:30" }, { open: "14:30", close: "18:30" }] }, // Martedì
  { day: 3, ranges: [{ open: "09:00", close: "12:30" }, { open: "14:30", close: "18:30" }] }, // Mercoledì
  { day: 4, ranges: [{ open: "09:00", close: "18:30" }] }, // Giovedì
  { day: 5, ranges: [{ open: "08:30", close: "18:30" }] }, // Venerdì
  { day: 6, ranges: [{ open: "08:30", close: "18:30" }] }, // Sabato
];

export function isCurrentlyOpen(): boolean {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute; // Convert to minutes since midnight

  const daySchedule = businessHours.find((s) => s.day === currentDay);
  
  if (!daySchedule || daySchedule.ranges.length === 0) {
    return false;
  }

  for (const range of daySchedule.ranges) {
    const [openHour, openMinute] = range.open.split(":").map(Number);
    const [closeHour, closeMinute] = range.close.split(":").map(Number);
    
    const openTime = openHour * 60 + openMinute;
    const closeTime = closeHour * 60 + closeMinute;

    if (currentTime >= openTime && currentTime < closeTime) {
      return true;
    }
  }

  return false;
}

export function getNextOpeningTime(): { day: string; time: string } | null {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  const dayNames = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

  // Check remaining days of the week
  for (let i = 0; i < 7; i++) {
    const checkDay = (currentDay + i) % 7;
    const daySchedule = businessHours.find((s) => s.day === checkDay);
    
    if (daySchedule && daySchedule.ranges.length > 0) {
      for (const range of daySchedule.ranges) {
        const [openHour, openMinute] = range.open.split(":").map(Number);
        const openTime = openHour * 60 + openMinute;

        if (i === 0) {
          // Today - check if opening time is in the future
          if (openTime > currentTime) {
            return {
              day: "Oggi",
              time: range.open,
            };
          }
        } else {
          // Future day
          return {
            day: i === 1 ? "Domani" : dayNames[checkDay],
            time: range.open,
          };
        }
      }
    }
  }

  return null;
}

export function getCurrentStatus(): { 
  isOpen: boolean; 
  message: string;
  nextOpening?: { day: string; time: string };
} {
  const isOpen = isCurrentlyOpen();
  
  if (isOpen) {
    return {
      isOpen: true,
      message: "Aperto ora",
    };
  }

  const nextOpening = getNextOpeningTime();
  
  return {
    isOpen: false,
    message: "Chiuso",
    nextOpening: nextOpening || undefined,
  };
}
