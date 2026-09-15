import { FileText, Code, Presentation, Download, CheckCircle, Info, Calendar, Package } from 'lucide-react'
import MermaidDiagram from '../components/MermaidDiagram'

const lliuraments = [
  {
    num: 1,
    nom: "Lliurament 1 — Punt 1",
    titol: "Descripció del cas d'empresa, objectius i àrees a digitalitzar",
    obertura: "15 d'abril 2026",
    venciment: "24 d'abril 2026, 23:59",
    color: 'border-blue-300 bg-blue-50',
    badge: 'bg-blue-500',
    parts: [
      "Decisió del cas empresarial",
      "1.1 Descripció de l'Empresa",
      "1.2 Identificació d'Entorns IT i OT",
      "1.3 Diagnòstic d'àrees a digitalitzar",
      "1.4 Objectius estratègics SMART",
    ],
    format: "PDF (mantenir Google Doc compartit amb el docent)",
  },
  {
    num: 2,
    nom: "Lliurament 2 — Punt 2",
    titol: "Proposta d'arquitectura tecnològica",
    obertura: "15 d'abril 2026",
    venciment: "1 de maig 2026, 23:59",
    color: 'border-green-300 bg-green-50',
    badge: 'bg-green-500',
    parts: [
      "2.1 Selecció de Tecnologies Habilitadores Digitals (THD)",
      "2.2 Arquitectura Cloud (Cloud / Fog / Edge / Mist)",
      "2.3 Intel·ligència Artificial i Automatització",
      "2.4 Gestió de Dades (cicle de vida complet)",
      "2.5 Encaix entre Àrees Digitalitzades",
    ],
    format: "PDF actualitzat fins al final del Punt 2",
  },
  {
    num: 3,
    nom: "Lliurament 3 — Punt 3",
    titol: "Pla d'implementació i seguretat",
    obertura: "15 d'abril 2026",
    venciment: "15 de maig 2026, 23:59",
    color: 'border-orange-300 bg-orange-50',
    badge: 'bg-orange-500',
    parts: [
      "3.1 Anàlisi de Riscos de Seguretat",
      "3.2 Estratègia Zero Trust",
      "3.3 Compliment Normatiu (RGPD, ISO 27001…)",
      "3.4 Tractament i Anàlisi de Dades",
      "3.5 Cronograma d'Implementació",
      "3.6 Recursos Humans",
      "3.7 Pressupost Estimat",
      "Punt 4 — Documentació de Canvis Estratègics",
    ],
    format: "PDF actualitzat fins al final del Punt 4",
  },
  {
    num: 'F',
    nom: "Lliurament Final",
    titol: "Document complet + Prototip + Presentació",
    obertura: "15 d'abril 2026",
    venciment: "29 de maig 2026, 23:59",
    color: 'border-purple-300 bg-purple-50',
    badge: 'bg-purple-600',
    parts: [
      "Document complet (PDF, tots els punts)",
      "Prototip funcional (enllaç al repositori + demo)",
      "Slides de la presentació (PDF o Google Slides)",
      "Defensa oral a l'aula segons calendari (setmana 9)",
    ],
    format: "Activitat única: 50% Document + 20% Prototip + 30% Presentació",
  },
]

const entregables = [
  {
    nom: 'Documentació',
    pes: 50,
    color: 'bg-blue-500',
    icon: FileText,
    descripcio: 'Cas empresarial + Arquitectura tecnològica + Pla d\'implementació',
    criteris: [
      'Anàlisi del cas empresarial',
      'Proposta d\'arquitectura tecnològica',
      'Pla d\'implementació i seguretat',
    ],
  },
  {
    nom: 'Prototipat',
    pes: 20,
    color: 'bg-green-500',
    icon: Code,
    descripcio: 'Implementació bàsica funcional amb recursos gratuïts',
    criteris: [
      'Funcionalitat demostrada',
      'Alineació amb arquitectura proposada',
      'Ús de recursos gratuïts',
      'Documentació tècnica reproduïble',
      'Innovació i creativitat',
    ],
  },
  {
    nom: 'Presentació',
    pes: 30,
    color: 'bg-purple-500',
    icon: Presentation,
    descripcio: 'Exposició oral, demostració i respostes a preguntes',
    criteris: [
      'Claredat expositiva',
      'Domini del contingut',
      'Respostes a preguntes',
      'Demostració del prototip',
      'Comunicació professional',
    ],
  },
]

