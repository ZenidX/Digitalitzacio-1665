// Dades del projecte d'exemple resolt "AccésCentre" — control d'accessos i assistència
// Font: Enunciat Projecte Exemple_ Control d'accessos Projecte RESOLT (equip docent, mòdul 1665)
// Servei com a referència del nivell d'exigència de les Activitats 1, 2 i 3. No és una plantilla per copiar.

export const enunciat = {
  descripcio:
    "Disseny i implantació d'un sistema de control d'accessos a les instal·lacions d'una escola mitjançant targetes de proximitat (RFID/NFC). El sistema obre les portes dels espais amb accés restringit segons els permisos de cada usuari. No tots els espais estan tancats: les aules resten obertes, mentre que espais com tallers, sales de professorat, oficines, direcció, sales comunes d'estudi i l'entrada principal disposen de pany electrònic controlat. A més del control físic d'accés, el sistema fa control d'assistència de professorat i alumnat, que tenen assignats els seus horaris: es registra qui entra a cada espai i es contrasta amb l'horari previst.",
  motivacio: [
    "Substituir les claus físiques per un sistema centralitzat de permisos, més segur i fàcil de gestionar: altes, baixes i canvis de permisos immediats, i targetes perdudes anul·lables a l'instant.",
    "Controlar qui pot entrar a cada espai i quan, segons el rol i l'horari.",
    "Automatitzar el registre d'assistència de professorat i alumnat, evitant fulls de signatures i el passar llista manualment.",
    "Disposar d'un històric d'accessos i d'assistència consultable (auditoria, absentisme, incidències).",
    "Treballar sobre una demanda real i completa que combina maquinari (lectors, panys), infraestructura, backend i aplicacions web/mòbil.",
  ],
  requeriments: [
    {
      titol: "Maquinari de porta",
      text: "Lector de targetes de proximitat + controlador (per exemple microcontrolador o Raspberry Pi) que acciona el pany elèctric a cada punt d'accés controlat. Ha de permetre l'obertura local encara que es perdi la connexió amb el servidor (llista de permisos en memòria) i sincronitzar-se en recuperar-la. Botó de sortida i sensor de porta oberta.",
    },
    {
      titol: "Infraestructura",
      text: "Xarxa segura per als dispositius de porta, servidor (local o núvol), base de dades d'usuaris, targetes, espais, permisos i registres, còpies de seguretat i alta disponibilitat (l'accés no pot dependre d'un únic punt de fallada).",
    },
    {
      titol: "Backend / API",
      text: "Gestió d'usuaris i rols (alumnat, professorat, administració, direcció, manteniment), gestió de targetes, definició d'espais i regles d'accés (qui, on i en quines franges), càrrega dels horaris, validació d'accessos en temps real, càlcul i registre d'assistència contrastant l'accés amb l'horari, i registre d'auditoria de tots els esdeveniments.",
    },
    {
      titol: "Frontend web (gestió)",
      text: "Panell d'administració per donar d'alta usuaris i targetes, assignar permisos i horaris, definir espais i lectors, veure accessos en temps real, consultar històrics i informes d'assistència i absentisme, i gestionar incidències (targeta perduda, porta forçada, accés denegat).",
    },
    {
      titol: "Aplicació mòbil (opcional)",
      text: "Consulta de l'assistència pròpia, justificació d'absències, avisos i, per a determinats rols, obertura de porta des del mòbil (credencial virtual).",
    },
  ],
  lliurables:
    "Documentació tècnica (arquitectura, esquema de connexions, model de dades, especificació d'API, catàleg d'espais i regles, manual d'instal·lació, document de seguretat), software i maquinari (prototip funcional d'almenys un punt d'accés, backend amb API, web de gestió, codi versionat) i presentació (demostració obrint una porta, denegant un accés fora d'horari i mostrant el registre d'assistència).",
  opcionals: [
    "Credencial al mòbil (NFC / codi QR / BLE) com a alternativa a la targeta física.",
    "Integració amb el sistema de gestió acadèmica del centre per importar usuaris i horaris.",
    "Notificacions a les famílies quan l'alumnat no registra l'entrada a primera hora.",
    "Control d'aforament de sales comunes d'estudi i tallers.",
    "Control d'accés a l'entrada principal amb comptador de persones dins l'edifici (útil en cas d'evacuació).",
    "Integració amb alarmes i càmeres davant d'accessos forçats o portes obertes massa estona.",
  ],
}

