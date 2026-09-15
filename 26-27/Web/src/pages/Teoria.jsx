import { useParams, Link } from 'react-router-dom'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import MermaidDiagram from '../components/MermaidDiagram'

const temes = {
  1: {
    title: 'Digitalització i Sectors Productius',
    ra: 'RA1',
    sections: [
      {
        title: 'Què és la Digitalització?',
        paragraphs: [
          'La digitalització és el procés de transformar processos, productes i models de negoci mitjançant l\'ús de tecnologies digitals. No es tracta simplement de "passar el paper a ordinador", sinó de repensar com funciona una organització aprofitant les capacitats que ofereix la tecnologia.',
          'Pensem en un exemple senzill: una botiga que abans anotava les vendes en un quadern. El primer pas és passar a un Excel (digitització). El segon és instal·lar un TPV que registra automàticament cada venda (digitalització). Però la veritable transformació digital arriba quan les dades del TPV alimenten un sistema de predicció de demanda que fa les comandes automàticament, envia ofertes personalitzades al mòbil del client i ajusta els preus en temps real segons la demanda.',
          'La història de la indústria s\'ha dividit en revolucions. Cada una ha multiplicat la productivitat de l\'anterior:',
        ],
        diagram: `
flowchart LR
    A[Indústria 1.0<br/>Vapor<br/>1784] --> B[Indústria 2.0<br/>Electricitat<br/>1870]
    B --> C[Indústria 3.0<br/>Automatització<br/>1969]
    C --> D[Indústria 4.0<br/>Digitalització<br/>2011]
    D --> E[Indústria 5.0<br/>Humà + Màquina<br/>2020s]

    style D fill:#3b82f6,color:#fff
    style E fill:#8b5cf6,color:#fff
        `,
        exemples: [
          { titol: 'SEAT Martorell', descripcio: 'La fàbrica de Martorell produeix 2.300 vehicles al dia. Cada cotxe passa per 300 robots i milers de sensors. Un bessó digital (digital twin) replica tota la fàbrica virtualment per simular canvis abans d\'aplicar-los. Això és Indústria 4.0.' },
          { titol: 'El forn de pa del barri', descripcio: 'Fins i tot un negoci petit pot digitalitzar-se: comandes per WhatsApp Business, pagament amb Bizum, Instagram per a màrqueting, i un full de càlcul amb les vendes diàries per saber quants croissants fer demà. No cal ser una multinacional.' },
        ],
      },
      {
        title: 'Digitalització vs Digitització vs Transformació Digital',
        paragraphs: [
          'Aquests tres conceptes es confonen sovint, però són molt diferents en abast i impacte. Entendre la diferència és clau per saber en quin punt es troba una empresa i cap on ha d\'anar.',
          'La digitització és simplement convertir informació analògica a format digital: escanejar un document, fotografiar un plànol, gravar una reunió. No canvia cap procés, només el format.',
          'La digitalització va un pas més enllà: utilitza la tecnologia per millorar o automatitzar processos existents. Per exemple, passar de fer factures a mà a tenir un programa de facturació que les genera, les envia per email i controla els cobraments.',
          'La transformació digital és el canvi més profund: implica repensar el model de negoci gràcies a la tecnologia. Netflix no va digitalitzar el videoclub (això hauria estat enviar DVDs per correu, que ho van fer al principi). Va transformar-se en una plataforma de streaming que utilitza IA per recomanar contingut, produeix sèries basant-se en dades d\'audiència i opera globalment sense botigues físiques.',
        ],
        table: {
          headers: ['Concepte', 'Què canvia', 'Exemple quotidià', 'Exemple industrial'],
          rows: [
            ['Digitització', 'El format (de paper a digital)', 'Escanejar un rebut', 'Fotografiar plànols d\'obra'],
            ['Digitalització', 'El procés (s\'automatitza)', 'App de banca mòbil', 'ERP per gestionar comandes'],
            ['Transformació Digital', 'El model de negoci', 'Uber (mobilitat sense taxis propis)', 'Rolls-Royce ven "hores de vol", no motors'],
          ]
        },
        exemples: [
          { titol: 'Rolls-Royce: de vendre motors a vendre hores de vol', descripcio: 'Rolls-Royce ja no ven motors d\'avió. Ven "Power by the Hour": les aerolínies paguen per cada hora que el motor funciona. Sensors IoT monitoritzen el motor en temps real, la IA prediu quan necessitarà manteniment, i Rolls-Royce s\'encarrega de tot. Han passat de fabricant a proveïdor de serveis. Això és transformació digital.' },
        ],
      },
      {
        title: 'Entorns IT i OT',
        paragraphs: [
          'En qualsevol empresa industrial existeixen dos mons tecnològics que tradicionalment han viscut separats: l\'IT (Information Technology) i l\'OT (Operation Technology).',
          'L\'entorn IT és el que tots coneixem: ordinadors, servidors, email, ERP, bases de dades, xarxes WiFi. El seu objectiu és gestionar informació. El departament d\'IT s\'encarrega que els empleats puguin treballar amb eines digitals, que les dades estiguin segures i que els sistemes funcionin.',
          'L\'entorn OT és menys visible però igual d\'important: PLCs (controladors lògics programables), robots, sensors, SCADA, actuadors, xarxes industrials. El seu objectiu és controlar processos físics: que una cinta transportadora es mogui a la velocitat correcta, que un forn mantingui la temperatura exacta, que una vàlvula s\'obri quan cal.',
          'La diferència fonamental és la prioritat de seguretat. En IT, el més important és la Confidencialitat (que ningú accedeixi a dades sense permís). En OT, el més important és la Disponibilitat (que el sistema no pari mai, perquè una aturada pot costar milers d\'euros per hora o, pitjor, posar en risc vides humanes).',
        ],
        table: {
          headers: ['Aspecte', 'IT', 'OT'],
          rows: [
            ['Objectiu', 'Gestionar dades i informació', 'Controlar processos físics'],
            ['Prioritat de seguretat', 'Confidencialitat (CIA)', 'Disponibilitat (AIC)'],
            ['Cicle de vida dels equips', '3-5 anys (es renoven sovint)', '15-25 anys (un PLC pot funcionar 20 anys)'],
            ['Actualitzacions', 'Freqüents (patches mensuals)', 'Molt rares (risc d\'aturar la producció)'],
            ['Protocols', 'TCP/IP, HTTP, REST, SQL', 'Modbus, OPC-UA, PROFINET, EtherCAT'],
            ['Si falla...', 'No es pot enviar email (molest)', 'Una línia de producció para (crític)'],
            ['Personal', 'Enginyers informàtics, DevOps', 'Enginyers industrials, tècnics de manteniment'],
          ]
        },
        exemples: [
          { titol: 'Un exemple al taller', descripcio: 'Al taller MetalPrecis (cas 3), l\'ERP on gestionen les comandes és IT. Les 12 màquines CNC que tallen metall són OT. Avui no es parlen entre si: l\'operari rep l\'ordre en paper (IT) i la introdueix manualment a la CNC (OT). La convergència IT/OT significaria que l\'ERP enviés l\'ordre directament a la CNC, i que la CNC reportés automàticament quantes peces ha fet, amb quins paràmetres i en quant temps.' },
        ],
      },
      {
        title: 'Convergència IT/OT',
        paragraphs: [
          'La convergència IT/OT és la gran promesa de la Indústria 4.0: connectar el món físic (màquines, sensors, actuadors) amb el món digital (bases de dades, analítica, IA) per prendre millors decisions en temps real.',
          'Històricament, IT i OT han estat separats per bones raons: els equips industrials no poden fallar (una aturada de producció pot costar 150€/hora en un taller petit o 50.000€/hora en una planta d\'automoció), i connectar-los a Internet els exposa a ciberatacs. Però la separació també té costos: dades que no es recullen, decisions que es prenen sense informació, problemes que es detecten tard.',
          'La convergència no significa barrejar les dues xarxes, sinó crear ponts segurs entre elles. Tecnologies com l\'IIoT (Industrial Internet of Things), l\'Edge Computing i el Digital Twin són els ponts que fan possible aquesta connexió sense comprometre la seguretat.',
        ],
        diagram: `
flowchart TB
    subgraph IT["Entorn IT"]
        ERP[ERP<br/>Comandes, facturació]
        CRM[CRM<br/>Clients, vendes]
        BI[BI<br/>Dashboards, informes]
    end

    subgraph OT["Entorn OT"]
        PLC[PLCs<br/>Control de màquines]
        SCADA[SCADA<br/>Supervisió]
        SENSORS[Sensors<br/>Temperatura, vibració]
    end

    subgraph CONVERGENCIA["Convergència IT/OT"]
        IIOT[IIoT<br/>Dades en temps real]
        EDGE[Edge Computing<br/>Processament local]
        DT[Digital Twin<br/>Rèplica virtual]
    end

    IT <--> CONVERGENCIA
    OT <--> CONVERGENCIA

    style CONVERGENCIA fill:#22c55e,color:#fff
        `,
        exemples: [
          { titol: 'Aigües de Barcelona', descripcio: 'Aigües de Barcelona ha instal·lat milers de sensors IoT a la xarxa de distribució d\'aigua. Els sensors (OT) mesuren pressió, cabal i qualitat de l\'aigua. Aquestes dades arriben a una plataforma cloud (IT) on algoritmes de ML detecten fuites en temps real. Resultat: han reduït les pèrdues d\'aigua un 25%. Això és convergència IT/OT en acció.' },
          { titol: 'Mercadona i la cadena de fred', descripcio: 'Cada camió frigorífic de Mercadona porta sensors de temperatura connectats per 4G a un centre de control. Si la temperatura puja per sobre del llindar, es genera una alerta automàtica i es pot desviar el camió al punt de lliurament més proper. La dada del sensor (OT) arriba al sistema logístic (IT) i es pren una decisió en minuts.' },
        ],
      },
      {
        title: 'La Piràmide d\'Automatització Industrial (ISA-95)',
        paragraphs: [
          'L\'estàndard ISA-95 defineix una arquitectura de referència per a les plantes industrials. S\'organitza en nivells, des del procés físic fins a la gestió empresarial. Entendre aquesta piràmide és fonamental per saber on encaixen les tecnologies de digitalització.',
          'Al nivell més baix (0) hi ha els sensors i actuadors: mesuren i actuen sobre el món real. Al nivell 1, els PLCs (Programmable Logic Controllers) executen el control automàtic: "si la temperatura supera 200°C, obre la vàlvula de refrigeració". Al nivell 2, els sistemes SCADA i les pantalles HMI permeten que un operari supervisi i controli el procés. Al nivell 3, el MES (Manufacturing Execution System) gestiona la producció: ordres de fabricació, traçabilitat, OEE. Al nivell 4, l\'ERP gestiona tot el negoci: comandes, comptabilitat, RRHH.',
          'La digitalització connecta tots els nivells. Un sensor de vibració (nivell 0) envia dades a l\'Edge (nivell 1-2), que les processa i les puja al Cloud (nivell 3-4), on un model de ML prediu quan la màquina fallarà. L\'ERP rep l\'alerta i genera una ordre de manteniment automàticament. Tota la piràmide es comunica.',
        ],
        diagram: `
flowchart TB
    L4[Nivell 4: ERP<br/>Gestió empresarial<br/>SAP, Oracle, Odoo]
    L3[Nivell 3: MES / MOM<br/>Gestió de producció<br/>OEE, traçabilitat, qualitat]
    L2[Nivell 2: SCADA / HMI<br/>Supervisió i control<br/>Pantalles, alarmes]
    L1[Nivell 1: PLCs / RTU<br/>Control automàtic<br/>Lògica, regulació]
    L0[Nivell 0: Sensors / Actuadors<br/>Procés físic<br/>Temperatura, motors, vàlvules]

    L4 --> L3 --> L2 --> L1 --> L0

    style L4 fill:#3b82f6,color:#fff
    style L3 fill:#06b6d4,color:#fff
    style L2 fill:#22c55e,color:#fff
    style L1 fill:#f59e0b,color:#000
    style L0 fill:#ef4444,color:#fff
        `,
      },
      {
        title: 'Sectors Productius i la seva Maduresa Digital',
        paragraphs: [
          'No tots els sectors productius estan al mateix nivell de digitalització. Alguns, com la banca o les telecomunicacions, porten dècades invertint en tecnologia i són líders digitals. Altres, com la construcció o l\'agricultura, estan en fases molt inicials i tenen un potencial de millora enorme.',
          'Conèixer la maduresa digital d\'un sector ajuda a entendre els reptes específics i a identificar on la tecnologia pot aportar més valor. Un sector poc digitalitzat no necessita IA avançada; primer necessita connectar els seus processos bàsics. En canvi, un sector madur ja pot aprofitar tecnologies punteres com bessons digitals o automatització amb IA.',
        ],
        table: {
          headers: ['Sector', 'Maduresa', 'Per què?', 'Oportunitat principal'],
          rows: [
            ['Banca i Assegurances', '★★★★★', 'Regulació + competència fintech', 'IA per detecció de frau i servei personalitzat'],
            ['Retail', '★★★★☆', 'E-commerce i omnicanalitat', 'Predicció de demanda i experiència client'],
            ['Automoció', '★★★★☆', 'Pressió OEM per eficiència', 'Fàbrica intel·ligent, vehicle connectat'],
            ['Logística', '★★★☆☆', 'Amazon ha marcat l\'estàndard', 'Optimització de rutes i tracking temps real'],
            ['Hostaleria', '★★★☆☆', 'OTAs han digitalitzat la distribució', 'Revenue management i experiència hoste'],
            ['Manufactura', '★★★☆☆', 'Indústria 4.0 avança de forma desigual', 'IoT i manteniment predictiu'],
            ['Salut', '★★☆☆☆', 'Regulació estricta frena la innovació', 'Història clínica unificada i telemedicina'],
            ['Educació', '★★☆☆☆', 'Pandèmia va accelerar, però poc consolidat', 'Learning analytics i IA tutorització'],
            ['Agricultura', '★★☆☆☆', 'Connectivitat rural limitada', 'Agricultura de precisió amb IoT'],
            ['Construcció', '★☆☆☆☆', 'Sector tradicionalment resistent al canvi', 'BIM i gestió digital d\'obra'],
          ]
        },
        exemples: [
          { titol: 'Per què la construcció és l\'últim de la classe?', descripcio: 'La construcció és un dels sectors menys digitalitzats del món. Cada obra és diferent (no és producció en sèrie), hi intervenen desenes de subcontractes, molts treballadors són temporals, i la cultura del sector és "sempre s\'ha fet així". El resultat: desviacions de pressupost del 12% de mitjana i retards del 18%. Paradoxalment, és el sector on la digitalització tindria més impacte econòmic.' },
        ],
      },
      {
        title: 'Exemples Reals de Digitalització a Catalunya i Espanya',
        paragraphs: [
          'No cal anar a Silicon Valley per trobar exemples de digitalització. A Catalunya i Espanya hi ha empreses que estan liderant projectes de transformació digital ambiciosos i amb resultats mesurables.',
        ],
        exemples: [
          { titol: 'SEAT/CUPRA (Martorell)', descripcio: 'La fàbrica de Martorell és una de les més avançades d\'Europa. Utilitza més de 2.000 robots, bessons digitals de tota la línia de producció, visió artificial per control de qualitat (detecta defectes de pintura de 0.5mm), i 5G privat per connectar vehicles autònoms dins la planta. Cada cotxe genera 50GB de dades durant la seva fabricació.' },
          { titol: 'Mercadona', descripcio: 'Mercadona ha invertit 300M€ en el seu nou model de logística. Els magatzems de Vitòria i Abrera estan altament automatitzats amb robots de picking, sistemes de transport automàtic i algorismes de predicció de demanda que decideixen què enviar a cada botiga cada dia. Han reduït el temps de preparació de comandes un 40%.' },
          { titol: 'Hospital Clínic de Barcelona', descripcio: 'Pioner en IA mèdica a Europa. Utilitzen algoritmes de visió artificial per analitzar radiografies de tòrax i detectar pneumònia amb una precisió del 94%. Tenen un sistema de triatge intel·ligent a urgències que prioritza pacients basant-se en símptomes i historial. La telemedicina ha permès fer 50.000 consultes remotes l\'últim any.' },
          { titol: 'Mango', descripcio: 'La marca de moda ha digitalitzat tota la seva cadena de valor. Cada peça porta un tag RFID que permet saber on és en tot moment (fàbrica → magatzem → botiga → client). Utilitzen IA per predir tendències de moda analitzant xarxes socials, i per optimitzar la distribució entre les seves 2.700 botigues en 110 països.' },
          { titol: 'Cellnex Telecom', descripcio: 'L\'operador de torres de telecomunicacions utilitza IoT per monitoritzar les seves 130.000 torres a Europa. Sensors de temperatura, humitat, consum elèctric i estat dels equips envien dades en temps real. Algoritmes de manteniment predictiu anticipen fallades amb 72h d\'antelació, evitant interrupcions de servei.' },
        ],
      },
      {
        title: 'Avantatges i Reptes de la Digitalització',
        paragraphs: [
          'La digitalització no és gratuïta ni automàtica. Comporta avantatges enormes, però també reptes significatius que cal planificar i gestionar. Les empreses que fracassen en la transformació digital sovint fallen en la gestió del canvi (persones), no en la tecnologia.',
          'Un estudi de McKinsey mostra que el 70% dels projectes de transformació digital no aconsegueixen els seus objectius. La raó principal no és la tecnologia (que funciona), sinó la resistència al canvi, la manca de lideratge i la falta d\'objectius clars.',
        ],
        table: {
          headers: ['Avantatges', 'Dada de suport', 'Reptes', 'Com mitigar-lo'],
          rows: [
            ['Eficiència operativa', '-20-30% costos (McKinsey)', 'Resistència al canvi', 'Quick wins + formació + lideratge visible'],
            ['Qualitat del producte', '-50% defectes amb control automàtic', 'Inversió inicial elevada', 'Començar petit (MVP) i escalar'],
            ['Agilitat i velocitat', '+40% time-to-market', 'Manca de talent digital', 'Formar l\'equip existent + reclutar clau'],
            ['Decisions basades en dades', 'Data-driven vs intuïció', 'Ciberseguretat', 'Seguretat des del disseny (Security by Design)'],
            ['Sostenibilitat ambiental', '-15-20% consum energètic', 'Interoperabilitat de sistemes', 'Estàndards oberts (OPC-UA, REST, FHIR)'],
            ['Nous models de negoci', 'Servitització, plataformes', 'Vendor lock-in', 'Multi-cloud i tecnologies open source'],
          ]
        },
      },
    ]
  },
  2: {
    title: 'Tecnologies Habilitadores Digitals (THD)',
    ra: 'RA2',
    sections: [
      {
        title: 'Les THD: la caixa d\'eines de la transformació digital',
        paragraphs: [
          'Les Tecnologies Habilitadores Digitals (THD, en anglès Key Enabling Technologies - KET) són les eines fonamentals que fan possible la transformació digital. Cap d\'elles, per si sola, transforma un negoci. Però combinades estratègicament, permeten crear solucions que eren impossibles fa pocs anys.',
          'Segons la classificació europea, les THD s\'organitzen en sis àmbits: Fabricació avançada (robòtica intel·ligent, IoT industrial, impressió 3D, 5G/6G), Materials avançats i nanomaterials (grafè, biomaterials, noves ceràmiques), Tecnologies de les ciències de la vida (bioenginyeria, genòmica, neurotecnologia), Microelectrònica i fotònica (computació quàntica, circuits integrats, sensors avançats), Intel·ligència artificial (ML, Deep Learning, LLMs, IA ètica) i Tecnologies de seguretat i connectivitat (ciberseguretat, blockchain, xarxes IoT a gran escala).',
          'Per simplificar, nosaltres ens centrarem en les quatre THD principals transversals a tots els sectors: IoT, Big Data, Cloud Computing i IA/ML.',
          'Pensem-ho com una cuina: la IoT és els ulls i les mans (captura dades i actua), el Big Data és la nevera gegant (emmagatzema tot), la IA és el xef (decideix què fer amb els ingredients), i el Cloud és la cuina compartida (la infraestructura que ho fa possible des de qualsevol lloc).',
        ],
        diagram: `
flowchart TB
    TD[Transformació Digital]

    TD --> IOT[IoT<br/>Captura i actua]
    TD --> BD[Big Data<br/>Emmagatzema i processa]
    TD --> IA[IA / ML<br/>Analitza i decideix]
    TD --> CLOUD[Cloud<br/>Infraestructura]

    IOT -->|"Dades"| BD
    BD -->|"Entrenament"| IA
    IA -->|"Models"| CLOUD
    CLOUD -->|"Accés"| IOT

    style TD fill:#1e40af,color:#fff
    style IOT fill:#3b82f6,color:#fff
    style BD fill:#8b5cf6,color:#fff
    style IA fill:#ec4899,color:#fff
    style CLOUD fill:#06b6d4,color:#fff
        `,
      },
      {
        title: 'Internet of Things (IoT)',
        paragraphs: [
          'L\'IoT és la xarxa de dispositius físics connectats que recullen dades del món real i, opcionalment, actuen sobre ell. És el "sistema nerviós" de la digitalització: sense sensors que capturin dades, no hi ha res a analitzar.',
          'Un sistema IoT té quatre capes: els sensors/actuadors (capturen i actuen), el microcontrolador (processa localment), la connectivitat (envia les dades) i la plataforma (gestiona i visualitza). Cada capa té múltiples opcions tecnològiques que s\'escullen segons el cas d\'ús.',
          'A la indústria s\'anomena IIoT (Industrial IoT) i té requisits especials: alta fiabilitat, baix temps de resposta, seguretat reforçada i capacitat d\'operar en entorns hostils (pols, vibracions, temperatures extremes).',
        ],
        table: {
          headers: ['Capa', 'Funció', 'Tecnologies', 'Exemple pràctic'],
          rows: [
            ['Sensors', 'Capturar dades del món físic', 'DHT22 (temp/hum), ADXL345 (vibració), HC-SR04 (distància)', 'Sensor de temperatura a una càmera frigorífica de FreshMarket'],
            ['Microcontrolador', 'Processar localment i decidir', 'ESP32 (WiFi+BLE, 3€), Raspberry Pi Pico, Arduino', 'ESP32 que llegeix la humitat del sòl i obre l\'electrovàlvula de reg a AgroTech'],
            ['Connectivitat', 'Enviar dades a la plataforma', 'WiFi, 4G, LoRaWAN, Zigbee, NB-IoT, OPC-UA', 'LoRaWAN per connectar sensors en una finca de 120ha sense WiFi'],
            ['Plataforma', 'Gestionar, emmagatzemar, visualitzar', 'AWS IoT, Azure IoT Hub, ThingSpeak, Node-RED, Grafana', 'Dashboard de Grafana mostrant OEE en temps real a MetalPrecis'],
          ]
        },
        exemples: [
          { titol: 'Un ESP32 de 3€ que estalvia 45.000€', descripcio: 'Al cas TechnoGym, un ESP32 amb un sensor PIR (detector de moviment) a cada sala del gimnàs podria comptar les persones en temps real. Cost: 3€ el microcontrolador + 1€ el sensor = 4€ per sala. Amb 10 sales per centre i 3 centres: 120€ en hardware. L\'impacte: reduir el churn del 18% (que costa desenes de milers d\'euros) perquè els socis veuen a l\'app quan el gimnàs està buit.' },
        ],
      },
      {
        title: 'Protocols de Comunicació IoT',
        paragraphs: [
          'Escollir el protocol de comunicació adequat és una de les decisions més importants en un projecte IoT. No hi ha un protocol universal: cada un està optimitzat per a un escenari concret. El protocol equivocat pot fer que el sistema no funcioni, consumeixi massa bateria o no arribi prou lluny.',
          'La regla general és: com més lluny vols enviar dades i menys energia vols gastar, menys dades pots enviar. I a l\'inrevés: si necessites enviar moltes dades molt ràpid, necessites més energia i menys abast.',
        ],
        table: {
          headers: ['Protocol', 'Abast', 'Velocitat', 'Consum', 'Ideal per a', 'Cas d\'ús'],
          rows: [
            ['WiFi', '50-100m', 'Alta (Mbps)', 'Alt', 'Entorns amb endoll (interior)', 'Càmeres de vigilància, dashboards'],
            ['BLE (Bluetooth)', '10-50m', 'Mitjana', 'Molt baix', 'Wearables, beacons', 'Pany intel·ligent d\'hotel (HotelMar)'],
            ['LoRaWAN', '2-15 km (!)', 'Molt baixa (bytes)', 'Molt baix', 'Rural, sensors bateria', 'Sensors humitat a vinyes (AgroTech)'],
            ['NB-IoT', '10 km', 'Baixa (kbps)', 'Baix', 'Cobertura mòbil existent', 'Comptadors intel·ligents'],
            ['4G/5G', 'Il·limitat', 'Molt alta', 'Alt', 'Vehicles, vídeo', 'GPS tracking de flota (LogiTrans)'],
            ['MQTT', 'Sobre TCP/IP', 'Variable', 'Baix', 'Telemetria, pub/sub', 'Dades de sensors al cloud'],
            ['OPC-UA', 'LAN industrial', 'Alta', 'N/A', 'Maquinària industrial', 'Connexió CNC a MES (MetalPrecis)'],
          ]
        },
        exemples: [
          { titol: 'Per què LoRa per a agricultura?', descripcio: 'Al cas AgroTech Vinyes, la finca té 120ha sense WiFi ni 4G estable. LoRaWAN pot enviar una lectura d\'humitat del sòl (uns pocs bytes) a 10km de distància amb una bateria que dura 2 anys (!). Un gateway LoRa a la caseta de camp recull les dades de tots els sensors i les puja al cloud via 4G (la caseta sí que té cobertura). Cost del gateway: ~50€. Alternativa: WiFi mesh necessitaria desenes de repetidors i electricitat a cada punt.' },
        ],
      },
      {
        title: 'Big Data: Les 7 V i el Pipeline de Dades',
        paragraphs: [
          'Parlem de Big Data quan el volum, la velocitat o la varietat de les dades superen la capacitat de les eines tradicionals (com Excel o una base de dades SQL senzilla). No es tracta d\'una tecnologia concreta, sinó d\'un conjunt de tècniques i eines per gestionar grans quantitats de dades.',
          'El Big Data es defineix per les seves 7 V: Volum (quantes dades), Velocitat (a quina velocitat arriben), Varietat (quants formats: estructurats, semiestructurats i no estructurats), Veracitat (són fiables?), Valor (en podem treure profit?), Variabilitat (canvis constants en el significat i context de les dades) i Visualització (maneres eficients d\'interpretar i representar les dades). Un projecte de Big Data que no acaba generant valor per al negoci no serveix de res.',
          'A diferència de les bases de dades tradicionals (SQL, processament a velocitat moderada, servidors centralitzats), el Big Data treballa amb quantitats massives en formats diversos i requereix tecnologies especialitzades (Hadoop, Spark, NoSQL) amb arquitectures distribuïdes al núvol.',
          'Per processar Big Data, les dades segueixen un pipeline: s\'ingereixen (captura), s\'emmagatzemen, es processen, s\'analitzen i es visualitzen. Cada etapa utilitza tecnologies específiques.',
        ],
        diagram: `
flowchart LR
    ING[Ingestió<br/>Kafka, MQTT<br/>Flume, API] --> STORE[Emmagatzematge<br/>Data Lake: S3, HDFS<br/>Data Warehouse: BigQuery]
    STORE --> PROC[Processament<br/>Batch: Spark<br/>Stream: Flink, Kafka]
    PROC --> AN[Anàlisi<br/>SQL, Python<br/>Jupyter, Pandas]
    AN --> VIS[Visualització<br/>Grafana, Metabase<br/>Power BI, Tableau]

    style ING fill:#ef4444,color:#fff
    style STORE fill:#f59e0b,color:#000
    style PROC fill:#3b82f6,color:#fff
    style AN fill:#8b5cf6,color:#fff
    style VIS fill:#22c55e,color:#fff
        `,
        exemples: [
          { titol: 'Quantes dades genera una fàbrica?', descripcio: 'Al cas AutoParts BCN, si connectem 4 premses d\'estampació amb sensors que registren pressió, temperatura i velocitat cada 3 segons durant 3 torns de 8 hores, 6 dies a la setmana: 4 premses × (28.800 segons/torn × 3 torns) / 3 = 115.200 registres/dia × 6 = 691.200 registres/setmana. Això ja no cap en un Excel còmodament. I estem parlant només de 4 màquines amb 3 sensors.' },
          { titol: 'Data Lake vs Data Warehouse', descripcio: 'Un Data Lake és com un llac on bolques totes les dades tal com arriben (fotos, logs, CSV, JSON, tot barrejat). Un Data Warehouse és com un magatzem ordenat on les dades ja estan netes i estructurades per ser consultades ràpidament. Normalment, les dades arriben primer al Lake, es processen (ETL) i es carreguen al Warehouse per a anàlisi.' },
        ],
      },
      {
        title: 'Intel·ligència Artificial i Machine Learning',
        paragraphs: [
          'La Intel·ligència Artificial (IA) és la capacitat d\'una màquina de realitzar tasques que normalment requereixen intel·ligència humana: reconèixer imatges, entendre text, prendre decisions, predir el futur. Dins la IA, el Machine Learning (ML) és la branca que "aprèn" a partir de dades en lloc de ser programada amb regles explícites.',
          'Per exemple: programar manualment un sistema per detectar defectes en una peça metàl·lica requeriria definir centenars de regles ("si hi ha un punt fosc de més de 2mm al quadrant superior esquerre..."). Amb ML, simplement li mostres milers d\'imatges de peces bones i dolentes, i el model aprèn sol a distingir-les. I pot detectar defectes que un humà no veuria.',
          'El ML es classifica en tres grans tipus segons com aprèn:',
        ],
        table: {
          headers: ['Tipus', 'Com aprèn', 'Exemple quotidià', 'Exemple industrial'],
          rows: [
            ['Supervisat', 'Amb exemples etiquetats (input→output)', 'Gmail detecta spam (entrenat amb milers d\'emails marcats com spam)', 'Classificar peces com OK/NOK amb imatges etiquetades (AutoParts)'],
            ['No supervisat', 'Descobreix patrons sense etiquetes', 'Spotify agrupa cançons similars sense que li diguis els gèneres', 'Segmentar clients per comportament de compra (FreshMarket)'],
            ['Per reforç', 'Prova i error amb recompenses', 'AlphaGo aprèn a jugar al Go jugant milions de partides contra si mateix', 'Robot que aprèn a apilar caixes optimitzant la velocitat'],
          ]
        },
        diagram: `
flowchart TB
    ML[Machine Learning]

    ML --> SUP[Supervisat]
    ML --> NSUP[No Supervisat]
    ML --> RL[Per Reforç]

    SUP --> REG[Regressió<br/>Predir un número<br/>Ex: preu, temperatura]
    SUP --> CLS[Classificació<br/>Predir una categoria<br/>Ex: spam/no spam, OK/NOK]
    NSUP --> CLUST[Clustering<br/>Agrupar similars<br/>Ex: segments clients]
    NSUP --> ANOM[Anomaly Detection<br/>Detectar el diferent<br/>Ex: frau, avaria]

    style ML fill:#ec4899,color:#fff
    style SUP fill:#3b82f6,color:#fff
    style NSUP fill:#22c55e,color:#fff
    style RL fill:#f59e0b,color:#000
        `,
      },
      {
        title: 'IA Generativa i LLMs',
        paragraphs: [
          'La IA Generativa és la branca de la IA que crea contingut nou: text, imatges, codi, àudio, vídeo. Ha explotat des de 2022 amb ChatGPT i ha canviat la percepció de la IA per part del gran públic.',
          'Els LLMs (Large Language Models) com GPT-4, Claude o Gemini estan entrenats amb bilions de paraules de text. No "entenen" en el sentit humà, però generen respostes tan coherents que sembla que ho facin. En el context de la digitalització industrial, els LLMs tenen aplicacions molt pràctiques.',
        ],
        table: {
          headers: ['Aplicació', 'Com funciona', 'Exemple en el nostre context'],
          rows: [
            ['Chatbot d\'atenció', 'LLM respon preguntes en llenguatge natural', 'Chatbot per a socis del gimnàs (TechnoGym): "A quina hora hi ha menys gent?"'],
            ['Generació de documents', 'LLM redacta informes a partir de dades', 'Generar informes de producció per a clients OEM (AutoParts) automàticament'],
            ['Anàlisi de text', 'LLM extreu informació de text no estructurat', 'Analitzar les ressenyes d\'un hotel a Booking per detectar problemes recurrents (HotelMar)'],
            ['Assistents de codi', 'LLM genera i explica codi', 'GitHub Copilot, Claude Code: ajudar els alumnes a programar el prototip'],
            ['Chatbot acadèmic', 'LLM respon dubtes basant-se en el contingut del curs', 'Assistent per als alumnes d\'EduLearn Academy amb RAG sobre els materials del curs'],
          ]
        },
        exemples: [
          { titol: 'RAG: com fer que el LLM sàpiga del teu negoci', descripcio: 'Un LLM genèric sap molt de tot, però no sap res de la teva empresa. La tècnica RAG (Retrieval-Augmented Generation) resol això: quan l\'usuari fa una pregunta, primer es busquen els documents rellevants de l\'empresa (manuals, protocols, dades) i es passen al LLM juntament amb la pregunta. Així el LLM respon basant-se en informació real de l\'empresa, no en el seu coneixement general. Això és clau per al chatbot acadèmic d\'EduLearn o per a un assistent de manteniment a MetalPrecis.' },
        ],
      },
      {
        title: 'Blockchain, AR/VR i altres THD emergents',
        paragraphs: [
          'A més de les 4 THD principals (IoT, Big Data, IA, Cloud), existeixen altres tecnologies que en determinats sectors aporten un valor significatiu.',
          'El Blockchain és un registre distribuït i immutable. Cada transacció queda registrada de forma permanent i no es pot falsificar. En el context industrial, s\'utilitza principalment per a traçabilitat de cadena de subministrament i certificació d\'origen. Exemple: un vi DO Penedès amb blockchain pot demostrar que el raïm ve exactament de la parcel·la certificada.',
          'La Realitat Augmentada (AR) superposa informació digital sobre el món real a través d\'un dispositiu (ulleres, tauleta). En manteniment industrial és molt útil: un tècnic mira una màquina a través d\'una tablet i veu les instruccions de reparació sobreposades, el diagrama elèctric, i un expert remot li indica per vídeo on està el problema.',
          'El Digital Twin (Bessó Digital) és una rèplica virtual d\'un objecte o procés real. Es nodreix de dades reals dels sensors i permet simular escenaris: "què passaria si augmentés la velocitat de la cinta un 10%?" sense tocar la màquina real.',
        ],
        table: {
          headers: ['THD', 'Fortalesa', 'Limitació', 'Sector estrella'],
          rows: [
            ['Blockchain', 'Immutabilitat, transparència, confiança', 'Escalabilitat, consum energètic, complexitat', 'Agroalimentari (traçabilitat), Finances'],
            ['AR (Realitat Augmentada)', 'Formació i manteniment en context', 'Cost del hardware, fatiga visual', 'Manufactura, Construcció'],
            ['VR (Realitat Virtual)', 'Simulació segura d\'entorns perillosos', 'Aïllament de l\'entorn real', 'Formació (PRL), Disseny'],
            ['Digital Twin', 'Simulació sense risc, optimització', 'Necessita moltes dades i models acurats', 'Manufactura, Energia, Urbanisme'],
            ['Robòtica i Cobots', 'Automatització de tasques repetitives', 'Inversió alta, entorns estructurats', 'Automoció, Logística, Alimentació'],
            ['Impressió 3D', 'Prototipatge ràpid, peces a mida', 'Velocitat baixa, materials limitats', 'Aeronàutica, Mèdic, Automoció'],
          ]
        },
      },
      {
        title: 'Selecció de THD per Sector',
        paragraphs: [
          'Una de les habilitats més importants d\'un professional de la digitalització és saber quines THD aplicar en cada context. No es tracta d\'usar totes les tecnologies disponibles, sinó d\'escollir les que resolen els problemes reals del negoci amb el millor equilibri cost-benefici.',
          'Aquesta taula resumeix quines THD aporten més valor en cada sector i el cas d\'ús estrella que les justifica. Fixa\'t que tots els nostres casos empresarials encaixen en aquest mapa:',
        ],
        table: {
          headers: ['Sector', 'THD prioritàries', 'Cas d\'ús estrella', 'El nostre cas'],
          rows: [
            ['Fitness/Salut', 'IoT + Cloud + IA', 'Experiència personalitzada i ocupació en temps real', 'TechnoGym (cas 1)'],
            ['Retail alimentació', 'IoT + Big Data + IA', 'Predicció de demanda i cadena de fred', 'FreshMarket (cas 2)'],
            ['Manufactura CNC', 'IoT + Edge + MES', 'Monitorització OEE i manteniment predictiu', 'MetalPrecis (cas 3)'],
            ['Logística', 'IoT + Big Data + IA', 'Optimització de rutes i tracking temps real', 'LogiTrans (cas 4)'],
            ['Sanitat', 'Cloud + IA + Seguretat', 'HIS unificat i telemedicina', 'ClinicaSalut (cas 5)'],
            ['Agricultura', 'IoT + Edge + IA', 'Reg de precisió i detecció de plagues', 'AgroTech (cas 6)'],
            ['Hostaleria', 'IoT + Cloud + IA', 'Revenue management i habitació intel·ligent', 'HotelMar (cas 7)'],
            ['Construcció', 'BIM + Cloud + IoT', 'Control d\'obra digital i clash detection', 'BuildCorp (cas 8)'],
            ['Educació', 'Cloud + IA + Big Data', 'Learning analytics i chatbot acadèmic', 'EduLearn (cas 9)'],
            ['Automoció', 'IoT + MES + IA', 'Traçabilitat peça a peça i visió artificial', 'AutoParts (cas 10)'],
          ]
        },
      },
    ]
  },
  3: {
    title: 'Cloud Computing i Edge',
    ra: 'RA3',
    sections: [
      {
        title: 'Què és el Cloud Computing?',
        paragraphs: [
          'El Cloud Computing és l\'accés a recursos informàtics (servidors, emmagatzematge, bases de dades, xarxes, software) a través d\'Internet, en lloc de tenir-los físicament a la teva oficina o fàbrica. Pagues pel que uses, com l\'electricitat o l\'aigua.',
          'Abans del cloud, si volies muntar una botiga online, havies de comprar un servidor (2.000-5.000€), instal·lar-lo, configurar-lo, mantenir-lo, fer backups i preocupar-te de la seguretat. Si la botiga creixia, havies de comprar un servidor més gran. Si fracassava, tenies un servidor car sense usar.',
          'Amb el cloud, obres un compte, desplega la botiga en 5 minuts, i pagues uns pocs euros al mes. Si creix, el cloud escala automàticament. Si fracassa, tanques el compte i no has comprat res. Aquesta flexibilitat ha democratitzat l\'accés a tecnologia que abans era exclusiva de grans empreses.',
        ],
      },
      {
        title: 'Models de Servei: IaaS, PaaS, SaaS',
        paragraphs: [
          'El cloud ofereix tres nivells de servei, que es diferencien pel grau de responsabilitat que assumeix el proveïdor. L\'analogia de la pizza ho explica bé: IaaS és comprar els ingredients i cuinar tu; PaaS és comprar la massa feta i afegir-hi els toppings; SaaS és demanar la pizza a domicili.',
        ],
        table: {
          headers: ['Model', 'Tu gestiones', 'El proveïdor gestiona', 'Exemple', 'Per a qui'],
          rows: [
            ['IaaS (Infrastructure)', 'App, dades, runtime, SO', 'Servidors, xarxa, virtualització', 'AWS EC2, Azure VMs, GCP Compute', 'DevOps, equips tècnics grans'],
            ['PaaS (Platform)', 'App i dades', 'Runtime, SO, servidors, xarxa', 'Heroku, Vercel, Firebase, Railway', 'Desenvolupadors (focus en codi)'],
            ['SaaS (Software)', 'Res (només l\'uses)', 'Tot: app, dades, infra', 'Gmail, Salesforce, Notion, Figma', 'Usuaris finals, empreses sense IT'],
          ]
        },
        exemples: [
          { titol: 'Quina escollir per al prototip?', descripcio: 'Per als prototips d\'aquest mòdul, PaaS i SaaS són la millor opció. Firebase i Supabase (PaaS/BaaS) ofereixen autenticació, base de dades en temps real i hosting gratuït amb pocs clics. Vercel desplega apps React automàticament des de GitHub. No necessites saber configurar un servidor Linux (IaaS) per demostrar el teu prototip.' },
        ],
      },
      {
        title: 'Models de Desplegament Cloud',
        paragraphs: [
          'A més del nivell de servei, cal decidir qui controla la infraestructura del cloud. Hi ha quatre models de desplegament, cadascun amb avantatges i inconvenients.',
        ],
        table: {
          headers: ['Model', 'Qui el controla', 'Avantatge', 'Inconvenient', 'Ideal per a'],
          rows: [
            ['Públic', 'Proveïdor (AWS, Azure, GCP)', 'Escalabilitat immediata, pay-as-you-go', 'Menys control, dependència', 'Startups, apps web, prototips'],
            ['Privat', 'L\'empresa mateixa', 'Control total, compliment normatiu', 'Cost elevat, menys escalable', 'Banca, defensa, sanitat estricta'],
            ['Híbrid', 'Mix públic + privat', 'Equilibri control/escalabilitat', 'Complexitat de gestió', 'Indústria amb dades sensibles + pics de demanda'],
            ['Multi-Cloud', 'Diversos proveïdors', 'Evita vendor lock-in, resiliència', 'Molt complex de gestionar', 'Grans empreses que no volen dependre d\'un sol proveïdor'],
          ]
        },
        exemples: [
          { titol: 'Híbrid a ClinicaSalut', descripcio: 'Una clínica mèdica pot tenir les dades de pacients en un cloud privat (compliment RGPD estricte) i la web pública i el portal de cites en un cloud públic (escalabilitat, cost baix). Les dades sensibles no surten del cloud privat, però el sistema de cites pot accedir-hi a través d\'una API segura. Això és cloud híbrid aplicat.' },
        ],
      },
      {
        title: 'Proveïdors Cloud: AWS, Azure, GCP i Alternatives',
        paragraphs: [
          'Tres gegants dominen el mercat del cloud públic: Amazon Web Services (AWS) amb ~32% del mercat, Microsoft Azure amb ~23% i Google Cloud Platform (GCP) amb ~10%. Però per a projectes petits i prototips, les alternatives "developer-friendly" com Firebase, Supabase i Vercel sovint són millors opcions.',
        ],
        table: {
          headers: ['Proveïdor', 'Punt fort', 'Free Tier', 'Ideal per al nostre context'],
          rows: [
            ['AWS', '+200 serveis, líder de mercat', '12 mesos gratis (EC2, S3, Lambda...)', 'Projectes IoT amb AWS IoT Core'],
            ['Azure', 'Integració Microsoft, Active Directory', '200$ crèdit + serveis gratis', 'Si l\'empresa ja usa Office 365/Teams'],
            ['GCP', 'ML/IA (Vertex AI), Kubernetes, BigQuery', '300$ crèdit + Always Free', 'Projectes de Big Data i ML'],
            ['Firebase (Google)', 'BaaS complet: auth, DB, hosting, functions', 'Molt generós (50K reads/dia)', 'Prototips ràpids amb app mòbil'],
            ['Supabase', 'Alternativa open source a Firebase, PostgreSQL', '500MB DB, 1GB storage, 50K MAU', 'Prototips amb SQL i Row Level Security'],
            ['Vercel', 'Hosting per frontends (React, Next.js)', 'Il·limitat per projectes personals', 'Desplegar la web del prototip'],
          ]
        },
      },
      {
        title: 'Edge Computing: processar a prop de la dada',
        paragraphs: [
          'No totes les dades han d\'anar al cloud. De vegades necessites processar les dades allà on es generen, per raons de latència (temps de resposta), volum (massa dades per enviar), privacitat (dades sensibles) o disponibilitat (si cau Internet, el sistema ha de seguir funcionant).',
          'L\'Edge Computing consisteix en processar dades "al límit" de la xarxa, a prop dels sensors i actuadors. Un exemple clar: una càmera de visió artificial a una línia de producció (AutoParts) ha d\'analitzar cada peça en mil·lisegons. Si envia la imatge al cloud i espera la resposta, la peça ja ha passat. La IA ha d\'estar a l\'Edge, al costat de la càmera.',
          'L\'arquitectura Cloud-Fog-Edge-Mist defineix quatre nivells de processament segons la proximitat a la dada:',
        ],
        diagram: `
flowchart TB
    CLOUD[Cloud<br/>Data Center<br/>Anàlisi massiva, entrenament ML<br/>Latència: >100ms]
    FOG[Fog<br/>Node regional<br/>Agregació, regles complexes<br/>Latència: 10-100ms]
    EDGE[Edge<br/>Gateway local<br/>Filtratge, decisions ràpides<br/>Latència: 1-10ms]
    MIST[Mist<br/>Sensor/Actuador<br/>Captura, preprocés mínim<br/>Latència: <1ms]

    CLOUD --> FOG --> EDGE --> MIST

    style CLOUD fill:#3b82f6,color:#fff
    style FOG fill:#06b6d4,color:#fff
    style EDGE fill:#22c55e,color:#fff
    style MIST fill:#eab308,color:#000
        `,
        exemples: [
          { titol: 'Edge a AgroTech: reg autònom', descripcio: 'A la finca d\'AgroTech, si cau la connexió a Internet (freqüent en zones rurals), el sistema de reg no pot quedar bloquejat esperant instruccions del cloud. El gateway Edge a la caseta de camp té la lògica bàsica de reg: "si la humitat del sòl és inferior al 30% i no plourà en les pròximes 12h, obre l\'electrovàlvula". El cloud fa l\'anàlisi global i l\'optimització, però l\'Edge garanteix que el reg funcioni sempre.' },
        ],
      },
      {
        title: 'Contenidors, Serverless i l\'evolució de la infraestructura',
        paragraphs: [
          'La forma de desplegar aplicacions al cloud ha evolucionat enormement. Entendre les opcions ajuda a escollir la infraestructura adequada per al prototip.',
          'Les Màquines Virtuals (VM) simulen un ordinador complet. Un contenidor (Docker) empaqueta només l\'aplicació i les seves dependències, compartint el sistema operatiu. Serverless va encara més lluny: escrius una funció i el cloud l\'executa quan cal, sense que et preocupis de res d\'infraestructura.',
        ],
        table: {
          headers: ['Tecnologia', 'Analogia', 'Arrencada', 'Cost', 'Quan usar-la'],
          rows: [
            ['Màquina Virtual', 'Llogar un pis sencer', 'Minuts', 'Per hora/mes (sempre encesa)', 'Aplicacions legacy, necessitat de control total'],
            ['Contenidor (Docker)', 'Llogar una habitació en un pis compartit', 'Segons', 'Per hora/mes (més eficient)', 'Microserveis, CI/CD, Kubernetes'],
            ['Serverless (Functions)', 'Llogar un escriptori per hores', 'Mil·lisegons', 'Per execució (0€ si no s\'usa)', 'APIs, processos event-driven, prototips'],
          ]
        },
        exemples: [
          { titol: 'Serverless per al prototip', descripcio: 'Si el teu prototip és una API que rep dades de sensors IoT i les guarda a una base de dades, Serverless és ideal: Supabase Edge Functions o Firebase Cloud Functions s\'executen cada cop que arriba una dada, i no paguen res quan no hi ha dades. Per a un prototip que s\'usa a classe, el cost serà literalment 0€.' },
        ],
      },
      {
        title: 'Seguretat al Cloud: responsabilitat compartida',
        paragraphs: [
          'Un error comú és pensar que "si les dades estan al cloud, el proveïdor s\'encarrega de la seguretat". Fals. El cloud funciona amb un model de responsabilitat compartida: el proveïdor protegeix la infraestructura (centres de dades, xarxa, hipervisor) i tu protegeixes les teves dades i configuracions.',
          'La majoria de bretxes de seguretat al cloud no són per falles del proveïdor, sinó per errors de configuració del client: buckets S3 públics (tothom pot veure les dades), bases de dades sense contrasenya, permisos massa oberts.',
        ],
        diagram: `
flowchart TB
    subgraph CLIENT["La teva responsabilitat"]
        C1[Dades i encriptació]
        C2[Identitats i accés IAM]
        C3[Configuració de xarxa]
        C4[Aplicacions i codi]
    end

    subgraph PROVEIDOR["Responsabilitat del proveïdor"]
        P1[Seguretat física data center]
        P2[Xarxa i infraestructura]
        P3[Hipervisor i virtualització]
        P4[Disponibilitat i redundància]
    end

    style CLIENT fill:#f59e0b,color:#000
    style PROVEIDOR fill:#3b82f6,color:#fff
        `,
      },
    ]
  },
  4: {
    title: 'Intel·ligència Artificial',
    ra: 'RA4',
    sections: [
      {
        title: 'Per què la IA ara? El moment perfecte',
        paragraphs: [
          'La IA no és nova: el concepte va néixer el 1956. Però ha explotat en els últims anys per una confluència de tres factors: dades massives (Big Data genera el combustible que la IA necessita), potència de càlcul (les GPUs permeten entrenar models enormes en hores en lloc de mesos) i algorismes millorats (deep learning, transformers, attention mechanisms).',
          'En el context de la digitalització industrial, la IA no és un objectiu, sinó una eina. No digitalitzem per "tenir IA"; la usem perquè resol problemes que abans no podíem resoldre: predir quan una màquina fallarà, optimitzar 45 rutes de repartiment en segons, detectar defectes que l\'ull humà no veu, o respondre dubtes d\'alumnes a les 3 de la matinada.',
        ],
      },
      {
        title: 'El Pipeline de Machine Learning',
        paragraphs: [
          'Un projecte de ML no comença escrivint codi. Comença entenent el problema de negoci i les dades disponibles. El 80% del temps d\'un projecte de ML es dedica a preparar les dades (neteja, transformació, feature engineering). El model en si és sovint la part més petita.',
          'El pipeline de ML és cíclic: un cop el model està en producció, es monitoritza el seu rendiment. Quan les dades canvien (model drift), cal reentrenar-lo amb dades noves. Per això es parla de MLOps: aplicar pràctiques DevOps al cicle de vida dels models de ML.',
        ],
        diagram: `
flowchart LR
    D1[1. Entendre<br/>el problema] --> D2[2. Recollir<br/>dades]
    D2 --> D3[3. Netejar i<br/>preparar dades]
    D3 --> D4[4. Entrenar<br/>el model]
    D4 --> D5[5. Avaluar<br/>i validar]
    D5 --> D6[6. Desplegar<br/>en producció]
    D6 --> D7[7. Monitoritzar<br/>i reentrenar]
    D7 -->|"Noves dades"| D2

    style D1 fill:#ef4444,color:#fff
    style D3 fill:#f59e0b,color:#000
    style D4 fill:#ec4899,color:#fff
    style D6 fill:#22c55e,color:#fff
        `,
        exemples: [
          { titol: 'Predicció de demanda a FreshMarket', descripcio: '1. Problema: massa merma de frescos. 2. Dades: 2 anys de vendes diàries per producte (del TPV). 3. Preparació: netejar dies atípics, afegir features (dia setmana, festius, meteo). 4. Model: Prophet o ARIMA per sèries temporals. 5. Avaluació: MAPE <10%. 6. Desplegament: el model suggereix la comanda al responsable de botiga cada matí. 7. Monitorització: comparar predicció vs venda real cada setmana.' },
        ],
      },
      {
        title: 'Aplicacions d\'IA per sector',
        paragraphs: [
          'Cada sector productiu té aplicacions d\'IA específiques que ja estan demostrant resultats reals. No són ciència ficció: són projectes en producció amb ROI mesurable.',
          'La IA s\'aplica en àmbits molt diversos: des de l\'automatització de processos industrials fins al diagnòstic mèdic, passant pel trading algorítmic, la predicció de collites, la generació de continguts audiovisuals o la detecció de fraus financers. La seva adopció s\'està expandint ràpidament en tots els sectors productius.',
        ],
        table: {
          headers: ['Sector', 'Aplicació IA', 'Com funciona', 'Resultat mesurat'],
          rows: [
            ['Manufactura', 'Manteniment predictiu', 'Sensors vibració → model detecta patró previ a fallada', '-25% aturades no planificades (Siemens)'],
            ['Manufactura', 'Visió artificial qualitat', 'Càmera + CNN classifica peces OK/NOK a 30fps', '-60% defectes no detectats (BMW)'],
            ['Retail', 'Predicció de demanda', 'Dades vendes + meteo + festius → model de sèries temporals', '-30% merma de frescos (Walmart)'],
            ['Logística', 'Optimització rutes', 'VRP amb OR-Tools: minimitza km amb restriccions', '-15% km i combustible (UPS: estalvi 10M$/any)'],
            ['Salut', 'Diagnòstic per imatge', 'CNN entrenada amb milers de radiografies; AlphaFold prediu estructures de proteïnes', '+30% precisió en detecció precoç'],
            ['Financer', 'Detecció de frau i trading', 'ML identifica patrons sospitosos en transaccions en temps real', 'VISA/Mastercard: milions de fraus bloquejats/any'],
            ['Hostaleria', 'Revenue management', 'Model prediu demanda → ajusta preu automàticament', '+12% RevPAR (Marriott)'],
            ['Educació', 'Tutorització adaptativa', 'LLM + RAG: respon dubtes basant-se en materials del curs', '+25% taxa completament (Coursera)'],
            ['Agricultura', 'Agricultura de precisió', 'Sensors + IA optimitzen reg, fertilitzants i detecció de plagues', '-30% ús pesticides, +15% rendiment'],
            ['Químic/Farmac.', 'Disseny de fàrmacs', 'IA accelera investigació i síntesi de nous medicaments', 'AlphaFold: predicció proteïnes (DeepMind)'],
            ['Audiovisual', 'Recomanació continguts', 'Netflix/Spotify: IA analitza preferències i personalitza recomanacions', '+80% contingut vist prové de recomanacions'],
            ['Videojocs', 'NPC intel·ligents', 'IA millora comportament de personatges i genera mons procedurals', 'No Man\'s Sky: mons generats per IA'],
          ]
        },
      },
      {
        title: 'Ètica i Regulació de la IA',
        paragraphs: [
          'La IA és una eina molt poderosa, i com tota eina poderosa, pot causar danys si s\'usa malament. Un algorisme de selecció de personal que discrimina per gènere, un sistema de crèdit que penalitza per codi postal (i indirectament per raça), o un chatbot mèdic que dona un diagnòstic incorrecte amb total confiança són exemples reals de riscos de la IA.',
          'L\'EU AI Act (2024) és la primera llei del món que regula la IA de forma integral. Classifica els sistemes per nivell de risc i imposa obligacions proporcionades. És important conèixer-la perquè afecta directament als projectes que proposeu.',
        ],
        list: [
          'Risc inacceptable (PROHIBIT): vigilància massiva amb reconeixement facial, scoring social, manipulació subliminal',
          'Risc alt (REGULAT): sistemes de selecció de personal, diagnòstic mèdic, conducció autònoma, scoring de crèdit → obligació d\'explicabilitat, auditoria, registre',
          'Risc limitat (TRANSPARÈNCIA): chatbots, deepfakes → obligació d\'indicar que és IA',
          'Risc mínim (LLIURE): filtre de spam, recomanador de Netflix, predicció de demanda → sense restriccions',
        ],
        exemples: [
          { titol: 'El triatge de ClinicaSalut', descripcio: 'Si proposem un chatbot de triatge per a ClinicaSalut, ens situem en risc alt (sistema que afecta la salut). Segons l\'EU AI Act, necessitem: explicabilitat (el pacient ha de saber per què l\'han classificat com a "urgent"), registre de decisions, supervisió humana (un metge ha de validar les decisions crítiques), i avaluació de biaixos (funciona igual per a tothom?). No podem simplement connectar un LLM i dir "triatge automàtic".' },
        ],
      },
      {
        title: 'Stack d\'IA Modern: eines per al prototip',
        paragraphs: [
          'El principal llenguatge de programació per a la IA és Python, gràcies a la seva sintaxi senzilla i la gran quantitat de biblioteques disponibles (TensorFlow, PyTorch, Scikit-learn, Keras, NumPy, Pandas). Les GPU de NVidia (amb la plataforma CUDA) són el maquinari clau que ha permès l\'explosió del Deep Learning: poden executar milers de càlculs en paral·lel, accelerant enormement l\'entrenament de models.',
          'Per als prototips d\'aquest mòdul no necessiteu ser experts en ML. Hi ha eines que permeten crear models funcionals sense escriure gaire codi. Aquí teniu les opcions ordenades de menys a més complexitat:',
        ],
        table: {
          headers: ['Eina', 'Dificultat', 'Ideal per a', 'Cost'],
          rows: [
            ['Teachable Machine (Google)', 'Zero codi', 'Classificació imatges/sons (detecció plagues, defectes)', 'Gratuït, al navegador'],
            ['OpenAI API / Claude API', 'Poc codi (API REST)', 'Chatbots, generació de text, anàlisi', '5-10$ gratis inicials'],
            ['Scikit-learn', 'Python bàsic', 'ML clàssic: regressió, classificació, clustering', 'Gratuït (open source)'],
            ['Prophet (Meta)', 'Python bàsic', 'Predicció de sèries temporals (demanda, ocupació)', 'Gratuït (open source)'],
            ['Google Colab', 'Python', 'Executar notebooks amb GPU gratuïta', 'Gratuït (amb límits)'],
            ['YOLO (Ultralytics)', 'Python intermedi', 'Detecció d\'objectes en imatges en temps real', 'Gratuït (open source)'],
            ['Hugging Face', 'Python intermedi', 'Models pre-entrenats per a text, imatge, àudio', 'Gratuït (models open source)'],
          ]
        },
      },
    ]
  },
  5: {
    title: 'Dades i Seguretat',
    ra: 'RA5',
    sections: [
      {
        title: 'Les dades com a actiu estratègic',
        paragraphs: [
          'Les dades són el "nou petroli" de l\'economia digital: són el combustible que alimenta la IA, el Big Data i la presa de decisions. Però, a diferència del petroli, les dades no s\'esgoten quan s\'usen: es poden reutilitzar, combinar i analitzar infinites vegades.',
          'Cal distingir tres conceptes clau: les dades són fets en brut sense context (25, 01/03/2025, 18°C); la informació és dada amb significat ("El dia 1 de març la temperatura màxima va ser de 25°C"); i el coneixement és informació interpretada amb experiència per prendre decisions ("Segons la tendència, cal preparar-se per a una onada de calor"). Les dades són els ingredients, la informació és el plat cuinat, i el coneixement és saber cuinar.',
          'Les dades s\'organitzen en datasets (conjunts de dades estructurats): poden ser dades estructurades (taules SQL, CSV), semiestructurades (JSON, XML) o no estructurades (imatges, vídeos, textos). Plataformes com Kaggle ofereixen milers de datasets públics per a anàlisi i entrenament de models d\'IA. Les dades obertes (Open Data) publicades per governs i institucions (com l\'Ajuntament de Barcelona a opendata-ajuntament.barcelona.cat) també són una font molt valuosa.',
          'El valor de les dades no està en tenir-ne moltes, sinó en saber-les aprofitar. FreshMarket genera dades de vendes als TPVs cada dia, però ningú les analitza. Aquestes dades "adormides" podrien predir la demanda de demà, identificar productes que es compren junts, detectar l\'hora punta de cada botiga i personalitzar ofertes per a cada client. La dada sense anàlisi és només un cost d\'emmagatzematge.',
        ],
        table: {
          headers: ['Tipus de dada', 'Format', 'Exemple en els nostres casos', 'Tecnologia'],
          rows: [
            ['Estructurada', 'Taules, files, columnes', 'Vendes diàries al TPV de FreshMarket', 'PostgreSQL, MySQL, Excel'],
            ['Semiestructurada', 'JSON, XML, logs', 'Dades de sensors IoT (timestamp, valor, id_sensor)', 'MongoDB, Elasticsearch'],
            ['No estructurada', 'Imatges, vídeo, text lliure', 'Fotos de peces per visió artificial (AutoParts)', 'S3, Data Lake, MinIO'],
            ['Temporal (time-series)', 'Sèries ordenades per temps', 'Vibració d\'un capçal CNC cada segon (MetalPrecis)', 'InfluxDB, TimescaleDB'],
            ['Geoespacial', 'Coordenades, polígons', 'Posició GPS dels vehicles de LogiTrans', 'PostGIS, Mapbox'],
          ]
        },
      },
      {
        title: 'Cicle de Vida de la Dada',
        paragraphs: [
          'Les dades no existeixen per sempre: neixen, s\'utilitzen i han de morir (eliminar-se) quan ja no són necessàries. Gestionar correctament el cicle de vida és crucial tant per eficiència (no emmagatzemar dades que ja no serveixen) com per compliment legal (RGPD exigeix eliminar dades personals quan s\'acaba la finalitat).',
          'Per a cada etapa del cicle, cal definir: quines dades, on s\'emmagatzemen, qui hi pot accedir, durant quant de temps, i com s\'eliminen de forma segura.',
        ],
        diagram: `
flowchart LR
    C[1. Creació<br/>Sensors, formularis<br/>APIs, imports] --> E[2. Emmagatzematge<br/>BD, Data Lake<br/>Encriptació en repòs]
    E --> P[3. Processament<br/>ETL, neteja<br/>Agregació, enriquiment]
    P --> U[4. Utilització<br/>Dashboards, ML<br/>Reports, decisions]
    U --> A[5. Arxiu<br/>Backup, Cold Storage<br/>Compliment legal]
    A --> D[6. Eliminació<br/>Segura i verificable<br/>Dret a l'oblit RGPD]

    style C fill:#22c55e,color:#fff
    style D fill:#ef4444,color:#fff
        `,
      },
      {
        title: 'Governança de Dades',
        paragraphs: [
          'La governança de dades és el marc de polítiques, processos i rols que assegura que les dades d\'una organització són fiables, segures i ben gestionades. Sense governança, cada departament fa el que vol amb les dades, es generen duplicats i inconsistències, i ningú sap quines dades existeixen ni on són.',
          'Un exemple senzill: si FreshMarket té un producte que es diu "Tomàquet de Montserrat" a una botiga i "Tomate Montserrat" a una altra, el sistema de predicció de demanda els tractarà com dos productes diferents. La governança evita això definint un catàleg únic de productes (master data).',
        ],
        diagram: `
flowchart TB
    GOV[Governança de Dades]

    GOV --> QUAL[Qualitat<br/>Dades correctes, completes<br/>i consistents]
    GOV --> SEC[Seguretat<br/>Qui pot accedir a què<br/>Encriptació, auditoria]
    GOV --> PRIV[Privacitat<br/>RGPD, consentiment<br/>Minimització de dades]
    GOV --> CAT[Catàleg<br/>Quines dades existeixen<br/>On són, qui les crea]
    GOV --> ROLS[Rols<br/>Data Owner: decideix<br/>Data Steward: gestiona]

    style GOV fill:#1e40af,color:#fff
        `,
      },
      {
        title: 'Ciberseguretat: la tríada CIA',
        paragraphs: [
          'La seguretat de la informació es basa en tres pilars coneguts com la tríada CIA (no confondre amb l\'agència d\'intel·ligència americana!): Confidencialitat, Integritat i Disponibilitat.',
          'Confidencialitat: que les dades només les vegin els autoritzats. Exemple: la història clínica d\'un pacient de ClinicaSalut no la pot veure qualsevol empleat. Integritat: que les dades no es modifiquin sense autorització. Exemple: que ningú pugui alterar els registres de qualitat d\'AutoParts per amagar defectes. Disponibilitat: que les dades i sistemes estiguin accessibles quan es necessiten. Exemple: el sistema de reg de AgroTech no pot quedar inaccessible en plena onada de calor.',
          'Segons el sector, la prioritat varia: en sanitat i finances, la Confidencialitat és prioritària. En manufactura i OT, la Disponibilitat ho és.',
        ],
      },
      {
        title: 'Amenaces principals i com protegir-se',
        paragraphs: [
          'Conèixer les amenaces és el primer pas per protegir-se. El 2023, el ransomware va ser l\'amenaça número 1 a Europa, seguit del phishing i els atacs a la cadena de subministrament.',
        ],
        table: {
          headers: ['Amenaça', 'Com funciona', 'Exemple real', 'Com protegir-se'],
          rows: [
            ['Ransomware', 'Xifra tots els arxius i demana rescat en Bitcoin', 'Hospital Clínic BCN (març 2023): van robar 4.5TB de dades', 'Backups 3-2-1, segmentació xarxa, EDR'],
            ['Phishing', 'Email fals que sembla legítim per robar credencials', 'El "CEO" envia un email urgent demanant una transferència', 'Formació, MFA, filtratge email'],
            ['Atac a la cadena de subministrament', 'Comprometre un proveïdor per accedir als seus clients', 'SolarWinds (2020): afectà 18.000 empreses via una actualització maliciosa', 'SBOM, auditoria proveïdors, SCA'],
            ['Insider threat', 'Empleat que roba o destrueix dades', 'Tècnic descontent que esborra la base de dades', 'Mínim privilegi, monitorització, offboarding segur'],
          ]
        },
        exemples: [
          { titol: 'L\'atac a l\'Hospital Clínic', descripcio: 'El març de 2023, el grup RansomHouse va atacar l\'Hospital Clínic de Barcelona. Van robar 4.5 terabytes de dades de pacients i les van publicar a la dark web. L\'hospital va haver de cancel·lar 150 cirurgies i 3.000 consultes. Va trigar setmanes a recuperar-se. El vector d\'entrada va ser un email de phishing a un empleat. Una sola persona, un sol clic.' },
        ],
      },
      {
        title: 'Zero Trust: no confiïs en ningú',
        paragraphs: [
          '"Never trust, always verify" — El model Zero Trust assumeix que cap usuari, dispositiu o xarxa és de confiança per defecte. No importa si estàs dins l\'oficina o connectat per VPN: cada accés es verifica cada vegada. És com un edifici on cada porta demana la identificació, no només la de l\'entrada.',
          'El model tradicional de seguretat era un "castell amb fossat": un firewall protegeix el perímetre i tot el que està dins és de confiança. Però avui, amb el cloud, el teletreball i els dispositius IoT, el perímetre no existeix. Zero Trust és l\'alternativa moderna.',
        ],
        list: [
          'Verificació explícita: Cada sol·licitud d\'accés es valida amb múltiples factors (identitat, dispositiu, ubicació, hora, comportament)',
          'Mínim privilegi: Cada usuari i sistema només pot accedir al que estrictament necessita, i durant el temps mínim necessari (just-enough, just-in-time)',
          'Assumir compromís: Dissenyar el sistema com si l\'atacant ja estigués dins. Segmentar per limitar el dany (blast radius)',
          'Microsegmentació: Dividir la xarxa en zones petites. Un sensor IoT compromès no ha de poder accedir a la base de dades de clients',
          'MFA sempre: Autenticació multi-factor per a qualsevol accés crític. El password sol no és suficient',
          'Monitorització contínua: Detectar anomalies en temps real (un usuari que accedeix a les 3AM des d\'un país on no opera)',
        ],
      },
      {
        title: 'RGPD i regulació',
        paragraphs: [
          'El Reglament General de Protecció de Dades (RGPD) és la llei europea que regula el tractament de dades personals. Qualsevol empresa que tracti dades de ciutadans europeus l\'ha de complir, amb multes de fins al 4% de la facturació global. Per als nostres casos empresarials, és fonamental entendre\'l perquè gairebé tots tracten dades personals.',
          'El RGPD es basa en uns principis clars: les dades s\'han de recollir amb consentiment i per a una finalitat concreta, no es poden guardar indefinidament, i el ciutadà té drets (accés, rectificació, eliminació, portabilitat).',
        ],
        table: {
          headers: ['Normativa', 'Àmbit', 'Aplicació als nostres casos'],
          rows: [
            ['RGPD', 'UE, dades personals', 'Tots els casos: dades de clients, empleats, pacients'],
            ['LOPDGDD', 'Espanya', 'Complement del RGPD + drets digitals laborals (monitorització conductors a LogiTrans)'],
            ['NIS2', 'UE, ciberseguretat', 'ClinicaSalut (sector essencial), AutoParts (cadena subministrament automoció)'],
            ['EU AI Act', 'UE, intel·ligència artificial', 'Chatbot triatge ClinicaSalut (alt risc), visió artificial AutoParts (risc limitat)'],
            ['APPCC', 'Seguretat alimentària', 'FreshMarket: registre obligatori de temperatures'],
            ['EN 9100 / IATF 16949', 'Qualitat aeronàutica / automoció', 'MetalPrecis i AutoParts: traçabilitat i SPC'],
          ]
        },
        exemples: [
          { titol: 'RGPD a la pràctica: el gimnàs', descripcio: 'TechnoGym vol una app que registri quina màquina usa cada soci, a quina hora entra i surt, i el seu pes. Totes són dades personals. Necessiten: consentiment explícit (no pot ser obligatori per ser soci), finalitat clara ("millorar la teva experiència d\'entrenament"), base legal, accés limitat (el recepcionista no ha de veure el pes), dret d\'eliminació (si el soci marxa, les dades s\'esborren), i menció al web de la política de privacitat amb el DPO de contacte.' },
        ],
      },
      {
        title: 'Backup i Disaster Recovery',
        paragraphs: [
          'La pregunta no és "si" et passarà un desastre, sinó "quan". Un disc dur falla, un ransomware xifra les dades, un incendi destrueix el servidor, un empleat esborra una taula per error. Per això existeixen dues mètriques fonamentals:',
          'RPO (Recovery Point Objective): quantes dades pots perdre? Si el teu RPO és 1 hora, has de fer backup cada hora. Si perds les dades de l\'última hora, és acceptable. Si el RPO és 0 (zero pèrdua), necessites replicació en temps real.',
          'RTO (Recovery Time Objective): quant temps pots estar caigut? Si el teu RTO és 4 hores, has de poder restaurar el sistema complet en 4 hores. Un hospital necessita un RTO de minuts; una acadèmia pot tolerar unes hores.',
          'La regla d\'or és la 3-2-1: 3 còpies de les dades, en 2 suports diferents, amb 1 còpia fora del lloc (offsite/cloud).',
        ],
      },
    ]
  },
  6: {
    title: 'Metodologia de Transformació Digital',
    ra: 'RA6',
    sections: [
      {
        title: 'Alineació Estratègica: tecnologia al servei del negoci',
        paragraphs: [
          'La transformació digital no és un projecte tecnològic: és un projecte de negoci que utilitza tecnologia. Aquesta distinció és fonamental. Un projecte que "posa sensors a tot" sense un objectiu clar de negoci fracassarà. Un projecte que "redueix la merma de frescos un 50% usant sensors de temperatura i IA" té un objectiu, un KPI i una justificació econòmica.',
          'L\'estratègia de transformació digital ha d\'estar alineada amb l\'estratègia empresarial. Si FreshMarket vol competir en proximitat i qualitat (no en preu), la seva digitalització ha d\'enfocar-se en frescor (cadena de fred, predicció de demanda) i experiència client (app, fidelització), no en automatitzar magatzems com Mercadona.',
        ],
        diagram: `
flowchart TB
    EST[Estratègia Empresarial<br/>On volem ser en 5 anys?]
    EST --> TD[Estratègia de TD<br/>Com la tecnologia ens hi porta?]

    TD --> PROC[Processos<br/>Què automatitzem?]
    TD --> TECH[Tecnologia<br/>Quines THD usem?]
    TD --> PERS[Persones<br/>Qui forma i lidera?]
    TD --> DADES[Dades<br/>Quines dades recollim i per a què?]

    style EST fill:#1e40af,color:#fff
    style TD fill:#3b82f6,color:#fff
        `,
      },
      {
        title: 'Anàlisi DAFO Digital',
        paragraphs: [
          'El DAFO (Debilitats, Amenaces, Fortaleses, Oportunitats) és una eina d\'anàlisi estratègica imprescindible abans de qualsevol projecte de transformació digital. Permet identificar factors interns (fortaleses i debilitats) i externs (oportunitats i amenaces) que afecten l\'organització.',
          'Al vostre projecte, heu de fer un DAFO digital de l\'empresa del cas: quines fortaleses tecnològiques té (ex: ja tenen ERP), quines debilitats (ex: no recullen dades de producció), quines oportunitats ofereix la digitalització (ex: nou mercat online) i quines amenaces hi ha (ex: ciberatacs, competència digitalitzada).',
        ],
        table: {
          headers: ['Quadrant', 'Tipus', 'Preguntes clau', 'Exemple (FreshMarket)'],
          rows: [
            ['Fortaleses', 'Intern + Positiu', 'Quins actius digitals tenim? Quin talent intern?', 'TPVs a totes les botigues, personal jove obert al canvi'],
            ['Debilitats', 'Intern + Negatiu', 'On estem endarrerits? Quines dades ens falten?', 'Cadena de fred no monitoritzada, inventari manual'],
            ['Oportunitats', 'Extern + Positiu', 'Quines THD ens obren nous mercats?', 'Venda online, predicció de demanda amb IA, fidelització'],
            ['Amenaces', 'Extern + Negatiu', 'Quins riscos comporta la digitalització?', 'Ciberatacs, competència d\'Amazon Fresh, regulació RGPD'],
          ]
        },
      },
      {
        title: 'Digitalització per departaments',
        paragraphs: [
          'La digitalització afecta tots els departaments de l\'empresa. Cada àrea té eines i processos específics que es poden millorar amb tecnologia. És important que la transformació sigui transversal i que tots els departaments estiguin alineats.',
        ],
        table: {
          headers: ['Departament', 'Eines de digitalització', 'Beneficis clau'],
          rows: [
            ['Vendes i Màrqueting', 'CRM (Salesforce, HubSpot), automatització de campanyes, Big Data per segmentació', 'Personalització d\'ofertes, augment de vendes, mesura d\'efectivitat'],
            ['Finances i Comptabilitat', 'ERP (SAP, Odoo), facturació digital, anàlisi financera automatitzada', 'Reduir errors, informes en temps real, integració amb inventari'],
            ['Recursos Humans', 'HRM, reclutament digital, e-learning, control de presència', 'Contractació eficient, formació contínua, gestió del teletreball'],
            ['Operacions i Producció', 'IoT, robòtica, MES, impressió 3D, visió artificial', 'Eficiència, reducció de residus, flexibilitat productiva'],
            ['Logística', 'WMS, optimització de rutes amb IA, integració amb proveïdors', 'Menors costos d\'estoc, temps de lliurament optimitzats'],
            ['Atenció al Client', 'Chatbots, CRM omnicanal, anàlisi de sentiment', 'Resposta 24/7, fidelització, reducció càrrega manual'],
            ['Innovació (I+D)', 'Prototipat digital, impressió 3D, col·laboració cloud', 'Menors temps de llançament, productes personalitzats'],
            ['TI (Tecnologies Informació)', 'Cloud, ciberseguretat IA, automatització IT, DevOps', 'Escalabilitat, protecció millorada, reducció costos'],
          ]
        },
      },
      {
        title: 'Anàlisi de Maduresa Digital',
        paragraphs: [
          'Abans de planificar cap transformació, cal saber d\'on partim. L\'anàlisi de maduresa digital avalua en quin punt està l\'organització i ajuda a establir objectius realistes. No pots implementar IA si encara no tens les dades digitalitzades.',
          'La maduresa digital es mesura en 5 nivells. La majoria de les empreses dels nostres casos empresarials estan entre el nivell 1 i el 2: tenen processos manuals amb algunes eines digitals aïllades.',
        ],
        table: {
          headers: ['Nivell', 'Nom', 'Com es veu', 'Exemples dels nostres casos'],
          rows: [
            ['1 - Inicial', 'Paper i telèfon', 'Processos manuals, zero dades digitals', 'AgroTech (quadern paper), BuildCorp (PRL paper)'],
            ['2 - Emergent', 'Excel i email', 'Eines digitals aïllades, no integrades', 'LogiTrans (rutes amb Excel), MetalPrecis (traçabilitat Excel)'],
            ['3 - Definit', 'Sistemes integrats', 'ERP, CRM, processos estandarditzats', 'AutoParts (SAP), FreshMarket (TPVs)'],
            ['4 - Gestionat', 'Dades en temps real', 'IoT, dashboards, automatització parcial', 'Cap cas actual (objectiu del projecte!)'],
            ['5 - Optimitzat', 'IA i millora contínua', 'Predicció, prescripció, innovació basada en dades', 'SEAT Martorell (referència aspiracional)'],
          ]
        },
      },
      {
        title: 'Objectius SMART',
        paragraphs: [
          'Qualsevol projecte necessita objectius clars. "Volem digitalitzar-nos" no és un objectiu; és un desig. "Volem reduir la merma de frescos del 8% al 4% en 12 mesos usant sensors de temperatura i predicció de demanda" sí que ho és. La diferència és SMART.',
        ],
        table: {
          headers: ['Criteri', 'Significat', 'Mal exemple', 'Bon exemple'],
          rows: [
            ['Specific', 'Concret i ben definit', '"Millorar la qualitat"', '"Reduir la taxa de rebuig a estampació"'],
            ['Measurable', 'Quantificable amb un KPI', '"Ser més eficients"', '"Reduir del 4.5% al 2%"'],
            ['Achievable', 'Assolible amb els recursos disponibles', '"Zero defectes"', '"<2% amb visió artificial"'],
            ['Relevant', 'Alineat amb l\'estratègia', '"Posar sensors per tot"', '"Detectar defectes per retenir el client OEM"'],
            ['Time-bound', 'Amb termini concret', '"Algun dia"', '"En 12 mesos"'],
          ]
        },
      },
      {
        title: 'El Business Case: justificar la inversió',
        paragraphs: [
          'Cap direcció aprovarà un projecte de transformació digital sense un business case sòlid que respongui: quant costa, quant genera, i en quant temps es recupera la inversió. El business case és la diferència entre un bon projecte i un projecte que es queda al calaix.',
          'El càlcul és senzill: ROI = (Benefici anual - Cost anual) / Inversió inicial × 100. El Payback és el temps que trigues a recuperar la inversió: Payback = Inversió / (Benefici - Cost recurrent).',
        ],
        exemples: [
          { titol: 'Business Case: sensors de temperatura a FreshMarket', descripcio: 'Problema: merma 8% = 120.000€/any. Inversió: 8 botigues × 5 sensors × 30€ = 1.200€ (sensors) + 3.000€ (gateway + cloud + dashboard) = 4.200€. Cost recurrent: 600€/any (cloud + manteniment). Benefici: si reduïm la merma al 5% = estalvi de 45.000€/any. ROI = (45.000 - 600) / 4.200 = 1.057% (!). Payback = 4.200 / (45.000 - 600) = 35 dies. Amb 35 dies recuperes la inversió. Aquest és el tipus de business case que fa que un gerent digui "endavant!".' },
          { titol: 'Business Case: visió artificial a AutoParts', descripcio: 'Problema: scrap 4.5% de 22M€ = 990.000€/any. Inversió: 4 càmeres + il·luminació + PC = 20.000€ + desenvolupament model = 30.000€ = 50.000€. Cost recurrent: 5.000€/any. Si reduïm scrap al 2% = estalvi de 550.000€/any. ROI = (550.000 - 5.000) / 50.000 = 1.090%. Payback = 50.000 / 545.000 = 33 dies. Un altre ROI espectacular. La clau: les dades de partida són reals (el scrap de 4.5% existeix), no inventades.' },
        ],
      },
      {
        title: 'Fases del Projecte i Metodologies Àgils',
        paragraphs: [
          'Un projecte de transformació digital no es fa tot de cop. Es divideix en fases, cada una construint sobre l\'anterior. La clau és començar petit (MVP - Minimum Viable Product), demostrar valor ràpidament, i escalar si funciona.',
          'Les metodologies àgils (Scrum, Kanban) s\'apliquen perfectament a projectes de TD perquè permeten adaptar-se als canvis, lliurar valor incrementalment i obtenir feedback ràpid dels usuaris.',
        ],
        diagram: `
flowchart LR
    F1[Descobriment<br/>2-4 setmanes<br/>Entendre el problema<br/>Business Case] --> F2[Disseny<br/>2-4 setmanes<br/>Arquitectura<br/>THD, Cloud, Seguretat]
    F2 --> F3[MVP<br/>4-8 setmanes<br/>Prototip funcional<br/>Proves pilot]
    F3 --> F4[Escalat<br/>2-6 mesos<br/>Producció<br/>Formació, rollout]

    style F1 fill:#8b5cf6,color:#fff
    style F2 fill:#3b82f6,color:#fff
    style F3 fill:#22c55e,color:#fff
    style F4 fill:#06b6d4,color:#fff
        `,
        exemples: [
          { titol: 'Fases a FreshMarket', descripcio: 'Fase 1 (1 mes): instal·lar sensors de temperatura a les càmeres frigorífiques d\'UNA botiga pilot. Dashboard senzill amb alertes. Fase 2 (2 mesos): si funciona, estendre a les 8 botigues. Afegir inventari centralitzat. Fase 3 (3 mesos): model de predicció de demanda amb dades històriques del TPV. Fase 4 (6 mesos): e-commerce bàsic i programa de fidelització digital. Cada fase aporta valor per si sola i justifica la inversió de la següent.' },
        ],
      },
      {
        title: 'Gestió del Canvi: les persones primer',
        paragraphs: [
          'La raó número 1 per la qual fracassen els projectes de transformació digital no és la tecnologia, sinó les persones. Un sistema perfecte que ningú utilitza és un fracàs. La resistència al canvi és natural: les persones temen perdre el control, la seva feina, o haver d\'aprendre coses noves.',
          'Segons McKinsey, el 70% dels projectes de TD no assoleixen els objectius. I la causa principal és la manca de gestió del canvi. Les empreses inverteixen milions en tecnologia i cèntims en formació i comunicació.',
        ],
        list: [
          'Comunicar el "per què": la gent no resisteix el canvi, resisteix ser canviada. Explica el motiu del canvi, no només el "què"',
          'Lideratge visible: si el gerent segueix usant Excel mentre l\'equip ha de usar el nou dashboard, el missatge és clar: el canvi no és important',
          'Quick wins: comença amb un projecte petit que doni resultats visibles en setmanes. L\'èxit genera confiança per al següent pas',
          'Champions digitals: identifica persones entusiastes dins cada equip que ajudin els seus companys. L\'operari de MetalPrecis de 52 anys confiarà més en un company que en el consultor extern',
          'Formació pràctica: no cursos teòrics de 40 hores. Formació curta, al lloc de treball, amb el sistema real. "Fes clic aquí per veure l\'OEE de la teva màquina"',
          'Mesurar i celebrar: fer visibles els resultats ("des que tenim els sensors, hem estalviat 3.000€ en merma"). La gent ha de veure que el canvi ha valgut la pena',
        ],
      },
      {
        title: 'KPIs de Transformació Digital',
        paragraphs: [
          'Un projecte sense KPIs és com conduir sense velocímetre: no saps si vas bé fins que xoques. Per a cada objectiu SMART, cal definir un KPI clar que es pugui mesurar de forma automàtica (si pot ser) i regular.',
        ],
        table: {
          headers: ['Àrea', 'KPI', 'Com es mesura', 'Exemple dels nostres casos'],
          rows: [
            ['Producció', 'OEE', '(Disponibilitat × Rendiment × Qualitat) × 100', 'MetalPrecis: de 55% a 75%'],
            ['Qualitat', 'Taxa defectes (PPM)', 'Peces defectuoses / milió de peces', 'AutoParts: de 15 a <5 PPM'],
            ['Manteniment', 'MTBF', 'Hores entre avaries', 'MetalPrecis: de 200h a 500h'],
            ['Logística', 'On-Time Delivery', '% lliuraments a temps', 'LogiTrans: de 85% a 97%'],
            ['Energia', 'kWh per unitat', 'Consum / producció', 'TechnoGym: -20% consum energètic'],
            ['Client', 'NPS', 'Enquesta (0-10)', 'HotelMar: de 6.5 a 8.0'],
            ['Abandonament', 'Churn Rate', '% clients que marxen / total', 'TechnoGym: de 18% a 10%'],
            ['Digital', 'Adopció', '% empleats que usen les eines', 'Objectiu: >80% en 3 mesos'],
          ]
        },
      },
      {
        title: 'Entregables del Projecte (Mòdul 1665)',
        paragraphs: [
          'L\'assignatura s\'avalua mitjançant una única activitat amb tres parts. Cada Resultat d\'Aprenentatge (RA) contribueix amb 1/6 de la nota:',
        ],
        list: [
          'DOCUMENTACIÓ (50%): Anàlisi del cas empresarial + Arquitectura tecnològica + Pla d\'implementació i seguretat. Seguiu la plantilla secció per secció. Aquí s\'avaluen principalment els RA1 a RA6.',
          'PROTOTIPAT (20%): Implementació funcional amb eines gratuïtes. No ha de ser complet: ha de demostrar la viabilitat d\'UNA part de la vostra proposta. Millor un prototip petit que funcioni que un de gran que no funcioni. Avalua RA2, RA3, RA4 i RA6.',
          'PRESENTACIÓ (30%): Exposició oral de 15 minuts + demostració en viu del prototip + respostes a preguntes del tribunal. Prepareu-vos per justificar les vostres decisions tècniques i de negoci. Actua com a avaluació transversal de tots els RA.',
        ],
        exemples: [
          { titol: 'Consell final', descripcio: 'No intenteu resoldre tots els problemes del cas. Escolliu 2-3 problemes prioritaris, proposeu una solució coherent, i prototipeu la part més impactant. Un projecte enfocat i ben justificat (amb business case, ROI i KPIs) val molt més que un projecte que vol abastar-ho tot sense profunditat.' },
        ],
      },
    ]
  },
}

