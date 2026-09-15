import { FileText, CheckCircle, Info, Calendar, Package, AlertTriangle, Sparkles, ShieldCheck, Target, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import MermaidDiagram from '../components/MermaidDiagram'

const activitats = [
  {
    num: 1,
    nom: 'Activitat 1 — Idea, objectius i anàlisi de requeriments',
    hores: 8,
    inici: "17 de setembre 2026",
    fi: "8 d'octubre 2026",
    ra: ['RA1', 'RA2', 'RA4'],
    raInici: ['RA6'],
    color: 'border-blue-300 bg-blue-50',
    badge: 'bg-blue-500',
    lliurables: [
      "Fitxa del projecte i idea",
      "Objectius estratègics i de digitalització + KPI",
      "Encaix ASIX / DAM / DAW",
      "Diagrama de context",
      "Entorns IT i OT",
      "Tecnologies habilitadores digitals (THD)",
      "Ús de la intel·ligència artificial",
    ],
    criteris: [
      "La idea és clara, realista i resol un problema concret d'una empresa.",
      "Els objectius estratègics i de digitalització són mesurables i estan relacionats entre si; hi ha KPI.",
      "L'encaix ASIX/DAM/DAW és real (les tres especialitats tenen feina substancial).",
      "La complexitat és adequada (ni trivial ni inabastable).",
      "El diagrama de context és correcte, complet i amb llegenda.",
      "El tractament IT/OT és coherent amb la naturalesa del projecte.",
      "Les THD estan seleccionades i contextualitzades, no és una llista genèrica copiada del material.",
      "El plantejament de la IA és coherent amb les dades realment disponibles.",
    ],
    extensio: '4-8 pàgines',
  },
  {
    num: 2,
    nom: 'Activitat 2 — Disseny: arquitectura tecnològica',
    hores: 8,
    inici: "15 d'octubre 2026",
    fi: "5 de novembre 2026",
    ra: ['RA3', 'RA5', 'RA6'],
    color: 'border-green-300 bg-green-50',
    badge: 'bg-green-500',
    lliurables: [
      "Històries d'usuari (backlog inicial)",
      "Casos d'ús principals",
      "Disseny de xarxa i model de núvol",
      "Disseny de la base de dades",
      "Fonts de dades i recorregut de les dades",
    ],
    criteris: [
      "Les HU cobreixen l'abast definit a l'Activitat 1 i estan ben formulades: rol / acció / valor + criteris d'acceptació.",
      "Els casos d'ús principals estan ben especificats i són coherents amb les HU.",
      "El disseny de xarxa és raonable i segur: separació d'entorns, DMZ, xarxa OT aïllada si cal.",
      "L'elecció del model de núvol està justificada i utilitza el vocabulari correcte: IaaS/PaaS/SaaS, públic/privat/híbrid, edge/fog.",
      "El model de dades és complet, normalitzat i amb cardinalitats correctes.",
      "El recorregut de les dades és complet i realista, i distingeix dada/informació/coneixement.",
    ],
    extensio: '8-14 pàgines (amb diagrames)',
  },
  {
    num: 3,
    nom: "Activitat 3 — Pla d'implementació i seguretat",
    hores: 4,
    inici: "12 de novembre 2026",
    fi: "19 de novembre 2026",
    ra: ['RA5', 'RA6'],
    color: 'border-orange-300 bg-orange-50',
    badge: 'bg-orange-500',
    lliurables: [
      'Product backlog prioritzat (estimació + MoSCoW + dependències)',
      'Planificació en sprints i fites',
      'Pla de seguretat: anàlisi de riscos i mesures',
      'Protecció de dades personals (RGPD/LOPDGDD)',
      'Riscos del projecte i pla de contingència',
      'Idoneïtat dels recursos humans',
    ],
    criteris: [
      "El backlog està complet, estimat i prioritzat, amb dependències i Definició de Fet.",
      "Els sprints tenen objectiu clar i la temporització és realista per a 3 persones.",
      "Les fites estan ben definides: MVP i entregues.",
      "El pla de seguretat cobreix tots els components amb mesures concretes.",
      "El tractament de dades personals i la normativa RGPD/LOPDGDD són correctes.",
      "S'identifiquen riscos del projecte amb contingències realistes.",
    ],
    extensio: '4-8 pàgines',
  },
  {
    num: 4,
    nom: 'Activitat 4 — Prototip i material de presentació',
    hores: 6,
    inici: "26 de novembre 2026",
    fi: "10 de desembre 2026",
    ra: ['RA6'],
    color: 'border-purple-300 bg-purple-50',
    badge: 'bg-purple-500',
    lliurables: [
      'Prototip navegable (5-8 pantalles, web + mòbil)',
      'Cartell publicitari del projecte',
    ],
    criteris: [
      "El prototip reflecteix les HU principals i és coherent amb l'arquitectura i el model de dades de l'Activitat 2.",
      "La navegació entre pantalles permet seguir el flux principal del sistema.",
      "El cartell comunica el projecte de manera clara i autònoma: algú que no el coneix l'entén.",
      "El material és net, llegible i en català.",
    ],
    extensio: 'Prototip navegable + cartell',
  },
  {
    num: 5,
    nom: 'Activitat 5 — Presentació i defensa',
    hores: 7,
    inici: "17 de desembre 2026",
    fi: "28 de gener 2027",
    ra: ['RA6'],
    color: 'border-rose-300 bg-rose-50',
    badge: 'bg-rose-500',
    lliurables: [
      'Presentació de 8-12 diapositives',
      'Defensa oral amb torn de preguntes',
    ],
    criteris: [
      "La presentació és clara, ben estructurada i s'ajusta al temps.",
      "La defensa demostra domini del projecte i capacitat de justificar les decisions i assumir les crítiques.",
      "El material de suport (diapositives + prototip + cartell) és coherent entre si i amb els lliuraments de les activitats 1-3.",
    ],
    extensio: 'Presentació de 8-12 diapositives (8-10 min)',
  },
]

const raInfo = [
  { ra: 'RA1', nom: 'Digitalització i entorns IT/OT', activitats: ['A1'], criteris: '1.1 – 1.7' },
  { ra: 'RA2', nom: 'Tecnologies habilitadores digitals (THD)', activitats: ['A1'], criteris: '2.1 – 2.7' },
  { ra: 'RA3', nom: 'Sistemes basats en cloud/núvol', activitats: ['A2'], criteris: '3.1 – 3.5' },
  { ra: 'RA4', nom: 'Aplicacions de la intel·ligència artificial', activitats: ['A1'], criteris: '4.1 – 4.6' },
  { ra: 'RA5', nom: 'Dades i la seva protecció', activitats: ['A2', 'A3'], criteris: '5.1 – 5.9' },
  { ra: 'RA6', nom: 'Projecte de transformació digital', activitats: ['A1', 'A2', 'A3', 'A4', 'A5'], criteris: '6.1 – 6.11' },
]

const tracabilitat = [
  { activitat: 'A1', ra: 'RA1', criteris: '1.1, 1.2, 1.3, 1.4, 1.6, 1.7', continguts: '1.1 – 1.5' },
  { activitat: 'A1', ra: 'RA2', criteris: '2.1 – 2.7', continguts: '2.1 – 2.6' },
  { activitat: 'A1', ra: 'RA4', criteris: '4.1 – 4.6', continguts: '4.1 – 4.6' },
  { activitat: 'A1', ra: 'RA6 (inici)', criteris: '6.1, 6.2, 6.3, 6.5', continguts: '6.1, 6.2, 6.3' },
  { activitat: 'A2', ra: 'RA3', criteris: '3.1 – 3.5', continguts: '3.1 – 3.6' },
  { activitat: 'A2', ra: 'RA5', criteris: '5.1 – 5.8', continguts: '5.1 – 5.6' },
  { activitat: 'A2', ra: 'RA6', criteris: '6.5, 6.8, 6.9', continguts: '6.3, 6.5, 6.8' },
  { activitat: 'A3', ra: 'RA5', criteris: '5.9', continguts: '5.2, 5.5, 5.7' },
  { activitat: 'A3', ra: 'RA6', criteris: '6.4, 6.6, 6.7, 6.11', continguts: '6.4, 6.6, 6.7, 6.8' },
  { activitat: 'A4', ra: 'RA6', criteris: '6.6, 6.8, 6.10', continguts: '6.6, 6.8' },
  { activitat: 'A5', ra: 'RA6', criteris: '6.10 (comunicació i justificació de les decisions)', continguts: '6.6, 6.8' },
]

const veredictes = [
  {
    nivell: 'Acceptada',
    color: 'border-green-300 bg-green-50',
    text: 'text-green-700',
    desc: "L'activitat compleix els criteris d'avaluació. Es continua a la següent activitat sense canvis.",
  },
  {
    nivell: 'Acceptada amb ajustos',
    color: 'border-yellow-300 bg-yellow-50',
    text: 'text-yellow-700',
    desc: "Compleix el mínim, però amb punts febles identificats pel docent. Es pot continuar, incorporant els ajustos a la següent activitat.",
  },
  {
    nivell: 'Cal replantejar',
    color: 'border-red-300 bg-red-50',
    text: 'text-red-700',
    desc: "No compleix els criteris mínims. Cal revisar i tornar a lliurar l'activitat, o una part significativa, abans de continuar.",
  },
]

const nivellsRubrica = [
  { nivell: 'Excel·lent', color: 'text-green-600', desc: 'Supera els criteris amb qualitat professional, contextualització pròpia i justificació sòlida de cada decisió.' },
  { nivell: 'Notable', color: 'text-blue-600', desc: "Compleix tots els criteris amb bon nivell; petites mancances que no afecten la comprensió del projecte." },
  { nivell: 'Suficient', color: 'text-yellow-600', desc: 'Compleix els mínims exigits, però amb contingut genèric, poc contextualitzat o incomplet en algun punt.' },
  { nivell: 'Insuficient', color: 'text-red-600', desc: "No compleix els mínims: falten lliurables, el contingut no és propi del projecte o no arriba a la nota mínima de 5." },
]

const iaPermes = [
  "Prototipatge de pantalles a l'Activitat 4 (Google AI Studio, Figma, Penpot, Balsamiq, Excalidraw, v0…).",
  'Esborranys i primeres versions de text que després es revisen i es reescriuen amb criteri propi.',
  "Traducció de continguts.",
  'Generació d\'imatges o elements gràfics per al cartell publicitari.',
]

const iaAmbCitacio = [
  'Redacció assistida de parts del document (cal declarar quina eina i per a quin apartat).',
  'Generació de diagrames a partir d\'una descripció pròpia (Mermaid, PlantUML, diagrams.net amb assistència IA).',
  'Pluja d\'idees per a l\'enfocament del projecte, les THD o els casos d\'ús, sempre que la decisió final i la justificació siguin de l\'alumne/a.',
]

const iaNoPermes = [
  'Entregar text generat per IA com a propi sense entendre\'l ni poder-lo justificar a la defensa.',
  'Inventar dades, KPI o resultats que no es poden justificar.',
  'Generar el projecte sencer (idea, arquitectura, backlog…) amb IA i presentar-lo sense feina pròpia.',
]

const checklistGlobal = [
  'Nom del fitxer amb el format Cognom_Nom_ActivitatN.pdf',
  "Document en català, en Markdown o PDF, amb els diagrames incrustats",
  'Totes les seccions de lliurables de l\'activitat completades',
  'Diagrames fets amb diagrams.net, Mermaid o PlantUML i llegibles',
  "Criteris d'avaluació de l'activitat revisats abans de lliurar",
  "Annex amb les eines d'IA utilitzades i per a què (si escau)",
  'Lliurament dins de termini a Moodle',
  'Revisió ortogràfica i de format',
]

const mapejoDiagram = `
flowchart TB
    subgraph ACT["5 activitats — 20% cadascuna"]
        A1[A1 · Idea i requeriments]
        A2[A2 · Arquitectura]
        A3[A3 · Implementació i seguretat]
        A4[A4 · Prototip]
        A5[A5 · Defensa]
    end
    subgraph RES["Resultats d'aprenentatge"]
        RA1[RA1 · Digitalització IT/OT]
        RA2[RA2 · THD]
        RA3[RA3 · Cloud/núvol]
        RA4[RA4 · Intel·ligència Artificial]
        RA5[RA5 · Dades i seguretat]
        RA6[RA6 · Projecte de transformació]
    end
    A1 --> RA1
    A1 --> RA2
    A1 --> RA4
    A1 -.inici.-> RA6
    A2 --> RA3
    A2 --> RA5
    A2 --> RA6
    A3 --> RA5
    A3 --> RA6
    A4 --> RA6
    A5 --> RA6

    style ACT fill:#f8fafc
    style RES fill:#eff6ff
`

export default function Avaluacio() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Avaluació</h1>
        <p className="text-gray-600">
          El mòdul s'avalua mitjançant <strong>5 activitats d'avaluació</strong>, sense proves escrites, que formen
          un únic projecte individual de transformació digital repartit en cinc fases encadenades. Cada activitat
          pesa un 20% de la nota del mòdul.
        </p>
      </div>

      {/* Model d'avaluació */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <Target className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Model d'avaluació</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Segons la programació oficial, el mòdul es divideix en 5 activitats d'avaluació de lliurament obligatori,
          sense proves escrites ni pràctiques. La nota del mòdul professional (QMP) es calcula com:
        </p>
        <div className="p-4 bg-gray-50 rounded-lg font-mono text-sm text-gray-800 mb-4">
          QMP = 0,20 × A1 + 0,20 × A2 + 0,20 × A3 + 0,20 × A4 + 0,20 × A5
        </div>
        <div className="grid md:grid-cols-5 gap-3">
          {activitats.map((act) => (
            <div key={act.num} className={`rounded-lg p-3 border-2 text-center ${act.color}`}>
              <p className="text-xs font-semibold text-gray-700">A{act.num}</p>
              <p className="text-2xl font-bold text-gray-900">20%</p>
              <p className="text-xs text-gray-600">{act.hores} h</p>
            </div>
          ))}
        </div>
      </div>

      {/* Avís discrepància pesos */}
      <div className="flex items-start space-x-3 p-4 bg-amber-50 border border-amber-300 rounded-xl">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-amber-900">
          <strong>Avís de discrepància pendent de tancar:</strong> la programació oficial del mòdul estableix un 20%
          per activitat (A1-A5), i és el repartiment vigent que es fa servir a tota aquesta pàgina. En els comentaris
          de preparació de l'equip docent es va valorar un repartiment alternatiu de 15% / 20% / 15% / 30% / 20%
          (A1-A5), que dona més pes al prototip. Aquesta proposta encara no s'ha tancat formalment: fins que no es
          confirmi un canvi, val el que diu la programació.
        </div>
      </div>

      {/* Calendari */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <Calendar className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Calendari d'activitats</h2>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          33 hores repartides en 5 activitats encadenades, del 17 de setembre de 2026 al 28 de gener de 2027.
          Consulta el detall de cada activitat a <Link to="/activitats" className="text-primary-600 hover:underline">Activitats</Link>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Activitat</th>
                <th className="px-4 py-2 text-left">Hores</th>
                <th className="px-4 py-2 text-left">Inici</th>
                <th className="px-4 py-2 text-left">Fi</th>
                <th className="px-4 py-2 text-left">RA</th>
              </tr>
            </thead>
            <tbody>
              {activitats.map((act) => (
                <tr key={act.num} className="border-b">
                  <td className="px-4 py-2 font-medium">A{act.num}</td>
                  <td className="px-4 py-2 text-gray-600">{act.hores} h</td>
                  <td className="px-4 py-2 text-gray-600">{act.inici}</td>
                  <td className="px-4 py-2 text-gray-600">{act.fi}</td>
                  <td className="px-4 py-2 text-gray-600">
                    {[...(act.raInici || []).map((r) => `${r} (inici)`), ...act.ra].join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Superació per RA */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Superació per Resultat d'Aprenentatge</h2>
        <p className="text-sm text-gray-600 mb-4">
          Per superar el mòdul cal superar <strong>cada RA de manera independent</strong>, amb una qualificació
          mínima de 5. Com que cada RA s'avalua repartit entre diverses activitats, la nota de cada RA surt de la
          <strong> mitjana de les evidències d'aquell RA</strong> a les activitats corresponents, no d'una única prova.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">RA</th>
                <th className="px-4 py-2 text-left">Àmbit</th>
                <th className="px-4 py-2 text-left">S'avalua a</th>
                <th className="px-4 py-2 text-left">Criteris d'avaluació</th>
              </tr>
            </thead>
            <tbody>
              {raInfo.map((r) => (
                <tr key={r.ra} className="border-b">
                  <td className="px-4 py-2 font-medium">{r.ra}</td>
                  <td className="px-4 py-2 text-gray-600">{r.nom}</td>
                  <td className="px-4 py-2 text-gray-600">{r.activitats.join(', ')}</td>
                  <td className="px-4 py-2 text-gray-600">{r.criteris}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mapatge diagram */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Mapatge activitats ↔ RA</h2>
        <MermaidDiagram chart={mapejoDiagram} />
      </div>

      {/* Matriu de traçabilitat */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Matriu de traçabilitat</h2>
        <p className="text-sm text-gray-600 mb-4">
          Detall de quins criteris d'avaluació i continguts del mòdul 1665 cobreix cada activitat.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Activitat</th>
                <th className="px-4 py-2 text-left">RA</th>
                <th className="px-4 py-2 text-left">Criteris d'avaluació</th>
                <th className="px-4 py-2 text-left">Continguts</th>
              </tr>
            </thead>
            <tbody>
              {tracabilitat.map((t, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-2 font-medium">{t.activitat}</td>
                  <td className="px-4 py-2 text-gray-600">{t.ra}</td>
                  <td className="px-4 py-2 text-gray-600">{t.criteris}</td>
                  <td className="px-4 py-2 text-gray-600">{t.continguts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sistema de veredicte */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sistema de veredicte de cada activitat</h2>
        <p className="text-sm text-gray-600 mb-4">
          Cada activitat es revisa i es retorna amb un dels tres veredictes següents:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {veredictes.map((v) => (
            <div key={v.nivell} className={`rounded-lg p-4 border-2 ${v.color}`}>
              <p className={`font-semibold mb-1 ${v.text}`}>{v.nivell}</p>
              <p className="text-sm text-gray-700">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rúbrica per activitat */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <FileText className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Rúbrica per activitat</h2>
        </div>
        <div className="space-y-6">
          {activitats.map((act) => (
            <div key={act.num} className={`rounded-lg p-5 border-2 ${act.color}`}>
              <div className="flex items-start space-x-3 mb-3">
                <div className={`${act.badge} text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0`}>
                  A{act.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{act.nom}</h3>
                  <p className="text-xs text-gray-500">{act.extensio}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {act.criteris.map((c, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="font-medium text-gray-900 mt-6 mb-3">Escala de valoració</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Nivell</th>
                <th className="px-4 py-2 text-left">Descripció</th>
              </tr>
            </thead>
            <tbody>
              {nivellsRubrica.map((n) => (
                <tr key={n.nivell} className="border-b">
                  <td className="px-4 py-2"><span className={`font-bold ${n.color}`}>{n.nivell}</span></td>
                  <td className="px-4 py-2 text-gray-600">{n.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Política d'IA */}
      <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-200">
        <div className="flex items-center space-x-2 mb-2">
          <Sparkles className="w-6 h-6 text-primary-600" />
          <h2 className="text-xl font-semibold text-gray-900">Política d'ús de la intel·ligència artificial</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Hi ha una tensió real entre dos punts de la programació: la còpia o "utilització indeguda d'Internet /
          Intel·ligència Artificial" a una activitat d'avaluació pot suposar un <strong>zero a l'activitat i la
          pèrdua del dret a l'avaluació contínua del RA corresponent</strong>, mentre que l'Activitat 4 recomana
          explícitament prototipar amb eines d'IA com Google AI Studio. La diferència no és si es fa servir IA, sinó
          <strong> com</strong> es fa servir i si l'alumne/a la pot justificar.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-lg p-4 border-2 border-green-300 bg-green-50">
            <p className="font-semibold text-green-700 mb-2">Ús permès i esperat</p>
            <ul className="space-y-1">
              {iaPermes.map((t, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg p-4 border-2 border-yellow-300 bg-yellow-50">
            <p className="font-semibold text-yellow-700 mb-2">Permès amb citació obligatòria</p>
            <ul className="space-y-1">
              {iaAmbCitacio.map((t, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg p-4 border-2 border-red-300 bg-red-50">
            <p className="font-semibold text-red-700 mb-2">No permès</p>
            <ul className="space-y-1">
              {iaNoPermes.map((t, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-start space-x-3 mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-800">
            Cada lliurament ha d'incloure un <strong>annex d'eines utilitzades</strong>: quines eines d'IA, per a
            quin apartat i amb quin propòsit. A la defensa (Activitat 5) es pregunta sobre les decisions del
            projecte i cal saber-les justificar; no saber explicar una part del propi document és indici d'ús
            indegut d'IA.
          </div>
        </div>
      </div>

      {/* Lliuraments i format */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <Package className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Lliuraments i format</h2>
        </div>
        <ul className="space-y-2 text-sm text-gray-700 mb-4">
          <li>• Nomenclatura del fitxer: <code className="bg-gray-100 px-1 rounded">Cognom_Nom_ActivitatN.pdf</code></li>
          <li>• Un document per activitat, en Markdown o PDF, amb els diagrames incrustats o adjunts.</li>
          <li>• Eines de diagrames recomanades: diagrams.net (draw.io), Mermaid o PlantUML.</li>
          <li>• Idioma: català.</li>
          <li>• L'entrega fora de termini es penalitza; el termini de cada activitat es publica a Moodle.</li>
        </ul>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Activitat</th>
                <th className="px-4 py-2 text-left">Extensió orientativa</th>
              </tr>
            </thead>
            <tbody>
              {activitats.map((act) => (
                <tr key={act.num} className="border-b">
                  <td className="px-4 py-2 font-medium">A{act.num}</td>
                  <td className="px-4 py-2 text-gray-600">{act.extensio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Consulta l'abast complet de cada activitat a <Link to="/activitats" className="text-primary-600 hover:underline">Activitats</Link>,
          la metodologia de treball a <Link to="/metodologia" className="text-primary-600 hover:underline">Metodologia</Link> i
          un cas resolt de referència a <Link to="/exemple" className="text-primary-600 hover:underline">Exemple</Link>.
        </p>
      </div>

      {/* Recuperació i segona convocatòria */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <RotateCcw className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Recuperació i segona convocatòria</h2>
        </div>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start">
            <ShieldCheck className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Durant l'avaluació contínua es podran oferir <strong>activitats d'assoliment</strong> per superar un RA amb una qualificació inferior a 5.</span>
          </li>
          <li className="flex items-start">
            <ShieldCheck className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Una activitat d'avaluació amb nota inferior a 5 es pot tornar a presentar, a criteri del professor/a.</span>
          </li>
          <li className="flex items-start">
            <ShieldCheck className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Si no s'assoleixen tots els RA durant l'avaluació contínua, cal presentar-se a la <strong>segona convocatòria</strong>, on s'avaluen només els RA no assolits.</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>En cas de <strong>pèrdua del dret a l'avaluació contínua</strong> (per exemple per ús indegut d'IA), presentar-se a la segona convocatòria implica l'avaluació de <strong>tot el mòdul</strong>, no només dels RA pendents.</span>
          </li>
        </ul>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <h2 className="text-xl font-semibold text-gray-900">Checklist global d'entrega</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {checklistGlobal.map((item, i) => (
            <label key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary-600" />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