export const activitat1 = {
  fitxa: [
    ["Nom del projecte", "AccésCentre — control d'accessos amb targeta de proximitat i assistència automàtica"],
    [
      "Empresa / organització",
      "Institut Vallmorena (fictici, població de ~40.000 hab.). Centre educatiu públic que imparteix ESO, Batxillerat i cicles de FP (Fabricació Mecànica, Electricitat i Automàtica, Informàtica). Funciona com una organització de serveis educatius amb accés diari de centenars de persones.",
    ],
    ["Sector", "Educació — serveis públics (administració educativa)."],
    [
      "Mida",
      "~900 alumnes, ~85 persones de professorat, ~15 de PAS (consergeria, secretaria, manteniment). 1 edifici principal (3 plantes) + 1 annex de tallers de FP. ~30 aules ordinàries, ~12 espais amb accés que caldria restringir (5 tallers, 3 laboratoris, sala de professorat, 2 departaments, direcció, secretaria, 2 magatzems, arxiu, servidor/rack), biblioteca amb aforament, 3 portes d'accés a l'edifici.",
    ],
    [
      "Activitat principal",
      "Impartició de docència reglada. Cada grup té un horari setmanal que assigna franja, aula i professorat; el professorat té el seu horari; consergeria obre i tanca espais i custodia claus.",
    ],
    [
      "Situació de partida (grau de digitalització actual)",
      "Digitalització molt baixa en accessos i assistència. Les portes s'obren amb claus físiques; hi ha desenes de còpies i un registre en paper a consergeria. Passar llista es fa manualment a cada sessió i el professorat ho transcriu després al programa de gestió acadèmica, sovint amb dies de retard. No hi ha registre de qui entra als tallers, laboratoris o magatzems fora d'hora. Les claus perdudes obliguen a canviar el pany (unes 5-6 vegades l'any). L'aforament de la biblioteca es controla \"a ull\". En cas d'evacuació no se sap qui hi ha dins de l'edifici. La Wi-Fi és irregular a l'annex de tallers.",
    ],
    [
      "Problema / oportunitat",
      "(1) Seguretat i gestió de claus: cap control real de qui té accés a què; una còpia perduda compromet un espai fins que es canvia el pany. (2) Absentisme detectat tard: quan la família rep l'avís, sovint ja fa dies de l'absència; es perd la capacitat d'intervenció preventiva. (3) Temps docent: passar llista i transcriure-la consumeix temps lectiu cada sessió. (4) Manca de traçabilitat: incidents als tallers (eines, danys) sense saber qui hi era. (5) Seguretat de les persones: sense llista de presents, l'evacuació és insegura. Oportunitat de resoldre-ho amb un sistema propi, integrable amb la gestió acadèmica i reutilitzable com a projecte real per als tres cicles d'informàtica.",
    ],
  ],
  idea: {
    text: "AccésCentre digitalitza d'extrem a extrem dos processos que avui són manuals i desconnectats: l'accés físic als espais i el control d'assistència. La clau del projecte és que són el mateix esdeveniment: quan una persona passa la targeta per un lector, el sistema decideix si obre la porta i, si aquell lector està en una aula amb classe, registra l'assistència contrastant-la amb l'horari previst.",
    peces: [
      {
        nom: "Portal web (DAW)",
        text: "Per a consergeria, secretaria, tutories i direcció: alta de persones i credencials, definició d'espais, lectors i regles d'accés (qui pot entrar, on i en quines franges), càrrega dels horaris, monitor d'accessos en temps real, informes d'assistència i absentisme, gestió d'incidències (targeta perduda, porta forçada, accés denegat repetit) i panell d'evacuació amb la llista de presents. També construeix i manté l'API REST que integra tot el sistema.",
      },
      {
        nom: "App mòbil (DAM)",
        text: "Multiplataforma — Android i iOS — per a alumnat, famílies i professorat: consulta de l'assistència pròpia o dels fills, justificació d'absències amb adjunt, notificacions (absència de primera hora, resolució d'una justificació, avís de porta forçada per al personal TIC), credencial virtual (NFC/BLE/QR) per obrir portes segons el rol, i consulta d'aforament dels espais comuns.",
      },
      {
        nom: "Infraestructura (ASIX)",
        text: "Xarxa, servidor i dispositius de porta: controladores a cada punt d'accés controlat (lector + relé de pany + botó de sortida + sensor de porta), amb funcionament autònom (llista de permisos en memòria) quan cau la connexió i sincronització en recuperar-la; un node local al centre que garanteix el servei d'accés sense Internet; desplegament del backend i la BBDD en núvol híbrid; segmentació de xarxa amb VLAN dedicada als dispositius de porta; alta disponibilitat, còpies de seguretat, VPN, TLS i integració amb la central d'alarma i CCTV.",
      },
    ],
    millora:
      "La millora per a l'organització és directa: les claus físiques dels espais crítics es poden anul·lar a l'instant, l'assistència es registra sola i en temps real (i la família s'assabenta el mateix matí), cada accés a un taller o magatzem queda traçat, i en una evacuació hi ha una llista fiable de qui hi ha a dins.",
  },
  objectiusEstrategics: {
    headers: ["#", "Objectiu estratègic", "Indicador i fita"],
    rows: [
      [
        "E1",
        "Millorar la seguretat de les instal·lacions i el control de claus",
        "100 % dels espais crítics amb credencial revocable; anul·lació d'una credencial perduda en < 5 min; 0 canvis de pany per pèrdua de clau el primer curs (partida: ~6/any).",
      ],
      [
        "E2",
        "Detectar l'absentisme el mateix dia",
        "Temps entre l'absència de 1a hora i l'avís a la família: de 5-8 dies a < 2 hores.",
      ],
      [
        "E3",
        "Recuperar temps lectiu dedicat a passar llista",
        "De ~6 min/sessió a < 1 min; ≥ 90 % de sessions amb assistència registrada automàticament.",
      ],
      [
        "E4",
        "Garantir la traçabilitat dels accessos a espais crítics",
        "Del 0 % al 100 % d'accessos a tallers, laboratoris i magatzems registrats i consultables.",
      ],
      [
        "E5",
        "Assegurar la continuïtat del control d'accés i la seguretat en evacuació",
        "Disponibilitat del servei d'obertura ≥ 99,9 %; obertura garantida sense Internet; llista de presents disponible en < 30 s en activar el mode evacuació.",
      ],
    ],
  },
  objectiusDigitalitzacio: {
    headers: ["Deriva de", "Objectiu de digitalització"],
    rows: [
      [
        "E1",
        "Implantar una gestió centralitzada de credencials i perfils d'accés (alta, baixa i canvi de permisos immediats) amb targeta RFID xifrada i credencial al mòbil.",
      ],
      [
        "E1, E4",
        "Desplegar panys electrònics amb controladora als 12 espais crítics i a les 3 portes d'edifici, amb registre de cada esdeveniment d'accés.",
      ],
      [
        "E2, E3",
        "Registrar l'assistència automàticament contrastant l'accés a l'aula amb l'horari carregat des del sistema de gestió acadèmica, i notificar les absències de primera hora a les famílies.",
      ],
      [
        "E3",
        "Oferir al professorat una validació ràpida de la llista a l'aula (confirmació/edició en pocs segons) des de web o app.",
      ],
      [
        "E5",
        "Mantenir un node local i controladores amb permisos en memòria per operar sense Internet, i un mode evacuació que llisti els presents per zona.",
      ],
    ],
  },
  kpis: {
    headers: ["KPI", "Definició", "Valor de partida (estimat)", "Objectiu", "Període"],
    rows: [
      ["Cobertura d'assistència automàtica", "Sessions amb assistència registrada pel sistema / sessions totals", "0 %", "≥ 90 %", "1r trimestre d'ús"],
      ["Latència d'avís d'absència", "Temps entre 1a hora i notificació a la família", "5-8 dies", "< 2 h", "Mensual"],
      ["Anul·lació de credencials", "Temps mitjà des de l'avís de pèrdua fins a la revocació", "hores/dies", "< 5 min", "Continu"],
      ["Traçabilitat d'espais crítics", "Accessos registrats / accessos estimats a tallers-laboratoris-magatzems", "0 %", "100 %", "Continu"],
      ["Disponibilitat del servei d'obertura", "Temps amb obertura operativa / temps total", "s/d", "≥ 99,9 %", "Mensual"],
      ["Incidències de porta ateses", "Incidències resoltes dins de 24 h / total", "s/d", "≥ 95 %", "Mensual"],
    ],
  },
  necessitats: {
    presents:
      "Obertura fiable i ràpida (< 1 s) també sense Internet; permisos per rol i franja horària; anul·lació immediata de targetes; registre íntegre d'esdeveniments; càrrega d'horaris i matrícules des del sistema de gestió acadèmica; funcionament amb Wi-Fi feble a l'annex (cablejat PoE per als lectors); compliment estricte de la normativa d'evacuació (les portes de sortida d'emergència han d'obrir sempre).",
    futures:
      "Credencial 100 % al mòbil (retirada progressiva de la targeta física); control d'aforament de biblioteca i tallers amb comptador; notificació a les famílies configurable (llindars, canal); detecció d'anomalies i predicció de risc d'absentisme amb IA; integració amb reserva d'espais i amb el registre de préstec d'eines; bessó digital de l'edifici per a simulacres d'evacuació; obertura per matrícula de vehicle al pàrquing del professorat.",
  },
  abast: {
    daw: "Desenvolupa una aplicació web responsive per a consergeria, secretaria, tutories i direcció. Concentra tota la configuració i l'explotació del sistema: alta i cerca de persones (alumnat, professorat, PAS, externs) i de credencials, definició d'espais, lectors i controladores, edició de perfils i regles d'accés (qui / on / quines franges), càrrega i revisió dels horaris, monitor d'accessos en temps real amb filtres, validació de la llista d'assistència per part del professorat, informes d'assistència, retards i absentisme per grup i per alumne/a, gestió d'incidències i panell d'evacuació. A més, DAW construeix i manté l'API REST que consumeixen el portal, l'app mòbil i les controladores, i que rep també els esdeveniments per MQTT: és la peça d'integració de tot el sistema.",
    dam: "Desenvolupa l'aplicació per a alumnat, famílies i professorat. Per a l'alumnat i les famílies: consulta de l'assistència (pròpia o dels fills) amb detall per dia i sessió, justificació d'absències amb adjunt de document, i notificacions push (absència de primera hora, canvi d'estat d'una justificació). Per al professorat: passar/validar llista des del mòbil quan el registre automàtic falli, consulta del seu horari i avisos. Per als rols autoritzats (professorat, consergeria, manteniment): credencial virtual per obrir portes mitjançant NFC, BLE o QR segons el maquinari del lector. Per a tothom: consulta de l'aforament dels espais comuns. Com que a l'annex la connectivitat és irregular, l'app funciona amb cau local i cua de sincronització per a les accions que no siguin obertura de porta en temps real.",
    asix: "S'encarrega del maquinari de porta: a cada punt controlat, una controladora (microcontrolador o mini-PC) connectada a un lector de proximitat, el relé del pany elèctric, el botó de sortida (REX) i el sensor de porta (contacte magnètic). La controladora manté una llista de permisos en memòria i decideix l'obertura localment (edge), fins i tot sense xarxa, i sincronitza en recuperar-la. ASIX desplega un node local al centre (servidor de campus) que fa de fog: agrega esdeveniments, serveix la consola de consergeria en local si cau Internet i replica cap al núvol. Al núvol (model híbrid) hi van el backend, la BBDD gestionada, l'emmagatzematge d'objectes i els informes. ASIX dissenya la xarxa segmentada (VLAN de gestió, de dispositius de porta/OT, de Wi-Fi corporativa i de convidats), amb DMZ per publicar l'API, cablejat PoE per a lectors i controladores, enllaç 4G/5G de reserva per al node local, VPN d'administració, TLS a totes les comunicacions, 2FA per als administradors, còpies de seguretat amb pla de restauració, monitoratge i integració amb la central d'alarma i CCTV.",
    foraAbast: [
      "Substitució de tots els panys del centre: només els 12 espais crítics i les 3 portes d'edifici; les aules ordinàries resten obertes (només hi ha lector d'assistència, no pany electrònic).",
      "Torns/molinets i control anti-tailgating a l'entrada: es preveu porta amb lector i sensor, però evitar que algú es coli darrere d'una altra persona queda com a mesura organitzativa + CCTV, no tècnica.",
      "Videovigilància: el projecte s'integra amb l'alarma/CCTV existent (rep i envia avisos) però no desplega ni gestiona càmeres.",
      "Gestió acadèmica (matrícula, avaluació, comunicats generals): AccésCentre consumeix horaris i matrícules del sistema de gestió acadèmica, no el substitueix.",
      "Control horari laboral del personal (fitxatge a efectes de nòmina): fora d'abast; el registre del professorat és només per a organització i evacuació.",
      "Pagament de res (menjador, sortides): fora d'abast.",
      "Obertura per matrícula de vehicle i bessó digital d'evacuació: es dissenyen com a evolució.",
    ],
  },
  diagramaContext: `flowchart TD
    SYS(("AccésCentre<br/>sistema de control<br/>d'accessos i assistència"))
    ALU["Alumnat"] --> SYS
    FAM["Famílies"] --> SYS
    PROF["Professorat"] --> SYS
    CONS["Consergeria"] --> SYS
    DIR["Direcció"] --> SYS
    ADM["Administrador TIC"] --> SYS
    MANT["Manteniment"] --> SYS
    CTRL["Controladores de porta<br/>(OT: lectors, panys, sensors)"] <--> SYS
    SYS <--> SGA["Sistema de gestió acadèmica<br/>(horaris i matrícules ⇄ assistència)"]
    SYS --> SSO["SSO del Departament"]
    SYS --> MAIL["Correu / Push"]
    SYS <--> ALARM["Central d'alarma i CCTV"]

    style SYS fill:#3b82f6,color:#fff
    style CTRL fill:#f59e0b,color:#000`,
  diagramaContextLlegenda:
    "Cercle central: el sistema AccésCentre com a caixa única (nivell de context / C4 nivell 1). Caixes amb vora: actors externs — persones (alumnat, famílies, professorat, consergeria, direcció, administrador TIC, manteniment), sistemes de tercers (gestió acadèmica, SSO, correu, push, alarma/CCTV) i dispositius (controladores de porta, que són el component OT). Les fletxes indiquen els fluxos d'informació principals i qui envia i qui rep. La integració amb gestió acadèmica és bidireccional: n'entren horaris i matrícules, i se li retornen les marques d'assistència.",
  itOt: {
    componentOT:
      "El projecte té un component OT clar i central: el maquinari de control de porta distribuït pels 15 punts d'accés (12 espais crítics + 3 portes d'edifici).",
    elements: [
      "Sensors/entrades: lector de proximitat RFID/NFC (13,56 MHz, targeta xifrada tipus MIFARE DESFire); botó de sortida (REX); sensor de porta (contacte magnètic reed); opcionalment sensor de sabotatge (tamper) a la caixa de la controladora.",
      "Actuadors: relé que governa el pany elèctric (electroimant o pestell motoritzat). A les vies d'evacuació, pany fail-safe amb barra antipànic (obre sempre en tall d'alimentació); als magatzems i rack, fail-secure.",
      "Controladora per punt d'accés (microcontrolador tipus ESP32 o mini-PC tipus Raspberry): llegeix el lector, aplica la llista de permisos local, acciona el relé, vigila el sensor de porta i encua els esdeveniments.",
      "Node local (edge/fog) al rack del centre: concentra les controladores, manté la còpia mestra de permisos i horaris, i sincronitza amb el núvol.",
      "SAI al rack i a les portes d'edifici per garantir el servei durant talls elèctrics.",
    ],
    connexio: [
      "Lector ↔ controladora: protocol de camp OSDP sobre RS-485 (preferit a Wiegand per anar xifrat i bidireccional).",
      "Controladora ↔ node local: xarxa cablejada PoE en una VLAN OT aïllada; missatgeria MQTT sobre TLS (esdeveniments cap amunt, ordres i actualització de permisos cap avall) amb topic per dispositiu i credencials pròpies.",
      "Node local ↔ núvol: HTTPS/TLS i MQTT/TLS; enllaç 4G/5G de reserva amb failover.",
      "Processament a l'edge: la decisió d'obrir es pren a la controladora amb dades locals (latència mínima, independència d'Internet). Cap amunt només viatgen esdeveniments (qui, on, quan, resultat), no un flux continu.",
      "Al backend, cada esdeveniment d'accés en una aula amb classe es creua amb l'horari i genera (o confirma) una marca d'assistència.",
    ],
    avantatges: [
      "Un sol esdeveniment, dos processos resolts: passar la targeta obre la porta i deixa l'assistència registrada; desapareix la doble feina (obrir + passar llista + transcriure).",
      "Traçabilitat completa: cada accés enllaça persona → credencial → espai → franja → resultat; els incidents als tallers deixen de ser un \"no se sap qui hi era\".",
      "Reacció a temps: l'absentisme es veu el mateix matí i es pot activar la tutoria preventiva; abans es detectava amb dies de retard.",
      "Seguretat de les persones: en una evacuació, el panell dona la llista de presents per zona en segons.",
      "Gestió àgil de permisos: altes, baixes i canvis immediats; una credencial perduda s'anul·la sense tocar cap pany.",
      "Valor pedagògic i de manteniment: en ser solució pròpia, s'adapta cada curs sense llicències i serveix de projecte real i complet (maquinari + xarxa + backend + web + app) per als tres cicles.",
    ],
  },
  thd: [
    {
      nom: "Internet de les coses (IoT)",
      queEs: "És una xarxa de dispositius amb sensors i actuadors connectats que capturen l'estat del món físic i hi actuen.",
      perQue: "És el nucli del projecte: lectors, panys, sensors de porta i botons de sortida governats per controladores connectades.",
      part: "Planta (les portes i els espais).",
      benefici: "Control remot i immediat dels permisos, registre de cada esdeveniment i estat de porta en temps real.",
      sostenibilitat: "Evita desplaçaments de consergeria per obrir i tancar i permet detectar portes que queden obertes (climatització malgastada).",
    },
    {
      nom: "Cloud Computing",
      queEs: "És la provisió de còmput, emmagatzematge i serveis per Internet sota demanda (IaaS, PaaS, SaaS).",
      perQue: "Allotja el backend, la BBDD, els informes i les còpies sense mantenir un CPD propi, amb un desplegament híbrid (un node local al centre garanteix l'accés sense Internet).",
      part: "Negoci (gestió).",
      benefici: "Disponibilitat, accés des de qualsevol lloc per a direcció i famílies, i escalabilitat.",
      sostenibilitat: "Concentra la càrrega en centres de dades eficients i redueix el maquinari a mantenir al centre.",
    },
    {
      nom: "Big Data i analítica de dades",
      queEs: "Són les tècniques per emmagatzemar i analitzar volums grans i heterogenis de dades per obtenir-ne informació útil.",
      perQue: "Consoliden l'històric d'esdeveniments d'accés i d'assistència per generar informes d'absentisme i retards per grup i alumne/a, mapes d'ús dels espais i indicadors d'evacuació.",
      part: "Negoci.",
      benefici: "Visió objectiva i immediata que abans no existia.",
      sostenibilitat: "L'anàlisi d'ús real dels espais permet ajustar horaris i consum energètic (il·luminació i climatització d'aules i tallers infrautilitzats).",
    },
    {
      nom: "Intel·ligència artificial",
      queEs: "Sistemes que aprenen de dades per predir, classificar o detectar patrons anòmals.",
      perQue: "S'aplica a detecció d'anomalies en els accessos (targeta usada en dos punts incompatibles en pocs minuts, accessos fora del perfil habitual, portes obertes a hores atípiques) i a la predicció de risc d'absentisme per activar tutoria preventiva.",
      part: "Negoci.",
      benefici: "Alertes de seguretat primerenques i una intervenció educativa més eficaç.",
      sostenibilitat: "Prioritza l'atenció de consergeria i tutories cap on cal (eficiència).",
    },
    {
      nom: "Aplicacions mòbils i multiplataforma",
      queEs: "És el programari que s'executa en dispositius mòbils, sovint amb un únic codi per a diverses plataformes.",
      perQue: "Permet a famílies, alumnat i professorat consultar i justificar assistència, rebre avisos i, per a certs rols, obrir portes amb credencial virtual (NFC/BLE/QR).",
      part: "Negoci i planta alhora.",
      benefici: "Elimina paper (justificants, fulls de signatures) i redueix la dependència de la targeta física.",
      sostenibilitat: "Menys paper i menys targetes de plàstic a fabricar i reposar.",
    },
    {
      nom: "Connectivitat avançada (Wi-Fi 6, PoE, 4G/5G, LPWAN)",
      queEs: "Xarxes d'alta capacitat i baixa latència, alimentació per cable de dades i enllaços mòbils de reserva.",
      perQue: "S'apliquen amb cablejat PoE per als lectors i controladores (fiabilitat i alimentació en un sol cable), Wi-Fi 6 per a l'app i els PC, i enllaç 4G/5G de reserva per al node local.",
      part: "Planta i negoci.",
      benefici: "Garanteix que el control d'accés i l'assistència funcionen encara amb la línia fixa caiguda.",
      sostenibilitat: "El PoE simplifica la instal·lació i el manteniment i evita fonts d'alimentació disperses.",
    },
  ],
  thdConclusions: [
    "La combinació IoT + Edge/Cloud + Mòbil tanca el llaç entre l'OT (portes, sensors) i l'IT (persones, horaris, informes): un esdeveniment físic (passar la targeta) actualitza dades de negoci (assistència) i, al revés, un canvi de negoci (baixa d'un alumne/a, canvi d'horari) es propaga a l'OT (permisos de les controladores).",
    "Respecte de la situació actual, s'espera menys temps administratiu i docent, detecció immediata de l'absentisme, traçabilitat total dels espais crítics i seguretat en evacuació.",
    "Nous serveis possibles que la transformació obre: control d'aforament i reserva d'espais comuns; portal de famílies ampliat amb comunicació bidireccional; quadre de comandament de direcció amb ús real d'espais i energia; bessó digital de l'edifici per a simulacres; i, si el model es documenta bé, reutilització per altres centres de la mateixa administració.",
  ],
  ia: {
    intro: "El projecte incorpora IA. Tasques principals: detecció d'anomalies (seguretat d'accessos) i classificació/predicció (risc d'absentisme).",
    problema1:
      "Anomalies d'accés: amb centenars d'esdeveniments diaris, consergeria no pot revisar-los tots. Es vol una alerta automàtica quan un patró s'aparta del normal: la mateixa credencial validant-se en dos punts físicament incompatibles en pocs minuts (possible targeta clonada o prestada), accessos repetits denegats, entrada a un espai fora del perfil i l'horari habituals de la persona, o portes que s'obren a hores sense activitat.",
    problema2:
      "Risc d'absentisme: a partir de l'històric d'assistència, retards i patró setmanal, estimar un indicador de risc per alumne/a perquè la tutoria intervingui abans que l'absentisme s'estabilitzi.",
    dades: [
      "Esdeveniments d'accés (credencial, lector, espai, moment, resultat) — de la pròpia BBDD.",
      "Assistència derivada (present/absent/retard/justificat per sessió) i horaris — BBDD i sistema de gestió acadèmica.",
      "Context: dia de la setmana, hora, calendari lectiu (vigílies de festiu, període d'exàmens), espai i la seva ubicació (per calcular distàncies/temps entre lectors).",
      "Etiquetes: per a anomalies, incidents confirmats per consergeria (aprenentatge supervisat) o, si no n'hi ha prou, models no supervisats; per a absentisme, l'assistència real posterior.",
    ],
    bigData:
      "El volum és moderat (centenars de milers d'esdeveniments per curs), per tant no és Big Data per volum; sí que hi ha velocitat (ràfegues a les hores d'entrada i canvi de classe) i una varietat baixa. El valor ve de la integració accés ↔ horari i de la neteja, no de la mida; la canonada de dades és la mateixa que s'usaria a escala.",
    benefici:
      "Menys temps de revisió manual d'accessos, resposta ràpida a credencials compromeses (evita canvis de pany i incidents), i una intervenció d'absentisme preventiva, que és molt més barata i eficaç que la reactiva.",
    tecnologia:
      "Python amb scikit-learn: Isolation Forest o Local Outlier Factor per a anomalies no supervisades; regressió logística o gradient boosting (XGBoost) per al risc d'absentisme, models interpretables. Entrenament offline (setmanal per a absentisme; el detector d'anomalies pot recalibrar-se mensualment) en un job al núvol; el model es publica darrere d'un microservei que l'API consulta. Alternativa gestionada: servei d'AutoML/anomaly detection del proveïdor de núvol.",
    etica: [
      "La IA no pren decisions automàtiques sobre persones: el risc d'absentisme és una ajuda a la tutoria, sempre amb revisió humana; les anomalies generen una alerta a consergeria, no un bloqueig automàtic (excepte revocació d'una credencial ja denunciada com a perduda).",
      "Minimització i limitació de finalitat: només s'usen les dades necessàries; no es fa perfilat de comportament més enllà d'aquests dos objectius; no es comparteix amb tercers.",
      "S'eviten variables sensibles o proxies discriminatoris (origen, NEE, situació socioeconòmica).",
      "Transparència: les famílies i l'alumnat són informats que el sistema calcula indicadors d'assistència; el model és explicable (pes de cada factor).",
      "Alineació amb el RGPD/LOPDGDD i amb l'AI Act (sistema de risc limitat: transparència i supervisió humana). Es fa una DPIA (Activitat 3).",
    ],
    sector:
      "En educació, els usos habituals són predicció d'abandonament i absentisme, sistemes d'alerta primerenca, tutoria intel·ligent i analítica de l'aprenentatge; en control d'accessos (seguretat física), detecció d'anomalies i videoanalítica. Els sectors que en fan un ús més intensiu són banca (frau), indústria (manteniment predictiu), sanitat, retail i seguretat. Aquí s'agafen dos patrons madurs: anomaly detection d'accessos i early-warning d'absentisme.",
    puntFutur: "Anàlisi de sèries temporals d'aforament per predir ocupació d'espais comuns i optimitzar horaris i consum energètic.",
  },
  veredicte:
    "Projecte acceptat. La idea resol problemes reals i documentats (seguretat de claus, absentisme detectat tard, temps docent, traçabilitat, evacuació), els objectius estratègics i de digitalització estan lligats i són mesurables amb KPI, l'encaix ASIX/DAM/DAW és substancial per a les tres especialitats, hi ha un component OT central (maquinari de porta a l'edge) i dos casos d'IA coherents amb les dades disponibles. Ajust recomanat: mantenir a l'abast només els 12 espais crítics + 3 portes d'edifici i deixar aforament/reserva d'espais i bessó digital com a evolució, per no sobredimensionar.",
}

