import { useParams, Link } from 'react-router-dom'
import {
  ChevronRight, ChevronLeft, Calendar, Clock, Target, Lightbulb, AlertTriangle,
  CheckCircle, ClipboardList, BookOpen, Layers, Rocket, Presentation, Users, Info,
} from 'lucide-react'
import MermaidDiagram from '../components/MermaidDiagram'

const flowDiagram = `
flowchart LR
    A1[A1: Idea i requeriments<br/>8h] --> A2[A2: Arquitectura<br/>8h]
    A2 --> A3[A3: Implementació i seguretat<br/>4h]
    A3 --> A4[A4: Prototip<br/>6h]
    A4 --> A5[A5: Presentació i defensa<br/>7h]
    A5 --> MP[Mòdul de Projecte<br/>grups de 3, implementació]

    style A1 fill:#3b82f6,color:#fff
    style A2 fill:#06b6d4,color:#fff
    style A3 fill:#f59e0b,color:#000
    style A4 fill:#8b5cf6,color:#fff
    style A5 fill:#ec4899,color:#fff
    style MP fill:#22c55e,color:#fff
`

const icones = { 1: Lightbulb, 2: Layers, 3: ClipboardList, 4: Rocket, 5: Presentation }

const activitats = {
  1: {
    nom: "Idea, objectius i anàlisi de requeriments",
    hores: 8,
    periode: "17 de setembre – 8 d'octubre de 2026",
    ra: ["RA1", "RA2", "RA4", "RA6 (inici)"],
    proposit: "Definir el projecte i comprovar que és sòlid i coherent, que resol un problema real d'una empresa, que té l'abast i la complexitat adequats i que encaixa amb les tres especialitats (ASIX, DAM, DAW). En acabar aquesta activitat el projecte queda aprovat, ajustat o descartat.",
    lectures: [
      "Resum_Material_Digitalitzacio_IOC.md, Unitat 1 (revolucions industrials, digitalització a l'empresa, departaments, IT vs OT, procés de digitalització) i Unitat 2 (THD i els seus àmbits; IA, Cloud, Big Data, IoT).",
      "Per al punt d'IA: Resum_Material_Digitalitzacio_IOC.md, Unitat 3.2 (la IA: tipus, ML/DL/LLM, llenguatges i eines, IA per sectors).",
      "Per a sensors i IoT: vídeo “Las 4 capas del IoT con Big Data”.",
    ],
    lliurables: [
      {
        num: "1.1",
        titol: "Fitxa del projecte",
        items: [
          "Nom del projecte i sector de l'empresa, mida (persones, centres) i activitat principal.",
          "Situació de partida: grau de digitalització actual, com treballen ara.",
          "Problema o oportunitat que es vol resoldre.",
        ],
      },
      {
        num: "1.2",
        titol: "Idea i objectius",
        ra: "RA1: 1.1, 1.2 · RA6: 6.1, 6.2, 6.5",
        items: [
          "Descripció de la idea (½-1 pàgina): en què consisteix la transformació digital proposada i com millora l'empresa.",
          "Objectius estratègics de l'empresa (3-5), formulats de manera mesurable (p. ex. “reduir el temps de tramitació de comandes un 40% en 1 any”).",
          "Objectius de digitalització derivats dels anteriors.",
          "KPI inicials (2-4) per mesurar l'èxit, amb valor objectiu i període.",
          "Necessitats presents i futures que es tenen en compte.",
        ],
      },
      {
        num: "1.3",
        titol: "Abast i encaix amb ASIX / DAM / DAW",
        ra: "RA6: 6.3",
        items: [
          "Un apartat per a cada especialitat (DAW, DAM i ASIX) que expliciti, en un paràgraf, què aporta al projecte: quin component en desenvolupa (p. ex. portal web de gestió/clients per a DAW, app mòbil per a operaris/clients per a DAM, infraestructura al núvol, xarxa, seguretat i sensors per a ASIX) i una descripció breu de la feina que hi tindrà.",
          "Tancar amb un paràgraf de delimitació d'abast: què queda fora del projecte.",
        ],
      },
      {
        num: "1.4",
        titol: "Diagrama de context",
        ra: "RA1",
        items: [
          "Diagrama de nivell de context (el sistema com una única caixa) amb actors externs (tipus d'usuaris, sistemes de tercers, dispositius/sensors, APIs externes) i els fluxos d'informació principals que entren i surten del sistema.",
          "Notació lliure però consistent (es recomana diagrama de context / C4 - nivell 1), acompanyat d'una llegenda breu.",
        ],
      },
      {
        num: "1.5",
        titol: "Entorns IT i OT",
        ra: "RA1: 1.3, 1.4, 1.6",
        items: [
          "Identificar si el projecte té component OT (sensors, actuadors, PLC, SCADA, dispositius connectats). Si en té: descriure quins elements i com es connecten amb l'IT (passarel·la, protocol, on es processen les dades).",
          "Si no té component OT, justificar-ho i identificar els departaments IT de l'empresa implicats en el projecte.",
          "Breu reflexió sobre els avantatges de digitalitzar l'empresa d'extrem a extrem en aquest cas concret (1.7).",
        ],
      },
      {
        num: "1.6",
        titol: "Tecnologies habilitadores digitals (THD)",
        ra: "RA2: 2.1-2.7",
        items: [
          "A partir de la Unitat 2 dels continguts, seleccionar entre 3 i 6 THD rellevants per al projecte (IoT, Big Data, Cloud Computing, IA, blockchain, realitat augmentada/virtual, fabricació additiva, 5G, bessó digital…).",
          "Per a cada THD: què és (1-2 línies), per què s'usa en aquest projecte, part afectada (negoci / planta), benefici esperat i relació amb la sostenibilitat / eficiència.",
          "Conclusió (3-4 línies): millores esperades en relació amb els entorns IT/OT (2.6) i, si escau, nous mercats o serveis que la transformació podria obrir (2.4). Aquests apartats més la conclusió són l'informe que demana el CA 2.7.",
        ],
      },
      {
        num: "1.7",
        titol: "Ús de la intel·ligència artificial",
        ra: "RA4: 4.1-4.6",
        items: [
          "Indicar si el projecte incorpora IA i de quin tipus de tasca: classificació, predicció/regressió, detecció d'anomalies, recomanació, NLP / LLM, visió per computador…",
          "Per al cas d'ús triat: problema concret que resol, dades necessàries i d'on surten, relació amb el Big Data (4.2), benefici per a la rendibilitat de l'empresa, llenguatge i biblioteca/eina candidates —p. ex. Python + Scikit-learn / TensorFlow / un servei d'IA al núvol— (4.5) i consideracions ètiques i de privacitat.",
          "Valorar breument com la IA influeix en aquest sector i quins sectors en fan un ús més rellevant (4.3, 4.4, 4.6).",
          "Si el projecte no incorpora IA: justificar-ho i proposar un punt futur on es podria afegir.",
        ],
      },
    ],
    criteris: [
      "La idea és clara, realista i resol un problema concret d'una empresa.",
      "Els objectius estratègics i de digitalització són mesurables i estan relacionats entre si; hi ha KPI.",
      "L'encaix ASIX/DAM/DAW és real (les tres especialitats tenen feina substancial).",
      "La complexitat és adequada (ni trivial ni inabastable).",
      "El diagrama de context és correcte, complet i amb llegenda.",
      "El tractament IT/OT és coherent amb la naturalesa del projecte.",
      "Les THD estan seleccionades i contextualitzades (no és una llista genèrica copiada del material).",
      "El plantejament de la IA és coherent amb les dades realment disponibles.",
    ],
    extensio: "4-8 pàgines",
    checklist: [
      "Fitxa del projecte",
      "Idea, objectius estratègics i de digitalització, KPI",
      "Encaix ASIX / DAM / DAW (per especialitat) + delimitació d'abast",
      "Diagrama de context + llegenda",
      "Anàlisi IT / OT (o justificació) i avantatges d'extrem a extrem",
      "Informe de THD (apartat per THD + conclusions IT/OT i nous mercats)",
      "Anàlisi de l'ús d'IA (o justificació + punt futur)",
    ],
    errors: [
      "Llistar THD genèriques copiades del material sense contextualitzar-les al projecte.",
      "Objectius no mesurables (“millorar l'eficiència”) en lloc d'objectius SMART amb xifra i termini.",
      "Encaix ASIX/DAM/DAW superficial: una especialitat amb feina real i les altres dues de farciment.",
      "Projecte massa ambiciós (una plataforma sencera) o massa trivial (una simple landing page).",
    ],
    semafor: [
      "Puc explicar la idea del projecte en una frase, a algú que no sap res del tema?",
      "Cada objectiu té una xifra i un termini?",
      "Puc dir, per a cada THD triada, per què l'he triat i no una altra?",
      "ASIX, DAM i DAW tenen cadascuna almenys un paràgraf de feina real i concreta?",
    ],
  },
  2: {
    nom: "Disseny: arquitectura tecnològica",
    hores: 8,
    periode: "15 d'octubre – 5 de novembre de 2026",
    ra: ["RA3", "RA5", "RA6"],
    proposit: "Convertir la idea en un disseny tècnic i comprovar-ne la viabilitat. En acabar aquesta activitat s'ha de poder dir si el projecte és viable tal com està, si cal retallar-lo o si es pot ampliar.",
    lectures: [
      "Resum_Material_Digitalitzacio_IOC.md, Unitat 2.2 (Cloud Computing: models de servei IaaS/PaaS/SaaS, models de desplegament públic/privat/híbrid/multinúvol, edge/fog).",
      "Resum_Material_Digitalitzacio_IOC.md, Unitat 3.1 (dada/informació/coneixement, cicle de vida de les dades, datasets, Big Data i les seves característiques, ciència de dades).",
      "Guia Històries d'usuari, backlog i casos d'ús.",
    ],
    lliurables: [
      {
        num: "2.1",
        titol: "Històries d'usuari",
        items: [
          "Backlog inicial d'històries d'usuari (HU) en format “Com a [rol], vull [acció] per tal de [valor / benefici]”.",
          "Mínim orientatiu: 12-20 HU, agrupades per èpiques.",
          "Cada HU amb criteris d'acceptació: condicions concretes i verificables que la funcionalitat ha de complir perquè la HU es consideri acabada (p. ex. “si el correu ja existeix, es mostra un error i no es crea el compte”). Es poden redactar en format Given/When/Then.",
          "Han de cobrir els tres fronts: web (DAW), mòbil (DAM) i administració/infraestructura (ASIX).",
        ],
      },
      {
        num: "2.2",
        titol: "Casos d'ús",
        items: [
          "Especificació textual dels 3-5 casos d'ús principals: precondicions, flux bàsic, fluxos alternatius, postcondicions.",
        ],
      },
      {
        num: "2.3",
        titol: "Disseny de la xarxa i model de núvol",
        ra: "RA3: 3.1-3.5",
        items: [
          "Topologia de xarxa: segments / VLAN, DMZ, xarxa OT separada si el projecte té dispositius industrials, connexió a Internet.",
          "Connectivitat: VPN d'accés, Wi-Fi / 5G / LPWAN per als dispositius, etc.",
          "Elements: tallafocs, balancejador de càrrega, punts d'accés, passarel·la IoT…",
          "Model de núvol amb justificació: model de servei (IaaS / PaaS / SaaS per a cada component principal) i model de desplegament (públic / privat / híbrid / multinúvol).",
          "Funcions que es deleguen al núvol (emmagatzematge, execució d'aplicacions, processament de dades, còpies de seguretat…) i avantatges en aquest sistema connectat (3.2, 3.5).",
          "Si el projecte té sensors amb processament local: explicar l'ús d'edge computing i, si escau, fog/mist, i la seva relació amb el núvol (3.3, 3.4).",
        ],
      },
      {
        num: "2.4",
        titol: "Disseny de la base de dades",
        items: [
          "Model entitat-relació (o de classes): entitats, atributs, claus primàries i foranes, cardinalitats.",
          "El disseny de BBDD és també una mesura de la complexitat del projecte (orientatiu: 8-15 entitats).",
        ],
      },
      {
        num: "2.5",
        titol: "Fonts de dades i recorregut de les dades",
        ra: "RA5: 5.1-5.8 · RA6: 6.8, 6.9",
        items: [
          "Taula de fonts de dades: Font | Tipus (sensor / formulari web / app mòbil / API externa / fitxer) | Estructura (estructurada / semiestructurada / no estructurada) | Freqüència / volum.",
          "Recorregut de les dades seguint el cicle de vida: captura → emmagatzematge i organització → processament i anàlisi → ús (visualització, informes, panells, IA) → arxivament → eliminació. Es pot presentar com a diagrama de flux de dades.",
          "Distingir, en el context del projecte, dada / informació / coneixement (5.1).",
          "Si hi ha IA/analítica: indicar la relació Big Data ↔ anàlisi de dades ↔ ML/DL ↔ IA (5.3) i les etapes de ciència de dades implicades (5.5).",
          "Indicar on s'emmagatzemen les dades (local / núvol) i les implicacions (5.6, 5.7). Explicitar la integració entre dades, aplicacions i plataformes (6.9).",
        ],
      },
    ],
    criteris: [
      "Les HU cobreixen l'abast definit a l'Activitat 1 i estan ben formulades (rol / acció / valor + criteris d'acceptació).",
      "Els casos d'ús principals estan ben especificats i són coherents amb les HU.",
      "El disseny de xarxa és raonable i segur (separació d'entorns, DMZ, xarxa OT aïllada si cal).",
      "L'elecció del model de núvol està justificada i utilitza el vocabulari correcte (IaaS/PaaS/SaaS, públic/privat/híbrid, edge/fog).",
      "El model de dades és complet, normalitzat i amb cardinalitats correctes.",
      "El recorregut de les dades és complet i realista, i distingeix dada/informació/coneixement.",
    ],
    extensio: "8-14 pàgines (amb diagrames)",
    checklist: [
      "Històries d'usuari (12-20, per èpiques, amb criteris d'acceptació)",
      "Especificació dels casos d'ús principals",
      "Disseny de xarxa + model de núvol (servei i desplegament) + edge/fog si escau",
      "Model E/R i pas a relacional (8-15 entitats)",
      "Taula de fonts de dades + recorregut de les dades",
    ],
    errors: [
      "Històries d'usuari que en realitat són èpiques (“com a gestor vull gestionar el sistema”).",
      "Criteris d'acceptació genèrics o inexistents.",
      "Model de núvol triat sense justificació (“farem servir AWS perquè és el més conegut”).",
      "Model de dades que no reflecteix les entitats reals del negoci, o copiat d'un altre projecte.",
    ],
    semafor: [
      "Cada història d'usuari té criteris d'acceptació verificables?",
      "Sé justificar per què el model de núvol triat (IaaS/PaaS/SaaS, públic/privat) és el més adequat?",
      "El model de dades té totes les entitats que apareixen a les històries d'usuari?",
      "Sé explicar el recorregut complet d'una dada, des que es captura fins que s'elimina?",
    ],
  },
  3: {
    nom: "Pla d'implementació i seguretat",
    hores: 4,
    periode: "12 – 19 de novembre de 2026",
    ra: ["RA5", "RA6"],
    proposit: "Preparar el projecte per a la implementació en grup de 3 durant el mòdul de Projecte. Cal comprovar que el backlog és prou detallat i que la temporització és realista, i definir el pla de seguretat.",
    lectures: [
      "El Backlog en Scrum.pdf.",
      "Material_Digitalitzacio_IOC.md, Unitat 3.1.2 (cicle de vida de les dades, GDPR/RGPD) i Unitat 3.1.6 (seguretat de les dades: protecció d'informació sensible, normativa, ciberatacs, mesures).",
    ],
    lliurables: [
      {
        num: "3.1",
        titol: "Product backlog prioritzat",
        items: [
          "Totes les HU de l'Activitat 2, refinades, en una taula: ID | Història d'usuari | Èpica | Estimació (punts o talla S/M/L/XL) | Prioritat (MoSCoW: Must / Should / Could / Won't) | Dependències.",
        ],
      },
      {
        num: "3.2",
        titol: "Planificació en sprints",
        items: [
          "Durada de sprint (p. ex. 2 setmanes) i nombre de sprints disponibles.",
          "Assignació d'HU a sprints i objectiu (sprint goal) de cadascun.",
          "Fites: MVP, demo intermèdia, entrega final (roadmap o taula).",
          "Repartiment orientatiu de la càrrega entre els 3 rols (ASIX / DAM / DAW): què fa cadascú a grans trets.",
          "La temporització ha de ser realista per a 3 persones amb la dedicació prevista al mòdul de Projecte.",
        ],
      },
      {
        num: "3.3",
        titol: "Pla de seguretat",
        ra: "RA5: 5.9 · RA6: 6.7",
        items: [
          "a) Anàlisi de riscos per component (web, app mòbil, API/backend, base de dades, xarxa, núvol, IoT si escau): Component | Amenaça | Impacte (A/M/B) | Probabilitat (A/M/B) | Mesura mitigadora.",
          "b) Mesures de seguretat concretes (no genèriques): xifratge en trànsit (TLS) i en repòs; autenticació i autorització (rols/permisos, 2FA on calgui); còpies de seguretat i pla de recuperació; protecció de la xarxa (tallafocs, segmentació, aïllament de la xarxa OT); gestió de vulnerabilitats i actualitzacions; registre i auditoria d'accessos i accions.",
          "c) Protecció de dades personals (5.9): quines dades personals tracta el projecte i amb quina finalitat; compliment del RGPD/LOPDGDD (minimització, drets de les persones, període de retenció i eliminació segura); on s'emmagatzemen les dades i implicacions (p. ex. núvol públic amb servidors fora de la UE).",
        ],
      },
      {
        num: "3.4",
        titol: "Riscos del projecte i pla de contingència",
        items: [
          "Taula amb els riscos no de seguretat: dependències tècniques, corba d'aprenentatge d'una tecnologia, disponibilitat de dades o d'APIs externes, abast massa gran… amb la seva acció de contingència.",
        ],
      },
      {
        num: "3.5",
        titol: "Idoneïtat dels recursos humans",
        ra: "RA6: 6.11",
        items: [
          "Breu apartat: quins perfils/competències necessita l'equip de 3 (ASIX/DAM/DAW) per implementar el projecte i quins coneixements caldrà reforçar.",
        ],
      },
    ],
    criteris: [
      "El backlog està complet, estimat i prioritzat, amb dependències i Definició de Fet.",
      "Els sprints tenen objectiu clar i la temporització és realista per a 3 persones.",
      "Les fites estan ben definides (MVP i entregues).",
      "El pla de seguretat cobreix tots els components amb mesures concretes.",
      "El tractament de dades personals i la normativa (RGPD/LOPDGDD) són correctes.",
      "S'identifiquen riscos del projecte amb contingències realistes.",
    ],
    extensio: "4-8 pàgines",
    checklist: [
      "Product backlog prioritzat (estimació + MoSCoW + dependències) + Definició de Fet",
      "Planificació en sprints + fites + repartiment ASIX/DAM/DAW",
      "Anàlisi de riscos de seguretat per component",
      "Mesures de seguretat concretes",
      "Protecció de dades personals (RGPD/LOPDGDD)",
      "Riscos del projecte i contingències",
      "Idoneïtat dels recursos humans",
    ],
    errors: [
      "Mesures de seguretat genèriques tipus “hi haurà un tallafocs” o “ha de ser segur”, sense concretar component ni amenaça.",
      "Sprints sense objectiu clar ni HU assignades.",
      "Oblidar el tractament RGPD de les dades personals que sí que apareixen al projecte.",
      "Temporització irreal per a 3 persones: massa HU per al temps disponible al mòdul de Projecte.",
    ],
    semafor: [
      "Cada HU del backlog té una estimació i una prioritat MoSCoW?",
      "Per a cada component (web, app, BBDD, xarxa…) tinc almenys una amenaça i una mesura?",
      "Sé quines dades personals tracta el projecte i com compleixo el RGPD?",
      "La càrrega repartida entre 3 persones i el temps del mòdul de Projecte és realista?",
    ],
  },
  4: {
    nom: "Prototip i material de presentació",
    hores: 6,
    periode: "26 de novembre – 10 de desembre de 2026",
    ra: ["RA6"],
    proposit: "Donar una forma visual i tangible al projecte perquè es pugui entendre i valorar ràpidament, tant per a la defensa (Activitat 5) com per a les dinàmiques de tria d'equips i projecte del mòdul de Projecte. No s'implementa res: es prototipa.",
    eines: [
      "Prototipatge d'interfície: Google AI Studio (aistudio.google.com), Figma, Penpot, Balsamiq, Excalidraw, v0.",
      "Cartell / material gràfic: Canva, diagrams.net (draw.io), Figma.",
    ],
    lliurables: [
      {
        num: "4.1",
        titol: "Prototip navegable",
        items: [
          "Prototip de baixa o mitjana fidelitat de les pantalles clau: web (DAW) i app mòbil (DAM).",
          "5-8 pantalles que cobreixin el flux principal del projecte (les HU marcades Must a l'Activitat 3).",
          "No cal codi funcional, però sí navegació clicable entre pantalles i coherència visual mínima.",
          "Indicar l'eina utilitzada i adjuntar l'enllaç al prototip o les imatges exportades.",
        ],
      },
      {
        num: "4.2",
        titol: "Cartell publicitari del projecte",
        items: [
          "Un cartell d'una pàgina (A3 o A4) per presentar el projecte a la resta de la classe: nom, sector i problema que resol, idea en una frase, les tres peces (ASIX / DAM / DAW) i 2-3 beneficis clau (amb KPI si es tenen).",
          "Ha de ser autoexplicatiu i atractiu; pensat per projectar-lo o penjar-lo durant les dinàmiques de tria.",
        ],
      },
    ],
    criteris: [
      "El prototip reflecteix les HU principals i és coherent amb l'arquitectura i el model de dades de l'Activitat 2.",
      "La navegació entre pantalles permet seguir el flux principal del sistema.",
      "El cartell comunica el projecte de manera clara i autònoma (algú que no el coneix l'entén).",
      "El material és net, llegible i en català.",
    ],
    extensio: "Prototip navegable + cartell",
    checklist: [
      "Prototip navegable (5-8 pantalles, web + mòbil)",
      "Cartell publicitari del projecte",
    ],
    errors: [
      "Prototip amb pantalles boniques però desconnectades de les històries d'usuari Must de l'Activitat 3.",
      "Cartell amb massa text, pensat per llegir-lo en lloc de projectar-lo.",
      "Prototip d'una sola plataforma (per exemple només web, sense mòbil).",
    ],
    semafor: [
      "El prototip permet fer clic i navegar pel flux principal, no és només imatges estàtiques?",
      "Algú que no coneix el projecte entén el cartell sense que li ho expliqui?",
      "Web i mòbil estan tots dos representats al prototip?",
    ],
  },
  5: {
    nom: "Presentació i defensa",
    hores: 7,
    periode: "17 de desembre 2026 – 28 de gener 2027",
    ra: ["RA6"],
    proposit: "Comunicar el projecte de manera convincent i defensar-ne les decisions davant del grup i del professorat. Aquesta activitat alimenta les dinàmiques de formació d'equips: cada alumne/a coneix els projectes dels altres i es decideixen quins s'implementaran, en grups de 3, al mòdul de Projecte.",
    lliurables: [
      {
        num: "5.1",
        titol: "Presentació (diapositives)",
        items: [
          "8-12 diapositives per a una exposició de 8-10 minuts: problema i oportunitat · idea, objectius i KPI · encaix ASIX/DAM/DAW · arquitectura (1 diagrama) · model de dades (resum) · backlog i planificació (resum) · seguretat i riscos (resum) · demo del prototip · petició d'equip (quins perfils es busquen).",
        ],
      },
      {
        num: "5.2",
        titol: "Defensa oral",
        items: [
          "Exposició individual seguida d'un torn de preguntes del professorat i dels companys.",
          "Es valora que l'alumne/a justifiqui les decisions (per què aquest model de núvol, per què s'incorpora o no la IA, per què aquest abast) i que reconegui les limitacions del projecte.",
        ],
      },
    ],
    criteris: [
      "La presentació és clara, ben estructurada i s'ajusta al temps.",
      "La defensa demostra domini del projecte i capacitat de justificar les decisions i assumir les crítiques.",
      "El material de suport (diapositives + prototip + cartell) és coherent entre si i amb els lliuraments de les activitats 1-3.",
    ],
    extensio: "8-12 diapositives (8-10 min)",
    checklist: [
      "Presentació (8-12 diapositives)",
      "Defensa oral amb torn de preguntes",
    ],
    errors: [
      "Diapositives amb massa text, llegides en lloc d'explicades.",
      "No preparar respostes a per què s'ha triat cada tecnologia.",
      "Passar-se molt del temps assignat (8-10 min) o no arribar a explicar la demo.",
    ],
    semafor: [
      "Puc explicar el projecte sencer en 8-10 minuts sense passar-me?",
      "Tinc resposta preparada per a “per què aquest model de núvol / aquesta IA / aquest abast”?",
      "Sé quines són les limitacions del meu projecte i les puc reconèixer?",
    ],
  },
}