export default function Teoria() {
  const { tema } = useParams()
  const temaId = tema ? parseInt(tema) : null
  const currentTema = temaId ? temes[temaId] : null

  if (!currentTema) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Continguts Teòrics</h1>
        <p className="text-gray-600">Selecciona un tema per veure el contingut.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(temes).map(([id, tema]) => (
            <Link
              key={id}
              to={`/teoria/${id}`}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover"
            >
              <div className="text-sm text-primary-600 font-medium mb-2">{tema.ra}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tema {id}: {tema.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {tema.sections.length} seccions
              </p>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  const prevTema = temaId > 1 ? temaId - 1 : null
  const nextTema = temaId < 6 ? temaId + 1 : null

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="text-sm text-primary-600 font-medium mb-2">{currentTema.ra}</div>
        <h1 className="text-3xl font-bold text-gray-900">
          Tema {temaId}: {currentTema.title}
        </h1>
      </div>

      {currentTema.sections.map((section, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>

          {/* Paragraphs (new: multi-paragraph support) */}
          {section.paragraphs && section.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 mb-4 leading-relaxed">{p}</p>
          ))}

          {/* Single content (legacy) */}
          {section.content && (
            <p className="text-gray-600 mb-4 leading-relaxed">{section.content}</p>
          )}

          {section.diagram && (
            <MermaidDiagram chart={section.diagram} className="my-6" />
          )}

          {section.table && (
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {section.table.headers.map((header, i) => (
                      <th key={i} className="bg-gray-100 border border-gray-300 px-4 py-2 text-left font-semibold text-sm">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                      {row.map((cell, j) => (
                        <td key={j} className="border border-gray-300 px-4 py-2 text-sm">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.list && (
            <ul className="list-disc list-inside space-y-2 text-gray-600 my-4">
              {section.list.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          )}

          {/* Examples (new: highlighted real-world examples) */}
          {section.exemples && (
            <div className="mt-6 space-y-3">
              {section.exemples.map((ex, i) => (
                <div key={i} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-1">{ex.titol}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{ex.descripcio}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between">
        {prevTema ? (
          <Link to={`/teoria/${prevTema}`} className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
            <ChevronLeft className="w-5 h-5" />
            <span>Tema {prevTema}</span>
          </Link>
        ) : <div />}
        {nextTema ? (
          <Link to={`/teoria/${nextTema}`} className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
            <span>Tema {nextTema}</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