export const activitat2 = {
  rols:
    "CONS consergeria · SEC secretaria/direcció · TUT tutor/a · PROF professorat · ADM administrador TIC (ASIX) · ALU alumnat · FAM família/tutor legal · MANT manteniment · SGA sistema de gestió acadèmica (actor no humà).",
  epiques: [
    {
      nom: "Èpica A — Persones, credencials i perfils (DAW + DAM + ASIX)",
      headers: ["ID", "Història d'usuari", "Criteris d'acceptació"],
      rows: [
        ["A1", "Com a CONS, vull donar d'alta una persona i emetre-li una credencial per permetre-li l'accés.", "Es valida document i tipus (alumnat/professorat/PAS/extern); la credencial s'associa a un identificador xifrat (no s'emmagatzema l'UID pla); estat inicial \"activa\"; queda registre de qui l'emet."],
        ["A2", "Com a CONS, vull anul·lar immediatament una credencial perduda o robada per evitar-ne l'ús.", "Un clic la passa a \"perduda\"; es propaga a totes les controladores en < 5 min (i a l'instant a les connectades); els intents posteriors queden com a incidència."],
        ["A3", "Com a SEC, vull definir perfils d'accés (p. ex. \"Alumnat FP Mecànica\", \"Professorat\", \"Manteniment\") i assignar-los a persones per gestionar permisos en bloc.", "Alta/edició de perfil; assignació massiva per grup o individual; un canvi de perfil recalcula els permisos efectius."],
        ["A4", "Com a SGA (sistema), vull enviar matrícules i grups perquè el sistema mantingui les persones sincronitzades.", "Importació periòdica (API o fitxer); altes/baixes/canvis de grup aplicats; conflictes reportats; no es dupliquen persones (clau = document)."],
        ["A5", "Com a ALU/PROF, vull activar la credencial al meu mòbil per no dependre de la targeta física.", "Vinculació segura del dispositiu (codi d'un sol ús + login); credencial NFC/BLE/QR segons lector; una credencial mòbil activa per persona; es pot revocar des de web."],
      ],
    },
    {
      nom: "Èpica B — Espais, lectors i regles d'accés (DAW)",
      headers: ["ID", "Història d'usuari", "Criteris d'acceptació"],
      rows: [
        ["B1", "Com a ADM, vull registrar espais, lectors i controladores per modelar l'edifici.", "Cada espai té tipus, planta, aforament i marca de \"via d'evacuació\"; cada lector té sentit (entrada/sortida) i funció (accés/assistència); estat de la controladora visible."],
        ["B2", "Com a SEC, vull definir regles d'accés (qui, on i en quines franges) per controlar cada espai.", "Regla = perfil o persona + espai o tipus d'espai + dies + franja + vigència; solapaments i buits detectats; simulador \"aquesta persona pot entrar ara?\"."],
        ["B3", "Com a SEC, vull carregar els horaris (grup–aula–franja–professorat) des de la gestió acadèmica per poder calcular l'assistència.", "Importació per trimestre; validació de xocs (aula doble ocupada); canvis d'horari amb data d'efecte; vista de calendari per aula i per grup."],
        ["B4", "Com a ADM, vull programar excepcions de calendari (festius, jornades de portes obertes, exàmens) per ajustar accessos i assistència.", "Dies marcats no generen absències; es poden obrir temporalment espais a perfils concrets; les excepcions caduquen soles."],
      ],
    },
    {
      nom: "Èpica C — Accés i obertura de portes (OT/ASIX + DAM)",
      headers: ["ID", "Història d'usuari", "Criteris d'acceptació"],
      rows: [
        ["C1", "Com a ALU/PROF, vull passar la credencial i que la porta s'obri si tinc permís per entrar en aquell moment.", "Decisió en < 1 s; obertura només si credencial activa + regla vigent; llum/so de confirmació; l'esdeveniment queda registrat (concedit/denegat + motiu)."],
        ["C2", "Com a ADM, vull que la controladora obri encara sense connexió amb la llista de permisos en memòria per no bloquejar l'accés.", "Cache de permisos i horaris a la controladora; en mode offline registra en cua i sincronitza en < 2 min de recuperar xarxa; marca l'esdeveniment com \"offline\"."],
        ["C3", "Com a qualsevol persona a dins, vull sortir prement el botó de sortida sense credencial per seguretat.", "El REX obre sempre; les vies d'evacuació obren també en tall d'alimentació (pany fail-safe); la sortida no genera denegació."],
        ["C4", "Com a CONS, vull obrir una porta remotament des del monitor per atendre una visita o una incidència puntual.", "Acció disponible només per a CONS/ADM; demana motiu; queda auditada; té límit de temps d'obertura."],
        ["C5", "Com a MANT, vull obrir els espais tècnics amb la credencial del mòbil encara que hi hagi poca cobertura a l'annex.", "BLE/NFC funciona sense dades; si la controladora està offline, valida contra la seva cache; l'accés se sincronitza després."],
        ["C6", "Com a ADM, vull rebre una alerta si una porta queda oberta massa estona o es força per reaccionar.", "Sensor de porta + temporitzador; avís push i a la central d'alarma; genera incidència amb espai i hora."],
      ],
    },
    {
      nom: "Èpica D — Assistència i horaris (DAW + DAM)",
      headers: ["ID", "Història d'usuari", "Criteris d'acceptació"],
      rows: [
        ["D1", "Com a PROF, vull que l'assistència es registri sola quan l'alumnat entra a l'aula, contrastant-la amb l'horari.", "En passar la credencial en un lector d'aula amb sessió activa, es marca \"present\"; després de X min, \"retard\"; sense marca, \"absent\"; una marca per alumne/a i sessió."],
        ["D2", "Com a PROF, vull revisar i corregir la llista de la sessió en pocs segons des de web o app per esmenar errors.", "Llista precarregada amb estats; canvi manual amb motiu; es bloqueja l'edició passat un termini (configurable); queda traça del canvi."],
        ["D3", "Com a TUT, vull consultar l'assistència del meu grup per dia, alumne/a i matèria per fer seguiment.", "Filtres per rang de dates i matèria; recompte d'absències/retards; exportació CSV/PDF; les xifres quadren amb els registres."],
        ["D4", "Com a SEC, vull que les marques d'assistència es retornin a la gestió acadèmica per no fer doble feina.", "Enviament periòdic o sota demanda; format acordat; control d'errors i reintent; registre del que s'ha enviat."],
        ["D5", "Com a FAM, vull rebre un avís si el meu fill/a no ha entrat a primera hora per poder actuar.", "Notificació push i/o correu abans d'una hora configurable; només si l'absència no està ja justificada; un avís per dia i alumne/a."],
      ],
    },
    {
      nom: "Èpica E — App d'alumnat, famílies i professorat (DAM)",
      headers: ["ID", "Història d'usuari", "Criteris d'acceptació"],
      rows: [
        ["E1", "Com a FAM/ALU, vull consultar l'assistència (pròpia o dels fills) amb detall per sessió.", "Vista per dia i setmana; estat i motiu; diverses relacions família–alumne/a; dades sempre a través de l'API amb TLS."],
        ["E2", "Com a FAM, vull justificar una absència adjuntant un document.", "Selecció de dia(es) i sessions; motiu; adjunt (imatge/PDF) opcional; estat \"pendent\"; notificació quan es resol."],
        ["E3", "Com a TUT, vull acceptar o rebutjar les justificacions amb un comentari.", "Safata de pendents; decisió amb motiu; en acceptar, les sessions passen a \"justificat\"; la família rep la resolució."],
        ["E4", "Com a PROF, vull validar la llista des del mòbil quan el registre automàtic falli (aula sense lector, incidència).", "Selecció de la sessió del meu horari; marcatge ràpid; funciona amb cua offline; sincronitza en recuperar xarxa."],
        ["E5", "Com a ALU/PROF, vull consultar l'aforament de biblioteca i tallers abans d'anar-hi.", "Ocupació actual vs màxim; actualització en < 1 min; indicació \"ple\"."],
      ],
    },
    {
      nom: "Èpica F — Monitoratge, incidències i evacuació (DAW + ASIX)",
      headers: ["ID", "Història d'usuari", "Criteris d'acceptació"],
      rows: [
        ["F1", "Com a CONS, vull un monitor d'accessos en temps real amb filtres per porta, persona i resultat.", "Actualització en streaming (< 5 s); filtres combinables; enllaç de cada esdeveniment a la fitxa de persona i espai."],
        ["F2", "Com a CONS, vull gestionar incidències (targeta perduda, porta forçada, accessos denegats repetits, anomalia d'IA) amb estat i responsable.", "Alta manual o automàtica; estats obert/en curs/tancat; assignació; historial; filtre per tipus i espai."],
        ["F3", "Com a SEC, vull activar el mode evacuació i veure la llista de presents per zona.", "Un clic entra en mode evacuació; llista de qui ha entrat i no ha sortit, agrupada per zona; export imprimible en < 30 s; es pot marcar \"localitzat\"."],
        ["F4", "Com a ADM, vull rebre una alerta d'anomalia quan el model detecti un patró d'accés sospitós.", "Alerta amb explicació (regla o factors); no bloqueja l'accés per si sola; es pot marcar com a falsa alarma per reentrenar."],
        ["F5", "Com a ADM, vull veure l'estat de salut de controladores i lectors (connexió, firmware, bateria del SAI) per mantenir el sistema.", "Panell amb estat per dispositiu; alerta si un dispositiu no reporta en X min; registre d'actualitzacions de firmware."],
      ],
    },
    {
      nom: "Èpica G — Infraestructura, seguretat i continuïtat (ASIX)",
      headers: ["ID", "Història d'usuari", "Criteris d'acceptació"],
      rows: [
        ["G1", "Com a ADM, vull gestionar usuaris de gestió i rols (CONS, SEC, TUT, PROF, ADM) amb permisos mínims.", "Comptes nominals; 2FA obligatori per a ADM i SEC; desactivació immediata; sense comptes compartits."],
        ["G2", "Com a ADM, vull que els dispositius de porta estiguin en una VLAN aïllada amb comunicació xifrada per limitar riscos.", "VLAN OT sense sortida a Internet excepte MQTT/TLS cap al broker; sense rutes cap a gestió/Wi-Fi; certificats per dispositiu."],
        ["G3", "Com a ADM, vull un node local que mantingui el servei d'accés si cau Internet.", "El node serveix permisos, horaris i la consola de consergeria en local; replica cap al núvol en recuperar l'enllaç; enllaç 4G/5G de reserva."],
        ["G4", "Com a ADM, vull còpies de seguretat automàtiques i prova de restauració per no perdre dades.", "Còpia diària xifrada (retenció 30 dies) + mensual (12 mesos); una còpia fora del proveïdor; prova de restauració trimestral documentada (RTO < 1 dia, RPO < 24 h)."],
        ["G5", "Com a ADM, vull un registre d'auditoria immutable de tots els esdeveniments d'accés i dels canvis sensibles.", "Log íntegre (append-only) d'accessos, canvis de regla/perfil, emissió i anul·lació de credencials, obertures remotes; retenció segons política; rellotge NTP."],
        ["G6", "Com a ADM, vull integrar-me amb la central d'alarma i CCTV per correlacionar avisos.", "El sistema envia esdeveniments de porta forçada/oberta i rep l'estat d'alarma i el mode evacuació; interfície documentada."],
      ],
    },
  ],
  total: "Total: 31 HU en 7 èpiques, cobrint web (DAW), mòbil (DAM) i administració/infraestructura/OT (ASIX).",
  casosUs: [
    {
      id: "CU-01",
      nom: "Validar accés i obrir porta",
      actorPrincipal: "Alumnat / Professorat / Manteniment (qualsevol portador de credencial).",
      actorsSecundaris: "Controladora de porta (OT).",
      precondicions: "La porta té controladora operativa (en línia o amb cache vàlida); la persona té una credencial emesa.",
      flux: [
        "La persona apropa la credencial (targeta o mòbil) al lector.",
        "El lector transmet l'identificador a la controladora per OSDP.",
        "La controladora autentica la credencial: comprova que existeix i està activa.",
        "Comprova que hi ha una regla d'accés vigent per a aquell perfil/persona, aquell espai i aquell moment.",
        "Si tot és correcte, acciona el relé i obre el pany; el lector ho confirma (llum verda / so).",
        "La controladora registra l'esdeveniment (persona, lector, espai, moment, resultat = concedit) i l'encua cap al node local i el núvol.",
        "Si el lector és d'aula amb sessió activa, el backend estén a CU-02 i registra l'assistència.",
      ],
      alternatius: [
        "3a. Credencial desconeguda, suspesa o \"perduda\": denegació; llum vermella; es registra el resultat i, si es repeteix, es genera una incidència.",
        "4a. Sense regla vigent (perfil o franja): denegació amb motiu \"fora de perfil\" o \"fora d'horari\".",
        "2a/5a. Controladora sense connexió: decideix amb la cache local de permisos i horaris; marca l'esdeveniment com \"offline\"; sincronitza en recuperar xarxa.",
        "5b. Tall d'alimentació en via d'evacuació: el pany fail-safe deixa la porta oberta; es registra l'estat quan torna el corrent.",
        "*. Patró sospitós: el detector d'anomalies genera una alerta (sense bloquejar l'accés per si sola).",
      ],
      postcondicions: "Porta oberta o denegació registrada; esdeveniment auditat; assistència creada si esqueia.",
    },
    {
      id: "CU-02",
      nom: "Registrar assistència",
      actorPrincipal: "Sistema (desencadenat per CU-01).",
      actorsSecundaris: "Gestió acadèmica.",
      precondicions: "Existeix una sessió a l'horari per a aquell espai i franja; l'alumne/a pertany al grup de la sessió.",
      flux: [
        "En rebre un accés concedit en un lector d'aula, el sistema busca la sessió activa (grup, matèria, professorat).",
        "Comprova si ja hi ha marca per a aquell alumne/a i sessió; si no, en crea una.",
        "Si l'accés és dins del marge inicial → present; si és més tard del llindar → retard (amb minuts); si acaba la sessió sense marca → absent.",
        "Publica el canvi perquè el professorat el vegi a la llista gairebé en temps real.",
        "Si a l'hora límit del matí hi ha absent de 1a hora sense justificació, genera un avís a la família.",
      ],
      alternatius: [
        "1a. No hi ha sessió (dia no lectiu, excepció de calendari): no es genera assistència; l'accés queda només com a esdeveniment.",
        "2a. L'alumne/a no és del grup de la sessió: es registra l'accés però no genera assistència (p. ex. entra a una aula que no li toca); pot generar incidència si es repeteix.",
        "3a. Correcció posterior del professorat: la validació manual de la llista sobreescriu l'estat amb traça.",
      ],
      postcondicions: "Marca d'assistència persistida i visible; possible avís a la família; disponible per retornar a la gestió acadèmica (HU D4).",
    },
    {
      id: "CU-03",
      nom: "Justificar una absència (app família)",
      actorPrincipal: "Família / tutor legal.",
      actorsSecundaris: "Tutor/a (resol la justificació).",
      precondicions: "La família té l'app vinculada a l'alumne/a; hi ha absències o retards en el rang que vol justificar.",
      flux: [
        "La família obre \"Assistència\", selecciona el/s dia/es i les sessions afectades.",
        "Indica el motiu i, opcionalment, adjunta un document (imatge o PDF).",
        "Envia; el sistema crea una justificació en estat \"pendent\" i n'avisa la tutoria.",
        "La família rep una notificació quan la justificació es resol.",
      ],
      alternatius: [
        "2a. Adjunt amb dades de salut: el sistema el tracta com a document sensible (accés restringit a tutoria/direcció, retenció mínima).",
        "3a. Justificació sobre sessions ja tancades: s'accepta igualment; la resolució recalcula l'estat.",
        "*. Sense connexió: la sol·licitud queda en cua local i s'envia en recuperar xarxa.",
      ],
      postcondicions: "Justificació registrada i encaminada a la tutoria per resoldre-la.",
    },
    {
      id: "CU-04",
      nom: "Emetre / anul·lar credencial",
      actorPrincipal: "Consergeria.",
      actorsSecundaris: "Controladores (reben la propagació de permisos).",
      precondicions: "CONS autenticada amb el seu rol; la persona existeix al sistema.",
      flux: [
        "(Emissió) CONS obre la fitxa de la persona i selecciona Emetre credencial.",
        "Tria el tipus (targeta física / mòbil) i, si és targeta, la presenta al lector d'alta.",
        "El sistema desa l'identificador xifrat, l'associa a la persona amb estat \"activa\" i registra qui l'emet.",
        "El sistema propaga els permisos efectius a les controladores dels espais on la persona té accés.",
      ],
      alternatius: [
        "(Anul·lació) CONS marca la credencial com \"perduda\" (o \"baixa\").",
        "El sistema la desactiva a l'instant a les controladores en línia i encua l'ordre per a les offline.",
        "Qualsevol ús posterior queda registrat com a denegat i pot generar incidència (CU-04).",
      ],
      postcondicions: "Estat de la credencial actualitzat a tot el sistema; canvi auditat.",
    },
    {
      id: "CU-05",
      nom: "Activar mode evacuació",
      actorPrincipal: "Secretaria / Direcció.",
      actorsSecundaris: "Central d'alarma, consergeria.",
      precondicions: "Hi ha esdeveniments d'accés recents que permeten calcular presència; l'usuari té rol SEC.",
      flux: [
        "SEC (o l'alarma, via integració) activa el mode evacuació.",
        "El sistema calcula la llista de presents: persones amb una entrada a l'edifici/zona sense sortida posterior.",
        "Mostra la llista agrupada per zona i la fa imprimible/exportable en < 30 s.",
        "Els responsables de zona marquen les persones \"localitzades\" des de l'app o web.",
        "En desactivar el mode, es desa un informe de l'evacuació (temps, presents, localitzats).",
      ],
      alternatius: [
        "2a. Portes d'edifici sense lector de sortida: la presència es basa en l'última entrada del dia; s'indica el marge d'incertesa.",
        "*. Núvol inaccessible: el node local serveix la llista amb les dades que té.",
      ],
      postcondicions: "Llista de presents disponible; informe d'evacuació arxivat.",
    },
  ],
  xarxaTopologia: `flowchart LR
    INT((Internet))
    ISP["Línia fixa FTTH"]
    R4G["Enllaç 4G/5G (reserva)"]
    FW["Tallafoc / Router<br/>(NAT, regles inter-VLAN, IDS/IPS)"]
    SW["Switch PoE gestionable<br/>(802.1Q)"]
    AP["Punts d'accés Wi-Fi 6<br/>(SSID corporatiu / SSID convidats)"]
    NODE["Node local<br/>(permisos, cua, consola)"]
    INT --- ISP --- FW
    INT --- R4G --- FW
    FW --- SW
    SW --- AP
    SW --- V10["VLAN 10 — Gestió<br/>PC consergeria/secretaria/tutories"]
    SW --- V30["VLAN 30 — OT portes (PoE)<br/>controladores + lectors + sensors"]
    AP --- V40["VLAN 40 — Wi-Fi corporativa<br/>mòbils professorat/alumnat (app)"]
    AP --- V50["VLAN 50 — Convidats<br/>(sortida a Internet només)"]
    SW --- NODE
    FW --- DMZ["Sortida a núvol<br/>(API a la DMZ del proveïdor)"]`,
  vlans: [
    "VLAN 10 Gestió — PC de consergeria, secretaria i tutories; accés al portal web i a Internet filtrat.",
    "VLAN 30 OT portes — controladores, lectors i sensors, alimentats per PoE; sense sortida a Internet; només parlen amb el node local (MQTT/TLS). Sense rutes cap a la resta de VLAN.",
    "VLAN 40 Wi-Fi corporativa — mòbils amb l'app; sortida HTTPS cap a l'API i serveis del centre.",
    "VLAN 50 Convidats — aïllada, només Internet.",
    "DMZ (al proveïdor de núvol) — balancejador + WAF que publica l'API; BBDD i magatzems en xarxa privada.",
  ],
  connectivitat:
    "Cablejat PoE dedicat per a lectors i controladores (fiabilitat i alimentació únics); Wi-Fi 6 per a mòbils i portàtils; enllaç 4G/5G de reserva amb failover automàtic per al node local (perquè la replicació i els avisos continuïn); VPN d'administració per a ASIX cap al node i cap a la consola del núvol. Els lectors ↔ controladores usen OSDP (xifrat) i no toquen la IP.",
  elementsXarxa:
    "Tallafoc amb regles inter-VLAN (deny per defecte) i IDS/IPS; switch PoE gestionable 802.1Q; AP Wi-Fi 6 multi-SSID; node local com a frontera OT i punt de continuïtat; balancejador + WAF al núvol; SAI al rack i a les portes d'edifici.",
  nuvolTaula: {
    headers: ["Component principal", "Model de servei", "Justificació"],
    rows: [
      ["API/Backend", "PaaS", "El centre no vol administrar SO ni parxejar; desplegament i escalat gestionats."],
      ["BBDD relacional + magatzem d'esdeveniments", "PaaS (gestionats)", "Còpies, alta disponibilitat i xifratge en repòs de sèrie; menys manteniment per a ASIX."],
      ["Emmagatzematge d'objectes (justificants, exports, backups)", "Serveis d'emmagatzematge (IaaS)", "Barat, durador, xifrat, amb URLs signades i versions."],
      ["Correu i push", "SaaS", "Serveis transaccionals de tercers; no té sentit muntar-los."],
      ["Microservei IA + jobs", "PaaS / contenidors gestionats", "Execució puntual (setmanal/diària); serverless estalvia cost."],
      ["Node local (permisos, broker MQTT local, consola de continuïtat)", "On-premise (edge)", "L'accés físic i l'evacuació no poden dependre d'Internet; ha de funcionar aïllat."],
    ],
  },
  desplegament:
    "Model de desplegament híbrid. Tot el programari de gestió i explotació va a núvol públic (cost, manteniment, accés per a famílies i direcció), amb regió a la UE; el control d'accés en temps real viu a l'edge (controladores) i al node local (fog), que continuen operatius sense connexió. No es justifica núvol privat ni multinúvol per a la mida del projecte.",
  funcionsDelegades:
    "Emmagatzematge de dades, documents i esdeveniments; execució de l'API i del portal; càlcul d'informes i models d'IA; enviament de correus i notificacions; còpies de seguretat. Avantatges en aquest sistema connectat: accés des de qualsevol lloc per a direcció i famílies, disponibilitat i còpies sense CPD propi, i capacitat de créixer o de replicar el model a altres centres.",
  edgeFog:
    "Les controladores fan edge computing (decideixen l'obertura localment amb permisos i horaris en memòria, latència mínima). El node local fa de fog: agrega esdeveniments de les 15 controladores, manté la cua quan cau Internet, serveix la consola de consergeria i la llista d'evacuació en local i replica cap al núvol quan es recupera l'enllaç. Aquesta capa intermèdia sí que es justifica aquí (a diferència d'un projecte d'una sola ubicació petita) perquè hi ha molts dispositius crítics i un requisit dur de continuïtat.",
  erDiagram: `erDiagram
    PERSONA ||--o{ MATRICULA : "té"
    GRUP ||--o{ MATRICULA : "agrupa"
    PERSONA ||--o{ CREDENCIAL : "porta"
    PERSONA }o--o{ PERFIL_ACCES : "assignada a"
    PERSONA ||--o{ USUARI_GESTIO : "pot ser"
    ROL_GESTIO ||--o{ USUARI_GESTIO : "classifica"
    TIPUS_ESPAI ||--o{ ESPAI : "classifica"
    ESPAI ||--o{ LECTOR : "equipa"
    ESPAI ||--o{ CONTROLADORA : "conté"
    ESPAI ||--o{ HORARI_SESSIO : "acull"
    GRUP ||--o{ HORARI_SESSIO : "assisteix a"
    PERSONA ||--o{ HORARI_SESSIO : "imparteix"
    PERFIL_ACCES ||--o{ REGLA_ACCES : "concedeix"
    TIPUS_ESPAI ||--o{ REGLA_ACCES : "abasta"
    ESPAI ||--o{ REGLA_ACCES : "abasta"
    CREDENCIAL ||--o{ EVENT_ACCES : "genera"
    LECTOR ||--o{ EVENT_ACCES : "captura"
    ESPAI ||--o{ EVENT_ACCES : "ubica"
    HORARI_SESSIO ||--o{ ASSISTENCIA : "es controla a"
    PERSONA ||--o{ ASSISTENCIA : "rep"
    EVENT_ACCES |o--o| ASSISTENCIA : "origina"
    ASSISTENCIA ||--o{ JUSTIFICACIO : "es justifica amb"
    PERSONA ||--o{ JUSTIFICACIO : "sol·licita"
    ESPAI ||--o{ INCIDENCIA : "afecta"
    CREDENCIAL ||--o{ INCIDENCIA : "implica"
    CALENDARI_LECTIU ||--o{ EXCEPCIO_ACCES : "motiva"
    PERSONA {
      int id PK
      string nom
      string cognoms
      string document
      string tipus
      string email
      string telefon_contacte
      date data_alta
      date data_baixa
    }
    GRUP {
      int id PK
      string nom
      string nivell
      string curs_academic
    }
    MATRICULA {
      int id PK
      int persona_id FK
      int grup_id FK
      string curs_academic
      date des_de
      date fins_a
    }
    CREDENCIAL {
      int id PK
      int persona_id FK
      string tipus
      string id_xifrat
      string estat
      datetime emesa_el
      int emesa_per FK
      datetime baixa_el
    }
    PERFIL_ACCES {
      int id PK
      string nom
      string descripcio
    }
    REGLA_ACCES {
      int id PK
      int perfil_id FK
      int tipus_espai_id FK
      int espai_id FK
      string dies_setmana
      time hora_inici
      time hora_fi
      date vigent_des
      date vigent_fins
    }
    TIPUS_ESPAI {
      int id PK
      string nom
    }
    ESPAI {
      int id PK
      int tipus_espai_id FK
      string nom
      string planta
      int aforament_max
      string control_acces
      boolean via_evacuacio
      string zona_evacuacio
    }
    LECTOR {
      int id PK
      int espai_id FK
      string sentit
      string funcio
      string identificador
      string estat
    }
    CONTROLADORA {
      int id PK
      int espai_id FK
      string identificador
      string versio_firmware
      string estat
      datetime ultima_sync
    }
    HORARI_SESSIO {
      int id PK
      int grup_id FK
      int espai_id FK
      int professor_id FK
      string materia
      string dia_setmana
      time hora_inici
      time hora_fi
      date vigent_des
      date vigent_fins
    }
    EVENT_ACCES {
      int id PK
      int credencial_id FK
      int lector_id FK
      int espai_id FK
      datetime moment
      string resultat
      string motiu
      boolean offline
    }
    ASSISTENCIA {
      int id PK
      int persona_id FK
      int horari_sessio_id FK
      date data
      string estat
      int minuts_retard
      int event_acces_id FK
      datetime modificada_el
      int modificada_per FK
    }
    JUSTIFICACIO {
      int id PK
      int assistencia_id FK
      int sol_licitant_id FK
      string motiu
      boolean te_document_salut
      string document_uri
      string estat
      int resolta_per FK
      datetime creada_el
      datetime resolta_el
    }
    INCIDENCIA {
      int id PK
      string tipus
      int espai_id FK
      int credencial_id FK
      datetime moment
      string estat
      string descripcio
      int assignada_a FK
      int resolta_per FK
    }
    USUARI_GESTIO {
      int id PK
      int persona_id FK
      int rol_gestio_id FK
      string hash_password
      boolean te_2fa
      boolean actiu
    }
    ROL_GESTIO {
      int id PK
      string nom
    }
    CALENDARI_LECTIU {
      int id PK
      date data
      string tipus
      string descripcio
    }
    EXCEPCIO_ACCES {
      int id PK
      int calendari_id FK
      int espai_id FK
      int perfil_id FK
      time hora_inici
      time hora_fi
      string efecte
    }`,
  fontsDades: {
    headers: ["Font", "Tipus", "Estructura", "Freqüència / volum"],
    rows: [
      ["Lectors de porta i d'aula (via controladora)", "Sensor / dispositiu", "Estructurada (esdeveniments)", "Contínua en horari lectiu; milers/dia, amb pics d'entrada"],
      ["Botó de sortida i sensor de porta", "Sensor", "Estructurada", "Contínua; per obertura i per canvi d'estat de porta"],
      ["Formularis del portal web (persones, credencials, espais, regles, horaris)", "Formulari web (DAW)", "Estructurada", "Diària (gestió); desenes/dia"],
      ["App: justificacions d'absència amb adjunt", "App mòbil (DAM)", "Estructurada (motiu, dates) + no estructurada (adjunt)", "Diària; desenes/dia"],
      ["App/web: validació i correcció de llista pel professorat", "App / web", "Estructurada", "Per sessió; centenars/dia"],
      ["Import de matrícules, grups i horaris", "API externa / fitxer (SGA)", "Semiestructurada (JSON/CSV)", "Trimestral + ajustos setmanals"],
      ["Calendari lectiu i excepcions", "Formulari web / import", "Estructurada", "Puntual (inici de curs) + retocs"],
      ["SSO / identitat del Departament", "API externa", "Semiestructurada", "En cada login intern"],
      ["Central d'alarma i CCTV", "Interfície d'integració", "Semiestructurada (esdeveniments)", "Puntual (alarmes, mode evacuació)"],
      ["Model d'IA (sortides: alerta d'anomalia, índex de risc)", "Procés intern", "Estructurada", "Anomalies: contínua; risc: setmanal"],
    ],
  },
  recorregutDades: `flowchart LR
    subgraph CAP["1. Captura"]
      F1["Lectors/sensors de porta<br/>(controladora: decideix a l'edge)"]
      F2["Web: persones, credencials,<br/>espais, regles, horaris"]
      F3["App: justificacions,<br/>validació de llista"]
      F4["Import SGA:<br/>matrícules, grups, horaris"]
    end
    subgraph STO["2. Emmagatzematge i organització"]
      NODE[("Node local<br/>cua + cache")]
      DB[("BBDD relacional<br/>(operacional)")]
      TS[("Esdeveniments d'accés<br/>(sèrie temporal)")]
      OBJ[("Objectes: justificants, exports")]
    end
    subgraph PRO["3. Processament i anàlisi"]
      MATCH["Contrast accés ↔ horari<br/>→ assistència"]
      KPI["Càlcul de KPI i informes<br/>(absentisme, retards, ús d'espais)"]
      MOD["Models IA<br/>(anomalies + risc absentisme)"]
    end
    subgraph USE["4. Ús"]
      MON["Monitor d'accessos<br/>+ incidències (CONS)"]
      EVAC["Panell d'evacuació<br/>(llista de presents)"]
      REP["Informes de tutoria<br/>i direcció"]
      AVIS["Avisos a famílies<br/>(push / correu)"]
      SGAOUT["Retorn de marques<br/>a gestió acadèmica"]
    end
    subgraph ARC["5. Arxivament"]
      COLD[("Arxiu fred<br/>fi de curs / normativa")]
    end
    subgraph DEL["6. Eliminació"]
      PURGE["Esborrat segur<br/>(retenció complida o<br/>dret de supressió)"]
    end
    F1 --> NODE --> DB
    F1 --> TS
    F2 --> DB
    F3 --> DB
    F3 --> OBJ
    F4 --> DB
    DB --> MATCH --> DB
    MATCH --> AVIS
    TS --> MOD --> MON
    DB --> MOD --> REP
    DB --> KPI --> REP
    TS --> EVAC
    DB --> EVAC
    DB --> SGAOUT
    DB --> COLD
    TS --> COLD
    OBJ --> COLD
    COLD --> PURGE
    DB --> PURGE`,
  dadaInfoConeixement: [
    { nivell: "Dada", exemple: "\"credencial 5521, lector 'Taller Mecànica – entrada', 08:07, resultat = concedit\"." },
    { nivell: "Informació", exemple: "\"el grup 1r FPM acumula un 14 % d'absències a 1a hora al març, concentrades els dilluns\"." },
    { nivell: "Coneixement", exemple: "\"els dilluns a 1a hora cal reforçar l'avís a les famílies i que tutoria contacti proactivament els alumnes amb índex de risc alt; el model els prioritza\"." },
  ],
  relacioBigData:
    "L'anàlisi de dades (informes d'absentisme, retards, ús d'espais, evacuació) aporta la major part del valor; el ML (scikit-learn, models clàssics, sense deep learning) afegeix la detecció d'anomalies i el risc d'absentisme; tot plegat és IA aplicada de complexitat baixa-mitjana. No cal DL ni infraestructura Big Data pel volum descrit, però la velocitat obliga a un processament d'esdeveniments gairebé en temps real.",
  etapesCienciaDades:
    "Definició del problema → recollida i integració (esdeveniments + horaris + calendari) → neteja i preparació (sessions, marges de retard, distàncies entre lectors) → anàlisi exploratòria → entrenament i validació (anomalies no supervisades; risc supervisat) → desplegament darrere l'API → monitoratge (falsos positius) i reentrenament (setmanal/mensual).",
  onEmmagatzemen:
    "BBDD, esdeveniments i objectes al núvol públic amb regió a la UE; el node local manté una còpia operativa recent i la cua; les controladores només retenen la cache de permisos/horaris i una cua curta d'esdeveniments. Implicacions: dependència del proveïdor i de la connectivitat (mitigada amb node local, enllaç 4G/5G i còpies exportables) i tractament de dades de menors conforme al RGPD (Activitat 3).",
  integracio:
    "Una única API REST és el punt d'integració; web i app comparteixen model de dades; l'OT s'integra via MQTT (controladores → node → API); la gestió acadèmica s'integra per API/fitxer en els dos sentits (entren horaris i matrícules, surten marques d'assistència); SSO, correu, push i alarma/CCTV s'integren per HTTPS o per la seva interfície. No hi ha dades mestres duplicades: les persones i els horaris tenen origen únic (SGA), i AccésCentre n'és consumidor i enriquidor.",
  veredicte:
    "Projecte viable. L'arquitectura (controladores a l'edge + node local fog + backend al núvol + web + app) és coherent amb les 31 HU i amb l'encaix ASIX/DAM/DAW; el disseny de xarxa aïlla la VLAN OT i garanteix continuïtat sense Internet; l'elecció de núvol (híbrid, PaaS majoritari, regió UE) està justificada pel requisit dur de disponibilitat del control d'accés; el model de dades és complet i normalitzat i el recorregut de dades és realista, amb la integració accés ↔ horari com a nucli. Recomanació: si el temps del mòdul de Projecte va just, es pot retallar l'app de famílies a consulta + avisos (deixant la justificació d'absències per a una segona fase) i limitar l'IA a la detecció d'anomalies, sense afectar el nucli.",
}

