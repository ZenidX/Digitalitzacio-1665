import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Building2,
  Target,
  Network,
  Database,
  Users,
  ClipboardList,
  Lock,
  AlertTriangle,
  Cpu,
  Smartphone,
  Layers,
  ListChecks,
  GitBranch,
  FileWarning,
} from 'lucide-react'
import MermaidDiagram from '../components/MermaidDiagram'
import { enunciat, activitat1, activitat2, activitat3, annex } from '../data/exempleAccesCentre'

function Collapsible({ title, icon: Icon, color = 'text-blue-600', defaultOpen = false, badge, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <div className="flex items-center space-x-2">
          {Icon && <Icon className={`w-5 h-5 ${color} flex-shrink-0`} />}
          <span className="font-medium text-gray-900">{title}</span>
          {badge && (
            <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
              {badge}
            </span>
          )}
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
      </button>
      {open && <div className="p-4 border-t space-y-4">{children}</div>}
    </div>
  )
}

function Lliurable({ num, children }) {
  return (
    <span className="inline-block text-xs font-mono font-medium px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100 mb-2">
      Lliurable {num}{children ? ` — ${children}` : ''}
    </span>
  )
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="text-left px-3 py-2 font-semibold text-gray-700 border-b border-gray-200 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 border-b border-gray-100 text-gray-700 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Veredicte({ children }) {
  return (
    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 flex items-start space-x-3">
      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-bold text-green-900 mb-1">Veredicte</p>
        <p className="text-green-900 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

function List({ items }) {
  return (
    <ul className="space-y-2 list-disc list-inside text-gray-700 text-sm">
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">{item}</li>
      ))}
    </ul>
  )
}

function CasUs({ cu }) {
  return (
    <div className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3 text-sm">
        <p><span className="font-semibold text-gray-900">Actor principal: </span>{cu.actorPrincipal}</p>
        <p><span className="font-semibold text-gray-900">Actors secundaris: </span>{cu.actorsSecundaris}</p>
      </div>
      <p className="text-sm"><span className="font-semibold text-gray-900">Precondicions: </span>{cu.precondicions}</p>
      <div>
        <p className="font-semibold text-gray-900 text-sm mb-1">Flux bàsic</p>
        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
          {cu.flux.map((pas, i) => <li key={i}>{pas}</li>)}
        </ol>
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm mb-1">Fluxos alternatius</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {cu.alternatius.map((alt, i) => <li key={i}>{alt}</li>)}
        </ul>
      </div>
      <p className="text-sm"><span className="font-semibold text-gray-900">Postcondicions: </span>{cu.postcondicions}</p>
    </div>
  )
}

const tabs = [
  { id: 'enunciat', label: 'Enunciat', icon: BookOpen },
  { id: 'a1', label: 'Activitat 1', icon: Target },
  { id: 'a2', label: 'Activitat 2', icon: Network },
  { id: 'a3', label: 'Activitat 3', icon: ShieldAlert },
  { id: 'annex', label: 'Annex', icon: ListChecks },
]

