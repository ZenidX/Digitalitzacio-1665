import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, Building2, Users, Euro, MapPin, MessageCircle, HelpCircle, Lightbulb, ChevronDown, ChevronUp, BarChart3, BookOpen, FileText } from 'lucide-react'

function Collapsible({ title, icon: Icon, color = 'text-yellow-500', children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <div className="flex items-center space-x-2">
          <Icon className={`w-5 h-5 ${color}`} />
          <span className="font-medium text-gray-900">{title}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>
      {open && <div className="p-4 border-t">{children}</div>}
    </div>
  )
}

const seccioColors = {
  '1': { bg: 'bg-blue-50', border: 'border-blue-200', title: 'text-blue-900', badge: 'bg-blue-100 text-blue-700' },
  '2': { bg: 'bg-green-50', border: 'border-green-200', title: 'text-green-900', badge: 'bg-green-100 text-green-700' },
  '3': { bg: 'bg-amber-50', border: 'border-amber-200', title: 'text-amber-900', badge: 'bg-amber-100 text-amber-700' },
  '4': { bg: 'bg-purple-50', border: 'border-purple-200', title: 'text-purple-900', badge: 'bg-purple-100 text-purple-700' },
}

const casosData = {
  1: {
    name: 'TechnoGym Fitness',
    sector: 'Fitness i Salut',
    ubicacio: 'Barcelona (3 centres)',
    empleats: 45,
    facturacio: '2.5M€/any',
    clients: '4.500 socis actius',
    descripcio: 'TechnoGym Fitness és una cadena de gimnasos urbans fundada el 2015 amb 3 centres a Barcelona (Eixample, Gràcia i Poblenou). Ofereixen sala de musculació i cardio, classes dirigides (spinning, ioga, crossfit), entrenadors personals i zona de spa/sauna als centres de l\'Eixample i Poblenou.',
    situacioActual: [
      'Cada centre funciona de manera bastant independent. El director de cada gimnàs gestiona el seu propi horari de classes, el manteniment de les màquines i l\'atenció al client.',
      'Les reserves de classes dirigides es fan per telèfon o presencialment a la recepció. Hi ha 2 recepcionistes per centre que dediquen bona part del temps a atendre trucades i gestionar llistes d\'espera.',
      'Les màquines de cardio i musculació no tenen cap tipus de connexió. Quan una cinta de córrer o una bicicleta estàtica falla, el soci avisa a recepció i es posa un cartell de "fora de servei". El tècnic extern ve 1-2 cops per setmana.',
      'L\'experiència del soci és la mateixa per a tothom: no hi ha cap sistema que suggereixi rutines, classes o horaris en funció de les preferències o l\'historial de cada soci.',
      'El consum energètic és elevat perquè el clima funciona a la mateixa temperatura tot el dia, independentment de si el gimnàs està ple o buit.',
    ],
    dadesClau: [
      { label: 'Taxa d\'abandonament (churn)', valor: '18% anual' },
      { label: 'Ocupació màxima', valor: 'Dl-Dj 18-21h (sobresaturació)' },
      { label: 'Ocupació mínima', valor: 'Matins entre setmana (30% capacitat)' },
      { label: 'Cost energètic total', valor: '45.000€/any (3 centres)' },
      { label: 'Avaries imprevistes', valor: '3-4 al mes (temps resposta 2-5 dies)' },
      { label: 'Queixes principals', valor: 'Massificació (42%), Màquines avariades (28%), Manca personalització (18%)' },
      { label: 'Competència', valor: '2 gimnasos low-cost a <500m del centre de Gràcia' },
    ],
    veus: [
      { rol: 'Directora General', cita: 'Estem perdent socis per la competència low-cost. Hem de diferenciar-nos per experiència, no per preu. Però no sé ni quants socis tenim al gimnàs en cada moment.' },
      { rol: 'Recepcionista (Eixample)', cita: 'Passo mitja jornada al telèfon per reserves. Moltes vegades la classe ja està plena i el soci s\'enfada. Si hi hagués una app seria tot més fàcil.' },
      { rol: 'Tècnic de manteniment', cita: 'Quan arribo, algunes màquines porten dies parades i ningú m\'ha avisat. Si pogués veure l\'estat remotament, podria prioritzar i portar les peces de recanvi.' },
      { rol: 'Soci (3 anys d\'antiguitat)', cita: 'He pensat a canviar-me al low-cost del costat. A les 19h no trobes ni una cinta lliure. Per què no m\'avisen de les hores amb menys gent?' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu TechnoGym Fitness: sector fitness, 3 centres urbans, model de subscripció mensual. Inclou l\'estructura organitzativa (director per centre, recepció, entrenadors, manteniment extern) i la situació competitiva (low-cost vs premium).' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'Identifica l\'entorn IT (sistema de gestió de socis, TPV, email) i l\'entorn OT (màquines de cardio i musculació, sistema de clima, control d\'accés). Quin nivell d\'integració tenen? Existeix algun punt de connexió IT-OT? Com es comuniquen els centres entre si?' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Amb les dades i les veus dels protagonistes, omple la taula de diagnòstic: reserves, monitorització de màquines, gestió energètica, experiència del soci, gestió multi-centre. Prioritza cada àrea (1-5) justificant amb l\'impacte econòmic o en el soci.' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'Defineix objectius SMART per a TechnoGym. Exemples de KPI: reduir churn del 18% al X%, augmentar ocupació en hores vall del 30% al X%, reduir cost energètic en X%. Inclou necessitats presents i visió a 3-5 anys.' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'Per a cada problema identificat, justifica quina THD aplicaries. Pensa en IoT (sensors ocupació, màquines), Cloud (gestió multi-centre, app), IA (predicció ocupació, recomanacions), Big Data (historial d\'ús, patrons). Relaciona cada THD amb un benefici concret.' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'Dissenya l\'arquitectura per capes. Cloud: quin backend (Firebase, Supabase, AWS)? Per què? Edge: necessites processament local al gimnàs? Dispositius: quins sensors i on? Dibuixa el diagrama amb draw.io o similar. Justifica escalabilitat i cost.' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Quins processos automatitzaries amb IA? Predicció d\'ocupació (quin model ML?), recomanació d\'activitats (col·laboratiu o basat en contingut?), detecció de risc d\'abandó (quines features?). Per a cada un, indica les dades requerides i la tecnologia.' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Defineix el cicle de vida de les dades: quines dades captures (accessos, ús de màquines, reserves, enquestes), on les emmagatzemes, com les processes i com les visualitzes. Diferencia dades personals (RGPD) de dades operacionals.' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Com s\'integren les àrees digitalitzades entre si? Per exemple: les dades d\'ocupació (IoT) alimenten el model de predicció (IA) que mostra recomanacions a l\'app (Cloud). Dibuixa un diagrama d\'integració.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Identifica riscos: dades personals dels socis, accés no autoritzat, fallada dels sensors. Aplica Zero Trust: com verificaries la identitat dels socis a l\'app? Quin control d\'accés per als empleats? Com segmentaries la xarxa IoT de la xarxa corporativa?' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'Quines dades personals tractes? (nom, email, historial d\'activitat, dades biomètriques si hi ha wearables). Aplica RGPD: consentiment, finalitat, drets de l\'usuari. Necessites un DPO?' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Planifica la implementació en fases (3-4 fases). Quins perfils necessites? (desenvolupador, especialista IoT, data scientist). Formes el personal actual? Contractes? Externalitzes?' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Estima costos: sensors (~X€), desenvolupament app, cloud mensual, formació. Calcula beneficis: estalvi energètic, reducció churn (cada soci val ~600€/any), eficiència en reserves. Calcula ROI i payback.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'Resumeix el canvi: estat actual → estat futur per a cada àrea. Destaca beneficis operatius (eficiència), econòmics (ROI), de sostenibilitat (energia) i d\'innovació (experiència soci). Com gestionaràs la resistència al canvi del personal?' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Escull una part de la teva proposta per prototipar. Idees: dashboard d\'ocupació en temps real (sensors simulats + Grafana), app de reserves (React + Supabase), predictor d\'ocupació (Python + Scikit-learn amb dades sintètiques). Documenta instruccions de desplegament i adjunta el codi.' },
        ]
      },
    ],
    pistes: [
      'Pensa en com un sensor de presència a l\'entrada de cada sala podria canviar la gestió de l\'ocupació.',
      'Moltes cintes de córrer modernes tenen ports de comunicació (RS-232, Bluetooth). Investiga MQTT per connectar-les.',
      'La predicció d\'ocupació es pot fer amb dades històriques d\'accessos. Quin tipus d\'aprenentatge automàtic seria adequat?',
      'L\'estalvi energètic amb clima intel·ligent sol ser del 15-25%. Calcula l\'impacte sobre els 45.000€ anuals.',
    ],
  },
  2: {
    name: 'FreshMarket',
    sector: 'Retail alimentació',
    ubicacio: 'Àrea metropolitana Barcelona',
    empleats: 120,
    facturacio: '15M€/any',
    clients: '8 supermercats',
    descripcio: 'Cadena de supermercats de proximitat fundada fa 25 anys, especialitzada en productes frescos i locals. 8 botigues a l\'àrea metropolitana de Barcelona. Competeixen amb qualitat i servei, no per preu.',
    situacioActual: [
      'Cada botiga fa la seva comanda de productes frescos basant-se en l\'experiència del responsable. No hi ha cap sistema centralitzat de previsió de demanda.',
      'Les càmeres frigorífiques tenen un termòstat analògic. Ningú registra la temperatura de forma contínua. Una vegada al dia, un empleat anota la temperatura en un full de paper.',
      'No tenen botiga online. Durant la pandèmia van provar comandes per WhatsApp, però va ser caòtic. Mentrestant, Mercadona i Bonpreu capten clients amb les seves apps.',
      'Les caixes registradores emmagatzemen dades de vendes, però ningú les analitza. Les dades queden a cada botiga i no es consoliden.',
      'El programa de fidelitat és una targeta física de segells. No saben res dels seus clients fidels més enllà del nom.',
    ],
    dadesClau: [
      { label: 'Merma de productes frescos', valor: '8% (120.000€/any en pèrdues)' },
      { label: 'Productes caducats retirats/dia', valor: '15-20 referències per botiga' },
      { label: 'Incidents de temperatura', valor: 'Desconegut (no es monitoren)' },
      { label: 'Vendes perdudes per ruptura d\'estoc', valor: '~5% (estimació)' },
      { label: 'Creixement vendes online (sector)', valor: '+35% últim any' },
      { label: 'Ticket mitjà', valor: '22€ (estable últims 3 anys)' },
      { label: 'Clients que repeteixen setmanalment', valor: '60% (estimació del personal)' },
    ],
    veus: [
      { rol: 'Fundador i CEO', cita: 'Veig que cada cop més clients compren online. Si no ens adaptem, en 5 anys no existirem.' },
      { rol: 'Responsable de botiga', cita: 'Cada dia llençem menjar que no hauríem hagut de demanar. Però si demano menys, em quedo sense. No tinc dades per decidir bé.' },
      { rol: 'Responsable de qualitat', cita: 'El meu malson és que un dia obri la càmera i trobi que ha estat 4 hores per sobre de 5°C sense que ningú s\'hagi adonat.' },
      { rol: 'Client habitual', cita: 'M\'encanta la qualitat, però a vegades no trobo el que busco i acabo comprant al Mercadona. Si pogués fer la comanda des del mòbil, seria perfecte.' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu FreshMarket: sector retail alimentari de proximitat, 8 botigues, 120 empleats. Inclou l\'estructura (botiga independent vs central), la proposta de valor (fresc i local) i la pressió competitiva (grans cadenes i e-commerce).' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'IT: TPV, sistema de comandes (manual), email. OT: càmeres frigorífiques, sistemes de climatització, bàscules. Existeix algun punt de connexió? Les dades dels TPV s\'aprofiten? Com es monitoritza la cadena de fred?' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Àrees candidats: gestió d\'inventari i demanda, cadena de fred, venda online, fidelització, analítica de vendes. Prioritza per impacte econòmic (la merma de 120K€/any és un bon punt de partida).' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'Objectius SMART: reduir merma del 8% al X%, monitoritzar 100% càmeres frigorífiques, llançar e-commerce amb X% de vendes online en 12 mesos. Quins KPIs mesuraran l\'èxit?' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'Justifica cada THD: IoT per monitorització de temperatura, Big Data per anàlisi de vendes, IA per predicció de demanda, Cloud per centralitzar 8 botigues i e-commerce. Quins nous serveis pot oferir FreshMarket gràcies a aquestes THD?' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'Dissenya per capes. Cloud: plataforma centralitzada (inventari, e-commerce, analítica). Edge: cada botiga necessita processament local? Dispositius: sensors de temperatura, bàscules intel·ligents. Dibuixa el diagrama. Justifica el model de servei (SaaS, PaaS, IaaS).' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Predicció de demanda: quin model (Prophet, ARIMA, xarxes neuronals)? Amb quines features (dia setmana, festius, meteo, promocions)? Recomanació de productes: anàlisi de cistella de compra. Quines dades necessites i d\'on les treus?' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Cicle de vida: recollida (TPV, sensors, app client), emmagatzematge (BD centralitzada), processament (agregació diària, prediccions), visualització (dashboard per responsable de botiga). Diferencia dades de negoci de dades personals de clients.' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Com connectes: sensors de temperatura → alertes automàtiques → registre APPCC; dades TPV → predicció demanda → comandes automàtiques; app client → perfil → recomanacions personalitzades? Dibuixa el diagrama d\'integració.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Riscos: dades de clients (e-commerce), fallada de sensors de temperatura (seguretat alimentària), disponibilitat del sistema (8 botigues). Zero Trust: com protegeixes l\'accés al dashboard de cada botiga? Segmentació xarxa IoT vs xarxa corporativa.' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'RGPD per a dades de clients (e-commerce, fidelització). Normativa APPCC per a seguretat alimentària (registres de temperatura). Hi ha normativa específica del sector alimentari que cal complir?' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Proposa fases: Fase 1 (sensors temperatura), Fase 2 (inventari centralitzat), Fase 3 (e-commerce), Fase 4 (IA predicció). Quins perfils necessites? El personal actual de botiga pot assumir nous rols?' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Costos: sensors per càmera (~30€ x N), plataforma cloud, desenvolupament e-commerce, formació. Beneficis: reducció merma (120K€ x millora%), vendes online, estalvi temps comandes. Calcula ROI i payback.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'Estat actual → futur per àrea. Destaca: de comanda per experiència a comanda per predicció ML; de control temperatura manual a automatitzat; de venda presencial a omnicanal. Impacte en sostenibilitat (menys malbaratament alimentari).' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Idees: monitor de cadena de fred (ESP32 + DHT22 + dashboard), predictor de demanda (Python + Prophet amb dades sintètiques), e-commerce bàsic (React + Supabase + Stripe). Documenta, adjunta codi i captures.' },
        ]
      },
    ],
    pistes: [
      'El sensor DHT22 costa menys de 3€ i mesura temperatura i humitat. Un ESP32 pot llegir múltiples sensors i enviar dades per MQTT.',
      'La biblioteca Prophet (Meta) està dissenyada per a predicció de sèries temporals amb estacionalitat setmanal.',
      'L\'anàlisi de cistella de compra (Market Basket Analysis) amb l\'algorisme Apriori descobreix productes que es compren junts.',
      'Un sistema de fidelització digital permet conèixer el client i personalitzar ofertes. Compara targeta física vs app.',
    ],
  },
  3: {
    name: 'MetalPrecis',
    sector: 'Manufactura CNC',
    ubicacio: 'Sabadell (Vallès Occidental)',
    empleats: 35,
    facturacio: '4.2M€/any',
    clients: '60 clients industrials',
    descripcio: 'Taller de mecanitzat de precisió fundat el 1998, amb 12 màquines CNC (8 torns i 4 fresadores). Fabriquen peces per als sectors aeronàutic, mèdic i d\'automoció amb toleràncies de ±0.01mm.',
    situacioActual: [
      'Les 12 CNC són de 3 fabricants i generacions diferents (2006-2019). Cap està connectada a un sistema centralitzat. Cada operari treballa "la seva màquina".',
      'Les ordres de treball s\'imprimeixen en paper. Quan acaba, l\'operari apunta a mà quantitats fabricades, rebutjades i temps invertit.',
      'El manteniment és reactiu: quan falla, s\'atura la producció i es truca al servei tècnic. Algunes avaries tarden 3-5 dies a resoldre\'s.',
      'La qualitat es controla manualment: mostres aleatòries amb micròmetre i MMC. Si detecta un defecte, pot ser que ja hi hagi 200 peces defectuoses.',
      'Quan un client aeronàutic demana traçabilitat d\'una peça, cal buscar en carpetes, Excels i llibretes. De vegades no es troba tota la informació.',
    ],
    dadesClau: [
      { label: 'OEE (estimat, no es mesura)', valor: 'Desconegut (~55% segons el gerent)' },
      { label: 'Temps d\'aturada no planificat', valor: '~12% del temps disponible' },
      { label: 'Taxa de rebuig', valor: '3.2% (objectiu client aeronàutic: <1%)' },
      { label: 'Temps de setup mitjà', valor: '35 min (experimentats) a 60 min (nous)' },
      { label: 'Reclamacions/any', valor: '8 (3 per traçabilitat incompleta)' },
      { label: 'Cost d\'una hora d\'aturada', valor: '~150€' },
      { label: 'Edat mitjana operaris', valor: '52 anys (dificultat relleu generacional)' },
    ],
    veus: [
      { rol: 'Gerent', cita: 'No sé quina màquina està parada, quina peça s\'està fabricant ni si anirem bé de terminis fins que no pregunto un per un.' },
      { rol: 'Operari CNC (25 anys)', cita: 'Jo sé quan la meva màquina fa un soroll estrany. Però quan sóc de vacances, ningú se n\'adona i acaba trencant-se el capçal.' },
      { rol: 'Responsable qualitat', cita: 'Mesuro mostres aleatòries. Un dia detectaré el defecte massa tard i perdrem un client aeronàutic.' },
      { rol: 'Client Tier 1 aeronàutic', cita: 'La seva traçabilitat és del segle passat. Si no milloren, haurem de buscar un proveïdor amb sistemes MES. La norma EN 9100 no perdona.' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu MetalPrecis: sector manufactura de precisió, taller amb 12 CNC, clients en aeronàutica, mèdic i automoció. Estructura: gerent, cap de producció, operaris, qualitat, manteniment extern. Situació competitiva i requisits del sector (EN 9100, IATF 16949).' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'IT: ERP bàsic o Excel per comandes, email, comptabilitat. OT: 12 CNC de 3 fabricants, sense connexió, control de qualitat manual (MMC). Nivell d\'integració actual: zero. Investiga OPC-UA i MTConnect com a protocols de connexió CNC.' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Àrees: monitorització de producció (OEE), manteniment (predictiu vs reactiu), traçabilitat (lot vs peça), qualitat (in-line vs final). Prioritza: quina àrea té més impacte econòmic? Calcula el cost de l\'aturada no planificada (12% x hores disponibles x 150€/h).' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'Objectius SMART: augmentar OEE del 55% al 75%, reduir rebuig del 3.2% a <1%, aconseguir traçabilitat peça a peça en 12 mesos. KPIs per mesurar l\'èxit. Necessitats futures: relleu generacional amb documentació digital de processos.' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'IoT Industrial per connectar CNC (OPC-UA), Edge Computing per processar dades en temps real, IA per manteniment predictiu (vibracions), MES per traçabilitat. Justifica cada THD amb el problema que resol i l\'impacte esperat.' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'En manufactura, el debat és Cloud vs On-Premise. Quins arguments per a cada opció? Dissenya per capes: Cloud/Servidor (MES, analítica), Edge (gateway OPC-UA, processament local), Dispositius (CNC, sensors vibració, càmera qualitat). Quina latència necessites?' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Manteniment predictiu: quines dades del capçal CNC capturaries (vibració, temperatura, corrent motor)? Quin model ML (anomaly detection, classification)? Qualitat in-line: visió artificial per detectar defectes? Quina càmera i algoritme?' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Cicle: captura de dades CNC (paràmetres de tall, comptadors, alarmes) → emmagatzematge (time-series DB com InfluxDB) → processament (càlcul OEE, alertes) → visualització (dashboard per planta). Volum de dades: 12 CNC x dades cada segon = quants registres/dia?' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Com s\'integren: dades CNC → OEE automàtic → planificació de producció; sensors vibració → model predictiu → ordre de manteniment; escàner peça → registre paràmetres → traçabilitat completa. Diagrama d\'integració MES-ERP.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Riscos: accés no autoritzat a programes CNC (propietat intel·lectual), manipulació de dades de qualitat, disponibilitat dels sistemes en producció 24/7. Zero Trust en entorn industrial: segmentació xarxa IT/OT, accés per rol (operari vs gerent), registre d\'auditoria.' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'EN 9100 (aeronàutica): requisits de traçabilitat. IATF 16949 (automoció): requisits de qualitat i SPC. IEC 62443: seguretat en entorns industrials. Com garanteixes que el sistema digital compleix aquestes normes?' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Fases: 1) Connexió CNC i OEE, 2) Traçabilitat digital, 3) Manteniment predictiu, 4) Visió artificial. Perfils: integrador OT, desenvolupador, data scientist. L\'operari de 52 anys pot aprendre a usar un dashboard? Pla de formació.' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Costos: gateways OPC-UA (~1.500€ x N), sensors vibració, servidor/cloud, desenvolupament, formació. Beneficis: reducció aturada no planificada (12% → 5% = X€), reducció rebuig (3.2% → 1% de 4.2M€), evitar pèrdua client aeronàutic (~20% facturació). ROI.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'De taller artesanal a fàbrica connectada. Taula estat actual → futur per àrea. Beneficis: operatius (OEE), econòmics (menys rebuig), competitius (retenir clients aeronàutics), relleu generacional (coneixement digital vs "de memòria").' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Idees: dashboard OEE amb dades simulades (Node-RED + InfluxDB + Grafana), sistema de traçabilitat (web app + QR/DataMatrix), detector d\'anomalies en vibració (ESP32 + acceleròmetre + Python). Documenta i adjunta codi.' },
        ]
      },
    ],
    pistes: [
      'OPC-UA és l\'estàndard per a Indústria 4.0. Molts CNC moderns ja el suporten. Per als antics, existeixen gateways de conversió.',
      'Un acceleròmetre ADXL345 connectat a un ESP32 pot capturar vibracions i enviar-les per MQTT.',
      'InfluxDB és una base de dades de sèries temporals ideal per a dades IoT. Grafana s\'hi connecta directament.',
      'La normativa EN 9100 exigeix traçabilitat completa. Perdre un client aeronàutic = ~20% de facturació.',
    ],
  },
  4: {
    name: 'LogiTrans',
    sector: 'Logística i Transport',
    ubicacio: 'Zona Franca, Barcelona',
    empleats: 85,
    facturacio: '8.5M€/any',
    clients: '200+ empreses',
    descripcio: 'Empresa familiar de transport amb 45 vehicles (20 furgonetes, 25 camions). Opera a Catalunya i corredor mediterrani. Distribució d\'última milla i càrrega parcial.',
    situacioActual: [
      'Cada matí a les 6:00, el cap de trànsit reparteix les rutes planificades amb Excel i Google Maps imprès. Les distribueix segons "experiència i sentit comú".',
      'Un cop el vehicle surt, no hi ha seguiment. Si un client truca preguntant pel seu paquet, cal trucar al conductor, que sovint no pot agafar el telèfon.',
      'La prova de lliurament és un albarà en paper. De vegades els albarans es perden i genera disputes amb clients.',
      'El manteniment es fa per km fixos (cada 20.000 km), sense tenir en compte el tipus de ruta (urbana vs autopista).',
      'El gasoil suposa el 35% dels costos. Alguns conductors consumeixen un 20% més que d\'altres amb el mateix vehicle.',
    ],
    dadesClau: [
      { label: 'Cost combustible anual', valor: '180.000€ (35% costos operatius)' },
      { label: 'Km totals flota/any', valor: '2.8 milions km' },
      { label: 'Km innecessaris (estimació)', valor: '15-20% (rutes no optimitzades)' },
      { label: 'Avaries en ruta/any', valor: '8 (~2.000€ cadascuna)' },
      { label: 'Reclamacions per lliurament', valor: '12/mes' },
      { label: 'Trucades "on és el meu paquet"', valor: '40-50 al dia' },
      { label: 'Temps mitjà de ruta', valor: '8.5h (objectiu: 7.5h)' },
    ],
    veus: [
      { rol: 'Gerent', cita: 'Amazon ha posat el llistó molt alt. Els clients volen saber on està el paquet en temps real. Nosaltres treballem com fa 15 anys.' },
      { rol: 'Cap de trànsit', cita: 'Planificar 45 rutes cada nit és un puzzle impossible. De vegades un vehicle va mig buit i un altre va ple i fa tard.' },
      { rol: 'Conductor', cita: 'Tinc 15 parades en ordre de client, no geogràfic. Passo 3 vegades pel mateix carrer.' },
      { rol: 'Client (e-commerce)', cita: 'Necessito donar tracking als meus clients. La competència dona finestres de 2 hores. Si no milloren, hauré de canviar de transportista.' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu LogiTrans: sector logístic, 45 vehicles, cobertura Catalunya i corredor mediterrani. Estructura: gerent, cap de trànsit, conductors, administració. Posicionament entre grans operadors (SEUR, MRW) i autònoms.' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'IT: facturació, email, Excel de rutes. OT: vehicles (motor, frens, pneumàtics), sistemes de fred (si transporten alimentació). Hi ha algun element connectat (GPS, OBD-II)? Quin potencial de connexió tenen els vehicles?' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Àrees: planificació de rutes, tracking de flota, prova de lliurament, manteniment de vehicles, eficiència de conducció. Calcula el cost dels km innecessaris (15-20% de 2.8M km a ~0.30€/km) per prioritzar.' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'Objectius SMART: reduir km un 15%, oferir tracking en temps real al 100% de clients, eliminar albarans en paper, reduir avaries en ruta un 50%. KPIs: km/lliurament, satisfacció client, cost per paquet.' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'IoT per telemetria vehicular (GPS, OBD-II), Big Data per dades de rutes i trànsit, IA per optimització de rutes (VRP) i predicció ETA, Cloud per plataforma centralitzada i portal client. Justifica cada THD amb impacte econòmic.' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'Cloud: motor de rutes, portal tracking, BI. Vehicle (edge mòbil): GPS tracker, tablet conductor, app ePOD. Client: portal web, notificacions. Quina connectivitat (4G, LoRa)? Quina latència necessites per al tracking? Dibuixa el diagrama.' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Optimització de rutes: investiga el Vehicle Routing Problem (VRP) i Google OR-Tools. Predicció d\'ETA: quines variables (trànsit, hora, meteo)? Eco-driving: com detectar estils de conducció ineficients amb dades OBD-II? Manteniment predictiu de vehicles.' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Cicle: recollida (GPS cada 30s, OBD-II, ePOD), emmagatzematge (posicions en temps real vs històric), processament (càlcul ruta òptima, ETA), visualització (mapa en temps real, KPIs). Volum: 45 vehicles x posició cada 30s = quants registres/dia?' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Integració: GPS vehicle → mapa temps real → ETA client; dades OBD-II → patrons conducció → scoring conductor; ePOD → facturació automàtica → reducció disputes. Diagrama d\'integració de tot el sistema.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Riscos: posició GPS dels vehicles (dada sensible), dades de conducció dels conductors (privacitat laboral), disponibilitat del sistema (rutes en curs). Zero Trust: accés al portal client per token, autenticació de conductors, separació de xarxes.' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'RGPD: dades de conductors (geolocalització = dada personal), dades de clients. Normativa de transport (tacògraf digital, temps de conducció). Normativa de protecció de dades laborals (monitorització de conductors).' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Fases: 1) GPS tracking bàsic, 2) ePOD digital, 3) Optimització rutes, 4) Portal client + IA. Perfils: instal·lador GPS, desenvolupador, comercial digital. Formació dels conductors en les noves eines (tablet, app).' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Costos: GPS tracker (~40€ x 45 vehicles), tablets, plataforma cloud, desenvolupament. Beneficis: estalvi combustible (15% de 180K€), reducció avaries, eliminació disputes, retenció clients. ROI i payback.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'De planificació manual a optimització algorítmica. De "on és el meu paquet?" a tracking en temps real. Beneficis: operatius (menys km), econòmics (combustible), ambientals (menys CO₂), de servei (tracking = confiança client).' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Idees: optimitzador de rutes amb Google OR-Tools (Python), portal de tracking en temps real (Leaflet + Supabase Realtime), app de prova de lliurament (React + geolocalització + signatura). Documenta i adjunta codi.' },
        ]
      },
    ],
    pistes: [
      'Un GPS tracker amb SIM 4G costa ~40€ per vehicle. Les dades es poden enviar cada 30s.',
      'Google OR-Tools resol problemes VRP gratuïtament. Amb 15 parades, la solució és gairebé instantània.',
      'Supabase Realtime permet enviar actualitzacions al navegador del client sense cost (tier gratuït).',
      'Un OBD-II dongle Bluetooth costa ~10€. Combinat amb un mòbil, tens telemetria bàsica.',
    ],
  },
  5: {
    name: 'ClinicaSalut',
    sector: 'Sanitat Privada',
    ubicacio: 'Girona',
    empleats: 60,
    facturacio: '5.8M€/any',
    clients: '12.000 pacients',
    descripcio: 'Clínica multidisciplinar amb medicina general, traumatologia, dermatologia, oftalmologia i rehabilitació. 15 consultes, diagnòstic per imatge i laboratori.',
    situacioActual: [
      'La clínica utilitza 3 sistemes informàtics que no es comuniquen: gestió de cites (Access), història clínica electrònica (només 8 de 15 metges) i facturació.',
      'Les cites es gestionen per telèfon (3 telefonistes). A hores punta, un 25% de trucades es perden.',
      'No hi ha telemedicina. Durant la pandèmia es van fer trucades telefòniques sense vídeo ni accés a la història clínica.',
      'Els resultats de laboratori s\'imprimeixen en paper. El pacient ha de tornar o trucar per saber-los. Temps: 48h.',
      'La llista d\'espera de dermatologia supera les 3 setmanes. No hi ha priorització intel·ligent.',
    ],
    dadesClau: [
      { label: 'Trucades diàries', valor: '~200 (150 cites + 50 consultes)' },
      { label: 'Trucades perdudes (hora punta)', valor: '25% (50/dia)' },
      { label: 'Metges que usen HCE', valor: '53% (8 de 15)' },
      { label: 'Temps espera resultats lab', valor: '48h' },
      { label: 'No-shows', valor: '12% de cites programades' },
      { label: 'Llista espera dermatologia', valor: '23 dies (objectiu: <10)' },
      { label: 'NPS', valor: '42 (objectiu: >60)' },
    ],
    veus: [
      { rol: 'Directora mèdica', cita: 'Quan un pacient va a traumatologia, el traumatòleg no veu el que ha fet el metge de capçalera. Cada consulta és una illa.' },
      { rol: 'Telefonista', cita: 'A les 9 tinc 8 trucades en espera. La gent penja i truca al metge privat de la competència.' },
      { rol: 'Metge de família', cita: 'Demanar una analítica hauria de ser àgil. Ara he de buscar papers i trucar al lab.' },
      { rol: 'Pacient crònic', cita: 'Vinc cada 3 mesos per un control. Cada vegada perdo 2 hores. Si fos per videoconsulta, m\'estalviaria mitja jornada laboral.' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu ClinicaSalut: sector sanitari privat, multidisciplinar, 15 consultes, serveis complementaris (lab, imatge). Estructura: directora mèdica, metges per especialitat, infermeria, recepció, administració. Posicionament i competència.' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'IT: 3 sistemes no integrats (cites, HCE, facturació). OT: equips mèdics (radiografia, ecografia, laboratori). Nivell d\'integració: mínim. Investiga estàndards sanitaris: HL7 FHIR per interoperabilitat, DICOM per imatges mèdiques.' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Àrees: gestió de cites, història clínica unificada, telemedicina, resultats de laboratori, llistes d\'espera. Prioritza: les trucades perdudes (25%) són pacients que se\'n van a la competència. Quantifica l\'impacte econòmic.' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'Objectius SMART: 100% metges amb HCE unificada, reducció no-shows del 12% al 5% (recordatoris automàtics), llançar telemedicina per a consultes de seguiment, temps espera resultats lab <4h.' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'Cloud per HIS unificat i telemedicina, IA per triatge i suport diagnòstic, Big Data per analítica clínica. Justifica cada THD. Quins nous serveis pot oferir (portal pacient, telemedicina, chatbot triatge)?.' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'IMPORTANT: dades de salut = "categoria especial" RGPD. Quin model de cloud (públic, privat, híbrid)? Per què? Capes: Cloud (HIS, portal pacient, telemedicina), Clínica (consultes, lab, imatge), Pacient (app, videoconsulta). Justifica compliment normatiu i seguretat.' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Chatbot triatge: quines preguntes faria? Com assignaria urgència? Quins riscos ètics i legals? Suport diagnòstic: imatge mèdica amb visió artificial (quin nivell de risc segons EU AI Act?). Predicció de demanda per especialitat.' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Dades de salut: cicle de vida amb atenció especial a consentiment, encriptació, retenció i eliminació. Diferencia dades clíniques de dades administratives. Qui pot accedir a què? (metge vs recepció vs pacient). Diagrama de flux de dades amb controls d\'accés.' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Integració: cita online → recordatori automàtic → reducció no-shows; lab → resultats digitals → notificació pacient + metge; HCE unificada → totes les especialitats veuen l\'historial complet. Diagrama d\'integració.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Riscos crítics: filtratge de dades mèdiques, accés no autoritzat a historials, indisponibilitat del sistema (urgències). Zero Trust en sanitat: MFA per a tots els professionals, accés per rol (metge veu tot, recepció veu cites), registre d\'auditoria de cada accés, encriptació AES-256 en repòs i trànsit.' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'RGPD Article 9: dades de salut com a categoria especial. Consentiment explícit, DPO obligatori, avaluació d\'impacte (DPIA). Normativa de telemedicina (COMB). Retenció de dades clíniques (mínim 5 anys, variable per CCAA).' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Fases: 1) HCE unificada, 2) Cites online + recordatoris, 3) Telemedicina, 4) Portal pacient + IA. Perfils: consultor HIS, DPO, formador. Gestió del canvi amb 15 metges (7 no usen HCE): com els convenços?' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Costos: plataforma HIS cloud, desenvolupament portal pacient, formació, DPO. Beneficis: recuperació trucades perdudes (50 pacients/dia x ticket mitjà), reducció no-shows (12% → 5%), estalvi en paper i temps administratiu. ROI.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'De 3 sistemes aïllats a plataforma unificada. De cites per telèfon a autoservei. De resultats en paper a portal digital. Impacte en qualitat assistencial (metge amb informació completa), eficiència (menys trucades) i satisfacció pacient (NPS).' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Idees: portal de cites online (React + Supabase amb RLS per seguretat), chatbot de triatge (LLM API amb prompt de preguntes mèdiques bàsiques), dashboard clínic (ocupació consultes, temps espera, NPS). Documenta i adjunta codi.' },
        ]
      },
    ],
    pistes: [
      'HL7 FHIR és un estàndard REST per interoperabilitat sanitària. Supabase Row Level Security (RLS) implementa accés per rol.',
      'Un recordatori SMS/email 24h abans pot reduir no-shows un 30-50%.',
      'Jitsi Meet és una plataforma de videoconferència open source que es pot integrar en una app pròpia.',
      'El xifrat AES-256 és l\'estàndard mínim per dades de salut. No oblidis el xifrat en trànsit (TLS).',
    ],
  },
  6: {
    name: 'AgroTech Vinyes',
    sector: 'Agricultura / Viticultura',
    ubicacio: 'Alt Penedès (Barcelona)',
    empleats: 18,
    facturacio: '1.8M€/any',
    clients: '3 cellers cooperativistes',
    descripcio: 'Explotació vitícola de 120 hectàrees amb Xarel·lo, Macabeu i Parellada per a caves i vins DO Penedès. Tercera generació familiar que vol modernitzar-se sense perdre l\'essència del terroir.',
    situacioActual: [
      'El reg és per inundació a la majoria de parcel·les. Es rega "quan toca" segons calendari tradicional.',
      'La verema es decideix per mostres manuals de raïm portades al celler. El resultat depèn de quines parcel·les s\'han mostrejat.',
      'Detecció de plagues visual: treballadors recorren parcel·les. Quan es detecta, sol haver afectat un 10-15%.',
      'El quadern de camp és un quadern físic. A les auditories de la DO, cal buscar entre quaderns de diversos anys.',
      'Previsió de collita "a ull": l\'any passat van preveure 800 tones i en van collir 650.',
    ],
    dadesClau: [
      { label: 'Consum d\'aigua de reg', valor: '~180.000 m³/any' },
      { label: 'Variabilitat maduresa entre parcel·les', valor: 'Fins 2° Brix de diferència' },
      { label: 'Pèrdua per plagues', valor: '~8% anual (96.000€)' },
      { label: 'Cost tractaments fitosanitaris', valor: '35.000€/any' },
      { label: 'Error previsió collita', valor: '±18% (objectiu celler: ±5%)' },
      { label: 'Hores recollida mostres', valor: '120h/temporada' },
      { label: 'Multa incompliment quadern camp', valor: 'Fins 6.000€ (PAC)' },
    ],
    veus: [
      { rol: 'Viticultor (3a generació)', cita: 'El meu avi sabia quan regar olorant la terra. Amb 120ha no puc olorar cada pam. Necessito dades, però que no em compliquin la vida.' },
      { rol: 'Enòleg del celler', cita: 'La qualitat del cava depèn del moment exacte de la verema. Si tingués dades de maduresa en temps real per parcel·la, podria decidir millor.' },
      { rol: 'Treballador de camp', cita: 'Passo hores caminant buscant míldiu. Quan el trobo, ja s\'ha estès.' },
      { rol: 'Auditor DO Penedès', cita: 'El quadern en paper és cada cop menys acceptable. La normativa avança cap al quadern digital obligatori.' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu AgroTech: viticultura DO Penedès, 120ha, 3 varietats, client cooperativista. Estructura: viticultor-gerent, treballadors de camp, relació amb cellers i DO. Posicionament i reptes del sector (canvi climàtic, normativa PAC, competència global).' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'IT: gairebé inexistent (mòbil, email, quadern paper). OT: sistema de reg (electrovàlvules manuals), tractor (GPS opcional), estació meteo bàsica. Connectivitat rural: investiga LoRaWAN, Sigfox, NB-IoT com a alternatives al WiFi/4G en zones rurals.' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Àrees: reg, monitorització de maduresa, detecció de plagues, quadern de camp, previsió de collita. Prioritza: la pèrdua per plagues (96K€/any) i el sobrereg (cost hídric + qualitat del raïm) són els impactes principals.' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'SMART: reduir consum d\'aigua un 25%, reduir pèrdua per plagues del 8% al 3%, aconseguir previsió de collita amb error <5%, digitalitzar quadern de camp 100%. Visió: agricultura de precisió amb dades per parcel·la.' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'IoT per sensors (humitat, meteo, maduresa), Edge per processament local (decisió de reg autònom), IA per detecció plagues (visió artificial) i predicció collita, Cloud per dashboard i quadern digital. Connectivitat: per què LoRa és adequat per a una finca de 120ha?' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'Cloud: dashboard, quadern digital, alertes. Edge (caseta de camp): gateway LoRa, lògica de reg. Dispositius: sensors humitat, estació meteo, càmeres (fixes o dron). REPTE: la finca no té WiFi ni 4G estable. Com ho resols? Dibuixa el diagrama.' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Detecció de plagues: visió artificial amb imatges de fulles (Teachable Machine, YOLO, TF Lite). Predicció de collita: sèrie temporal amb dades meteo i vegetatives. Reg automàtic: regles o ML? Quines dades per decidir quan regar (humitat sòl, previsió meteo, fase fenològica)?' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Cicle: sensors → gateway LoRa → cloud. Dades: humitat (cada 15 min), meteo (horària), imatges (diària). Emmagatzematge: time-series DB o Firebase? Visualització: dashboard per parcel·la amb mapa. Dades per complir PAC i DO.' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Integració: sensor humitat → decisió de reg → registre automàtic al quadern de camp; càmera → detecció plaga → alerta + registre tractament; dades maduresa → recomanació verema per parcel·la → logística celler. Diagrama d\'integració.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Riscos: fallada de sensors (reg no es dispara), vandalisme o robatori de sensors al camp, pèrdua de connectivitat. Zero Trust: accés al dashboard per rol (viticultor vs enòleg vs auditor DO), decisions de reg amb fallback local (edge autònom).' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'Normativa PAC (DUN, quadern camp digital). DO Penedès: traçabilitat de parcel·la a ampolla. Normativa fitosanitària: registre de tractaments obligatori. Quines dades ha de contenir legalment el quadern de camp?' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Fases: 1) Estació meteo + sensors humitat pilot (10ha), 2) Reg automàtic, 3) Càmeres plagues, 4) Quadern digital + previsió collita. Formació: el treballador de camp necessita usar l\'app? El viticultor de 3a generació és digital native?' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Costos: sensors humitat (~5€ x N), gateway LoRa (~50€), estació meteo (~200€), cloud, desenvolupament. Beneficis: estalvi aigua (25% de 180K m³), reducció plagues (96K€ x millora%), millor qualitat raïm (preu per tona). Sostenibilitat: menys aigua, menys pesticides.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'De "olorar la terra" a agricultura de precisió amb dades. Beneficis: operatius (menys hores camp), econòmics (menys pèrdues), sostenibilitat (menys aigua i pesticides), qualitat (verema òptima). Respecte a la tradició: la tecnologia millora, no substitueix, el coneixement del viticultor.' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Idees: sistema reg intel·ligent (ESP32 + sensor humitat + Node-RED), detector plagues (Teachable Machine amb fotos de fulles), quadern camp digital (app web amb mapa Leaflet + registre per parcel·la). Documenta i adjunta codi.' },
        ]
      },
    ],
    pistes: [
      'Un sensor d\'humitat capacitiu costa ~5€. Amb LoRa pot transmetre dades a 10km amb bateria de 2 anys.',
      'Sentinel-2 (ESA) ofereix imatges de satèl·lit gratuïtes cada 5 dies. Es pot calcular NDVI per parcel·la.',
      'Teachable Machine de Google entrena models de classificació d\'imatges sense codi, al navegador.',
      'La Generalitat ofereix el DUN digital. El quadern de camp digital s\'hi pot integrar.',
    ],
  },
  7: {
    name: 'HotelMar',
    sector: 'Hostaleria',
    ubicacio: 'Sitges (Garraf)',
    empleats: 55,
    facturacio: '6.2M€/any',
    clients: '35.000 pernoctacions/any',
    descripcio: 'Hotel 4 estrelles amb 150 habitacions a primera línia de mar. Restaurant, spa, piscina i sala d\'esdeveniments. Alta estacionalitat (70% ocupació estiu, 30% hivern).',
    situacioActual: [
      'El 75% de reserves arriben via OTAs (Booking 45%, Expedia 20%, altres 10%). Comissió: 15-20%. Canal directe: només 25%.',
      'Check-in manual: passaport, fotocòpia, signatura, targeta magnètica. 8 min/hoste. Dissabtes d\'agost: cues de 15-20 persones a les 15h.',
      'L\'AC de cada habitació el controla l\'hoste. Quan marxa, sovint el deixa a 18°C tot el dia.',
      'Preus fixats per temporada (alta, mitja, baixa), revisats 2 cops l\'any. El director compara preus manualment a Booking.',
      'No es guarda cap informació sobre les preferències de l\'hoste. Un client que repeteix cada any és tractat com si fos el primer cop.',
    ],
    dadesClau: [
      { label: 'Comissions OTAs/any', valor: '~180.000€' },
      { label: 'Ocupació mitjana anual', valor: '52% (objectiu: 65%)' },
      { label: 'RevPAR', valor: '78€ (competència: 95€)' },
      { label: 'Temps check-in', valor: '8 min/hoste' },
      { label: 'Cost energètic anual', valor: '95.000€ (35% clima)' },
      { label: 'Taxa repetició hostes', valor: '12% (objectiu: 25%)' },
      { label: 'NPS', valor: '6.5/10 (competència: 8.2)' },
    ],
    veus: [
      { rol: 'Director', cita: 'Booking em cobra el 18% i em controla els preus. Vull que reservin per la meva web, però sembla del 2010.' },
      { rol: 'Cap de recepció', cita: 'Dissabtes d\'agost: 30 persones fent cua, nens plorant. El primer que veu l\'hoste és una cua de 20 minuts.' },
      { rol: 'Governanta', cita: 'Quan un hoste marxa i deixa l\'AC a 18°C, segueix consumint 3-4 hores fins que netegem. Multiplica per 150 habitacions.' },
      { rol: 'Hoste repetidor', cita: 'Vinc cada any i no recorden que m\'agrada la vista al mar ni que sóc al·lèrgic al gluten. L\'hotel boutique del costat em coneixen pel nom.' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu HotelMar: sector hoteler 4*, 150 habitacions, Sitges. Estructura: director, recepció, housekeeping, restaurant, spa, manteniment. Repte principal: estacionalitat i dependència d\'OTAs. Posicionament entre low-cost i boutique.' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'IT: PMS (Property Management System) bàsic, web, email, canal OTA. OT: clima per habitació (termòstats individuals), panys magnètics, sistema elèctric. Nivell d\'integració: zero entre IT i OT. Investiga PMS moderns (Cloudbeds, Mews) i com connecten amb domòtica.' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Àrees: canal directe de reserves, check-in, gestió energètica, revenue management, CRM/fidelització. Prioritza per impacte: les comissions OTA (180K€) i l\'energia (95K€) són els costos més grans a atacar.' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'SMART: augmentar reserves directes del 25% al 50%, reduir temps check-in a 2 min, reduir consum energètic un 20%, augmentar RevPAR de 78€ a 95€ amb dynamic pricing. KPIs: comissió mitjana, NPS, taxa repetició.' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'IoT per habitació intel·ligent (clima, presència), Cloud per PMS + motor reserves + CRM, IA per revenue management (dynamic pricing) i chatbot, Big Data per perfils d\'hostes i patrons de demanda. Com generen nous ingressos (upselling personalitzat, experiències)?' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'Cloud: PMS, motor reserves, CRM, revenue management. Hotel: gateway IoT, kiosc check-in. Habitació: termòstat intel·ligent, sensor presència, pany. Dibuixa el diagrama per capes. Quin model cloud (SaaS per PMS, IaaS per web pròpia)?' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Revenue management: quines variables per fixar preu (demanda, competència, esdeveniments, meteo, dia setmana)? Quin model ML? Chatbot: reserves, informació, recomanacions. Predicció d\'ocupació per optimitzar personal.' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Cicle: reserves (OTA + directe) → perfil hoste → preferències → personalització. Dades IoT: consum energètic per habitació, patrons d\'ús. Dades de mercat: preus competència (scraping o API). Com consolides dades de múltiples OTAs?' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Integració: check-in digital → pany intel·ligent → benvinguda personalitzada; sensor presència → control clima → estalvi energètic; perfil hoste → recomanacions restaurant/spa → upselling automàtic. Diagrama.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Riscos: dades de passaport/targeta, panys intel·ligents (seguretat física), disponibilitat del sistema (check-in en hora punta). Zero Trust: autenticació d\'hostes per app, accés per rol (recepció vs housekeeping vs direcció), segmentació xarxa IoT habitacions vs xarxa corporativa.' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'RGPD: dades personals d\'hostes. Registre de viatgers (SES.Hospedajes): obligació legal. PCI-DSS si processen targetes. Normativa d\'accessibilitat digital.' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Fases: 1) Web + motor reserves directe, 2) Check-in digital, 3) IoT habitacions, 4) Revenue management IA. Ideal implementar fase 1 ABANS de la temporada alta. Perfils: desenvolupador web, tècnic IoT, revenue manager.' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Costos: web + motor reserves, sensors/termòstats per habitació (~30€ x 150), cloud, desenvolupament. Beneficis: reducció comissions OTA (si passes del 25% al 50% directe: estalvi ~90K€/any), estalvi energètic (20% de 95K€), increment RevPAR. ROI.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'De dependent d\'OTAs a canal directe. De check-in amb cua a autoservei. D\'habitació "tonta" a intel·ligent. D\'hoste anònim a hoste reconegut. Beneficis econòmics (comissions, energia), experiència (NPS), sostenibilitat (estalvi energètic).' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Idees: motor de reserves directe (React + Stripe + Supabase), dashboard energètic (ESP32 + sensor presència + Grafana), chatbot de l\'hotel (LLM API amb context del hotel). Documenta i adjunta codi.' },
        ]
      },
    ],
    pistes: [
      'Un motor de reserves amb Stripe costa 0€/mes + 1.4% per transacció, vs 15-20% d\'OTA.',
      'Un sensor PIR de presència costa <2€. Combinat amb un relé, pot apagar l\'AC quan l\'habitació és buida.',
      'El registre SES.Hospedajes es pot automatitzar amb OCR del passaport (investiga Tesseract o API de Google Vision).',
      'Cloudbeds i Mews ofereixen API REST per integrar-se amb sistemes propis. Estudia-les com a referència.',
    ],
  },
  8: {
    name: 'BuildCorp',
    sector: 'Construcció',
    ubicacio: 'Terrassa (Vallès Occidental)',
    empleats: 95,
    facturacio: '12M€/any',
    clients: '8-10 obres simultànies',
    descripcio: 'Constructora mitjana especialitzada en obra civil i edificació residencial. Gestionen 8-10 obres simultànies amb 30-40 subcontractes habituals.',
    situacioActual: [
      'Pressupost i planificació amb Excel i MS Project. El cap d\'obra actualitza el Project un cop per setmana. Quan la direcció veu les xifres, la desviació ja és un fet.',
      'Comunicació amb subcontractes per WhatsApp. Un grup per obra amb 20-30 persones. Informació important es barreja amb missatges informals.',
      'BIM parcial: l\'arquitecte lliura model 3D, però a obra es treballa amb PDFs impresos. Instal·lacions no modelades → conflictes a obra.',
      'Seguretat PRL amb formularis paper. Incidències reportades verbalment o per WhatsApp.',
      'Sense control d\'accés a obra. No se sap quantes persones hi ha ni si tenen formació PRL al dia.',
    ],
    dadesClau: [
      { label: 'Desviació cost per obra', valor: '+12% sobre pressupost' },
      { label: 'Desviació de termini', valor: '+18% (3 mesos en obra de 18)' },
      { label: 'Col·lisions no detectades al BIM', valor: '15-20 per obra (~3.000€ cadascuna)' },
      { label: 'Accidents laborals/any', valor: '4 (2 lleus, 2 moderats)' },
      { label: 'Penalitzacions retard/any', valor: '~80.000€' },
      { label: 'Temps cap d\'obra en admin', valor: '40% (vs 60% a obra)' },
      { label: 'Subcontractes amb PRL caducada', valor: '~15% en qualsevol moment' },
    ],
    veus: [
      { rol: 'Director d\'obres', cita: 'Quan demano l\'estat d\'una obra, el cap d\'obra consulta el seu Excel i diu "anem bé". Però no sap exactament on som perquè no té dades actualitzades.' },
      { rol: 'Cap d\'obra', cita: 'Passo més temps fent informes i responent WhatsApps que a obra controlant. Necessito que les dades vinguin soles.' },
      { rol: 'Coordinador de seguretat', cita: 'Si passa un accident i un treballador no tenia el curs PRL al dia, la responsabilitat cau sobre nosaltres. Amb paper, és impossible controlar-ho.' },
      { rol: 'Instal·lador (subcontracta)', cita: 'Vaig obrir una regata i vaig tallar un cable que no sortia als plànols. Si haguéssim tingut BIM complet, no hauria passat.' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu BuildCorp: sector construcció, obres civils i residencials, 8-10 obres simultànies, model amb subcontractes. Estructura: director, caps d\'obra, encarregats, oficina tècnica, administració. El sector de la construcció és un dels menys digitalitzats: per què?' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'IT: Excel, MS Project, email, WhatsApp, BIM parcial (només arquitectura). OT: maquinària d\'obra (grua, retroexcavadora), instal·lacions provisionals (electricitat, aigua). Hi ha algun element connectat? El BIM és IT o OT? Investiga BIM 4D (temps) i 5D (cost).' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Àrees: control de costos, planificació, BIM integrat, seguretat PRL, comunicació, control d\'accés. Calcula el "cost de no digitalitzar": desviació 12% sobre 12M€ = 1.44M€/any. Les col·lisions: 15 x 3.000€ = 45K€ addicionals.' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'SMART: reduir desviació de cost del 12% al 5%, zero accidents per PRL caducada, BIM integrat amb clash detection en el 100% d\'obres, alliberar 20% del temps del cap d\'obra (de 40% admin a 20%). KPIs per obra.' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'BIM per modelat integrat i clash detection, Cloud per gestió centralitzada multi-obra, IoT per control d\'accés i condicions ambientals, Big Data per històric d\'obres i predicció de desviacions. Com el BIM crea nous serveis (facility management post-obra)?' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'Cloud: gestió projectes, costos, BIM server, PRL. Obra: tablets cap d\'obra, control d\'accés, càmeres timelapse. Oficina: estació BIM, dashboard direcció. REPTE: les obres no tenen connectivitat fiable. Solucions? Dibuixa el diagrama.' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Predicció de desviacions: amb dades històriques d\'obres anteriors, es pot predir quan una obra es desviarà? Quines features (tipus obra, clima, subcontractes)? Detecció automàtica d\'EPIs amb visió artificial a les càmeres d\'obra. Viable?' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Cicle: dades d\'obra (avanç, costos, fotos) → consolidació central → anàlisi (comparativa entre obres) → visualització (dashboard direcció). El model BIM és una font de dades massiva. Com integres dades BIM amb dades de costos i planificació?' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Integració: BIM (model) + planificació (temps) + costos (€) = BIM 5D; control accés → verificació PRL → registre automàtic; avanç diari (tablet) → actualització MS Project → dashboard direcció. Diagrama d\'integració.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Riscos: documentació d\'obra sensible (pressupostos, contractes), accés no controlat a l\'obra (seguretat física), pèrdua de dades si es trenca la tablet. Zero Trust: accés per rol (cap d\'obra vs subcontracta vs direcció), autenticació per a cada nivell d\'informació.' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'Normativa PRL (Llei 31/1995): obligacions del contractista principal. RD 1627/1997: coordinació de seguretat. CTE (Codi Tècnic Edificació). Com el sistema digital ajuda a demostrar compliment davant Inspecció de Treball?' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Fases: 1) Plataforma control obra bàsica, 2) BIM integrat, 3) PRL digital + control accés, 4) IA predictiva. Perfils: BIM manager, desenvolupador, formador. Com convenços caps d\'obra i subcontractes a usar les noves eines?' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Costos: plataforma cloud, tablets, control accés NFC (~500€/obra), formació BIM. Beneficis: reducció desviació del 12% al 5% = 840K€/any (!), reducció col·lisions (45K€), reducció penalitzacions (80K€). Un dels ROIs més clars de tots els casos.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'De construcció tradicional a construcció 4.0. D\'Excel i WhatsApp a plataforma integrada. Beneficis: econòmics (menys desviació), seguretat (PRL digital), qualitat (menys col·lisions), productivitat (menys temps admin). Gestió del canvi en un sector tradicionalment resistent.' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Idees: dashboard de control d\'obra (React + Supabase + Chart.js), app de seguretat PRL (checklist digital amb foto + geo), visor BIM web (IFC.js). Documenta i adjunta codi.' },
        ]
      },
    ],
    pistes: [
      'IFC.js és una llibreria JavaScript open source per visualitzar models BIM al navegador.',
      'Un control d\'accés NFC a l\'obra amb verificació de formació PRL pot costar menys de 500€ per obra.',
      'La desviació del 12% sobre 12M€ = 1.44M€/any. Reduir-la al 5% estalvia 840K€. El ROI és enorme.',
      'Procore i Fieldwire són plataformes de gestió d\'obres que pots estudiar com a referència funcional.',
    ],
  },
  9: {
    name: 'EduLearn Academy',
    sector: 'Educació i Formació',
    ubicacio: 'L\'Hospitalet de Llobregat',
    empleats: 25,
    facturacio: '1.2M€/any',
    clients: '800 alumnes matriculats',
    descripcio: 'Acadèmia de formació professional i contínua. Cursos presencials i semipresencials en tecnologia, administració i idiomes. Vol transformar-se en centre de formació híbrid de referència.',
    situacioActual: [
      'El LMS és un Moodle de 2014 sense actualitzar des de 2018. Funciona lent, interfície antiquada. Alguns professors ni l\'usen i pengen materials per email.',
      'No hi ha analítica d\'aprenentatge. Quan un alumne suspen, el professor es sorprèn: no tenia indicis previs.',
      'Atenció a l\'alumne per email amb 48h de resposta mitjana. Els alumnes amb dubtes urgents es frustren i abandonen.',
      'Continguts: PDFs estàtics i PowerPoints gravats. Zero exercicis interactius, quizzes o contingut adaptatiu.',
      'Matrícula presencial o per telèfon. Pagament per transferència. Potencials alumnes abandonen la web en veure que han de trucar.',
    ],
    dadesClau: [
      { label: 'Taxa abandonament', valor: '22% (objectiu: <10%)' },
      { label: 'NPS alumnes', valor: '35 (objectiu: >60)' },
      { label: 'Temps resposta dubtes', valor: '48h (objectiu: <4h)' },
      { label: 'Visites web/mes', valor: '3.000 (conversió: 2%)' },
      { label: 'Cost adquisició alumne', valor: '~180€' },
      { label: 'Alumnes que usen Moodle', valor: '55%' },
      { label: 'Cursos amb contingut interactiu', valor: '0 de 15' },
    ],
    veus: [
      { rol: 'Directora', cita: 'Platzi, Coursera, Udemy ens estan menjant. Nosaltres tenim professorat, però la nostra plataforma fa pena.' },
      { rol: 'Professor programació', cita: 'Detecto que un alumne va malament quan ja ha suspès. Si tingués un dashboard que em mostrés qui no ha obert els materials en 2 setmanes, podria intervenir.' },
      { rol: 'Alumna (ciberseguretat)', cita: 'Vaig enviar un dubte dimecres i em van respondre divendres. El Moodle és horrorós, aprenc millor amb vídeos curts i exercicis pràctics.' },
      { rol: 'Comercial', cita: 'Perdo vendes perquè la web no permet matricular-se. La gent vol clicar, pagar i començar.' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu EduLearn: sector educatiu privat, formació professional i contínua, 15 cursos, model híbrid. Estructura: directora, professors, comercial, administració. Posicionament entre acadèmies tradicionals i plataformes online globals (Coursera, Udemy).' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'IT: Moodle obsolet, web estàtica, email, comptabilitat. OT: aules (projectors, PCs), infraestructura de xarxa. En educació, l\'OT és menys rellevant. Centra\'t en com els sistemes IT (LMS, web, CRM, pagament) haurien d\'estar integrats i no ho estan.' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Àrees: plataforma d\'aprenentatge, analítica, atenció a l\'alumne, continguts, matrícula online, fidelització. Prioritza: l\'abandonament del 22% és la pèrdua principal (22% x 800 alumnes x preu curs mitjà = X€). La conversió del 2% és una oportunitat enorme.' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'SMART: reduir abandonament del 22% al 10%, augmentar conversió web del 2% al 5%, temps resposta dubtes <4h, 100% cursos amb contingut interactiu en 12 mesos. Visió: líder en formació híbrida personalitzada.' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'Cloud per LMS modern i matrícula online, IA per chatbot acadèmic i learning analytics, Big Data per analítica d\'aprenentatge i predicció d\'abandonament. Quins nous serveis (tutorització IA, certificació digital, itineraris personalitzats)?.' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'Cloud: LMS, CRM, pagaments, chatbot. Clients: web i app mòbil. Compara: Moodle actualitzat (IaaS/PaaS) vs SaaS educatiu (Canvas, Thinkific) vs desenvolupament propi. Justifica amb costos, funcionalitat i escalabilitat. Diagrama.' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Chatbot acadèmic: com limites les respostes al contingut del curs? Investiga RAG (Retrieval-Augmented Generation). Learning analytics: 5 indicadors per detectar alumne en risc (connexions, exercicis, temps, notes parcials). Quin model de ML (classificació binària: abandona/no abandona)?' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Cicle: activitat alumne (clics, temps, exercicis) → emmagatzematge → processament (scoring de risc) → visualització (dashboard professor) → acció (alerta automàtica). Diferencia dades acadèmiques de dades personals. Retenció post-graduació.' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Integració: web (captació) → matrícula online → LMS (aprenentatge) → analytics (seguiment) → chatbot (suport) → certificació. Funnel complet: de visitant a alumni. Diagrama d\'integració.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Riscos: dades d\'alumnes (menors d\'edat?), contingut propietari dels professors, disponibilitat en època d\'exàmens. Zero Trust: autenticació alumnes, accés professor vs alumne vs admin, protecció de continguts contra còpia.' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'RGPD: dades d\'alumnes, dades de menors (consentiment parental si <14 anys). LOPDGDD: drets digitals. Normativa educativa: acreditació de cursos, emissió de certificats. Propietat intel·lectual dels continguts.' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Fases: 1) Web + matrícula online, 2) LMS modern, 3) Analytics + chatbot, 4) Continguts interactius. Perfils: desenvolupador, dissenyador instruccional, community manager. Gestió del canvi: professors acostumats a PDF → continguts interactius. Formació.' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Costos: plataforma cloud, desenvolupament web, LLM API (chatbot), formació professors. Beneficis: reducció abandonament (12% menys x 800 alumnes x preu curs), augment conversió (3% extra de 3.000 visites/mes x preu curs), estalvi atenció (chatbot vs email). ROI.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'De Moodle 2014 a plataforma moderna. De PDF a contingut interactiu. De "sorpresa al suspens" a intervenció precoç. De matrícula presencial a autoservei. Impacte: econòmic (menys abandonament), pedagògic (millor aprenentatge), competitiu (contra Coursera/Platzi).' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Idees: dashboard learning analytics (React + Supabase + Recharts), chatbot acadèmic amb RAG (LLM API + contingut del curs), sistema matrícula online (React + Stripe). Documenta i adjunta codi.' },
        ]
      },
    ],
    pistes: [
      'RAG (Retrieval-Augmented Generation) permet que un LLM respongui basant-se en documents específics del curs.',
      'Stripe Checkout afegeix pagament online amb <50 línies de codi. La conversió puja 20-30%.',
      'Hotjar (gratuït) mostra on fan clic els visitants i on abandonen (heatmaps).',
      'Un sistema d\'alertes que avisi al professor quan un alumne no es connecta en 7 dies pot reduir l\'abandonament un 30%.',
    ],
  },
  10: {
    name: 'AutoParts BCN',
    sector: 'Automoció (Tier 2)',
    ubicacio: 'Martorell (Baix Llobregat)',
    empleats: 150,
    facturacio: '22M€/any',
    clients: '5 OEMs i 12 Tier 1',
    descripcio: 'Fabricant de components d\'automoció (carcasses, suports, peces estampades). Subministra a Tier 1 i OEMs amb estàndards IATF 16949. Línies d\'estampació, injecció, soldadura i muntatge.',
    situacioActual: [
      'La traçabilitat és per lot, no per peça. En un recall, s\'ha de retirar tot el lot (5.000 peces) encara que el defecte afecti poques unitats. L\'últim recall va costar 120.000€.',
      'L\'OEE no es mesura automàticament. Cada cap de línia apunta parades a mà. Les dades arriben al director 48h després.',
      'Qualitat al final de línia: un operari examina visualment. La detecció de defectes subtils depèn de l\'experiència, que decau al llarg del torn.',
      'Canvis de motlle: 45 min de mitjana (objectiu SMED: 15 min). La premsa para durant tot el canvi.',
      'Cada mes, 2 persones dediquen una setmana a preparar informes per a clients OEM (PPAP, SPC, 8D).',
    ],
    dadesClau: [
      { label: 'OEE premses (estimat)', valor: '~52% (objectiu IATF: >75%)' },
      { label: 'Scrap (rebuig)', valor: '4.5% (990.000€/any)' },
      { label: 'Cost últim recall', valor: '120.000€' },
      { label: 'Temps canvi motlle', valor: '45 min (objectiu SMED: 15 min)' },
      { label: 'Defectes detectats pel client', valor: '15 PPM (objectiu OEM: <5 PPM)' },
      { label: 'Hores reporting mensual', valor: '80h/mes (2 persones)' },
      { label: 'Penalitzacions clients/any', valor: '45.000€' },
    ],
    veus: [
      { rol: 'Director de planta', cita: 'SEAT ens ha avisat: o implantem traçabilitat peça a peça i reporting automàtic, o busquen un altre proveïdor. No és una amenaça, és la realitat.' },
      { rol: 'Cap de qualitat', cita: 'L\'operari porta 8 hores mirant peces. A les 6 de la tarda ja no veu els defectes que veia a les 6 del matí. Necessitem visió artificial.' },
      { rol: 'Cap de producció', cita: 'No tinc OEE en temps real. Quan sé que una premsa ha estat 3 hores parada, ja he perdut la producció. Necessito alertes al mòbil.' },
      { rol: 'Client (Tier 1 alemany)', cita: 'No volem informes mensuals en PDF. Volem un portal on veure l\'estat de les nostres comandes i els SPC automàtics.' },
    ],
    guiaDocument: [
      {
        seccio: '1. Anàlisi del Cas Empresarial',
        pes: '15%',
        subseccions: [
          { num: '1.1', titol: 'Descripció de l\'Empresa', ca: 'CA 1.1, 1.2', instruccio: 'Descriu AutoParts BCN: fabricant Tier 2 automoció, 150 empleats, planta amb 4 processos (estampació, injecció, soldadura, muntatge). Clients: OEMs (SEAT, VW) i Tier 1. Estàndards: IATF 16949 (qualitat auto), requisits de traçabilitat i zero defectes. Posició a la cadena de valor de l\'automoció.' },
          { num: '1.2', titol: 'Identificació d\'Entorns IT i OT', ca: 'CA 1.3, 1.4, 1.6', instruccio: 'IT: ERP (SAP o similar), email, Excel per reporting. OT: premses d\'estampació (PLCs Siemens/Rockwell), injectores, robots de soldadura, cintes de muntatge. Integració IT-OT: gairebé zero (les dades de producció s\'apunten a mà). Investiga ISA-95 i el concepte de MES com a pont IT-OT.' },
          { num: '1.3', titol: 'Diagnòstic: Àrees a Digitalitzar', ca: 'CA 6.2, 6.3', instruccio: 'Àrees: OEE automatitzat, traçabilitat peça a peça, qualitat in-line (visió artificial), SMED digital, reporting automàtic. Calcula impacte: scrap 4.5% de 22M€ = 990K€/any. Pujar OEE del 52% al 75% = equivalent a 2-3 premses noves sense comprar-ne cap.' },
          { num: '1.4', titol: 'Objectius Estratègics', ca: 'CA 6.1, 6.5', instruccio: 'SMART: OEE >75% en 12 mesos, traçabilitat peça a peça 100%, scrap <2%, reporting automàtic eliminant les 80h/mes manuals, defectes al client <5 PPM. KPIs per línia i per torn. Visió: retenir clients OEM amb transparència digital total.' },
        ]
      },
      {
        seccio: '2. Proposta d\'Arquitectura Tecnològica',
        pes: '20%',
        subseccions: [
          { num: '2.1', titol: 'Selecció de THD', ca: 'CA 2.1, 2.2, 2.4, 2.5', instruccio: 'IoT Industrial per connectar PLCs (OPC-UA), MES per traçabilitat i OEE, IA per visió artificial (qualitat) i predicció de defectes, Edge per processament de visió en temps real, Cloud per portal client i analítica. Justifica per què un MES és el nucli de la solució.' },
          { num: '2.2', titol: 'Arquitectura Cloud', ca: 'CA 3.1-3.5', instruccio: 'Debat crític: Cloud vs On-Premise per a planta de producció 24/7. Arguments de latència, disponibilitat, seguretat. Capes: Cloud/Servidor (ERP, portal client, analítica), Edge per línia (PLC gateway, visió artificial), Dispositius (PLCs, càmeres, escàners DataMatrix). Diagrama ISA-95.' },
          { num: '2.3', titol: 'IA i Automatització', ca: 'CA 4.1-4.6', instruccio: 'Visió artificial: quins defectes detectar (esquerdes, rebaves, deformació)? YOLO vs classificació clàssica? Quina càmera i il·luminació? Predicció de defectes: correlació entre paràmetres de procés (pressió, temperatura, velocitat) i taxa de defectes. SPC automàtic.' },
          { num: '2.4', titol: 'Gestió de Dades', ca: 'CA 5.1-5.8', instruccio: 'Cicle: dades PLC (cada cicle de premsa, ~3s) → edge (filtratge i OEE local) → cloud (històric, analítica). Volum: 4 premses x 1 registre/3s x 8h x 6 dies = X registres/setmana. Tecnologies: time-series DB (InfluxDB), relacional (PostgreSQL per traçabilitat). Diagrama de flux de dades MES-ERP.' },
          { num: '2.5', titol: 'Encaix entre Àrees', ca: 'CA 6.4, 6.6, 6.9', instruccio: 'Integració: escàner DataMatrix → registre paràmetres procés → traçabilitat peça a peça; càmera visió → detecció defecte → parada automàtica + alerta; OEE temps real → planificació producció → notificació client ETA. Portal client: reporting PPAP/SPC autogenerat. Diagrama MES-ERP-Portal.' },
        ]
      },
      {
        seccio: '3. Pla d\'Implementació i Seguretat',
        pes: '15%',
        subseccions: [
          { num: '3.1', titol: 'Anàlisi de Riscos i Zero Trust', ca: 'CA 6.7, 5.9', instruccio: 'Riscos: propietat intel·lectual (programes CNC, dissenys), sabotatge industrial, accés del client a dades sensibles de producció (veu massa?), disponibilitat 24/7. Zero Trust: segmentació IT/OT (firewalls industrials), accés client limitat a les seves comandes, MFA per a enginyers.' },
          { num: '3.2', titol: 'Compliment Normatiu', ca: 'CA 5.9', instruccio: 'IATF 16949: requisits de qualitat i traçabilitat en automoció. IEC 62443: seguretat en sistemes de control industrial. RGPD: dades de treballadors (producció per operari). Normativa de producte (REACH, RoHS per a components).' },
          { num: '3.3', titol: 'Cronograma i Recursos Humans', ca: 'CA 6.10, 6.11', instruccio: 'Fases: 1) Connexió PLCs + OEE automàtic, 2) Traçabilitat DataMatrix, 3) Visió artificial qualitat, 4) Portal client + reporting automàtic. Perfils: integrador OT, desenvolupador MES, enginyer visió. Formació operaris (escàner, dashboard). Gestió del canvi en producció 24/7.' },
          { num: '3.4', titol: 'Pressupost i ROI', ca: 'CA 1.7, 2.3', instruccio: 'Costos: gateways OPC-UA, marcador DataMatrix (~3.000€), càmera + il·luminació visió (~5.000€/línia), MES, cloud, desenvolupament. Beneficis: reducció scrap (4.5% → 2% de 22M€ = 550K€), eliminació reporting manual (80h/mes), evitar recalls (120K€ l\'últim), retenir clients OEM. ROI.' },
        ]
      },
      {
        seccio: '4. Canvis Estratègics i Prototip',
        pes: 'Document + Prototip',
        subseccions: [
          { num: '4.1', titol: 'Documentació de Canvis', ca: 'CA 6.10, 1.7, 2.3', instruccio: 'De planta opaca a fàbrica transparent. De traçabilitat per lot a per peça. D\'inspecció humana a visió artificial. De reporting manual a automàtic. Impacte: econòmic (menys scrap, menys recalls), competitiu (retenir OEMs), operatiu (OEE visible). Gestió del canvi: producció no pot parar durant la implementació.' },
          { num: '5', titol: 'Prototip', ca: 'Competència tècnica', instruccio: 'Idees: dashboard OEE temps real (Node-RED + InfluxDB + Grafana amb dades simulades), inspector visual IA (Python + OpenCV/YOLO amb imatges de peces), traçabilitat digital (web app amb escàner QR + registre de paràmetres). Documenta i adjunta codi.' },
        ]
      },
    ],
    pistes: [
      'Un marcador DataMatrix per làser costa ~3.000€ i marca cada peça amb un ID únic en <1 segon.',
      'OpenCV + Python fa inspecció visual bàsica. YOLO detecta defectes en temps real a 30 FPS.',
      'L\'OEE del 52% al 75% equival a 2-3 premses addicionals sense comprar maquinària. Calcula el valor.',
      'OPC-UA permet connectar PLCs de Siemens, Rockwell i Mitsubishi al mateix sistema. Node-RED té nodes OPC-UA gratuïts.',
    ],
  },
}