const bancIdees = [
  {
    sector: "Gimnàs amb 3 centres",
    problema: "Gestió d'aforament i reserves de classe dispersa en fulls de càlcul, sense visibilitat entre centres.",
    encaix: "ASIX connecta els 3 centres i els sensors d'aforament al núvol, DAM dona l'app de reserves al soci, DAW dona el back-office per als entrenadors.",
  },
  {
    sector: "Supermercat de proximitat",
    problema: "Comandes i estoc de productes frescos gestionats a ull, amb merma alta i ruptures freqüents.",
    encaix: "ASIX gestiona la xarxa de sensors de cadena de fred, DAM dona l'app de comandes i fidelització al client, DAW dona el portal de gestió d'estoc i proveïdors.",
  },
  {
    sector: "Taller de mecanitzat CNC",
    problema: "Les ordres de fabricació arriben en paper i les màquines no reporten cap dada de producció.",
    encaix: "ASIX connecta les CNC a la xarxa i al núvol (IIoT), DAM dona l'app per als operaris a planta, DAW dona l'ERP lleuger de comandes i traçabilitat.",
  },
  {
    sector: "Empresa de transport amb 45 vehicles",
    problema: "No hi ha visibilitat en temps real de la flota ni optimització de rutes de repartiment.",
    encaix: "ASIX desplega la infraestructura de tracking GPS i la xarxa, DAM dona l'app al conductor, DAW dona el panell de control de rutes per al gestor de flota.",
  },
  {
    sector: "Clínica multidisciplinar",
    problema: "Historials de pacients en paper repartits entre especialistes, cites descoordinades.",
    encaix: "ASIX garanteix la seguretat i el compliment normatiu de les dades clíniques, DAM dona l'app de cites al pacient, DAW dona l'historial clínic unificat per als professionals.",
  },
  {
    sector: "Explotació vitícola",
    problema: "El reg i els tractaments es decideixen a ull, sense dades reals de la finca.",
    encaix: "ASIX desplega els sensors IoT/LoRaWAN al camp, DAM dona l'app de camp per al pagès, DAW dona el dashboard d'anàlisi de collita i tractaments.",
  },
  {
    sector: "Hotel 4 estrelles",
    problema: "Preus i ocupació es gestionen manualment, sense revenue management.",
    encaix: "ASIX connecta panys intel·ligents i sensors d'habitació, DAM dona l'app de l'hoste (check-in, control d'habitació), DAW dona el motor de reserves i el panell de revenue management.",
  },
  {
    sector: "Constructora mitjana",
    problema: "Seguiment d'obra en paper; les desviacions de pressupost i termini es detecten tard.",
    encaix: "ASIX desplega la xarxa i la seguretat de les obres (càmeres, sensors), DAM dona l'app de comandament per als caps d'obra en camp, DAW dona el portal de seguiment documental per a l'oficina tècnica.",
  },
  {
    sector: "Acadèmia de formació",
    problema: "El material i el seguiment de l'alumnat estan dispersos entre Drive, WhatsApp i Excel.",
    encaix: "ASIX dona la infraestructura cloud i la seguretat de les dades de l'alumnat, DAM dona l'app de l'alumne (contingut, notificacions), DAW dona la plataforma de gestió acadèmica i learning analytics.",
  },
  {
    sector: "Fabricant de components d'automoció",
    problema: "Control de qualitat manual; massa peces defectuoses arriben al client OEM.",
    encaix: "ASIX connecta les línies i els sensors de visió a la xarxa OT/IT, DAM dona l'app per als inspectors de planta, DAW dona el portal de traçabilitat i informes per al client OEM.",
  },
]

