# I Giarratano Parrucchieri - Sito Web

Sito web per il salone di parrucchiere I Giarratano Parrucchieri a Sant'Ambrogio di Torino.

## 🚀 Come avviare il sito

### Prerequisiti
- Node.js (versione 18 o superiore)
- npm o yarn

### Installazione e avvio

1. **Installa le dipendenze:**
   ```bash
   npm install
   ```

2. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

3. **Apri il browser:**
   Il sito sarà disponibile all'indirizzo mostrato nel terminale (solitamente `http://localhost:5173`)

### Altri comandi disponibili

- **Build per produzione:**
  ```bash
  npm run build
  ```

- **Anteprima della build:**
  ```bash
  npm run preview
  ```

- **Controllo errori TypeScript:**
  ```bash
  npm run typecheck
  ```

- **Linting:**
  ```bash
  npm run lint
  ```

## 📁 Struttura del progetto

- `src/` - Codice sorgente dell'applicazione
  - `components/` - Componenti React riutilizzabili
  - `pages/` - Pagine dell'applicazione
  - `content.ts` - Dati del salone (orari, contatti, servizi, ecc.)
- `public/` - File statici (immagini, logo, ecc.)
- `index.html` - File HTML principale

## 🛠️ Tecnologie utilizzate

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React (icone)
- Vercel Analytics & Speed Insights

## ⚠️ Risoluzione problemi

Se il sito non si apre:

1. **Verifica che Node.js sia installato:**
   ```bash
   node --version
   ```

2. **Installa le dipendenze:**
   ```bash
   npm install
   ```

3. **Pulisci la cache e reinstalla:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Verifica che la porta 5173 sia libera** o usa un'altra porta:
   ```bash
   npm run dev -- --port 3000
   ```

## 📝 Note

- Il sito utilizza React Router con HashRouter per la navigazione
- Le immagini sono ottimizzate e caricate da Pexels
- Il sito è responsive e ottimizzato per mobile
- Include PWA (Progressive Web App) support