const rubricaDocument = [
  {
    seccio: 'Anàlisi del Cas',
    criteris: [
      { nom: 'Context empresarial i digitalització', ra: 'RA1' },
      { nom: 'Entorns IT/OT', ra: 'RA1' },
      { nom: 'Diagnòstic d\'àrees a digitalitzar', ra: 'RA6' },
      { nom: 'Objectius estratègics', ra: 'RA6' },
    ],
  },
  {
    seccio: 'Arquitectura Tecnològica',
    criteris: [
      { nom: 'Selecció de THD', ra: 'RA2' },
      { nom: 'Arquitectura Cloud', ra: 'RA3' },
      { nom: 'Integració de IA', ra: 'RA4' },
      { nom: 'Gestió de dades', ra: 'RA5' },
      { nom: 'Integració entre àrees', ra: 'RA6' },
    ],
  },
  {
    seccio: 'Pla d\'Implementació i Seguretat',
    criteris: [
      { nom: 'Anàlisi de riscos i Zero Trust', ra: 'RA5, RA6' },
      { nom: 'Tractament de dades', ra: 'RA5, RA6' },
      { nom: 'Pla d\'implementació', ra: 'RA6' },
      { nom: 'Documentació de canvis i RRHH', ra: 'RA6' },
      { nom: 'Avantatges i sostenibilitat', ra: 'RA1, RA2' },
    ],
  },
]

const plantillaChecklist = [
  'Portada completa',
  'Resum executiu (màx. 1 pàgina)',
  'Totes les seccions completades',
  'Diagrames d\'arquitectura inclosos',
  'Anàlisi de riscos i Zero Trust',
  'Cronograma d\'implementació',
  'Prototip documentat',
  'Codi font accessible',
  'Revisió ortogràfica',
]

const mapejoDiagram = `
flowchart TB
    subgraph ACT["ACTIVITAT ÚNICA — Cada RA = 1/6 de la nota"]
        subgraph DOC["DOCUMENTACIÓ 50%"]
            D1[Anàlisi Cas<br/>RA1, RA6]
            D2[Arquitectura<br/>RA2, RA3, RA4, RA5]
            D3[Pla Seguretat<br/>RA5, RA6]
        end

        subgraph PROTO["PROTOTIPAT 20%"]
            P1[Implementació<br/>RA2, RA3, RA4, RA6]
        end

        subgraph PRES["PRESENTACIÓ 30%"]
            F1[Exposició i Demostració<br/>Tots els RA]
        end
    end

    style ACT fill:#f8fafc
    style DOC fill:#dbeafe
    style PROTO fill:#dcfce7
    style PRES fill:#f3e8ff
`

