import { Link } from 'react-router-dom'
import {
  BookOpen, ClipboardList, Compass, FileCheck2, ClipboardCheck, Wrench,
  ArrowRight, Calendar, Users, Target, AlertTriangle, Layers,
} from 'lucide-react'
import MermaidDiagram from '../components/MermaidDiagram'

const features = [
  {
    name: 'Activitats',
    description: 'Les 5 activitats del mòdul amb tots els lliurables, criteris i terminis',
    href: '/activitats',
    icon: ClipboardList,
    color: 'bg-blue-600',
  },
  {
    name: 'Metodologia',
    description: 'Històries d\'usuari, casos d\'ús, backlog, MoSCoW i diagrama de context',
    href: '/metodologia',
    icon: Compass,
    color: 'bg-emerald-600',
  },
  {
    name: 'Exemple resolt',
    description: 'AccésCentre: les activitats 1, 2 i 3 resoltes com a referència de nivell',
    href: '/exemple',
    icon: FileCheck2,
    color: 'bg-violet-600',
  },
  {
    name: 'Teoria',
    description: '6 temes: digitalització i IT/OT, THD, cloud, IA, dades i seguretat, projecte',
    href: '/teoria',
    icon: BookOpen,
    color: 'bg-sky-600',
  },
  {
    name: 'Avaluació',
    description: 'Pesos, matriu de traçabilitat amb els RA, rúbriques i política d\'ús de la IA',
    href: '/avaluacio',
    icon: ClipboardCheck,
    color: 'bg-amber-600',
  },
  {
    name: 'Recursos',
    description: 'Catàleg de tecnologies, eines per activitat i material del mòdul',
    href: '/recursos',
    icon: Wrench,
    color: 'bg-rose-600',
  },
]

const activitats = [
  {
    codi: 'A1',
    nom: 'Idea, objectius i anàlisi de requeriments',
    hores: '8 h',
    setmanes: 'Setmanes 1-4',
    dates: '17 set → 8 oct 2026',
    ra: 'RA1, RA2, RA4',
    color: 'bg-blue-600',
  },
  {
    codi: 'A2',
    nom: 'Disseny: arquitectura tecnològica',
    hores: '8 h',
    setmanes: 'Setmanes 5-8',
    dates: '15 oct → 5 nov 2026',
    ra: 'RA3, RA5, RA6',
    color: 'bg-emerald-600',
  },
  {
    codi: 'A3',
    nom: 'Pla d\'implementació i seguretat',
    hores: '4 h',
    setmanes: 'Setmanes 9-10',
    dates: '12 nov → 19 nov 2026',
    ra: 'RA5, RA6',
    color: 'bg-amber-600',
  },
  {
    codi: 'A4',
    nom: 'Prototip i material de presentació',
    hores: '6 h',
    setmanes: 'Setmanes 11-13',
    dates: '26 nov → 10 des 2026',
    ra: 'RA6',
    color: 'bg-violet-600',
  },
  {
    codi: 'A5',
    nom: 'Presentació i defensa',
    hores: '7 h',
    setmanes: 'Setmanes 14-17',
    dates: '17 des 2026 → 28 gen 2027',
    ra: 'RA6',
    color: 'bg-rose-600',
  },
]

const estructuraDiagram = `
flowchart LR
    subgraph MODUL["Mòdul 1665 — Digitalització (33 h) · NOMÉS ES PLANIFICA"]
        direction LR
        A1["A1 · 8 h<br/>Idea i requeriments"]
        A2["A2 · 8 h<br/>Arquitectura"]
        A3["A3 · 4 h<br/>Pla i seguretat"]
        A4["A4 · 6 h<br/>Prototip"]
        A5["A5 · 7 h<br/>Defensa"]
        A1 --> A2 --> A3 --> A4 --> A5
    end

    A5 --> DIN["Dinàmiques:<br/>tria d'equips i projecte"]
    DIN --> PROJ["Mòdul de Projecte<br/>grups de 3 · ASIX + DAM + DAW<br/>AQUÍ S'IMPLEMENTA"]

    style MODUL fill:#eff6ff
    style DIN fill:#fef3c7
    style PROJ fill:#dcfce7
`

const especialitats = [
  {
    nom: 'ASIX',
    color: 'border-sky-300 bg-sky-50',
    titol: 'text-sky-900',
    aporta: 'Infraestructura, xarxa, sistemes, núvol i seguretat',
  },
  {
    nom: 'DAM',
    color: 'border-emerald-300 bg-emerald-50',
    titol: 'text-emerald-900',
    aporta: 'Aplicació multiplataforma, especialment mòbil',
  },
  {
    nom: 'DAW',
    color: 'border-violet-300 bg-violet-50',
    titol: 'text-violet-900',
    aporta: 'Aplicació web de gestió i de cara al client',
  },
]