export const activitat3 = {
  estimacioNota: "Estimació en talles S/M/L/XL (S ≈ ½ sprint-persona, M ≈ 1, L ≈ 2, XL ≈ cal partir). Prioritat MoSCoW.",
  backlog: {
    headers: ["ID", "Història d'usuari", "Èpica", "Estimació", "Prioritat", "Dependències"],
    rows: [
      ["G1", "Usuaris de gestió i rols + login (2FA ADM/SEC)", "Infra/Seg", "M", "Must", "—"],
      ["G2", "VLAN OT aïllada + comunicació MQTT/TLS amb controladores", "Infra/Seg", "M", "Must", "—"],
      ["G3", "Node local amb cache de permisos/horaris i cua offline", "Infra/Seg", "L", "Must", "G2"],
      ["B1", "Registre d'espais, lectors i controladores", "Espais", "M", "Must", "G1"],
      ["A1", "Alta de persona + emissió de credencial (id xifrat)", "Persones", "M", "Must", "G1"],
      ["A3", "Perfils d'accés i assignació a persones", "Persones", "M", "Must", "A1"],
      ["B2", "Definició de regles d'accés (qui/on/quan) + simulador", "Espais", "L", "Must", "A3, B1"],
      ["C1", "Validar accés i obrir porta (edge, < 1 s)", "Accés", "L", "Must", "B2, G3"],
      ["C2", "Obertura offline amb cache + sincronització", "Accés", "L", "Must", "C1"],
      ["C3", "Botó de sortida + panys fail-safe a vies d'evacuació", "Accés", "S", "Must", "B1"],
      ["A2", "Anul·lació immediata de credencial + propagació", "Persones", "M", "Must", "C1"],
      ["A4", "Import de matrícules i grups des de la SGA", "Persones", "M", "Must", "A1"],
      ["B3", "Càrrega d'horaris des de la SGA", "Espais", "M", "Must", "A4, B1"],
      ["D1", "Registre automàtic d'assistència (accés ↔ horari)", "Assistència", "L", "Must", "C1, B3"],
      ["D2", "Validació/correcció de la llista pel professorat", "Assistència", "M", "Must", "D1"],
      ["G4", "Còpies de seguretat automàtiques + prova de restauració", "Infra/Seg", "M", "Must", "G1"],
      ["G5", "Registre d'auditoria append-only", "Infra/Seg", "M", "Must", "C1"],
      ["C6", "Alerta de porta forçada / oberta massa estona", "Accés", "M", "Should", "C1, G6"],
      ["D3", "Consulta d'assistència del grup (tutoria) + export", "Assistència", "M", "Should", "D1"],
      ["D5", "Avís a la família d'absència de 1a hora", "Assistència", "M", "Should", "D1, E1"],
      ["E1", "App: consulta d'assistència (alumnat/família)", "App", "M", "Should", "D1"],
      ["E2", "App: justificació d'absències amb adjunt", "App", "L", "Should", "E1"],
      ["E3", "Web/app: resolució de justificacions (tutoria)", "App", "M", "Should", "E2"],
      ["A5", "Credencial al mòbil (NFC/BLE/QR)", "Persones", "L", "Should", "A1, C1"],
      ["C4", "Obertura remota de porta des del monitor", "Accés", "S", "Should", "C1, F1"],
      ["F1", "Monitor d'accessos en temps real amb filtres", "Monitor", "M", "Should", "C1"],
      ["F2", "Gestió d'incidències (alta manual/automàtica)", "Monitor", "M", "Should", "F1"],
      ["B4", "Excepcions de calendari (festius, exàmens, portes obertes)", "Espais", "S", "Should", "B2, B3"],
      ["D4", "Retorn de marques d'assistència a la SGA", "Assistència", "M", "Should", "D1"],
      ["F3", "Mode evacuació + llista de presents per zona", "Monitor", "L", "Could", "C1, F1"],
      ["E4", "App: validació de llista pel professorat (offline)", "App", "M", "Could", "D2"],
      ["E5", "Consulta d'aforament d'espais comuns", "App", "S", "Could", "C1"],
      ["F5", "Panell de salut de controladores i lectors", "Monitor", "S", "Could", "G3"],
      ["C5", "Obertura d'espais tècnics amb mòbil a l'annex (BLE offline)", "Accés", "M", "Could", "A5, C2"],
      ["F4", "Detecció d'anomalies d'accés (IA) integrada a incidències", "Monitor", "XL", "Won't (aquest mòdul)", "F2, històric ≥ 1 trimestre"],
      ["IA2", "Índex de risc d'absentisme per a tutoria (IA)", "Assistència", "XL", "Won't (aquest mòdul)", "D1, històric ≥ 1 curs"],
    ],
  },
  definicioFet: [
    "Compleix tots els criteris d'acceptació acordats.",
    "Codi revisat per un altre membre (pull request aprovada) i integrat a la branca principal.",
    "Proves: unitàries de la lògica nova i, si toca API o integració OT, prova d'integració; totes en verd a la pipeline CI.",
    "Sense regressions conegudes ni errors de linter.",
    "Documentació mínima actualitzada (README, contracte d'API, esquema de connexions de porta o manual segons el cas).",
    "Desplegada a l'entorn de proves i validada per un altre rol (demo interna); les HU d'accés es proven amb una controladora de banc de proves.",
    "Compleix els criteris transversals de seguretat: comunicacions per TLS, control d'accés per rol a cada endpoint, cap credencial ni secret al codi, entrades validades, identificadors de credencial mai en clar.",
    "Textos en català; interfície d'app usable amb una mà i accessible; els temps de resposta d'obertura mesurats i dins de l'objectiu (< 1 s).",
  ],
  sprints: {
    intro: "Durada de sprint: 2 setmanes. Sprints disponibles: 6 (≈ 3 mesos del mòdul de Projecte), equip de 3 persones (1 ASIX, 1 DAM, 1 DAW) amb dedicació parcial.",
    fites: "MVP al final del Sprint 3 (un punt d'accés real + assistència + web bàsica), demo intermèdia amb el centre al Sprint 4, entrega final al Sprint 6.",
    headers: ["Sprint", "Objectiu (sprint goal)", "HU principals", "ASIX", "DAM", "DAW"],
    rows: [
      ["1", "Base tècnica: xarxa OT, node local i alta de persones/espais.", "G1, G2, G3, B1, A1", "VLAN OT, switch PoE, node local, MQTT, CI/CD", "Esquelet app + login + vinculació de dispositiu", "Esquelet web + login + CRUD persones/espais"],
      ["2", "Permisos i porta de banc de proves: es pot obrir amb regla vàlida.", "A3, B2, C1, C3", "Firmware controladora (OSDP, relé, sensor), banc de proves", "Consum d'API, pantalla de credencial", "Editor de perfils i regles + simulador d'accés"],
      ["3", "MVP: un punt d'accés real + assistència automàtica + anul·lació de credencials.", "C2, A2, A4, B3, D1, D2", "Instal·lació d'una porta real, cache/sync offline, backups (G4)", "— (suport a proves)", "Import SGA (horaris/matrícules), registre d'assistència, llista del professorat"],
      ["4", "Comunicació amb famílies i monitoratge. Demo amb el centre.", "D3, D5, E1, F1, G5", "Auditoria append-only, integració SMTP/push", "App: consulta d'assistència + avisos", "Monitor en temps real, informes de tutoria"],
      ["5", "Justificacions, incidències i credencial mòbil.", "E2, E3, F2, C6, A5, B4", "Integració alarma/CCTV (G6), hardening", "App: justificació amb adjunt, credencial NFC/BLE", "Safata de justificacions, gestió d'incidències, excepcions de calendari"],
      ["6", "Continuïtat i tancament: evacuació, retorn a SGA, estabilització.", "F3, D4, C4, F5, E5 + correcció d'errors", "Panell de salut de dispositius, proves de tall d'Internet i d'energia", "App: aforament, retocs UX", "Panell d'evacuació, retorn de marques a SGA, obertura remota"],
    ],
    reparticio: "Repartiment orientatiu de la càrrega: ASIX ~40 % (xarxa, node local, controladores/firmware, seguretat, integracions, CI/CD), DAW ~40 % (web + API + integració SGA, que és el gruix), DAM ~20 % (app; s'incorpora amb força a partir del Sprint 3). L'API la lidera DAW amb suport d'ASIX per a la part OT/MQTT.",
    realisme: "El MVP al Sprint 3 ja substitueix el procés manual en un espai i valida el registre automàtic d'assistència; l'extensió a les 15 portes és desplegament incremental. Les HU Could (F3, E4, E5, F5, C5) són les primeres a caure si hi ha desviació. Els dos casos d'IA queden fora perquè necessiten històric real. La instal·lació física de portes reals depèn del centre i es limita a una o dues durant el mòdul.",
  },
  riscosComponent: {
    headers: ["Component", "Amenaça", "Impacte", "Probabilitat", "Mesura mitigadora"],
    rows: [
      ["Portal web (DAW)", "XSS / injecció als formularis de persones, regles i horaris", "A", "M", "Validació i escapat d'entrada/sortida, Content-Security-Policy, ORM parametritzat, revisió de dependències (SCA)"],
      ["Portal web", "Segrest de sessió / CSRF", "A", "M", "Cookies HttpOnly+Secure+SameSite, tokens anti-CSRF, expiració i renovació de sessió, 2FA per a ADM/SEC"],
      ["App mòbil (DAM)", "Pèrdua del mòbil amb credencial virtual activa", "A", "M", "Credencial lligada al dispositiu, PIN/biometria per obrir l'app i per usar la credencial, revocació remota des de web, caducitat curta del testimoni"],
      ["App mòbil", "Clonatge de la credencial mòbil (NFC/BLE)", "A", "B", "Element segur / keystore del sistema, testimonis rotatius, challenge-response amb el lector (OSDP Secure Channel), no exposar l'identificador en clar"],
      ["Targeta RFID", "Clonatge o lectura de l'UID", "A", "M", "Targetes MIFARE DESFire amb claus diversificades (no UID pla), autenticació mútua; OSDP xifrat lector–controladora (no Wiegand)"],
      ["Controladora de porta", "Manipulació física / bus sniffing / substitució", "A", "B", "Caixa amb clau i sensor de sabotatge, canal OSDP xifrat, certificat per dispositiu, muntatge en costat segur de la porta, alerta en pèrdua de contacte"],
      ["Controladora", "Ús del mode offline per forçar accessos amb targeta revocada", "M", "—", "Propagació prioritària de revocacions a les controladores en línia, finestra de cache curta, cua d'esdeveniments revisada en recuperar connexió, límit d'antiguitat de la cache"],
      ["API / Backend", "Accés no autoritzat a endpoints (assistència, persones, evacuació)", "A", "M", "OAuth2/JWT amb caducitat curta, autorització per rol a cada endpoint, rate limiting, WAF"],
      ["API / Backend", "IDOR: accés a l'assistència d'un altre alumne/a", "A", "M", "Comprovació de relació família–alumne/a i de rol per recurs, identificadors no endevinables, registre d'accessos"],
      ["Base de dades", "Fuita de dades de menors i de patrons de presència", "A", "B", "Xifratge en repòs, xarxa privada sense IP pública, secrets en gestor de claus, mínim privilegi, còpies xifrades"],
      ["Base de dades", "Pèrdua de dades per error o ransomware", "A", "B", "Còpies diàries immutables (retenció 30 dies) + mensual off-site, prova de restauració trimestral"],
      ["Node local", "Robatori o compromís del node (conté cache i cua)", "M", "B", "Disc xifrat, arrencada segura, ubicació al rack tancat amb SAI, sense serveis exposats, només VPN per a administració"],
      ["Xarxa del centre", "Intrús per port lliure o Wi-Fi", "M", "—", "802.1X / MAC allowlist als ports d'accés, ports no usats deshabilitats, WPA2/3-Enterprise, SSID convidats aïllat"],
      ["VLAN OT", "Salt des de l'OT cap a la gestió o Internet", "A", "B", "VLAN OT sense rutes cap a altres VLAN ni Internet (excepte MQTT/TLS al node), tallafoc deny by default, topics MQTT per dispositiu"],
      ["Núvol", "Configuració incorrecta (bucket obert, IAM ample)", "A", "M", "Infraestructura com a codi revisada, escaneig de configuració, mínim privilegi IAM, MFA als comptes d'administració, regió UE"],
      ["Integració SGA", "Credencials d'integració filtrades / dades en trànsit", "M", "—", "Secret rotatiu en gestor de claus, TLS mutu si és possible, llista blanca d'IP, validació de l'esquema importat"],
      ["Correu / push", "Suplantació de la marca del centre (phishing a famílies)", "M", "—", "SPF/DKIM/DMARC, contingut mínim als missatges, cap petició de dades sensibles per correu"],
      ["Documents (justificants amb dades de salut)", "Accés indegut a l'emmagatzematge d'objectes", "A", "B", "Bucket privat, URLs signades de curta durada, xifratge, accés limitat a tutoria/direcció, registre d'accés"],
      ["Alimentació", "Tall elèctric deixa portes bloquejades o obertes indegudament", "A", "B", "SAI al rack i a portes d'edifici; vies d'evacuació fail-safe (obren en tall); magatzems/rack fail-secure; proves periòdiques"],
      ["Model d'IA (futur)", "Biaix o reidentificació a partir de patrons d'accés", "M", "B", "Dades pseudonimitzades, exclusió de variables sensibles, sortida només com a alerta/indicador amb revisió humana, DPIA"],
    ],
  },
  mesuresSeguretat: [
    { titol: "Xifratge en trànsit", text: "TLS 1.2+ obligatori a web, API, MQTT i replicació node↔núvol; HSTS al portal; certificate pinning a l'app; OSDP Secure Channel entre lector i controladora. Cap servei intern sense TLS." },
    { titol: "Xifratge en repòs", text: "BBDD, magatzem d'esdeveniments, objectes i còpies xifrats (AES-256 gestionat pel proveïdor); claus al servei de gestió de claus; disc del node local xifrat; magatzem de la credencial mòbil al keystore del sistema. Els identificadors de credencial es desen derivats/xifrats, mai l'UID en clar." },
    { titol: "Autenticació i autorització", text: "Comptes nominals (cap compte compartit); rols CONS/SEC/TUT/PROF/ADM amb permisos mínims; 2FA obligatori per a ADM i SEC; contrasenyes amb hashing fort (Argon2/bcrypt); bloqueig per intents fallits; sessions amb caducitat i renovació; testimonis de l'app de curta durada amb refresc." },
    { titol: "Seguretat del maquinari de porta", text: "Targetes DESFire amb claus diversificades; OSDP xifrat; caixa de controladora protegida amb tamper; muntatge del lector sense exposar el bus al costat insegur; revocacions propagades amb prioritat; cache offline amb antiguitat màxima." },
    { titol: "Còpies de seguretat i recuperació", text: "Còpia diària automàtica (retenció 30 dies) + mensual (12 mesos); una còpia fora del proveïdor principal; prova de restauració trimestral documentada amb RTO < 1 dia laborable i RPO < 24 h; el node local es pot reprovisionar des de plantilla en < 2 h." },
    { titol: "Protecció de la xarxa", text: "Tallafoc perimetral amb regles inter-VLAN explícites (deny per defecte); segmentació gestió / OT / Wi-Fi corporativa / convidats; VLAN OT sense sortida a Internet excepte MQTT/TLS al node; 802.1X als ports; WAF i rate limiting davant de l'API; VPN per a administració; IDS/IPS bàsic." },
    { titol: "Continuïtat i disponibilitat", text: "Node local + controladores operen sense Internet; SAI al rack i a portes d'edifici; enllaç 4G/5G de reserva; monitoratge de salut de dispositius amb alerta si un no reporta; les vies d'evacuació compleixen la normativa (obertura garantida en emergència)." },
    { titol: "Gestió de vulnerabilitats i actualitzacions", text: "Anàlisi de dependències a la CI (SCA); actualitzacions del PaaS automàtiques; finestra mensual de parxeig per a node, controladores (firmware signat) i AP; inventari de versions; revisió periòdica de la configuració del núvol." },
    { titol: "Registre i auditoria", text: "Log append-only de tots els esdeveniments d'accés, obertures remotes, canvis de regla/perfil, emissió i anul·lació de credencials, canvis de rol, activació del mode evacuació i accessos a justificants sensibles; rellotge sincronitzat (NTP); alertes per accions sensibles fora d'horari; retenció segons la política de dades." },
  ],
  proteccioDades: {
    dades: [
      "Identificatives d'alumnat, professorat i PAS (nom, cognoms, document) i de contacte de les famílies (correu, telèfon) → identificació, control d'accés, avisos.",
      "Esdeveniments d'accés i assistència (qui entra a quin espai i quan, presència a l'edifici) → control d'assistència reglat i seguretat de les instal·lacions. Revelen patrons de presència de menors → tractament de risc.",
      "Justificacions d'absència i els seus adjunts, que poden contenir dades de salut (certificats mèdics) → gestió de l'absentisme justificat. Categoria especial → accés restringit i retenció mínima.",
      "Credencials (identificador de targeta/mòbil, sempre xifrat) → autenticació física.",
      "Comptes de gestió (professorat/PAS amb rol) → operació del sistema.",
    ],
    baseLegal: "Compliment d'una obligació legal i missió d'interès públic en l'exercici de la funció educativa (control d'assistència de menors escolaritzats i seguretat del centre); per als adjunts amb dades de salut, tractament emparat en l'interès públic en l'àmbit educatiu i, si escau, consentiment explícit de qui té la pàtria potestat. Es formalitza un contracte d'encàrrec de tractament (art. 28 RGPD) amb el proveïdor de núvol i amb els serveis de correu/push.",
    principis: [
      "Minimització: només els camps necessaris; les aules ordinàries no registren sortida (n'hi ha prou amb l'entrada per a l'assistència); no es fa seguiment de trajectòries més enllà del necessari per a assistència, seguretat i evacuació; les dades d'IA (futur) s'usen pseudonimitzades.",
      "Limitació de finalitat: els registres d'accés no s'usen per a control laboral del professorat ni per a finalitats disciplinàries automàtiques.",
      "Exactitud: persones i horaris tenen origen únic (SGA) i s'hi sincronitzen; les famílies poden demanar rectificació.",
      "Drets de les persones: procediment per exercir accés, rectificació, supressió, oposició, limitació i portabilitat (export de les dades de la persona en format llegible) davant la secretaria del centre; informació clara a l'alumnat i les famílies a l'inici de curs; delegat/da de protecció de dades del centre / Departament d'Educació com a punt de contacte; resolució en el termini legal.",
    ],
    retencio: [
      "Assistència: segons la normativa acadèmica (típicament el curs en vigor + arxiu segons instruccions del Departament), després anonimització per a estadística.",
      "Esdeveniments d'accés (log de portes): retenció curta, orientativament 3-6 mesos, llevat dels vinculats a una incidència oberta.",
      "Justificants amb dades de salut: retenció mínima (el temps necessari per resoldre i acreditar la justificació) i després esborrat.",
      "Auditoria: segons política de seguretat (p. ex. 1 any).",
      "Eliminació segura: esborrat lògic + purga física programada; destrucció de còpies en complir la retenció; el dret de supressió es propaga a les còpies en el següent cicle documentat.",
    ],
    onEmmagatzemen: "Proveïdor de núvol amb regió a la UE i clàusules de protecció de dades; s'evita la transferència internacional; si algun subservei (correu/push) tractés dades fora de la UE, es verifiquen garanties adequades. Les controladores i el node local no són magatzem permanent: cache i cua amb antiguitat màxima.",
    dpia: "Obligatòria i feta abans de posar el sistema en producció, perquè hi ha tractament sistemàtic de dades de menors, monitoratge d'accessos i un component d'IA. Recull: descripció del tractament, necessitat i proporcionalitat, riscos per als drets (reidentificació, ús desviat, discriminació), i mesures (minimització, xifratge, control d'accés, revisió humana de l'IA, retencions curtes).",
    organitzatives: "Registre d'activitats de tractament; formació a consergeria, secretaria i tutories; clàusules de confidencialitat per a l'alumnat en pràctiques que accedeixi a dades reals (millor treballar amb dades de prova); informació a les famílies i cartellera informativa als accessos.",
  },
  riscosProjecte: {
    headers: ["Risc", "Impacte", "Prob.", "Acció de contingència"],
    rows: [
      ["El maquinari de portes (lectors OSDP, panys, controladores) no arriba o no és compatible amb els panys existents", "A", "M", "Treballar amb un banc de proves des del Sprint 2; limitar la instal·lació real a 1-2 portes; especificar maquinari estàndard; deixar l'ampliació com a desplegament posterior"],
      ["Normativa d'evacuació / homologació de panys en vies de sortida", "A", "M", "Consultar-ho amb el centre i el servei de manteniment abans d'instal·lar; usar panys fail-safe homologats a les sortides; no intervenir en portes d'evacuació si hi ha dubtes"],
      ["Integració amb el sistema de gestió acadèmica sense API oberta", "A", "—", "Suportar import per fitxer (CSV) com a alternativa; acordar format amb secretaria; placeholder configurable de mapatge de camps"],
      ["Wi-Fi feble a l'annex de tallers", "M", "—", "PoE cablejat per a lectors i controladores (no depenen de Wi-Fi); app offline-first; enllaç 4G/5G al node"],
      ["Corba d'aprenentatge d'OSDP / RFID segur / MQTT (ASIX)", "M", "—", "Spike tècnic al Sprint 1; kit de desenvolupament conegut; documentar l'esquema de connexions; parella de treball per no concentrar el coneixement"],
      ["Resistència del professorat a \"fitxar\" o dependre del sistema per a la llista", "M", "—", "Deixar clar que no és control laboral; mantenir sempre la validació manual de la llista; comunicació i pilotatge amb un grup voluntari"],
      ["Continuïtat: tall d'Internet o d'energia durant l'horari lectiu", "A", "B", "Node local + controladores offline provats explícitament al Sprint 6; SAI; procediment manual de consergeria com a últim recurs"],
      ["Dades reals de menors en un projecte d'alumnat", "A", "M", "Treballar amb dataset de prova; entorns separats; accés real només a professorat responsable; DPIA i clàusules de confidencialitat"],
      ["Abast massa gran per a 6 sprints i 3 persones", "M", "A", "MoSCoW estricte; els Could i tota la IA són sacrificables; MVP en una sola porta"],
      ["Dependència d'un únic proveïdor de núvol", "B", "M", "Còpies exportables i infraestructura com a codi; el node local permet operar dies sense el núvol"],
    ],
  },
  recursosHumans: {
    headers: ["Perfil", "Competències necessàries", "A reforçar"],
    rows: [
      ["ASIX", "Xarxes i VLAN, switching PoE, tallafoc, VPN, TLS/PKI, Linux de servidor, contenidors, còpies i restauració, CI/CD, monitoratge; electrònica bàsica (relés, sensors), MQTT", "OSDP i RFID segur (DESFire, claus diversificades); hardening i IaC de núvol + IAM; posada en marxa de node local i broker MQTT; normativa d'evacuació i panys"],
      ["DAM", "Desenvolupament multiplataforma (Android/iOS o framework únic), consum d'API REST, emmagatzematge local xifrat, UX mòbil, notificacions push", "NFC/BLE i credencial en element segur; sincronització offline-first i resolució de conflictes; distribució a les dues botigues / MDM"],
      ["DAW", "Backend d'API REST, BBDD relacional i modelatge, frontend web responsive, autenticació/autorització per rols, informes i agregacions, integracions amb sistemes externs", "Seguretat d'aplicació web (OWASP), disseny d'API estable per a web + app + OT, processament d'esdeveniments gairebé en temps real, integració amb la gestió acadèmica"],
      ["Transversal (els 3)", "Scrum (backlog, sprints, DoD), Git i revisió de codi, proves automatitzades, RGPD bàsic", "Protecció de dades de menors i DPIA; escriptura de criteris d'acceptació; proves d'integració web ↔ app ↔ controladora; gestió de reunions de requisits amb el centre"],
    ],
    conclusio: "Coneixements a reforçar prioritaris: OSDP/RFID segur i continuïtat OT (ASIX), NFC/BLE i sincronització offline (DAM), i seguretat web + API compartida + integració SGA (DAW). Es recomana un spike tècnic de cada tema al Sprint 1, treball en parella a les parts crítiques (firmware de controladora, integració SGA) i sessions curtes de traspàs entre membres per evitar dependències d'una sola persona.",
  },
  veredicte:
    "Pla realista per a 3 persones i 6 sprints: el MVP (Sprint 3) demostra el cicle complet en un punt d'accés (obrir + registrar assistència + anul·lar credencials), i l'extensió a la resta de portes és desplegament incremental. El backlog està estimat i prioritzat amb MoSCoW i dependències, amb la IA fora d'aquest mòdul per manca d'històric. El pla de seguretat cobreix tots els components —amb atenció específica al maquinari de porta (OSDP, DESFire, tamper, fail-safe), a la continuïtat sense Internet i a la protecció de dades de menors i de salut— i inclou una DPIA obligatòria. Ajust recomanat: acordar aviat amb el centre la via d'integració amb la gestió acadèmica i limitar la instal·lació física a una o dues portes.",
}

