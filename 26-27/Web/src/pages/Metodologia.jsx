import { Link } from 'react-router-dom'
import {
  Map, Layers, Users, CheckSquare, ListChecks, GitBranch, AlertTriangle,
  ClipboardCheck, Calendar, Network, Database, Target, Flag, ShieldCheck,
  BookOpen, ArrowRight, Info,
} from 'lucide-react'
import MermaidDiagram from '../components/MermaidDiagram'

// ---------- Diagrames Mermaid ----------

const fluxArtefactesDiagram = `
flowchart LR
    A[Requisits] --> B[Èpiques]
    B --> C[Històries d'usuari]
    C --> D[Casos d'ús]
    C --> E[Product Backlog]
    D --> E
    E --> F[Sprints]

    style A fill:#94a3b8,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#8b5cf6,color:#fff
    style D fill:#ec4899,color:#fff
    style E fill:#f59e0b,color:#000
    style F fill:#22c55e,color:#fff
`

const casosUsDiagram = `
flowchart LR
    ALU[Alumnat]
    PROF[Professorat]
    CONS[Consergeria]
    DIR[Direcció]
    FAM[Família]

    subgraph SIS["Sistema: AccésCentre"]
        CU1(["Validar accés i
obrir porta"])
        CU2(["Registrar
assistència"])
        CU3(["Anul·lar
targeta"])
        CU4(["Emetre
targeta"])
        CU5(["Activar mode
evacuació"])
        CU6(["Consultar
assistència"])
    end

    ALU --> CU1
    ALU --> CU6
    PROF --> CU1
    PROF --> CU2
    CONS --> CU3
    CONS --> CU4
    DIR --> CU5
    FAM --> CU6

    style SIS fill:#f8fafc
`

const contextC4Diagram = `
flowchart TB
    ALU[Alumnat]
    PROF[Professorat]
    CONS[Consergeria]
    FAM[Famílies]
    GA[Gestió acadèmica
sistema extern]
    CTRL[Controladores
de porta]

    SIS[["AccésCentre
Sistema de control d'accessos
i assistència"]]

    ALU -->|"passa targeta"| SIS
    PROF -->|"consulta assistència"| SIS
    CONS -->|"gestiona targetes
i incidències"| SIS
    SIS -->|"avís d'absència"| FAM
    GA -->|"horaris i grups"| SIS
    SIS -->|"ordres d'obertura"| CTRL
    CTRL -->|"esdeveniments d'accés"| SIS

    style SIS fill:#1e40af,color:#fff
`

const erRelacionalDiagram = `
erDiagram
    PERFIL ||--o{ PERFIL_REGLA : ""
    REGLA_ACCES ||--o{ PERFIL_REGLA : ""

    PERFIL {
        int id PK
        string nom
    }
    REGLA_ACCES {
        int id PK
        int espai_id FK
        string franja_horaria
    }
    PERFIL_REGLA {
        int perfil_id FK
        int regla_id FK
    }
`