const requisits = [
  'Empresa o organització d\'un sector productiu, real o realista, que parteixi de poca digitalització.',
  'Feina substancial per a les tres especialitats: ASIX, DAM i DAW.',
  'Gestió de dades: model de base de dades propi i recorregut clar de captura fins a ús.',
  'Complexitat abastable per a 3 persones durant el Mòdul de Projecte, ni trivial ni inabastable.',
  'Recomanat: incorporar IA i/o IoT, perquè suma complexitat i cobreix més resultats d\'aprenentatge.',
]

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white">
        <p className="text-primary-200 font-medium mb-2">Curs 2026-27</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          1665. Digitalització Aplicada als Sectors Productius
        </h1>
        <p className="text-lg text-primary-100 mb-6 max-w-3xl">
          Planifica la transformació digital d'una empresa al llarg de cinc activitats encadenades.
          El resultat és la base del teu projecte de segon.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
            <Calendar className="w-5 h-5" />
            <span>33 hores · 17 setmanes · 2 h setmanals</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
            <Target className="w-5 h-5" />
            <span>6 resultats d'aprenentatge</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
            <Users className="w-5 h-5" />
            <span>DAW · DAM · ASIX</span>
          </div>
        </div>
      </div>

      {/* Avís clau del mòdul */}
      <div className="flex items-start space-x-4 p-6 bg-amber-50 border-2 border-amber-300 rounded-xl">
        <AlertTriangle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h2 className="font-bold text-amber-900 text-lg mb-2">
            En aquest mòdul es planifica, no s'implementa
          </h2>
          <p className="text-amber-900 text-sm leading-relaxed mb-2">
            Cada alumne/a planifica individualment un projecte de transformació digital: idea, requisits,
            arquitectura, disseny de base de dades, backlog, pla de seguretat i prototip d'interfície.
            No s'escriu codi de producció.
          </p>
          <p className="text-amber-900 text-sm leading-relaxed">
            Al final del mòdul es fan dinàmiques perquè conegueu els projectes dels companys i trieu amb qui
            i quin projecte voleu implementar. Aquesta implementació passa al Mòdul de Projecte, en grups de
            3 persones que barregen les tres especialitats.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.name}
            to={feature.href}
            className="bg-white rounded-xl p-6 shadow-sm card-hover border border-gray-100"
          >
            <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
            <div className="flex items-center text-primary-600 text-sm font-medium">
              Veure més <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>
        ))}
      </div>

      {/* Estructura */}
      <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Estructura del mòdul</h2>
        <p className="text-gray-600 mb-6">
          Les cinc activitats són encadenades: cadascuna parteix del resultat de l'anterior.
        </p>
        <MermaidDiagram chart={estructuraDiagram} />
      </div>

      {/* Calendari */}
      <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
          <h2 className="text-2xl font-bold text-gray-900">Calendari</h2>
          <span className="text-sm text-gray-500">Igual per a tots els grups: DAW A/B, DAM A/B, ASIX A/B</span>
        </div>
        <p className="text-gray-600 mb-6">
          De la setmana del 17 de setembre de 2026 a la del 28 de gener de 2027, amb l'aturada de Nadal
          entre el 17 de desembre i el 14 de gener.
        </p>
        <div className="space-y-4">
          {activitats.map((act) => (
            <Link
              key={act.codi}
              to={`/activitats/${act.codi.slice(1)}`}
              className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-gray-50 transition-colors"
            >
              <div className={`${act.color} text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold flex-shrink-0`}>
                {act.codi}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 className="font-semibold text-gray-900">{act.nom}</h3>
                  <span className="text-sm text-gray-500">{act.dates}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{act.hores}</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{act.setmanes}</span>
                  <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full">{act.ra}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Requisits del projecte */}
      <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <Layers className="w-6 h-6 text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">Què ha de complir el teu projecte</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Aquests requisits es comproven a l'Activitat 1. Si el projecte no els compleix, cal replantejar-lo.
        </p>
        <ul className="space-y-2 mb-8">
          {requisits.map((r, i) => (
            <li key={i} className="flex items-start text-gray-700">
              <span className="text-primary-500 mr-3 font-bold">{i + 1}.</span>
              <span className="leading-relaxed">{r}</span>
            </li>
          ))}
        </ul>
        <div className="grid md:grid-cols-3 gap-4">
          {especialitats.map((esp) => (
            <div key={esp.nom} className={`p-4 rounded-lg border-2 ${esp.color}`}>
              <h3 className={`font-bold mb-1 ${esp.titol}`}>{esp.nom}</h3>
              <p className="text-sm text-gray-700">{esp.aporta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Avaluació */}
      <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Avaluació</h2>
        <p className="text-gray-600 mb-6">
          Cinc activitats d'avaluació, cap prova escrita. Cal superar cada resultat d'aprenentatge de
          manera independent amb un mínim de 5.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {activitats.map((act) => (
            <div key={act.codi} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-1">20%</div>
              <div className="text-sm font-semibold text-gray-700">{act.codi}</div>
              <p className="text-xs text-gray-500 mt-1">{act.hores}</p>
            </div>
          ))}
        </div>
        <Link
          to="/avaluacio"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          Veure la matriu de traçabilitat i les rúbriques
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Comença per l'Activitat 1</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Si encara no tens idea de projecte, a la pàgina d'activitats hi ha un banc d'idees per començar.
          Si vols veure fins on ha d'arribar el teu treball, mira l'exemple resolt.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/activitats/1"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Activitat 1
          </Link>
          <Link
            to="/exemple"
            className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Exemple resolt
          </Link>
        </div>
      </div>
    </div>
  )
}