export default function Exemple() {
  const [tab, setTab] = useState('enunciat')

  return (
    <div className="space-y-8">
      {/* Capçalera */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Exemple resolt: AccésCentre</h1>
        <p className="text-gray-600 leading-relaxed mb-3">
          Aquesta pàgina recull un projecte d'exemple <strong>completament resolt</strong> de les Activitats 1, 2 i 3
          del mòdul: <strong>AccésCentre</strong>, un sistema de control d'accessos amb targeta de proximitat i
          assistència automàtica per a un institut de secundària i FP. L'ha preparat l'equip docent perquè
          serveixi de referència del nivell de detall, d'argumentació i de coherència que s'espera en cada lliurable.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>No és una plantilla per copiar.</strong> És un exemple de referència del nivell esperat.
            Presentar AccésCentre, o una variació superficial seva, com a projecte propi no supera l'activitat:
            el projecte de cadascú ha de sorgir d'una empresa i un problema reals, propis. Consulta{' '}
            <Link to="/activitats" className="underline font-medium">les Activitats</Link> per als lliurables exactes i{' '}
            <Link to="/metodologia" className="underline font-medium">la Metodologia</Link> per a com es treballa i s'avalua.
          </p>
        </div>
      </div>

      {/* Selector de pestanyes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 flex flex-wrap gap-2">
        {tabs.map((t) => {
          const Icon = t.icon
          const active = tab === t.id
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {t.label}
            </button>
          )
        })}
      </div>

      {/* ENUNCIAT */}
      {tab === 'enunciat' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">L'enunciat de partida</h2>
            <p className="text-gray-500 text-sm">
              Aquest és l'enunciat que es va donar com a punt de partida. Les activitats 1-3 que segueixen en són
              la resolució completa.
            </p>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Descripció del projecte</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{enunciat.descripcio}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Motivació (què resol el projecte)</h3>
              <List items={enunciat.motivacio} />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <h3 className="font-semibold text-gray-900">Requeriments generals per capes</h3>
            <p className="text-gray-500 text-sm mb-2">L'equip decideix les tecnologies concretes de cadascuna.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {enunciat.requeriments.map((r) => (
                <div key={r.titol} className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                  <p className="font-medium text-gray-900 text-sm mb-1">{r.titol}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <h3 className="font-semibold text-gray-900">Lliurables demanats</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{enunciat.lliurables}</p>
            <h3 className="font-semibold text-gray-900 pt-2">Funcionalitats opcionals</h3>
            <List items={enunciat.opcionals} />
          </div>
        </div>
      )}

      {/* ACTIVITAT 1 */}
      {tab === 'a1' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h2 className="text-xl font-bold text-blue-900">Activitat 1 — Idea, objectius i anàlisi de requeriments</h2>
            <p className="text-blue-800 text-sm mt-1">Resolta punt per punt (1.1 a 1.7), tal com s'espera al lliurament de cada alumne/a.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="1.1">Fitxa del projecte</Lliurable>
            <h3 className="font-semibold text-gray-900">1.1 Fitxa del projecte</h3>
            <Table headers={['Camp', 'Contingut']} rows={activitat1.fitxa} />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
            <Lliurable num="1.2">Idea i objectius</Lliurable>
            <h3 className="font-semibold text-gray-900">1.2 Idea i objectius</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{activitat1.idea.text}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {activitat1.idea.peces.map((p) => (
                <div key={p.nom} className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                  <p className="font-medium text-gray-900 text-sm mb-1">{p.nom}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed italic">{activitat1.idea.millora}</p>
            <div>
              <p className="font-medium text-gray-900 text-sm mb-2">Objectius estratègics de l'empresa (mesurables)</p>
              <Table headers={activitat1.objectiusEstrategics.headers} rows={activitat1.objectiusEstrategics.rows} />
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm mb-2">Objectius de digitalització (derivats)</p>
              <Table headers={activitat1.objectiusDigitalitzacio.headers} rows={activitat1.objectiusDigitalitzacio.rows} />
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm mb-2">KPI inicials</p>
              <Table headers={activitat1.kpis.headers} rows={activitat1.kpis.rows} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                <p className="font-medium text-gray-900 text-sm mb-1">Necessitats presents</p>
                <p className="text-gray-600 text-sm leading-relaxed">{activitat1.necessitats.presents}</p>
              </div>
              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                <p className="font-medium text-gray-900 text-sm mb-1">Necessitats futures</p>
                <p className="text-gray-600 text-sm leading-relaxed">{activitat1.necessitats.futures}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="1.3">Abast i encaix ASIX/DAM/DAW</Lliurable>
            <h3 className="font-semibold text-gray-900">1.3 Abast i encaix amb ASIX / DAM / DAW</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-gray-100 rounded-lg p-4 bg-purple-50">
                <p className="font-medium text-purple-900 text-sm mb-1">DAW — portal web i API</p>
                <p className="text-gray-700 text-sm leading-relaxed">{activitat1.abast.daw}</p>
              </div>
              <div className="border border-gray-100 rounded-lg p-4 bg-teal-50">
                <p className="font-medium text-teal-900 text-sm mb-1">DAM — app mòbil</p>
                <p className="text-gray-700 text-sm leading-relaxed">{activitat1.abast.dam}</p>
              </div>
              <div className="border border-gray-100 rounded-lg p-4 bg-orange-50">
                <p className="font-medium text-orange-900 text-sm mb-1">ASIX — infraestructura i seguretat</p>
                <p className="text-gray-700 text-sm leading-relaxed">{activitat1.abast.asix}</p>
              </div>
            </div>
            <Collapsible title="Què queda fora de l'abast (delimitació)" icon={FileWarning} color="text-red-500">
              <List items={activitat1.abast.foraAbast} />
            </Collapsible>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="1.4">Diagrama de context</Lliurable>
            <h3 className="font-semibold text-gray-900">1.4 Diagrama de context</h3>
            <MermaidDiagram chart={activitat1.diagramaContext} />
            <p className="text-gray-600 text-sm leading-relaxed"><span className="font-medium text-gray-900">Llegenda: </span>{activitat1.diagramaContextLlegenda}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="1.5">Entorns IT i OT</Lliurable>
            <h3 className="font-semibold text-gray-900">1.5 Entorns IT i OT</h3>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">{activitat1.itOt.componentOT}</p>
            <Collapsible title="Elements OT" icon={Cpu} color="text-orange-500">
              <List items={activitat1.itOt.elements} />
            </Collapsible>
            <Collapsible title="Connexió OT ↔ IT" icon={Network} color="text-orange-500">
              <List items={activitat1.itOt.connexio} />
            </Collapsible>
            <Collapsible title="Avantatges de digitalitzar el centre d'extrem a extrem" icon={CheckCircle2} color="text-green-600">
              <List items={activitat1.itOt.avantatges} />
            </Collapsible>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="1.6">Tecnologies habilitadores digitals (THD)</Lliurable>
            <h3 className="font-semibold text-gray-900">1.6 Tecnologies habilitadores digitals (THD)</h3>
            <p className="text-gray-500 text-sm">Sis THD seleccionades, cadascuna amb què és, per què s'usa, part afectada, benefici i relació amb la sostenibilitat.</p>
            <div className="space-y-2">
              {activitat1.thd.map((t) => (
                <Collapsible key={t.nom} title={t.nom} icon={Layers} color="text-blue-500">
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium text-gray-900">Què és: </span>{t.queEs}</p>
                    <p><span className="font-medium text-gray-900">Per què s'usa aquí: </span>{t.perQue}</p>
                    <p><span className="font-medium text-gray-900">Part afectada: </span>{t.part}</p>
                    <p><span className="font-medium text-gray-900">Benefici esperat: </span>{t.benefici}</p>
                    <p><span className="font-medium text-gray-900">Sostenibilitat / eficiència: </span>{t.sostenibilitat}</p>
                  </div>
                </Collapsible>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <p className="font-medium text-blue-900 text-sm mb-2">Conclusions</p>
              <List items={activitat1.thdConclusions} />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="1.7">Ús de la intel·ligència artificial</Lliurable>
            <h3 className="font-semibold text-gray-900">1.7 Ús de la intel·ligència artificial</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{activitat1.ia.intro}</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                <p className="font-medium text-gray-900 text-sm mb-1">Problema 1 — anomalies d'accés</p>
                <p className="text-gray-600 text-sm leading-relaxed">{activitat1.ia.problema1}</p>
              </div>
              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                <p className="font-medium text-gray-900 text-sm mb-1">Problema 2 — risc d'absentisme</p>
                <p className="text-gray-600 text-sm leading-relaxed">{activitat1.ia.problema2}</p>
              </div>
            </div>
            <Collapsible title="Dades necessàries i d'on surten" icon={Database} color="text-indigo-500">
              <List items={activitat1.ia.dades} />
            </Collapsible>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Relació amb el Big Data: </span>{activitat1.ia.bigData}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Benefici per a la rendibilitat: </span>{activitat1.ia.benefici}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Llenguatge i tecnologia: </span>{activitat1.ia.tecnologia}</p>
            <Collapsible title="Ètica i privacitat" icon={Lock} color="text-red-500">
              <List items={activitat1.ia.etica} />
            </Collapsible>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">La IA en aquest sector: </span>{activitat1.ia.sector}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Punt futur addicional: </span>{activitat1.ia.puntFutur}</p>
          </div>

          <Veredicte>{activitat1.veredicte}</Veredicte>
        </div>
      )}

      {/* ACTIVITAT 2 */}
      {tab === 'a2' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h2 className="text-xl font-bold text-blue-900">Activitat 2 — Disseny: arquitectura tecnològica</h2>
            <p className="text-blue-800 text-sm mt-1">Resolta punt per punt (2.1 a 2.5): històries d'usuari, casos d'ús, xarxa i núvol, model de dades i recorregut de les dades.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="2.1">Històries d'usuari</Lliurable>
            <h3 className="font-semibold text-gray-900">2.1 Històries d'usuari (backlog inicial)</h3>
            <p className="text-gray-600 text-sm">{activitat2.rols}</p>
            <div className="space-y-2">
              {activitat2.epiques.map((ep) => (
                <Collapsible key={ep.nom} title={ep.nom} icon={Users} color="text-purple-600" badge={`${ep.rows.length} HU`}>
                  <Table headers={ep.headers} rows={ep.rows} />
                </Collapsible>
              ))}
            </div>
            <p className="text-gray-600 text-sm italic">{activitat2.total}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="2.2">Casos d'ús</Lliurable>
            <h3 className="font-semibold text-gray-900">2.2 Casos d'ús — especificació textual</h3>
            <div className="space-y-2">
              {activitat2.casosUs.map((cu) => (
                <Collapsible key={cu.id} title={`${cu.id} — ${cu.nom}`} icon={GitBranch} color="text-teal-600">
                  <CasUs cu={cu} />
                </Collapsible>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
            <Lliurable num="2.3">Disseny de la xarxa i model de núvol</Lliurable>
            <h3 className="font-semibold text-gray-900">2.3 Disseny de la xarxa i model de núvol</h3>
            <p className="font-medium text-gray-900 text-sm">Topologia de xarxa (centre)</p>
            <MermaidDiagram chart={activitat2.xarxaTopologia} />
            <Collapsible title="Segments / VLAN" icon={Network} color="text-orange-500">
              <List items={activitat2.vlans} />
            </Collapsible>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Connectivitat: </span>{activitat2.connectivitat}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Elements de xarxa: </span>{activitat2.elementsXarxa}</p>
            <p className="font-medium text-gray-900 text-sm pt-2">Model de núvol (amb justificació)</p>
            <Table headers={activitat2.nuvolTaula.headers} rows={activitat2.nuvolTaula.rows} />
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Model de desplegament: </span>{activitat2.desplegament}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Funcions delegades al núvol: </span>{activitat2.funcionsDelegades}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Edge / fog: </span>{activitat2.edgeFog}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="2.4">Disseny de la base de dades</Lliurable>
            <h3 className="font-semibold text-gray-900">2.4 Disseny de la base de dades — model entitat-relació</h3>
            <Collapsible title="Diagrama entitat-relació (20 entitats)" icon={Database} color="text-indigo-600" defaultOpen={false}>
              <MermaidDiagram chart={activitat2.erDiagram} />
            </Collapsible>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
            <Lliurable num="2.5">Fonts de dades i recorregut de les dades</Lliurable>
            <h3 className="font-semibold text-gray-900">2.5 Fonts de dades i recorregut de les dades</h3>
            <p className="font-medium text-gray-900 text-sm">Taula de fonts de dades</p>
            <Table headers={activitat2.fontsDades.headers} rows={activitat2.fontsDades.rows} />
            <p className="font-medium text-gray-900 text-sm pt-2">Recorregut de les dades (cicle de vida)</p>
            <MermaidDiagram chart={activitat2.recorregutDades} />
            <div>
              <p className="font-medium text-gray-900 text-sm mb-2">Dada / informació / coneixement en aquest projecte</p>
              <div className="grid md:grid-cols-3 gap-3">
                {activitat2.dadaInfoConeixement.map((d) => (
                  <div key={d.nivell} className="border border-gray-100 rounded-lg p-3 bg-gray-50">
                    <p className="text-xs font-semibold text-blue-700 uppercase mb-1">{d.nivell}</p>
                    <p className="text-gray-600 text-sm">{d.exemple}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Relació Big Data ↔ anàlisi ↔ ML/DL ↔ IA: </span>{activitat2.relacioBigData}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Etapes de ciència de dades: </span>{activitat2.etapesCienciaDades}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">On s'emmagatzemen les dades: </span>{activitat2.onEmmagatzemen}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Integració entre dades, aplicacions i plataformes: </span>{activitat2.integracio}</p>
          </div>

          <Veredicte>{activitat2.veredicte}</Veredicte>
        </div>
      )}

      {/* ACTIVITAT 3 */}
      {tab === 'a3' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h2 className="text-xl font-bold text-blue-900">Activitat 3 — Pla d'implementació i seguretat</h2>
            <p className="text-blue-800 text-sm mt-1">Resolta punt per punt (3.1 a 3.5): backlog prioritzat, sprints, pla de seguretat, riscos del projecte i idoneïtat dels RRHH.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="3.1">Product backlog prioritzat</Lliurable>
            <h3 className="font-semibold text-gray-900">3.1 Product backlog prioritzat</h3>
            <p className="text-gray-500 text-sm">{activitat3.estimacioNota}</p>
            <Collapsible title={`Backlog complet — ${activitat3.backlog.rows.length} HU estimades i priortizades`} icon={ClipboardList} color="text-blue-600" badge="MoSCoW">
              <Table headers={activitat3.backlog.headers} rows={activitat3.backlog.rows} />
            </Collapsible>
            <Collapsible title="Definició de Fet (Definition of Done)" icon={CheckCircle2} color="text-green-600">
              <List items={activitat3.definicioFet} />
            </Collapsible>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="3.2">Planificació en sprints</Lliurable>
            <h3 className="font-semibold text-gray-900">3.2 Planificació en sprints</h3>
            <p className="text-gray-700 text-sm">{activitat3.sprints.intro}</p>
            <p className="text-gray-700 text-sm"><span className="font-medium text-gray-900">Fites: </span>{activitat3.sprints.fites}</p>
            <Collapsible title="Taula de sprints (6 sprints, repartiment ASIX / DAM / DAW)" icon={Smartphone} color="text-purple-600">
              <Table headers={activitat3.sprints.headers} rows={activitat3.sprints.rows} />
            </Collapsible>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Repartiment de la càrrega: </span>{activitat3.sprints.reparticio}</p>
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Realisme: </span>{activitat3.sprints.realisme}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
            <Lliurable num="3.3">Pla de seguretat</Lliurable>
            <h3 className="font-semibold text-gray-900">3.3 Pla de seguretat</h3>
            <Collapsible title="a) Anàlisi de riscos per component" icon={ShieldAlert} color="text-red-600" badge={`${activitat3.riscosComponent.rows.length} components`}>
              <Table headers={activitat3.riscosComponent.headers} rows={activitat3.riscosComponent.rows} />
            </Collapsible>
            <Collapsible title="b) Mesures de seguretat concretes" icon={Lock} color="text-green-700">
              <div className="space-y-3">
                {activitat3.mesuresSeguretat.map((m) => (
                  <div key={m.titol}>
                    <p className="font-medium text-gray-900 text-sm">{m.titol}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>
            </Collapsible>
            <Collapsible title="c) Protecció de dades personals (RGPD / LOPDGDD)" icon={FileWarning} color="text-amber-600">
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 text-sm mb-1">Dades personals tractades i finalitat</p>
                  <List items={activitat3.proteccioDades.dades} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Base legal: </span>{activitat3.proteccioDades.baseLegal}</p>
                <div>
                  <p className="font-medium text-gray-900 text-sm mb-1">Principis aplicats</p>
                  <List items={activitat3.proteccioDades.principis} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm mb-1">Període de retenció i eliminació</p>
                  <List items={activitat3.proteccioDades.retencio} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">On s'emmagatzemen i implicacions: </span>{activitat3.proteccioDades.onEmmagatzemen}</p>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Avaluació d'impacte (DPIA): </span>{activitat3.proteccioDades.dpia}</p>
                <p className="text-gray-700 text-sm leading-relaxed"><span className="font-medium text-gray-900">Mesures organitzatives: </span>{activitat3.proteccioDades.organitzatives}</p>
              </div>
            </Collapsible>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="3.4">Riscos del projecte i pla de contingència</Lliurable>
            <h3 className="font-semibold text-gray-900">3.4 Riscos del projecte i pla de contingència</h3>
            <Table headers={activitat3.riscosProjecte.headers} rows={activitat3.riscosProjecte.rows} />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-3">
            <Lliurable num="3.5">Idoneïtat dels recursos humans</Lliurable>
            <h3 className="font-semibold text-gray-900">3.5 Idoneïtat dels recursos humans</h3>
            <Table headers={activitat3.recursosHumans.headers} rows={activitat3.recursosHumans.rows} />
            <p className="text-gray-700 text-sm leading-relaxed italic">{activitat3.recursosHumans.conclusio}</p>
          </div>

          <Veredicte>{activitat3.veredicte}</Veredicte>
        </div>
      )}

      {/* ANNEX */}
      {tab === 'annex' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
          <div className="flex items-center space-x-2">
            <ListChecks className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Annex — Comprovació de lliurables</h2>
          </div>
          <p className="text-gray-600 text-sm">
            Llista de comprovació final: tot el que hauria d'aparèixer al lliurament de cadascuna de les tres activitats.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {annex.map((bloc) => (
              <div key={bloc.activitat} className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                <p className="font-semibold text-gray-900 mb-2">{bloc.activitat}</p>
                <ul className="space-y-2">
                  {bloc.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2 pt-2 border-t">
            <Building2 className="w-4 h-4 text-gray-400" />
            <p className="text-gray-500 text-sm">
              Torna a{' '}
              <Link to="/activitats" className="text-blue-600 hover:underline font-medium">les Activitats</Link>{' '}
              per veure el detall de cada lliurable, o a{' '}
              <Link to="/metodologia" className="text-blue-600 hover:underline font-medium">la Metodologia</Link>{' '}
              per als criteris d'avaluació.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
