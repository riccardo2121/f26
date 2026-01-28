import { useState, useEffect } from "react";
import { getCurrentStatus } from "../utils/businessHours";

export function useBusinessStatus() {
  const [status, setStatus] = useState(() => getCurrentStatus());

  useEffect(() => {
    // Aggiorna lo stato immediatamente
    setStatus(getCurrentStatus());

    // Aggiorna ogni minuto per mantenere sincronizzato
    const interval = setInterval(() => {
      setStatus(getCurrentStatus());
    }, 60000); // ogni minuto

    return () => clearInterval(interval);
  }, []);

  return status;
}