export const annex = [
  {
    activitat: "Activitat 1",
    items: [
      "Fitxa del projecte",
      "Idea, objectius estratègics i de digitalització, KPI",
      "Encaix ASIX/DAM/DAW + delimitació",
      "Diagrama de context + llegenda",
      "IT/OT (component OT central) i avantatges d'extrem a extrem",
      "Informe de THD (6 THD + conclusions)",
      "Ús d'IA (anomalies + risc d'absentisme)",
    ],
  },
  {
    activitat: "Activitat 2",
    items: [
      "HU en èpiques amb criteris d'acceptació",
      "Casos d'ús: 5 especificacions textuals",
      "Xarxa + model de núvol (híbrid, IaaS/PaaS/SaaS) + edge/fog",
      "Model E/R i pas a relacional (20 entitats)",
      "Fonts de dades + recorregut de les dades",
    ],
  },
  {
    activitat: "Activitat 3",
    items: [
      "Product backlog prioritzat (estimació + MoSCoW + dependències) + DoD",
      "Planificació en sprints + fites + repartiment",
      "Riscos de seguretat per component",
      "Mesures de seguretat concretes",
      "Protecció de dades personals (RGPD/LOPDGDD) + DPIA",
      "Riscos del projecte i contingències",
      "Idoneïtat dels recursos humans",
    ],
  },
]