export default function Avaluacio() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Avaluació</h1>
        <p className="text-gray-600">
          L'assignatura s'avalua mitjançant una <strong>única activitat</strong> amb tres parts: Documentació, Prototipat i Presentació.
          Cada Resultat d'Aprenentatge (RA) contribueix amb <strong>1/6 de la nota</strong> de l'activitat.
        </p>
      </div>

      {/* Info banner */}
      <div className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-800">
          <strong>Model d'avaluació:</strong> Una única activitat avalua els 6 RA de forma integrada.
          Cada RA pesa 1/6 de la nota i s'avalua qualitativament a través de les tres parts de l'activitat.
          Els <strong>3 lliuraments parcials</strong> serveixen per orientar el procés i rebre retroalimentació formativa abans del lliurament final.
        </div>
      </div>

      {/* Lliuraments timeline */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <Calendar className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Lliuraments a Moodle</h2>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          El document es construeix progressivament en 3 lliuraments parcials (formatius) i un lliurament final (avaluatiu).
          Sempre treballeu sobre el mateix Google Doc compartit amb el docent.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {lliuraments.map((ll) => (
            <div key={ll.num} className={`rounded-lg p-5 border-2 ${ll.color}`}>
              <div className="flex items-start space-x-3 mb-3">
                <div className={`${ll.badge} text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0`}>
                  {ll.num === 'F' ? <Package className="w-5 h-5" /> : ll.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{ll.nom}</h3>
                  <p className="text-sm text-gray-700 font-medium">{ll.titol}</p>
                </div>
              </div>
              <div className="text-xs text-gray-600 mb-3 space-y-0.5">
                <p><strong>Oberta:</strong> {ll.obertura}</p>
                <p><strong>Venciment:</strong> {ll.venciment}</p>
              </div>
              <ul className="space-y-1 mb-3">
                {ll.parts.map((p, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 italic border-t border-gray-200 pt-2">
                <strong>Format:</strong> {ll.format}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {entregables.map((ent) => (
          <div key={ent.nom} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`${ent.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <ent.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{ent.nom}</h3>
                <p className="text-2xl font-bold text-gray-900">{ent.pes}%</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{ent.descripcio}</p>
            <ul className="space-y-1">
              {ent.criteris.map((crit, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {crit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mapping diagram */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Mapatge amb RAs</h2>
        <MermaidDiagram chart={mapejoDiagram} />
      </div>

      {/* RA contribution */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contribució dels RA</h2>
        <p className="text-gray-600 text-sm mb-4">
          Cada RA contribueix amb 1/6 de la nota i s'avalua qualitativament a través de les parts de l'activitat:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">RA</th>
                <th className="px-4 py-2 text-left">Àmbit</th>
                <th className="px-4 py-2 text-left">On s'avalua principalment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">RA1</td>
                <td className="px-4 py-2 text-gray-600">Digitalització i IT/OT</td>
                <td className="px-4 py-2 text-gray-600">Documentació: Anàlisi del cas, Avantatges</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">RA2</td>
                <td className="px-4 py-2 text-gray-600">Tecnologies Habilitadores</td>
                <td className="px-4 py-2 text-gray-600">Documentació: Arquitectura (THD) + Prototipat</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">RA3</td>
                <td className="px-4 py-2 text-gray-600">Sistemes Cloud</td>
                <td className="px-4 py-2 text-gray-600">Documentació: Arquitectura (Cloud) + Prototipat</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">RA4</td>
                <td className="px-4 py-2 text-gray-600">Intel·ligència Artificial</td>
                <td className="px-4 py-2 text-gray-600">Documentació: Arquitectura (IA) + Prototipat</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">RA5</td>
                <td className="px-4 py-2 text-gray-600">Dades i Seguretat</td>
                <td className="px-4 py-2 text-gray-600">Documentació: Gestió de dades i Seguretat</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">RA6</td>
                <td className="px-4 py-2 text-gray-600">Projecte de Transformació</td>
                <td className="px-4 py-2 text-gray-600">Documentació + Prototipat + Presentació</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Document rubric */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Rúbrica de la Documentació</h2>
        <div className="space-y-6">
          {rubricaDocument.map((sec, i) => (
            <div key={i}>
              <h3 className="font-medium text-gray-900 mb-3">{sec.seccio}</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {sec.criteris.map((crit, j) => (
                  <div key={j} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-800">{crit.nom}</p>
                    <p className="text-sm text-gray-500">{crit.ra}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grading scale */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Escala de Valoració</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Nivell</th>
                <th className="px-4 py-2 text-left">Descripció</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2"><span className="font-bold text-green-600">Excel·lent</span></td>
                <td className="px-4 py-2 text-gray-600">Supera les expectatives amb qualitat professional</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2"><span className="font-bold text-blue-600">Notable</span></td>
                <td className="px-4 py-2 text-gray-600">Compleix correctament amb bon nivell</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2"><span className="font-bold text-yellow-600">Suficient</span></td>
                <td className="px-4 py-2 text-gray-600">Compleix els mínims exigits</td>
              </tr>
              <tr>
                <td className="px-4 py-2"><span className="font-bold text-red-600">Insuficient</span></td>
                <td className="px-4 py-2 text-gray-600">No compleix els mínims</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Càlcul nota final:</strong> (Documentació × 0.50) + (Prototipat × 0.20) + (Presentació × 0.30)
          </p>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <h2 className="text-xl font-semibold text-gray-900">Checklist d'Entrega</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {plantillaChecklist.map((item, i) => (
            <label key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary-600" />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Downloads */}
      <div className="bg-gray-900 rounded-xl p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Documents Descarregables</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href={import.meta.env.BASE_URL + 'plantilles/plantilla_document.pdf'} download className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
            <span>Plantilla Document</span>
          </a>
          <a href={import.meta.env.BASE_URL + 'plantilles/guia_prototip.pdf'} download className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
            <span>Guia Prototipat</span>
          </a>
          <a href={import.meta.env.BASE_URL + 'plantilles/rubrica_evaluacio.md'} download className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
            <span>Rúbrica Completa</span>
          </a>
        </div>
      </div>
    </div>
  )
}