export default function CasDetail() {
  const { casId } = useParams()
  const cas = casosData[casId]

  if (!cas) {
    return (
      <div className="space-y-8">
        <Link to="/casos" className="inline-flex items-center text-primary-600 hover:text-primary-700">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tornar als casos
        </Link>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Cas no trobat</h1>
          <p className="text-gray-600">El cas seleccionat no existeix. Torna a la llista de casos.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Back */}
      <Link to="/casos" className="inline-flex items-center text-primary-600 hover:text-primary-700">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Tornar als casos
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{cas.name}</h1>
        <p className="text-gray-600 mb-6">{cas.descripcio}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cas.sector && (
            <div className="flex items-center space-x-2 text-gray-600">
              <Building2 className="w-5 h-5 text-gray-400" />
              <span>{cas.sector}</span>
            </div>
          )}
          {cas.ubicacio && (
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>{cas.ubicacio}</span>
            </div>
          )}
          {cas.empleats && (
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-5 h-5 text-gray-400" />
              <span>{cas.empleats} empleats</span>
            </div>
          )}
          {cas.facturacio && (
            <div className="flex items-center space-x-2 text-gray-600">
              <Euro className="w-5 h-5 text-gray-400" />
              <span>{cas.facturacio}</span>
            </div>
          )}
        </div>
      </div>

      {/* Situació Actual */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-semibold text-gray-900">Situació Actual</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Llegeix amb atenció com funciona l'empresa avui dia. Identifica els punts febles i les oportunitats.</p>
        <div className="space-y-4">
          {cas.situacioActual.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200">{p}</p>
          ))}
        </div>
      </div>

      {/* Dades Clau */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="w-6 h-6 text-green-500" />
          <h2 className="text-xl font-semibold text-gray-900">Dades Clau</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Utilitza aquestes xifres per quantificar problemes i justificar la teva proposta al document.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {cas.dadesClau.map((d, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">{d.label}</p>
              <p className="font-semibold text-gray-900">{d.valor}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Veus */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <MessageCircle className="w-6 h-6 text-purple-500" />
          <h2 className="text-xl font-semibold text-gray-900">Veus dels Protagonistes</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Cada persona veu els problemes des del seu rol. Quins patrons comuns detectes?</p>
        <div className="space-y-4">
          {cas.veus.map((v, i) => (
            <div key={i} className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm font-semibold text-purple-900 mb-2">{v.rol}</p>
              <p className="text-gray-700 italic">"{v.cita}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guia del Document */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <FileText className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Guia per al Document</h2>
        </div>
        <p className="text-sm text-gray-500 mb-6">Segueix aquestes instruccions secció per secció per construir el teu document de transformació digital. Cada apartat indica els criteris d'avaluació (CA) que es valoraran.</p>

        <div className="space-y-8">
          {cas.guiaDocument.map((bloc, bi) => {
            const secNum = bloc.seccio.charAt(0)
            const colors = seccioColors[secNum] || seccioColors['1']
            return (
              <div key={bi}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{bloc.seccio}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${colors.badge}`}>{bloc.pes}</span>
                </div>
                <div className="space-y-3">
                  {bloc.subseccions.map((sub, si) => (
                    <div key={si} className={`p-4 ${colors.bg} rounded-lg border ${colors.border}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-semibold ${colors.title}`}>{sub.num}. {sub.titol}</h4>
                        <span className="text-xs text-gray-500 bg-white/70 px-2 py-0.5 rounded">{sub.ca}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{sub.instruccio}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Pistes */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <HelpCircle className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-semibold text-gray-900">Pistes</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Intenta resoldre cada secció abans de mirar les pistes.</p>
        <div className="space-y-3">
          {cas.pistes.map((p, i) => (
            <Collapsible key={i} title={`Pista ${i + 1}`} icon={Lightbulb} color="text-yellow-500">
              <p className="text-gray-700 text-sm">{p}</p>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  )
}