export default function Activitats() {
  const { num } = useParams()
  const actId = num ? parseInt(num) : null
  const current = actId ? activitats[actId] : null

  if (!current) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Activitats</h1>
          <p className="text-gray-600">
            El mòdul s'organitza en un únic projecte individual de transformació digital, repartit en 5 activitats
            encadenades. Cada activitat és el pas necessari per començar la següent: no es passa a l'A2 sense una
            idea sòlida a l'A1, ni a l'A4 sense una arquitectura viable a l'A2.
          </p>
        </div>

        {/* Marc de treball */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <Info className="w-6 h-6 text-primary-500" />
            <h2 className="text-xl font-semibold text-gray-900">Marc de treball</h2>
          </div>
          <div className="space-y-3 text-gray-600 leading-relaxed">
            <p>
              En aquest mòdul <strong>només es planifica: no s'implementa res</strong>. La documentació que en surt
              (idea, requisits, arquitectura, disseny de BBDD, backlog, pla de seguretat, prototip) és la base per al
              Mòdul de Projecte de 2n curs, on es formen grups de 3 alumnes i se n'implementa un.
            </p>
            <p>
              El projecte que cada alumne/a proposi ha de complir totes aquestes condicions:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Individual: cada persona presenta el seu propi projecte.</li>
              <li>
                Empresa o organització d'un sector productiu, real o fictícia però realista (sector, mida, activitat,
                situació de partida), que parteixi d'una situació de poca digitalització.
              </li>
              <li>
                Ha d'implicar les tres especialitats del centre amb feina real per a cadascuna: <strong>ASIX</strong>
                {' '}(infraestructura, xarxa, sistemes, núvol i seguretat), <strong>DAM</strong> (aplicació
                multiplataforma, especialment mòbil) i <strong>DAW</strong> (aplicació web).
              </li>
              <li>
                Ha de gestionar dades: model de base de dades propi i un recorregut de les dades clar (captura →
                emmagatzematge → processament → ús).
              </li>
              <li>
                Complexitat adequada per repartir-se entre 3 persones durant el mòdul de Projecte, però abastable. El
                disseny de BBDD i el nombre d'històries d'usuari en són una mesura.
              </li>
              <li>Recomanat: incorporar IA i/o IoT/OT (sensors, dispositius), ja que suma complexitat i cobreix més RA.</li>
            </ul>
          </div>
          <div className="mt-6">
            <MermaidDiagram chart={flowDiagram} />
          </div>
        </div>

        {/* Format i lliurament */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <ClipboardList className="w-6 h-6 text-primary-500" />
            <h2 className="text-xl font-semibold text-gray-900">Format i lliurament</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Format del document</p>
              <p className="text-gray-600">
                Un únic document per activitat (Markdown o PDF) amb els diagrames incrustats o adjunts. Eines
                recomanades per als diagrames: diagrams.net (draw.io), Mermaid o PlantUML.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Nomenclatura del fitxer</p>
              <p className="text-gray-600">
                <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200">Cognom_Nom_Activitat1.pdf</code>,
                i així per a cada activitat.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Idioma</p>
              <p className="text-gray-600">Català, en tots els lliuraments.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Veredicte</p>
              <p className="text-gray-600">
                Cada activitat es revisa i es retorna amb un veredicte:{' '}
                <span className="font-medium text-green-700">acceptada</span>,{' '}
                <span className="font-medium text-yellow-700">acceptada amb ajustos</span> o{' '}
                <span className="font-medium text-red-700">cal replantejar</span>.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Cada activitat pesa un <strong>20% de la nota del mòdul</strong> (detall a{' '}
            <Link to="/avaluacio" className="text-primary-600 hover:underline">Avaluació</Link>).
          </p>
        </div>

        {/* Index de targetes */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Les 5 activitats</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(activitats).map(([id, act]) => {
              const Icon = icones[id]
              return (
                <Link
                  key={id}
                  to={`/activitats/${id}`}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="bg-primary-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary-600 font-medium">
                        A{id} · {act.ra.join(', ')}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{act.nom}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{act.proposit}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{act.hores} h</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{act.periode}</span>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Banc d'idees de rescat */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-2">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <h2 className="text-xl font-semibold text-gray-900">Banc d'idees de rescat per a l'Activitat 1</h2>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            L'Activitat 1 comença el primer dia de classe. Si no tens una idea d'empresa, aquests són punts de
            partida: sectors amb marge real per digitalitzar-se i on ASIX, DAM i DAW hi tenen feina real. Pots
            proposar-ne un de propi amb aprovació prèvia del docent.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {bancIdees.map((idea, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">{idea.sector}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Problema:</strong> {idea.problema}</p>
                <p className="text-sm text-gray-600"><strong>Encaix:</strong> {idea.encaix}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const prevId = actId > 1 ? actId - 1 : null
  const nextId = actId < 5 ? actId + 1 : null

  return (
    <div className="space-y-8">
      {/* Capçalera */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {current.ra.map((r) => (
            <span key={r} className="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded">
              {r}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Activitat {actId}: {current.nom}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4" />
            <span>{current.hores} hores</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <Calendar className="w-4 h-4" />
            <span>{current.periode}</span>
          </span>
        </div>
      </div>

      {/* Propòsit */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-3">
          <Target className="w-5 h-5 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Propòsit</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">{current.proposit}</p>
      </div>

      {/* Rescat d'idees, només A1 */}
      {actId === 1 && (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start space-x-3">
          <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-yellow-900">
            Sense idea encara? Consulta el <Link to="/activitats" className="underline font-medium">banc d'idees de rescat</Link> a
            l'índex d'activitats: 10 punts de partida amb sector, problema i encaix ASIX/DAM/DAW.
          </p>
        </div>
      )}

      {/* Lectures prèvies */}
      {current.lectures && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-3">
            <BookOpen className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-semibold text-gray-900">Lectures prèvies</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {current.lectures.map((l, i) => (
              <li key={i} className="leading-relaxed">{l}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Eines recomanades, només A4 */}
      {current.eines && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-3">
            <Layers className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-semibold text-gray-900">Eines recomanades</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {current.eines.map((e, i) => (
              <li key={i} className="leading-relaxed">{e}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Lliurables */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <ClipboardList className="w-5 h-5 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Lliurables</h2>
        </div>
        <div className="space-y-6">
          {current.lliurables.map((ll) => (
            <div key={ll.num} className="border-l-4 border-primary-200 pl-4">
              <div className="flex items-baseline flex-wrap gap-2 mb-1">
                <h3 className="font-semibold text-gray-900">{ll.num} {ll.titol}</h3>
                {ll.ra && <span className="text-xs text-gray-500">({ll.ra})</span>}
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-sm">
                {ll.items.map((it, i) => (
                  <li key={i} className="leading-relaxed">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Criteris d'avaluació */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Criteris d'avaluació de l'activitat</h2>
        <ul className="space-y-2">
          {current.criteris.map((c, i) => (
            <li key={i} className="text-sm text-gray-600 flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Format i extensió */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-800">
        <strong>Extensió orientativa i format de lliurament:</strong> {current.extensio}. Document en PDF (o Markdown),
        nomenclatura <code className="bg-white/60 px-1 rounded">Cognom_Nom_Activitat{actId}.pdf</code>, en català.
      </div>

      {/* Errors típics */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-semibold text-gray-900">Errors típics a evitar</h2>
        </div>
        <div className="space-y-2">
          {current.errors.map((e, i) => (
            <div key={i} className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-sm text-orange-900">
              {e}
            </div>
          ))}
        </div>
      </div>

      {/* Semàfor d'autoavaluació */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900">Semàfor d'autoavaluació</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Abans d'entregar, respon aquestes preguntes. Si totes són un sí clar, l'activitat està llesta.
        </p>
        <ul className="space-y-2">
          {current.semafor.map((s, i) => (
            <li key={i} className="text-sm text-gray-700 flex items-start p-3 bg-green-50 rounded-lg">
              <span className="text-green-600 mr-2 font-bold">?</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Checklist d'entrega */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <h2 className="text-xl font-semibold text-gray-900">Checklist d'entrega</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {current.checklist.map((item, i) => (
            <label key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary-600" />
              <span className="text-gray-700 text-sm">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Navegació */}
      <div className="flex justify-between">
        {prevId ? (
          <Link to={`/activitats/${prevId}`} className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
            <ChevronLeft className="w-5 h-5" />
            <span>Activitat {prevId}: {activitats[prevId].nom}</span>
          </Link>
        ) : (
          <Link to="/activitats" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
            <ChevronLeft className="w-5 h-5" />
            <span>Totes les activitats</span>
          </Link>
        )}
        {nextId ? (
          <Link to={`/activitats/${nextId}`} className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
            <span>Activitat {nextId}: {activitats[nextId].nom}</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
