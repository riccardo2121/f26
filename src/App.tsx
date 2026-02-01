import { HashRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Reviews } from "./pages/Reviews";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { TaglioDonna, ColoreBalayage, Trattamenti, BarberiaUomo, AcconciatureSposa } from "./pages/services";

export default function App() {
  return (
    <HashRouter>
      <SpeedInsights />
      <Analytics />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recensioni" element={<Reviews />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termini" element={<Terms />} />
          <Route path="/servizi/taglio-donna" element={<TaglioDonna />} />
          <Route path="/servizi/colore-balayage" element={<ColoreBalayage />} />
          <Route path="/servizi/trattamenti" element={<Trattamenti />} />
          <Route path="/servizi/barberia-uomo" element={<BarberiaUomo />} />
          <Route path="/servizi/acconciature-sposa" element={<AcconciatureSposa />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