// ---------- Components auxiliars ----------

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2 text-left font-semibold text-gray-700 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 text-gray-600 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Callout({ color = 'blue', icon: Icon = Info, title, children }) {
  const styles = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    red: 'bg-red-50 border-red-200 text-red-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
  }
  return (
    <div className={`flex items-start space-x-3 p-4 border rounded-xl ${styles[color]}`}>
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <div className="text-sm">
        {title && <p className="font-semibold mb-1">{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  )
}

function Card({ title, icon: Icon, children, id }) {
  return (
    <div id={id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 scroll-mt-24">
      {title && (
        <div className="flex items-center space-x-2 mb-4">
          {Icon && <Icon className="w-6 h-6 text-primary-500" />}
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>
      )}
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function ExempleBox({ children }) {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-mono leading-relaxed">
      {children}
    </div>
  )
}

const indexItems = [
  { id: 'encaix', num: '1', title: "On encaixa cada artefacte" },
  { id: 'requisit-epica-hu', num: '2', title: "Requisit, èpica i història d'usuari" },
  { id: 'invest', num: '3', title: 'INVEST' },
  { id: 'criteris-acceptacio', num: '4', title: "Criteris d'acceptació" },
  { id: 'backlog', num: '5', title: 'El backlog' },
  { id: 'casos-us', num: '6', title: "Casos d'ús" },
  { id: 'relacio-hu-cu', num: '7', title: "Relació HU ↔ casos d'ús" },
  { id: 'errors-frequents', num: '8', title: 'Errors freqüents' },
  { id: 'checklist', num: '9', title: "Checklist de l'activitat" },
  { id: 'dod', num: '10', title: 'Definició de Fet (DoD)' },
  { id: 'sprints', num: '11', title: 'Planificació en sprints' },
  { id: 'context-c4', num: '12', title: 'Diagrama de context (C4 nivell 1)' },
  { id: 'er-relacional', num: '13', title: 'Del model E-R al relacional' },
]

// La web fa servir enrutat per hash, de manera que un enllaç <a href="#seccio">
// substituiria la ruta i deixaria la pàgina en blanc. Per anar a una secció cal
// desplaçar-s'hi per codi, sense tocar l'URL.
function anarASeccio(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Metodologia() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Metodologia</h1>
        <p className="text-gray-600">
          Guia de referència per redactar històries d'usuari, casos d'ús i el product backlog: els tres artefactes que
          demanen els punts 2.1, 2.2 i 3.1 de les activitats. Tots els exemples surten d'un mateix projecte,{' '}
          <strong>AccésCentre</strong> (control d'accessos i assistència d'un institut de secundària i FP), perquè es
          vegi com lliguen entre si. Tens el projecte resolt sencer a{' '}
          <Link to="/exemple" className="text-primary-600 hover:underline font-medium">l'exemple AccésCentre</Link>.
        </p>
      </div>

      {/* Índex */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Índex</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {indexItems.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => anarASeccio(it.id)}
              className="flex items-center space-x-2 p-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors text-left w-full"
            >
              <span className="w-6 h-6 flex items-center justify-center rounded bg-gray-100 text-gray-500 text-xs font-bold flex-shrink-0">{it.num}</span>
              <span>{it.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 1. On encaixa cada artefacte */}
      <Card id="encaix" title="1. On encaixa cada artefacte" icon={Map}>
        <p>
          Quan planifiques un projecte de programari, necessites respondre tres preguntes, en aquest ordre:
        </p>
        <Table
          headers={['Pregunta', 'Artefacte que la respon', 'On es lliura']}
          rows={[
            ["Què ha de fer el sistema i per a qui, explicat en llenguatge de negoci?", "Històries d'usuari (agrupades en èpiques)", 'Activitat 2, punt 2.1'],
            ['Com interactua un actor amb el sistema per aconseguir un objectiu, pas a pas?', "Casos d'ús (diagrama + especificació textual)", 'Activitat 2, punt 2.2'],
            ['En quin ordre ho farem i quant costa cada cosa?', 'Product backlog prioritzat i estimat', 'Activitat 3, punt 3.1'],
          ]}
        />
        <p>
          Les històries d'usuari i els casos d'ús descriuen el mateix sistema des de dos angles: què vol algú (HU) i
          com s'aconsegueix pas a pas (cas d'ús). El backlog és, simplement, la llista de totes les històries
          d'usuari ordenada per prioritat i amb una estimació d'esforç.
        </p>
        <MermaidDiagram chart={fluxArtefactesDiagram} />
        <Callout color="blue" title="El projecte d'exemple: AccésCentre">
          AccésCentre digitalitza el control d'accessos i l'assistència d'un institut: avui les portes s'obren amb
          claus físiques, passar llista es fa a mà i en una evacuació no se sap qui hi ha dins. El projecte hi posa
          panys electrònics, lectors d'assistència, un portal web, una app mòbil i la infraestructura (controladores,
          xarxa, servidor). La idea clau: passar la targeta obre la porta i alhora registra l'assistència.
        </Callout>
      </Card>

      {/* 2. Requisit, èpica i HU */}
      <Card id="requisit-epica-hu" title="2. Requisit, èpica i història d'usuari" icon={Layers}>
        <h3 className="font-semibold text-gray-900">2.1 Requisit</h3>
        <p>
          Un requisit és una cosa que el sistema ha de fer (<strong>requisit funcional</strong>) o una qualitat que
          ha de tenir (<strong>requisit no funcional</strong>: rendiment, seguretat, disponibilitat…).
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><strong>Funcional:</strong> "El sistema ha de permetre obrir una porta si la persona té permís en aquell moment."</li>
          <li><strong>No funcional:</strong> "La porta s'ha d'obrir en menys d'1 segon." / "El control d'accés ha de funcionar encara que caigui la connexió a Internet." / "Els identificadors de les targetes s'han de desar xifrats."</li>
        </ul>
        <p>
          En metodologies àgils, els requisits funcionals no es redacten com una llista freda: es redacten com a
          històries d'usuari.
        </p>

        <h3 className="font-semibold text-gray-900 pt-2">2.2 Èpica</h3>
        <p>
          Una èpica és un requisit gran que agrupa moltes històries d'usuari relacionades. Serveix per organitzar el
          backlog en blocs temàtics. No es programa "una èpica"; es programen les seves històries.
        </p>
        <div className="grid sm:grid-cols-2 gap-2 text-sm">
          {[
            'A — Persones, credencials i perfils',
            'B — Espais, lectors i regles d’accés',
            'C — Accés i obertura de portes',
            'D — Assistència i horaris',
            'E — App d’alumnat, famílies i professorat',
            'F — Monitoratge, incidències i evacuació',
            'G — Infraestructura, seguretat i continuïtat (ASIX)',
          ].map((e, i) => (
            <div key={i} className="px-3 py-2 bg-gray-50 rounded-lg text-gray-700">{e}</div>
          ))}
        </div>

        <h3 className="font-semibold text-gray-900 pt-2">2.3 Història d'usuari (HU)</h3>
        <p>
          Una història d'usuari és una descripció curta, en llenguatge no tècnic, d'una funcionalitat explicada des
          del punt de vista de qui la fa servir i del valor que li aporta. No és una especificació detallada: és una
          promesa de conversa, un recordatori que s'ha de parlar d'aquesta necessitat.
        </p>
        <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg text-center">
          <p className="font-mono text-primary-800">
            Com a <strong>[rol]</strong>, vull <strong>[acció / funcionalitat]</strong> per tal de <strong>[valor o benefici]</strong>.
          </p>
        </div>
        <Table
          headers={['Part', 'Què hi va', 'Error típic']}
          rows={[
            ['Rol', "Qui ho necessita: un tipus d'usuari concret (consergeria, tutor/a, alumne/a, família, administrador de sistemes…). Mai “l’usuari” en genèric.", 'Posar sempre "usuari".'],
            ['Acció', 'Què vol fer, des del seu punt de vista. Una sola cosa.', 'Descriure la solució tècnica ("vull una taula amb un camp booleà...").'],
            ['Valor', "Per què ho vol; quin problema li resol. Si no saps posar-hi res, potser la HU no cal.", "Repetir l'acció (\"...per tal d'obrir la porta\")."],
          ]}
        />
        <p className="font-medium text-gray-800">Exemples (AccésCentre):</p>
        <ul className="space-y-2 text-sm">
          <li className="p-3 bg-gray-50 rounded-lg">Com a <strong>alumne/a</strong>, vull passar la targeta pel lector i que la porta del taller s'obri per tal de entrar-hi quan tinc classe sense haver de demanar la clau a consergeria.</li>
          <li className="p-3 bg-gray-50 rounded-lg">Com a <strong>consergeria</strong>, vull anul·lar una targeta perduda a l'instant per tal de evitar que ningú la faci servir sense haver de canviar el pany.</li>
          <li className="p-3 bg-gray-50 rounded-lg">Com a <strong>professor/a</strong>, vull que l'assistència es registri sola quan l'alumnat entra a l'aula per tal de no perdre temps de classe passant llista i transcrivint-la després.</li>
          <li className="p-3 bg-gray-50 rounded-lg">Com a <strong>família</strong>, vull rebre un avís si el meu fill/a no ha entrat a primera hora per tal de poder actuar el mateix matí.</li>
          <li className="p-3 bg-gray-50 rounded-lg">Com a <strong>direcció</strong>, vull activar un mode evacuació i veure la llista de qui hi ha dins per tal de fer el recompte de forma segura en un simulacre o una emergència.</li>
          <li className="p-3 bg-amber-50 border border-amber-200 rounded-lg">Com a <strong>administrador/a de sistemes (ASIX)</strong>, vull que la controladora de la porta obri encara sense connexió per tal de que l'accés no depengui d'Internet.</li>
        </ul>
        <Callout color="amber" icon={AlertTriangle} title="No t'oblidis de l'HU d'infraestructura">
          Les cinc primeres HU són de negoci (DAW/DAM); la sisena (l'ASIX) és la que més s'obliden. El teu backlog ha
          de tenir HU dels tres fronts: web, mòbil i infraestructura/administració.
        </Callout>
      </Card>

      {/* 3. INVEST */}
      <Card id="invest" title="3. Criteris INVEST" icon={CheckSquare}>
        <p>Una bona HU compleix, aproximadament, els sis criteris INVEST:</p>
        <Table
          headers={['Lletra', 'Significa', 'Vol dir que…']}
          rows={[
            ['I — Independent', 'Independent', "Es pot fer sense dependre estrictament d'una altra HU (o amb poques dependències)."],
            ['N — Negotiable', 'Negociable', 'És un punt de partida per parlar, no un contracte tancat al detall.'],
            ['V — Valuable', 'Valuosa', 'Aporta valor a algú (per això hi ha la part "per tal de").'],
            ['E — Estimable', 'Estimable', "L'equip pot fer-se una idea de què costa. Si no, cal partir-la o investigar-la abans."],
            ['S — Small', 'Petita', 'Es pot acabar dins d’un sprint. Si és molt grossa, és una èpica i s’ha de dividir.'],
            ['T — Testable', 'Verificable', 'Es pot comprovar que està feta → per això necessita criteris d’acceptació.'],
          ]}
        />
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-xs font-semibold text-red-700 uppercase mb-1">HU massa gran (dolenta)</p>
            <p className="text-sm text-red-800">Com a consergeria, vull gestionar tot el control d'accessos.</p>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-xs font-semibold text-green-700 uppercase mb-1">Partida en HU petites (bona)</p>
            <ul className="text-sm text-green-800 list-disc pl-4 space-y-0.5">
              <li>Donar d'alta una persona i emetre-li una targeta</li>
              <li>Anul·lar una targeta</li>
              <li>Definir un perfil d'accés</li>
              <li>Crear una regla "qui pot entrar on i quan"</li>
              <li>Obrir la porta en passar la targeta</li>
              <li>Obrir una porta remotament des del monitor</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 4. Criteris d'acceptació */}
      <Card id="criteris-acceptacio" title="4. Criteris d'acceptació" icon={ListChecks}>
        <p>
          Els criteris d'acceptació són la llista de condicions concretes i verificables que la funcionalitat ha de
          complir perquè la història d'usuari es doni per acabada. Serveixen per a tres coses:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Delimiten l'abast de la HU (què entra i què no).</li>
          <li>Diuen com es prova (cada criteri és, de fet, una prova).</li>
          <li>Eviten malentesos entre qui demana i qui programa.</li>
        </ul>

        <p className="font-medium text-gray-800">a) Llista de condicions:</p>
        <ExempleBox>
          <p className="mb-2 font-sans font-medium text-gray-800">
            HU: Com a alumne/a, vull passar la targeta i que la porta s'obri si tinc permís en aquell moment.
          </p>
          <p className="font-sans font-semibold text-gray-700 mb-1">Criteris d'acceptació:</p>
          <ul className="font-sans list-disc pl-5 space-y-1">
            <li>La porta només s'obre si la targeta està activa (no perduda ni de baixa).</li>
            <li>La porta només s'obre si hi ha una regla d'accés vigent per a aquell perfil, aquell espai i aquella franja horària.</li>
            <li>La decisió es pren en menys d'1 segon.</li>
            <li>Tant si s'obre com si es denega, queda un registre (persona, porta, hora, resultat i motiu).</li>
            <li>Si la targeta és desconeguda o està anul·lada, es denega i, si es repeteix, es genera una incidència.</li>
          </ul>
        </ExempleBox>

        <p className="font-medium text-gray-800">b) Format Gherkin — Donat / Quan / Aleshores (Given / When / Then):</p>
        <ExempleBox>
          <p className="font-sans font-semibold text-gray-700 mb-1">Escenari: accés fora d'horari</p>
          <p className="font-sans">
            <strong>Donat que</strong> un alumne/a de FP té permís al taller de dilluns a divendres de 8:00 a 15:00,<br />
            <strong>Quan</strong> passa la targeta al lector del taller un dimarts a les 17:30,<br />
            <strong>Aleshores</strong> la porta no s'obre, el lector mostra llum vermella i queda registrat un accés
            denegat amb motiu "fora d'horari".
          </p>
        </ExempleBox>

        <Callout color="green" title="Regla pràctica">
          Una HU petita sol tenir entre <strong>2 i 6 criteris</strong> d'acceptació. Si en surten 15, la HU és massa gran.
        </Callout>
      </Card>

      {/* 5. Backlog */}
      <Card id="backlog" title="5. El backlog" icon={GitBranch}>
        <h3 className="font-semibold text-gray-900">5.1 Què és</h3>
        <p>
          El product backlog és la llista ordenada de tot el que s'ha de fer al producte: totes les històries
          d'usuari (i, si cal, tasques tècniques i correccions), prioritzades de dalt a baix. El que és a dalt es
          farà abans i està més detallat; el que és a baix pot estar encara com a èpica.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><strong>És viu:</strong> canvia cada setmana (s'hi afegeixen coses, se'n treuen, es reordena).</li>
          <li><strong>Té un únic ordre:</strong> dues HU no poden tenir "la mateixa prioritat" quan s'ha de decidir què fer primer.</li>
          <li><strong>Està estimat:</strong> cada HU porta una idea de l'esforç que costa.</li>
          <li><strong>El de dalt està "llest":</strong> prou detallat i entès com per començar-lo; el de baix, no cal encara.</li>
        </ul>

        <h3 className="font-semibold text-gray-900 pt-2">5.2 Prioritzar: MoSCoW</h3>
        <Table
          headers={['Categoria', 'Significat', 'Exemple a AccésCentre']}
          rows={[
            ['Must (ha de ser-hi)', 'Sense això el producte no serveix; és el mínim imprescindible.', "Alta de persones i targetes; regles d'accés; obrir la porta en passar la targeta; funcionar sense Internet; registre automàtic d'assistència; anul·lar targetes; còpies de seguretat."],
            ['Should (hauria de ser-hi)', 'Important, aporta molt valor, però es podria endarrerir sense trencar el producte.', "Avís d'absència a les famílies; app de consulta d'assistència; monitor d'accessos en temps real; gestió d'incidències; credencial al mòbil."],
            ['Could (podria ser-hi)', 'Desitjable si sobra temps.', "Mode evacuació amb llista de presents; consulta d'aforament; panell de salut de dispositius."],
            ["Won't (ara no)", 'Es reconeix però queda fora d\'aquesta entrega.', "Detecció d'anomalies amb IA; índex de risc d'absentisme amb IA; obertura per matrícula de vehicle."],
          ]}
        />
        <Callout color="purple" icon={Target} title="MVP — Minimum Viable Product">
          El producte mínim viable és, essencialment, el conjunt de HU "Must": la versió més petita que ja es pot
          ensenyar i fer servir. A AccésCentre: "una porta real que s'obre amb targeta i registra l'assistència, amb
          altes i baixes de targetes".
        </Callout>

        <h3 className="font-semibold text-gray-900 pt-2">5.3 Estimar: punts o talles</h3>
        <p>No s'estima en hores exactes (no se saben), sinó en esforç relatiu. Dues formes habituals:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><strong>Talles de samarreta:</strong> S, M, L, XL. Una HU "L" costa clarament més que una "S". Una "XL" probablement s'ha de partir.</li>
          <li><strong>Punts d'història (story points):</strong> números d'una escala tipus Fibonacci (1, 2, 3, 5, 8, 13). Es tria una HU petita coneguda com a "2" i la resta s'estima comparant-la amb aquella.</li>
        </ul>
        <p>L'important és la coherència: que dins del teu backlog les mides es puguin comparar entre si.</p>

        <h3 className="font-semibold text-gray-900 pt-2">5.4 Dependències</h3>
        <p>Algunes HU no es poden començar fins que una altra estigui feta. Exemples a AccésCentre:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>"Obrir la porta en passar la targeta" depèn de "definir les regles d'accés" (si no hi ha regles, no se sap qui pot entrar).</li>
          <li>"Registrar l'assistència automàticament" depèn de "carregar els horaris" i de "obrir la porta".</li>
          <li>"Avisar la família d'una absència" depèn de "registrar l'assistència".</li>
        </ul>
        <p>Al backlog de l'Activitat 3 has d'indicar aquestes dependències (columna Dependències).</p>

        <h3 className="font-semibold text-gray-900 pt-2">5.5 Com es veu al lliurament (Activitat 3)</h3>
        <Table
          headers={['ID', "Història d'usuari", 'Èpica', 'Estimació', 'Prioritat (MoSCoW)', 'Dependències']}
          rows={[
            ['A1', 'Alta de persona + emissió de targeta (identificador xifrat)', 'A', 'M', 'Must', 'G1'],
            ['A2', 'Anul·lació immediata de targeta + propagació a les portes', 'A', 'M', 'Must', 'C1'],
            ['B2', "Definició de regles d'accés (qui / on / quan)", 'B', 'L', 'Must', 'A3, B1'],
            ['C1', 'Obrir la porta en passar la targeta (decisió < 1 s)', 'C', 'L', 'Must', 'B2'],
            ['C2', 'Obertura sense connexió amb permisos en memòria', 'C', 'L', 'Must', 'C1'],
            ["B3", "Càrrega d'horaris des de la gestió acadèmica", 'B', 'M', 'Must', 'B1'],
            ['D1', "Registre automàtic d'assistència (accés ↔ horari)", 'D', 'L', 'Must', 'C1, B3'],
            ['D5', "Avís a la família d'absència de 1a hora", 'D', 'M', 'Should', 'D1, E1'],
            ['E1', "App: consulta d'assistència (alumnat / família)", 'E', 'M', 'Should', 'D1'],
            ['F1', "Monitor d'accessos en temps real amb filtres", 'F', 'M', 'Should', 'C1'],
            ['F3', 'Mode evacuació + llista de presents per zona', 'F', 'L', 'Could', 'C1, F1'],
            ['F4', "Detecció d'anomalies d'accés amb IA", 'F', 'XL', "Won't (aquest mòdul)", 'F2, històric ≥ 1 trimestre'],
          ]}
        />
      </Card>

      {/* 6. Casos d'ús */}
      <Card id="casos-us" title="6. Casos d'ús" icon={Users}>
        <h3 className="font-semibold text-gray-900">6.1 Idea</h3>
        <p>
          Un cas d'ús descriu una interacció completa entre un actor i el sistema per assolir un objectiu, detallant
          els passos. On la història d'usuari diu <em>què</em> vol algú i <em>per què</em>, el cas d'ús diu{' '}
          <em>com</em> passa, pas a pas, incloent-hi què passa quan les coses van malament (fluxos alternatius).
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><strong>Actor:</strong> algú o alguna cosa fora del sistema que hi interactua. Pot ser una persona amb un rol (Consergeria, Família, Administrador TIC) o un sistema extern (gestió acadèmica, central d'alarma, controladora de porta).</li>
          <li><strong>Cas d'ús:</strong> un objectiu concret que un actor aconsegueix amb el sistema ("Validar accés i obrir porta", "Registrar assistència", "Justificar una absència").</li>
          <li><strong>Sistema (frontera):</strong> la caixa que estàs construint. Els casos d'ús queden dins; els actors, fora.</li>
        </ul>
        <MermaidDiagram chart={casosUsDiagram} />

        <h3 className="font-semibold text-gray-900 pt-2">6.2 Especificació textual d'un cas d'ús</h3>
        <p>Cada cas d'ús principal es descriu amb una fitxa amb aquests apartats:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Nom del cas d'ús i actor principal (qui l'inicia).</li>
          <li><strong>Precondicions:</strong> què ha de ser cert abans de començar.</li>
          <li><strong>Flux bàsic:</strong> el camí normal, en passos numerats.</li>
          <li><strong>Fluxos alternatius:</strong> què passa si alguna cosa falla o varia (es numeren respecte del pas on es desvien: 2a, 2b…).</li>
          <li><strong>Postcondicions:</strong> en quin estat queda el sistema en acabar.</li>
        </ul>

        <ExempleBox>
          <p className="font-sans font-semibold text-gray-800 mb-1">Cas d'ús: Validar accés i obrir porta</p>
          <p className="font-sans mb-2"><strong>Actor principal:</strong> persona amb targeta (alumnat, professorat, manteniment).</p>
          <p className="font-sans mb-2"><strong>Precondicions:</strong> la persona té una targeta emesa; la porta té controladora operativa.</p>
          <p className="font-sans font-semibold text-gray-700 mb-1">Flux bàsic:</p>
          <ol className="font-sans list-decimal pl-5 space-y-1 mb-2">
            <li>La persona passa la targeta pel lector.</li>
            <li>El sistema comprova que la targeta està activa i que hi ha una regla d'accés vigent per a aquell espai i aquell moment.</li>
            <li>Obre la porta i registra l'accés.</li>
            <li>Si el lector és d'una aula amb classe, registra també l'assistència.</li>
          </ol>
          <p className="font-sans font-semibold text-gray-700 mb-1">Fluxos alternatius:</p>
          <ul className="font-sans list-disc pl-5 space-y-1 mb-2">
            <li><strong>2a.</strong> Targeta anul·lada o sense permís: no obre; registra l'intent; si es repeteix, genera una incidència.</li>
            <li><strong>2b.</strong> Sense connexió: decideix amb els permisos que la controladora té a la memòria i sincronitza en recuperar la xarxa.</li>
          </ul>
          <p className="font-sans"><strong>Postcondicions:</strong> la porta s'ha obert o l'intent ha quedat denegat, sempre amb registre.</p>
        </ExempleBox>
      </Card>

      {/* 7. Relació HU <-> CU */}
      <Card id="relacio-hu-cu" title="7. Relació entre històries d'usuari i casos d'ús" icon={ArrowRight}>
        <Table
          headers={['', "Història d'usuari", "Cas d'ús"]}
          rows={[
            ['Respon a', 'Què vol algú i per què', 'Com s’aconsegueix, pas a pas'],
            ['Mida', 'Curta (1-3 frases + criteris)', 'Mitjana (mitja pàgina: flux + alternatives)'],
            ['Quan es fa servir', 'Planificar i prioritzar el backlog', 'Entendre i dissenyar la interacció'],
            ['Quantitat al projecte', 'Moltes (12-20 o més; AccésCentre en té 31)', 'Poques especificades a fons (3-5); la resta, només enumerades'],
            ["Fluxos d'error", "A través dels criteris d'acceptació", 'Explícits (fluxos alternatius)'],
          ]}
        />
        <p>
          Normalment diverses històries d'usuari petites es corresponen amb un cas d'ús (o al revés). Per exemple, el
          cas d'ús "Validar accés i obrir porta" cobreix les HU "obrir en passar la targeta", "obrir sense connexió"
          i "registrar l'accés denegat com a incidència". No busquis una correspondència exacta 1:1; busca que
          cobreixin el mateix abast.
        </p>
      </Card>

      {/* 8. Errors freqüents */}
      <Card id="errors-frequents" title="8. Errors freqüents (i com evitar-los)" icon={AlertTriangle}>
        <Table
          headers={['Error', 'Per què és un problema', 'Com fer-ho bé']}
          rows={[
            ['HU que diuen "Com a usuari, vull..."', 'No se sap qui ho necessita ni quin valor té', 'Posa un rol concret (consergeria, família, tutor/a, ASIX…).'],
            ["HU que descriuen la solució tècnica (\"vull una taula amb l'UID de la targeta\")", 'Tanca el disseny abans d\'hora i no diu el valor', 'Explica-ho des del negoci ("vull anul·lar una targeta perduda"); la tecnologia va a l\'arquitectura.'],
            ['HU gegants ("gestionar els accessos", "administrar el sistema")', 'No es poden estimar ni acabar en un sprint', 'Són èpiques; parteix-les en HU petites.'],
            ['Criteris d\'acceptació vagues ("ha de funcionar bé", "ha de ser segur")', 'No es poden verificar', 'Fes-los mesurables ("obre en < 1 s", "denega i registra si la targeta està anul·lada").'],
            ['Backlog sense ordre o amb tot "prioritat alta"', 'No es pot decidir què fer primer', 'Ordre únic de dalt a baix; MoSCoW amb pocs "Must".'],
            ["Oblidar les HU d'ASIX", 'El projecte ha d\'implicar les tres especialitats', "Inclou HU d'infraestructura: VLAN de portes, node local, obertura offline, còpies, auditoria."],
            ["Diagrama de casos d'ús amb 30 el·lipses", 'Il·legible i inútil', 'Queda’t amb els casos d\'ús principals (validar accés, registrar assistència, justificar absència, emetre/anul·lar targeta, mode evacuació); agrupa la resta.'],
            ['Confondre criteris d\'acceptació amb la Definició de Fet', 'Es barreja l’específic amb el comú', "Criteris = per HU; DoD = una per tot el projecte."],
            ['Posar com a actor una peça interna (p. ex. "la base de dades")', 'Els actors són externs al sistema', 'Actor = persona amb un rol o sistema de tercers (gestió acadèmica, alarma, controladora).'],
          ]}
        />
      </Card>

      {/* 9. Checklist */}
      <Card id="checklist" title="9. Checklist per fer l'activitat" icon={ClipboardCheck}>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Punt 2.1 — Històries d'usuari</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              '12-20 HU (o més), totes en format Com a… vull… per tal de…',
              'Agrupades per èpiques',
              'Cobreixen web (DAW), mòbil (DAM) i administració/infraestructura (ASIX)',
              'Cada HU amb 2-6 criteris d’acceptació verificables',
              'Cap HU és en realitat una èpica sense partir',
            ].map((item, i) => (
              <label key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-gray-300 text-primary-600" />
                <span className="text-gray-700 text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Punt 2.2 — Casos d'ús</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Especificació textual de 3-5 casos d'ús principals: precondicions, flux bàsic, fluxos alternatius, postcondicions",
              "Els casos d'ús són coherents amb les HU (mateix abast)",
            ].map((item, i) => (
              <label key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-gray-300 text-primary-600" />
                <span className="text-gray-700 text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Punt 3.1 — Product backlog</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              'Totes les HU en una taula amb ID, èpica, estimació (punts o S/M/L/XL), prioritat MoSCoW i dependències',
              'Ordre únic de dalt a baix; pocs "Must" (defineixen el MVP)',
            ].map((item, i) => (
              <label key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-gray-300 text-primary-600" />
                <span className="text-gray-700 text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Consulta el desglossament complet de lliurables a{' '}
          <Link to="/activitats" className="text-primary-600 hover:underline font-medium">Activitats</Link>.
        </p>
      </Card>

      {/* 10. DoD */}
      <Card id="dod" title="10. Definició de Fet (Definition of Done)" icon={CheckSquare}>
        <p>
          La Definició de Fet (DoD) i els criteris d'acceptació sovint es confonen, però responen preguntes
          diferents. Els <strong>criteris d'acceptació</strong> diuen si <em>una</em> HU concreta fa el que ha de
          fer; canvien HU a HU. La <strong>DoD</strong> diu quan qualsevol peça de feina del projecte —sigui quina
          sigui— es pot considerar acabada de debò; és <strong>única per a tot el projecte</strong> i s'aplica igual
          a totes les HU.
        </p>
        <Table
          headers={['', "Criteris d'acceptació", 'Definició de Fet']}
          rows={[
            ['Àmbit', 'Una HU concreta', 'Tot el projecte'],
            ['Contingut', 'Condicions funcionals específiques d’aquella HU', 'Estàndards de qualitat comuns (codi, proves, documentació…)'],
            ['Es redacta', 'Un cop per HU', 'Un sol cop, a l’inici del projecte'],
            ['Exemple', '"La porta no s’obre si la targeta està anul·lada"', '"Tot codi ha passat per revisió abans de fusionar-se"'],
          ]}
        />
        <p className="font-medium text-gray-800">Exemple de DoD per a un projecte d'aquest mòdul:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>El codi compleix els criteris d'acceptació de la HU i ha estat revisat per almenys un altre membre de l'equip.</li>
          <li>S'ha provat manualment (o amb tests automàtics, si n'hi ha) i no genera errors coneguts.</li>
          <li>Segueix les convencions de codi acordades per l'equip (noms, estructura de carpetes, idioma dels comentaris).</li>
          <li>Està desplegat a l'entorn de proves i és accessible per a la resta de l'equip i el professorat.</li>
          <li>La funcionalitat està documentada (breu nota tècnica o actualització del README).</li>
          <li>No introdueix regressions visibles en les funcionalitats ja acabades.</li>
        </ul>
        <Callout color="green" title="On es demana">
          El punt 3.1 de l'Activitat 3 (product backlog) espera que el backlog inclogui, a més de la taula d'HU, una
          DoD explícita que s'aplicarà a totes les entregues del mòdul de Projecte.
        </Callout>
      </Card>

      {/* 11. Sprints */}
      <Card id="sprints" title="11. Planificació en sprints" icon={Calendar}>
        <p>
          El punt 3.2 de l'Activitat 3 demana repartir el backlog prioritzat en sprints. Aquesta planificació és
          orientativa (es refarà amb l'equip real al mòdul de Projecte), però ha de ser realista.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><strong>Durada del sprint:</strong> habitualment 1-2 setmanes. Defineix-la i sigues-hi coherent en tota la planificació.</li>
          <li><strong>Objectiu del sprint (sprint goal):</strong> una frase que resumeix què s'hauria de poder demostrar en acabar el sprint (no una llista d'HU solta).</li>
          <li><strong>Fites:</strong> quan s'assoleix l'MVP (totes les HU Must fetes), quan hi ha una demo intermèdia i quan és l'entrega final.</li>
        </ul>
        <Table
          headers={['Fita', 'Què inclou', 'Quan (orientatiu)']}
          rows={[
            ['MVP', 'Totes les HU marcades Must', 'A la meitat del mòdul de Projecte'],
            ['Demo intermèdia', 'MVP + algunes HU Should', 'Abans de la darrera setmana'],
            ['Entrega final', 'MVP + Should assolibles + Could si sobra temps', 'Final del mòdul de Projecte'],
          ]}
        />
        <p className="font-medium text-gray-800">Repartiment de càrrega entre els 3 rols:</p>
        <Table
          headers={['Rol', 'Què sol assumir', 'Exemple a AccésCentre']}
          rows={[
            ['DAW', 'Portal web de gestió, backend/API si el projecte no té un rol ASIX dedicat a això', "Monitor d'accessos, gestió de persones i regles"],
            ['DAM', 'App mòbil per als usuaris finals', "App de consulta d'assistència per a alumnat i famílies"],
            ['ASIX', 'Infraestructura, xarxa, cloud, seguretat, controladores/IoT si n’hi ha', 'Xarxa de les controladores, còpies de seguretat, obertura offline'],
          ]}
        />
        <Callout color="amber" icon={AlertTriangle} title="Sigues realista">
          La temporització ha de tenir sentit per a <strong>3 persones</strong> amb la dedicació prevista al mòdul de
          Projecte, no per a un equip professional a jornada completa. Si el backlog "Must" no cap en els sprints
          disponibles, el problema no és la planificació: és que l'abast és massa gran i cal retallar-lo ara, no
          durant la implementació.
        </Callout>
      </Card>

      {/* 12. Diagrama de context C4 */}
      <Card id="context-c4" title="12. Diagrama de context (C4 nivell 1)" icon={Network}>
        <p>
          El punt 1.4 de l'Activitat 1 demana un diagrama de nivell de context. És el primer nivell del model{' '}
          <strong>C4</strong> (Context, Containers, Components, Code): mostra el sistema com una única caixa, sense
          entrar en com està construït per dins, i tots els actors i sistemes externs que hi interactuen.
        </p>
        <p className="font-medium text-gray-800">Què hi ha d'aparèixer:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>El sistema sencer, com una sola caixa amb un nom i una frase que digui què fa.</li>
          <li>Els actors externs: tipus d'usuaris (persones), sistemes de tercers, dispositius o sensors, APIs externes.</li>
          <li>Els fluxos d'informació principals que entren i surten, cadascun etiquetat amb què s'hi envia (no com tècnicament).</li>
        </ul>
        <p className="font-medium text-gray-800">Què NO hi ha d'aparèixer:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Components interns del sistema (bases de dades, mòduls, microserveis): això és el nivell 2 i 3 de C4, no el context.</li>
          <li>Protocols o tecnologies concretes en les fletxes (deixa "TLS/REST" per a l'arquitectura de xarxa del punt 2.3).</li>
        </ul>
        <MermaidDiagram chart={contextC4Diagram} />
        <Callout color="blue" title="Llegenda mínima">
          Acompanya el diagrama d'una llegenda breu: què és cada actor (una línia per actor) i, si escau, per què el
          sistema es representa com una caixa única en aquest nivell.
        </Callout>
      </Card>

      {/* 13. ER -> relacional */}
      <Card id="er-relacional" title="13. Del model entitat-relació al relacional" icon={Database}>
        <p>
          El punt 2.4 de l'Activitat 2 demana el model entitat-relació (o de classes) amb entitats, atributs, claus
          primàries i foranes, i cardinalitats. Un recordatori breu abans de dibuixar-lo:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><strong>Cardinalitat</strong> és quantes instàncies d'una entitat es poden relacionar amb quantes de l'altra: 1:1, 1:N o N:M.</li>
          <li><strong>Clau primària (PK)</strong> identifica de manera única cada fila d'una taula.</li>
          <li><strong>Clau forana (FK)</strong> és un atribut que apunta a la PK d'una altra taula i materialitza la relació.</li>
        </ul>
        <p>Al passar el model a taules relacionals:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Una relació <strong>1:N</strong> es resol afegint la FK a la taula del costat "N" (per exemple, cada Targeta té un persona_id que apunta a Persona).</li>
          <li>
            Una relació <strong>N:M</strong> no es pot resoldre amb una sola FK: cal crear una{' '}
            <strong>taula intermèdia (de junció)</strong> amb dues FK, una cap a cada entitat original. La taula
            intermèdia sol tenir com a PK la combinació d'ambdues FK.
          </li>
        </ul>
        <ExempleBox>
          Exemple a AccésCentre: un <strong>Perfil</strong> (p. ex. "Alumnat FP") pot tenir moltes{' '}
          <strong>Regles d'accés</strong>, i una mateixa regla es pot aplicar a diversos perfils. És una relació N:M
          entre Perfil i RegleAcces. Es resol amb una taula intermèdia PerfilRegla(perfil_id FK, regla_id FK).
        </ExempleBox>
        <MermaidDiagram chart={erRelacionalDiagram} />
        <p className="text-sm text-gray-500">
          Amb 8-15 entitats ben resoltes (incloent-hi les taules de junció necessàries) sol n'hi ha prou per mostrar
          la complexitat que demana l'Activitat 2.
        </p>
      </Card>

      {/* Footer nav */}
      <div className="bg-gray-900 rounded-xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Flag className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="font-semibold">On es fa servir tot això?</p>
            <p className="text-sm text-gray-300">Revisa els lliurables exactes a Activitats o mira'l aplicat sencer a l'exemple AccésCentre.</p>
          </div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link to="/activitats" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Activitats</span>
          </Link>
          <Link to="/exemple" className="px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
            <span>Exemple AccésCentre</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
