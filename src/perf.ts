import { onCLS, onINP, onLCP, onTTFB } from "web-vitals";

function logMetric(name: string, value: number) {
  // Arrotonda e logga in console
  const rounded = Math.round(value * 100) / 100;
  // Usa console.groupCollapsed per non “sporcare” troppo
  console.groupCollapsed(`[Web Vitals] ${name}: ${rounded}`);
  console.log({ name, value });
  console.groupEnd();
}

onLCP((m) => logMetric("LCP", m.value));
onCLS((m) => logMetric("CLS", m.value));
onINP((m) => logMetric("INP", m.value));
onTTFB((m) => logMetric("TTFB", m.value));
