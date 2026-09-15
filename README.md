# Mòdul 1665 — Digitalització aplicada als sectors productius

Material docent del mòdul professional 1665 dels cicles formatius de grau superior **DAM, DAW i ASIX** de l'Institut TIC de Barcelona.

33 hores · 2 hores setmanals · segon curs.

## Curs 2026-27

El mòdul és **un únic projecte individual de transformació digital repartit en cinc activitats encadenades**. En aquest mòdul només es planifica: no s'implementa res. La documentació que en surt és la base del **Mòdul de Projecte**, on es formen grups de tres persones que barregen les tres especialitats i se n'implementa un.

Cada projecte ha de tenir feina real per a ASIX (infraestructura, xarxa, núvol i seguretat), DAM (aplicació multiplataforma) i DAW (aplicació web).

| Activitat | Hores | Període | RA |
|---|---|---|---|
| A1 · Idea, objectius i anàlisi de requeriments | 8 h | 17 set → 8 oct 2026 | RA1, RA2, RA4 |
| A2 · Disseny: arquitectura tecnològica | 8 h | 15 oct → 5 nov 2026 | RA3, RA5, RA6 |
| A3 · Pla d'implementació i seguretat | 4 h | 12 nov → 19 nov 2026 | RA5, RA6 |
| A4 · Prototip i material de presentació | 6 h | 26 nov → 10 des 2026 | RA6 |
| A5 · Presentació i defensa | 7 h | 17 des 2026 → 28 gen 2027 | RA6 |

## Estructura del repositori

```
26-27/                      Curs actual
  Web/                      Web del mòdul (React + Vite + Tailwind + Mermaid)
  recursos/                 Material de suport i projecte d'exemple resolt
  *.docx / *.xlsx           Programació, planificació, activitats i seguiment

25-26/                      Curs anterior, conservat com a referència
  Web/                      Web del curs passat
  Contingut/                Continguts teòrics, 10 casos d'empresa i avaluació
  RAs/                      Resultats d'aprenentatge i criteris
```

## La web del mòdul

**Publicada a https://zenidx.github.io/Digitalitzacio-1665/**

Pàgines: inici, **activitats** (índex i detall d'A1 a A5), **metodologia** (històries d'usuari, casos d'ús, backlog, MoSCoW, diagrama de context i pas del model E/R al relacional), **exemple resolt** (AccésCentre, amb les activitats 1 a 3 completes), teoria, casos d'empresa, avaluació i **recursos**, que inclou els materials del mòdul descarregables.

El desplegament es fa amb `gh-pages` des de la branca `main`:

```bash
cd 26-27/Web
npm run build
npx gh-pages -d dist
```

```bash
cd 26-27/Web
npm install
npm run dev      # servidor de desenvolupament
npm run build    # build de producció a dist/
```

La configuració de Vite fa servir una base relativa, així que el build funciona tant servit a l'arrel com en un subdirectori.

## Nota sobre dades personals

Aquest repositori **no conté cap treball d'alumnat**. Les entregues, les memòries i les retroalimentacions amb nom i cognoms queden excloses per `.gitignore` i no s'han de publicar mai aquí.

Els casos d'empresa del curs 25-26 són ficticis.
