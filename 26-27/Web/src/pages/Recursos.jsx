import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ExternalLink, Cloud, Cpu, Database, Brain, Shield, BookOpen, Video, Wrench, Github,
  ChevronDown, ChevronUp, Layers, GitBranch, Activity, Lock, Network, Gauge,
  Server, CloudCog, Terminal, Plug, Sparkles, AlertTriangle, FolderOpen, ListChecks,
  FileText, Presentation, Download, Info,
} from 'lucide-react'

const recursos = [
  {
    categoria: 'Cloud Computing',
    icon: Cloud,
    color: 'bg-blue-500',
    items: [
      { nom: 'AWS Free Tier', url: 'https://aws.amazon.com/free/', desc: '12 mesos de serveis gratuïts' },
      { nom: 'Google Cloud Free', url: 'https://cloud.google.com/free', desc: '$300 de crèdit inicial' },
      { nom: 'Azure for Students', url: 'https://azure.microsoft.com/free/students/', desc: '$100 crèdit amb compte educatiu' },
      { nom: 'Firebase', url: 'https://firebase.google.com/', desc: 'Backend as a Service gratuït' },
      { nom: 'Supabase', url: 'https://supabase.com/', desc: 'Alternativa open source a Firebase' },
      { nom: 'Vercel', url: 'https://vercel.com/', desc: 'Hosting gratuït per a frontends' },
    ],
  },
  {
    categoria: 'IoT i Sensors',
    icon: Cpu,
    color: 'bg-green-500',
    items: [
      { nom: 'Wokwi', url: 'https://wokwi.com/', desc: 'Simulador ESP32/Arduino online' },
      { nom: 'Tinkercad Circuits', url: 'https://www.tinkercad.com/circuits', desc: 'Simulador Arduino visual' },
      { nom: 'Node-RED', url: 'https://nodered.org/', desc: 'Programació visual per IoT' },
      { nom: 'MQTT Explorer', url: 'https://mqtt-explorer.com/', desc: 'Client MQTT per testing' },
      { nom: 'ThingSpeak', url: 'https://thingspeak.com/', desc: 'Plataforma IoT gratuïta' },
      { nom: 'Grafana Cloud', url: 'https://grafana.com/products/cloud/', desc: 'Dashboards i monitorització' },
    ],
  },
  {
    categoria: 'IA i Machine Learning',
    icon: Brain,
    color: 'bg-purple-500',
    items: [
      { nom: 'Google Colab', url: 'https://colab.research.google.com/', desc: 'Notebooks amb GPU gratuïta' },
      { nom: 'Hugging Face', url: 'https://huggingface.co/', desc: 'Models pre-entrenats i datasets' },
      { nom: 'Teachable Machine', url: 'https://teachablemachine.withgoogle.com/', desc: 'ML sense codi' },
      { nom: 'OpenAI API', url: 'https://platform.openai.com/', desc: 'GPT i altres models (cal facturació, ja no dona crèdit gratuït)' },
      { nom: 'Kaggle', url: 'https://www.kaggle.com/', desc: 'Datasets i competicions ML' },
      { nom: 'Scikit-learn', url: 'https://scikit-learn.org/', desc: 'Biblioteca ML per Python' },
    ],
  },
  {
    categoria: 'Big Data i Analytics',
    icon: Database,
    color: 'bg-orange-500',
    items: [
      { nom: 'Metabase', url: 'https://www.metabase.com/', desc: 'BI open source' },
      { nom: 'Apache Superset', url: 'https://superset.apache.org/', desc: 'Visualització de dades' },
      { nom: 'MongoDB Atlas', url: 'https://www.mongodb.com/atlas', desc: 'Base de dades NoSQL cloud' },
      { nom: 'PostgreSQL', url: 'https://www.postgresql.org/', desc: 'Base de dades relacional' },
      { nom: 'DBeaver', url: 'https://dbeaver.io/', desc: 'Client universal de BBDD' },
      { nom: 'Power BI Desktop', url: 'https://powerbi.microsoft.com/', desc: 'Eina BI de Microsoft (gratis)' },
    ],
  },
  {
    categoria: 'Seguretat',
    icon: Shield,
    color: 'bg-red-500',
    items: [
      { nom: 'OWASP', url: 'https://owasp.org/', desc: 'Guies de seguretat web' },
      { nom: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', desc: 'Verificació de filtracions' },
      { nom: 'SSL Labs', url: 'https://www.ssllabs.com/ssltest/', desc: 'Test de certificats SSL' },
      { nom: 'AEPD - RGPD', url: 'https://www.aepd.es/', desc: 'Guies oficials RGPD Espanya' },
      { nom: 'Security Headers', url: 'https://securityheaders.com/', desc: 'Anàlisi de capçaleres HTTP' },
    ],
  },
  {
    categoria: 'Desenvolupament',
    icon: Wrench,
    color: 'bg-gray-600',
    items: [
      { nom: 'GitHub', url: 'https://github.com/', desc: 'Control de versions i col·laboració' },
      { nom: 'VS Code', url: 'https://code.visualstudio.com/', desc: 'Editor de codi recomanat' },
      { nom: 'Docker Desktop', url: 'https://www.docker.com/products/docker-desktop/', desc: 'Contenidors locals' },
      { nom: 'Postman', url: 'https://www.postman.com/', desc: "Testing d'APIs" },
      { nom: 'Figma', url: 'https://www.figma.com/', desc: "Disseny d'interfícies" },
      { nom: 'Draw.io / diagrams.net', url: 'https://draw.io/', desc: 'Diagrames i arquitectures' },
    ],
  },
]

const tutorials = [
  {
    tema: 'IoT amb ESP32',
    recursos: [
      { nom: 'Random Nerd Tutorials', url: 'https://randomnerdtutorials.com/', tipus: 'Web' },
      { nom: 'ESP32 amb Firebase', url: 'https://randomnerdtutorials.com/esp32-firebase-realtime-database/', tipus: 'Tutorial' },
    ],
  },
  {
    tema: 'Machine Learning',
    recursos: [
      { nom: 'ML Crash Course (Google)', url: 'https://developers.google.com/machine-learning/crash-course', tipus: 'Curs' },
      { nom: 'Fast.ai', url: 'https://www.fast.ai/', tipus: 'Curs' },
    ],
  },
  {
    tema: 'Cloud Architecture',
    recursos: [
      { nom: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/', tipus: 'Guia' },
      { nom: 'Azure Architecture Center', url: 'https://docs.microsoft.com/azure/architecture/', tipus: 'Guia' },
    ],
  },
  {
    tema: 'Seguretat i Zero Trust',
    recursos: [
      { nom: 'NIST Zero Trust Architecture', url: 'https://www.nist.gov/publications/zero-trust-architecture', tipus: 'Document' },
      { nom: 'Google BeyondCorp', url: 'https://cloud.google.com/beyondcorp', tipus: 'Model' },
    ],
  },
]

// Eines concretes que calen a cada activitat del projecte
const einesPerActivitat = [
  {
    act: 'A1',
    titol: 'Idea, objectius i anàlisi de requeriments',
    eines: [
      { nom: 'diagrams.net (draw.io)', desc: 'Diagrama de context (nivell C4-1): el sistema com una caixa, actors externs i fluxos' },
      { nom: 'Mermaid', desc: 'Alternativa en text al diagrama de context, fàcil d\'incrustar en Markdown' },
    ],
  },
  {
    act: 'A2',
    titol: 'Disseny: arquitectura tecnològica',
    eines: [
      { nom: 'diagrams.net (draw.io)', desc: 'Diagrama d\'arquitectura i topologia de xarxa (VLAN, DMZ, elements)' },
      { nom: 'dbdiagram.io', desc: 'Disseny visual del model entitat-relació amb exportació a SQL' },
      { nom: 'Mermaid (erDiagram)', desc: 'Alternativa en text al model E/R, útil si tot el document és Markdown' },
    ],
  },
  {
    act: 'A3',
    titol: 'Pla d\'implementació i seguretat',
    eines: [
      { nom: 'Jira / Trello / GitHub Projects', desc: 'Backlog priorizat amb estimació, MoSCoW i dependències' },
      { nom: 'Diagrames de Gantt', desc: 'Planificació de sprints i fites (es poden fer amb Mermaid gantt, TeamGantt o el mateix full de càlcul)' },
    ],
  },
  {
    act: 'A4',
    titol: 'Prototip i material de presentació',
    eines: [
      { nom: 'Google AI Studio, v0, Figma Make, Bolt, Lovable, Claude Artifacts', desc: 'Prototipatge ràpid amb IA (vegeu la secció següent)' },
      { nom: 'Figma / Penpot / Balsamiq / Excalidraw', desc: 'Prototipatge manual d\'interfície, de baixa a mitjana fidelitat' },
      { nom: 'Canva / diagrams.net / Figma', desc: 'Cartell publicitari del projecte (A3 o A4)' },
    ],
  },
  {
    act: 'A5',
    titol: 'Presentació i defensa',
    eines: [
      { nom: 'Google Slides / Canva / PowerPoint', desc: '8-12 diapositives per a una exposició de 8-10 minuts' },
    ],
  },
]

// Eines de prototipatge amb IA, ampliades per a l'Activitat 4
const einesPrototipatgeIA = [
  { nom: 'Google AI Studio', url: 'https://aistudio.google.com/', desc: 'Genera interfícies interactives a partir d\'una descripció en llenguatge natural; bo per iterar ràpid sobre el flux principal' },
  { nom: 'v0 (Vercel)', url: 'https://v0.dev/', desc: 'Genera components i pantalles web (React + Tailwind) a partir de text o captures; exporta codi real' },
  { nom: 'Figma Make', url: 'https://www.figma.com/make/', desc: 'Prototipatge amb IA dins de Figma, combinable amb els components del vostre fitxer de disseny' },
  { nom: 'Claude Artifacts', url: 'https://claude.ai/', desc: 'Genera una pantalla o flux navegable com a artifact web a partir d\'una conversa; útil per maquetar ràpid una idea' },
  { nom: 'Bolt.new', url: 'https://bolt.new/', desc: 'Genera i executa una app web completa al navegador a partir d\'un prompt' },
  { nom: 'Lovable', url: 'https://lovable.dev/', desc: 'Genera una app web amb IA amb un editor visual per retocar-la després' },
]

// Materials descarregables directament des de public/recursos/
const materialsModul = [
  {
    titol: 'Per fer les activitats',
    materials: [
      {
        nom: "Guia d'històries d'usuari, backlog i casos d'ús",
        desc: "Criteris d'acceptació, backlog MoSCoW i casos d'ús: la base didàctica per als punts 2.1, 2.2 i 3.1 de les activitats.",
        fitxer: 'guia-histories-usuari-backlog-casos-us.docx',
        format: 'DOCX',
        mida: '226 KB',
        icon: ListChecks,
        relacio: { label: 'Metodologia', to: '/metodologia' },
      },
      {
        nom: 'El Backlog en Scrum',
        desc: "Lectura prèvia del lliurable 3.1: com prioritzar i estimar el product backlog amb MoSCoW i dependències (13 pàgines).",
        fitxer: 'el-backlog-en-scrum.pdf',
        format: 'PDF',
        mida: '292 KB',
        icon: ListChecks,
        relacio: { label: 'Metodologia', to: '/metodologia' },
      },
      {
        nom: "Catàleg de tecnologies d'arquitectura per a ASIX",
        desc: "10 dominis amb tecnologies classificades per nivell (bàsic, intermedi, avançat), per triar l'arquitectura del projecte.",
        fitxer: 'cataleg-tecnologies-arquitectura-asix.docx',
        format: 'DOCX',
        mida: '20 KB',
        icon: Layers,
        relacioAncora: { label: "catàleg d'arquitectura per a ASIX", href: '#catalog-arquitectura-asix' },
      },
      {
        nom: 'Diagrama general de context (DGC)',
        desc: 'Document de referència per construir el diagrama de context (nivell C4-1) del projecte, útil per al lliurable 1.4.',
        fitxer: 'diagrama-general-de-context.pdf',
        format: 'PDF',
        mida: '45 KB',
        icon: FileText,
      },
      {
        tipus: 'video',
        nom: '"Las 4 capas del IoT con Big Data"',
        desc: "Lectura prèvia recomanada de l'Activitat 1 per a la part de sensors i IoT, quan el projecte té component OT.",
        url: 'https://www.youtube.com/watch?v=jJuBcaMQh0s',
        durada: '19 min',
      },
    ],
  },
  {
    titol: "Projecte d'exemple",
    materials: [
      {
        nom: 'Enunciat: AccésCentre',
        desc: "Projecte d'exemple complet (control d'accessos i assistència d'un institut), per fer-se una idea del nivell i el format esperats.",
        fitxer: 'enunciat-projecte-control-accessos.docx',
        format: 'DOCX',
        mida: '9 KB',
        icon: BookOpen,
        relacio: { label: "Projecte d'exemple", to: '/exemple' },
      },
      {
        nom: 'Enunciat resolt (Activitats 1, 2 i 3)',
        desc: 'El mateix projecte amb les activitats 1, 2 i 3 resoltes senceres, com a referència de com desenvolupar-les.',
        fitxer: 'enunciat-projecte-control-accessos-resolt.docx',
        format: 'DOCX',
        mida: '477 KB',
        icon: FolderOpen,
        relacio: { label: "Projecte d'exemple", to: '/exemple' },
      },
    ],
  },
  {
    titol: 'Documentació oficial del mòdul',
    materials: [
      {
        nom: 'Programació del mòdul 1665 (curs 2026-27)',
        desc: "Programació oficial del mòdul: continguts, criteris d'avaluació i temporització del curs.",
        fitxer: 'programacio-modul-1665-2627.docx',
        format: 'DOCX',
        mida: '286 KB',
        icon: FileText,
        relacio: { label: 'Avaluació', to: '/avaluacio' },
      },
      {
        nom: 'Incorporació del mòdul de Digitalització a la FP',
        desc: 'Document oficial de la Generalitat sobre la incorporació del mòdul de Digitalització dins el currículum de FP.',
        fitxer: 'incorporacio-modul-digitalitzacio-fp.pdf',
        format: 'PDF',
        mida: '889 KB',
        icon: FileText,
      },
      {
        nom: 'Material de Digitalització (IOC)',
        desc: "Material curricular complet del mòdul, de l'Institut Obert de Catalunya: unitat 1 (digitalització, IT/OT), unitat 2 (tecnologies habilitadores i núvol) i unitat 3 (IA, dades, seguretat i RGPD). Font: IOC.",
        fitxer: 'material-digitalitzacio-ioc.pdf',
        format: 'PDF',
        mida: '4 MB',
        icon: FileText,
      },
    ],
  },
]

// Catàleg d'arquitectura per a ASIX, organitzat en 10 dominis
const dominisASIX = [
  {
    id: 'contenidors',
    nom: 'Contenidorització i Orquestració',
    icon: Layers,
    color: 'bg-sky-600',
    aspectes: [
      'Contenidorització de tots els serveis (frontend, backend, BD, caché).',
      'Multi-stage builds per optimitzar imatges.',
      'Gestió de configuració per entorn (dev/staging/prod).',
      'Orquestració de serveis amb dependències.',
      'Gestió del cicle de vida dels contenidors.',
      'Registres privats d\'imatges.',
    ],
    grups: [
      { items: [
        { nom: 'Docker', nivell: 'Bàsic', us: 'Contenidorització de serveis individuals' },
        { nom: 'Docker Compose', nivell: 'Bàsic', us: 'Orquestració local i entorns senzills' },
        { nom: 'Docker Swarm', nivell: 'Intermedi', us: 'Clúster de producció senzill' },
        { nom: 'Kubernetes (K8s)', nivell: 'Avançat', us: 'Orquestració completa, autoescalat' },
        { nom: 'K3s / MicroK8s', nivell: 'Intermedi', us: 'K8s lleuger per a recursos limitats' },
        { nom: 'Podman', nivell: 'Intermedi', us: 'Alternativa rootless a Docker' },
        { nom: 'Harbor / Registry', nivell: 'Intermedi', us: 'Registre privat d\'imatges' },
      ] },
    ],
  },
  {
    id: 'cicd',
    nom: 'CI/CD (Integració i Desplegament Continus)',
    icon: GitBranch,
    color: 'bg-emerald-600',
    aspectes: [
      'Treballar amb Git en grup de manera correcta, com a base necessària per després implementar CI/CD.',
      'Pipeline de build automatitzat.',
      'Execució de tests en cada commit/PR (automatització de tests).',
      'Anàlisi estàtic de codi (linting, seguretat).',
      'Build i push d\'imatges Docker.',
      'Desplegament automàtic a entorns.',
      'Estratègies de desplegament (blue-green, canary, rolling).',
      'Rollback automàtic davant de fallades.',
      'Gestió de secrets al pipeline.',
    ],
    grups: [
      { items: [
        { nom: 'GitHub Actions', nivell: 'Bàsic', us: 'CI/CD integrat amb GitHub' },
        { nom: 'GitLab CI', nivell: 'Bàsic', us: 'CI/CD integrat amb GitLab' },
        { nom: 'Jenkins', nivell: 'Intermedi', us: 'CI/CD autoallotjat, molt configurable' },
        { nom: 'Trivy / Snyk', nivell: 'Intermedi', us: 'Escaneig de vulnerabilitats en imatges' },
      ] },
    ],
    pipeline: 'commit → lint → test → build imatge → escaneig de seguretat → push al registre → deploy a staging → tests e2e → deploy a producció',
  },
  {
    id: 'observabilitat',
    nom: 'Observabilitat (Logs, Mètriques, Traces)',
    icon: Activity,
    color: 'bg-teal-600',
    aspectes: [
      'Centralització de logs de tots els serveis.',
      'Mètriques de sistema (CPU, RAM, disc, xarxa).',
      'Mètriques d\'aplicació (requests, latència, errors).',
      'Traces distribuïdes entre microserveis.',
      'Dashboards operatius i de negoci.',
      'Sistema d\'alertes (email, Slack, SMS).',
      'Correlació d\'esdeveniments.',
    ],
    grups: [
      { titol: 'Stack de mètriques', items: [
        { nom: 'Prometheus', nivell: 'Intermedi', us: 'Recol·lecció i emmagatzematge de mètriques' },
        { nom: 'Grafana', nivell: 'Bàsic', us: 'Visualització de mètriques i dashboards' },
        { nom: 'Alertmanager', nivell: 'Intermedi', us: 'Gestió d\'alertes de Prometheus' },
        { nom: 'Victoria Metrics', nivell: 'Avançat', us: 'Alternativa escalable a Prometheus' },
      ] },
      { titol: 'Stack de logs', items: [
        { nom: 'ELK (Elasticsearch + Logstash + Kibana)', nivell: 'Intermedi', us: 'Stack complet de logs' },
        { nom: 'Loki + Grafana', nivell: 'Intermedi', us: 'Logs lleugers, integrats amb Grafana' },
        { nom: 'Fluentd / FluentBit', nivell: 'Intermedi', us: 'Recol·lector de logs' },
        { nom: 'Graylog', nivell: 'Intermedi', us: 'Alternativa a ELK més senzilla' },
      ] },
      { titol: 'Stack de traces', items: [
        { nom: 'Jaeger', nivell: 'Avançat', us: 'Traces distribuïdes' },
        { nom: 'Zipkin', nivell: 'Avançat', us: 'Alternativa a Jaeger' },
        { nom: 'OpenTelemetry', nivell: 'Avançat', us: 'Estàndard unificat (mètriques, logs, traces)' },
      ] },
      { titol: 'Solucions «all-in-one»', items: [
        { nom: 'Grafana Stack (LGTM)', nivell: 'Intermedi', us: 'Loki + Grafana + Tempo + Mimir' },
        { nom: 'Datadog / New Relic', nivell: 'Bàsic (SaaS)', us: 'Solució completa gestionada' },
      ] },
    ],
  },
  {
    id: 'seguretat',
    nom: 'Seguretat (DevSecOps)',
    icon: Lock,
    color: 'bg-red-600',
    aspectes: [
      'Gestió segura de secrets i credencials: aprendre a gestionar claus i tokens (servidors SSH, tokens de BD, certificats) i entendre on s\'emmagatzemen i on s\'utilitzen.',
      'Xifratge en trànsit (TLS/HTTPS).',
      'Xifratge en repòs (bases de dades, còpies de seguretat).',
      'Escaneig de vulnerabilitats (codi, dependències, imatges).',
      'Hardening de contenidors i sistemes.',
      'Control d\'accés basat en rols (RBAC).',
      'Auditoria d\'accessos i canvis (tant a nivell de codi com d\'infraestructura).',
      'Polítiques de xarxa (network policies).',
      'WAF (Web Application Firewall).',
      'Anàlisi de seguretat automatitzada al CI/CD.',
    ],
    grups: [
      { titol: 'Gestió de secrets', items: [
        { nom: 'HashiCorp Vault', nivell: 'Intermedi', us: 'Gestió centralitzada de secrets' },
        { nom: 'Sealed Secrets', nivell: 'Intermedi', us: 'Secrets xifrats per a GitOps' },
        { nom: 'SOPS', nivell: 'Intermedi', us: 'Xifratge de fitxers de configuració' },
        { nom: 'External Secrets Operator', nivell: 'Avançat', us: 'Sincronització de secrets a K8s' },
      ] },
      { titol: 'Anàlisi de seguretat', items: [
        { nom: 'OWASP ZAP', nivell: 'Intermedi', us: 'Escaneig de vulnerabilitats web (DAST)' },
        { nom: 'Trivy', nivell: 'Bàsic', us: 'Escaneig d\'imatges i codi' },
        { nom: 'Snyk', nivell: 'Bàsic', us: 'Vulnerabilitats en dependències' },
        { nom: 'Falco', nivell: 'Avançat', us: 'Detecció d\'amenaces en runtime' },
        { nom: 'Clair', nivell: 'Intermedi', us: 'Escaneig d\'imatges Docker' },
      ] },
      { titol: 'Certificats i TLS', items: [
        { nom: 'Let\'s Encrypt + Certbot', nivell: 'Bàsic', us: 'Certificats gratuïts automàtics' },
        { nom: 'cert-manager', nivell: 'Intermedi', us: 'Gestió de certificats a K8s' },
        { nom: 'mTLS (Istio/Linkerd)', nivell: 'Avançat', us: 'Xifratge entre serveis' },
      ] },
      { titol: 'Tallafocs i protecció', items: [
        { nom: 'pfSense / OPNsense', nivell: 'Bàsic', us: 'Tallafoc/router perimetral, referència a ASIX' },
        { nom: 'ModSecurity', nivell: 'Intermedi', us: 'WAF per a Nginx/Apache' },
        { nom: 'Cloudflare', nivell: 'Bàsic', us: 'WAF i anti-DDoS gestionat' },
        { nom: 'Fail2ban', nivell: 'Bàsic', us: 'Protecció contra força bruta' },
        { nom: 'CrowdSec', nivell: 'Intermedi', us: 'IDS/IPS col·laboratiu' },
        { nom: 'Snort / Suricata', nivell: 'Intermedi', us: 'IDS/IPS de xarxa clàssic' },
      ] },
    ],
  },
  {
    id: 'xarxes',
    nom: 'Xarxes i Comunicacions',
    icon: Network,
    color: 'bg-indigo-600',
    aspectes: [
      'Reverse proxy i balanceig de càrrega.',
      'API Gateway.',
      'DNS intern.',
      'VPN per a accés segur.',
      'Segmentació de xarxes.',
      'CDN per a assets estàtics.',
      'WebSockets a escala.',
      'Rate limiting i throttling.',
    ],
    grups: [
      { titol: 'Reverse proxy / Load balancer', items: [
        { nom: 'Nginx', nivell: 'Bàsic', us: 'Reverse proxy, servidor web, LB bàsic' },
        { nom: 'Traefik', nivell: 'Intermedi', us: 'Reverse proxy dinàmic per a contenidors' },
        { nom: 'HAProxy', nivell: 'Intermedi', us: 'Load balancer d\'alt rendiment' },
        { nom: 'Caddy', nivell: 'Bàsic', us: 'Reverse proxy amb HTTPS automàtic' },
      ] },
      { titol: 'API Gateway', items: [
        { nom: 'Kong', nivell: 'Intermedi', us: 'API Gateway complet' },
        { nom: 'KrakenD', nivell: 'Intermedi', us: 'API Gateway d\'alt rendiment' },
        { nom: 'APISIX', nivell: 'Intermedi', us: 'Alternativa a Kong' },
        { nom: 'Nginx + Lua', nivell: 'Avançat', us: 'Gateway personalitzat' },
      ] },
      { titol: 'DNS', items: [
        { nom: 'BIND9', nivell: 'Bàsic', us: 'Servidor DNS intern autoallotjat' },
        { nom: 'dnsmasq', nivell: 'Bàsic', us: 'DNS/DHCP lleuger per a entorns petits' },
      ] },
      { titol: 'VPN', items: [
        { nom: 'OpenVPN', nivell: 'Bàsic', us: 'VPN clàssica, molt estesa' },
        { nom: 'WireGuard', nivell: 'Intermedi', us: 'VPN moderna, lleugera i ràpida' },
        { nom: 'IPsec', nivell: 'Intermedi', us: 'VPN site-to-site a nivell de xarxa' },
      ] },
      { titol: 'CDN', items: [
        { nom: 'Cloudflare', nivell: 'Bàsic', us: 'CDN, DNS, protecció DDoS' },
        { nom: 'Bunny CDN', nivell: 'Bàsic', us: 'CDN econòmica' },
        { nom: 'Varnish', nivell: 'Intermedi', us: 'Caché HTTP autoallotjada' },
      ] },
    ],
    nota: 'Ampliació opcional (fora de l\'abast habitual d\'ASIX): el service mesh (Istio, Linkerd, Cilium) és una tecnologia de nivell professional SRE/DevOps, pensada per a arquitectures de microserveis molt grans. Es pot esmentar com a cultura general, però no cal plantejar-la com a aspecte a implementar.',
  },
  {
    id: 'ha',
    nom: 'Alta Disponibilitat i Escalabilitat',
    icon: Gauge,
    color: 'bg-amber-600',
    aspectes: [
      'Eliminació de punts únics de fallada (SPOF).',
      'Rèpliques de serveis crítics.',
      'Autoescalat horitzontal.',
      'Health checks i self-healing.',
      'Estratègies de failover.',
      'Gestió de sessions distribuïdes.',
      'Caché distribuïda.',
    ],
    grups: [
      { titol: 'Clústering i failover', items: [
        { nom: 'Pacemaker + Corosync', nivell: 'Intermedi', us: 'Clúster HA clàssic de Linux, gestió de recursos i failover' },
        { nom: 'Keepalived (VRRP)', nivell: 'Bàsic', us: 'IP virtual compartida i failover automàtic entre nodes' },
      ] },
      { titol: 'Orquestració i escalat', items: [
        { nom: 'Kubernetes HPA', nivell: 'Intermedi', us: 'Autoescalat per mètriques' },
        { nom: 'KEDA', nivell: 'Avançat', us: 'Escalat basat en esdeveniments' },
        { nom: 'Docker Swarm', nivell: 'Intermedi', us: 'Rèpliques i balanceig senzill' },
      ] },
      { titol: 'Caché distribuïda', items: [
        { nom: 'Redis', nivell: 'Bàsic', us: 'Caché, sessions, pub/sub' },
        { nom: 'Redis Cluster', nivell: 'Intermedi', us: 'Redis distribuït' },
        { nom: 'Memcached', nivell: 'Bàsic', us: 'Caché senzilla d\'alt rendiment' },
        { nom: 'KeyDB', nivell: 'Intermedi', us: 'Alternativa multifil a Redis' },
      ] },
      { titol: 'Cues de missatges', items: [
        { nom: 'RabbitMQ', nivell: 'Intermedi', us: 'Cua de missatges tradicional' },
        { nom: 'Redis Streams', nivell: 'Intermedi', us: 'Cua lleugera amb Redis' },
      ] },
    ],
  },
  {
    id: 'bbdd',
    nom: 'Bases de Dades i Emmagatzematge',
    icon: Server,
    color: 'bg-fuchsia-600',
    aspectes: [
      'Configuració de rèpliques (master-slave, multi-master).',
      'Còpies de seguretat automatitzades i verificades.',
      'Point-in-time recovery.',
      'Connection pooling.',
      'Optimització de consultes (índexs, explain).',
      'Particionat de taules.',
      'Emmagatzematge d\'objectes (S3-compatible).',
      'Bases de dades especialitzades (time-series, documents, grafs).',
    ],
    grups: [
      { titol: 'Bases de dades relacionals', items: [
        { nom: 'PostgreSQL', nivell: 'Bàsic', us: 'BD principal, rèpliques amb Patroni' },
        { nom: 'MySQL/MariaDB', nivell: 'Bàsic', us: 'BD principal, rèpliques' },
        { nom: 'PgBouncer', nivell: 'Intermedi', us: 'Connection pooler per a PostgreSQL' },
        { nom: 'ProxySQL', nivell: 'Intermedi', us: 'Proxy per a MySQL' },
      ] },
      { titol: 'Bases de dades NoSQL', items: [
        { nom: 'MongoDB', nivell: 'Bàsic', us: 'Documents, replica sets' },
        { nom: 'Elasticsearch', nivell: 'Intermedi', us: 'Cerca full-text, logs' },
        { nom: 'Redis', nivell: 'Bàsic', us: 'Clau-valor, caché' },
      ] },
      { titol: 'Time-series', items: [
        { nom: 'InfluxDB', nivell: 'Intermedi', us: 'Mètriques IoT, sèries temporals' },
        { nom: 'TimescaleDB', nivell: 'Intermedi', us: 'PostgreSQL per a time-series' },
        { nom: 'QuestDB', nivell: 'Avançat', us: 'Alt rendiment en time-series' },
      ] },
      { titol: 'Emmagatzematge d\'objectes', items: [
        { nom: 'MinIO', nivell: 'Bàsic', us: 'S3-compatible autoallotjat' },
        { nom: 'SeaweedFS', nivell: 'Intermedi', us: 'Sistema de fitxers distribuït' },
      ] },
      { titol: 'Còpies de seguretat', items: [
        { nom: 'pg_dump / pg_basebackup', nivell: 'Bàsic', us: 'Backup de PostgreSQL' },
        { nom: 'Barman', nivell: 'Intermedi', us: 'Backup i recovery de PostgreSQL' },
        { nom: 'Restic', nivell: 'Intermedi', us: 'Backup incremental xifrat' },
        { nom: 'Velero', nivell: 'Avançat', us: 'Backup de clústers Kubernetes' },
      ] },
    ],
  },
  {
    id: 'nuvol',
    nom: 'Núvol i Infraestructura com a Codi (IaC)',
    icon: CloudCog,
    color: 'bg-cyan-600',
    aspectes: [
      'Definició d\'infraestructura reproduïble.',
      'Gestió de configuració automatitzada.',
      'Provisioning d\'entorns idèntics.',
      'Documentació viva de la infraestructura.',
      'Gestió de l\'estat de la infraestructura.',
      'Multi-cloud / hybrid cloud.',
    ],
    grups: [
      { titol: 'Infraestructura com a codi', items: [
        { nom: 'Terraform', nivell: 'Intermedi', us: 'Provisioning multi-cloud' },
        { nom: 'OpenTofu', nivell: 'Intermedi', us: 'Fork open source de Terraform' },
        { nom: 'Pulumi', nivell: 'Avançat', us: 'IaC amb llenguatges de programació' },
        { nom: 'CloudFormation', nivell: 'Intermedi', us: 'IaC específic d\'AWS' },
      ] },
      { titol: 'Gestió de configuració', items: [
        { nom: 'Ansible', nivell: 'Bàsic', us: 'Configuració de servidors, desplegaments' },
      ] },
      { titol: 'Virtualització local', items: [
        { nom: 'Vagrant', nivell: 'Bàsic', us: 'Entorns de desenvolupament reproduïbles' },
        { nom: 'Proxmox', nivell: 'Intermedi', us: 'Virtualització de servidors' },
        { nom: 'LXC/LXD', nivell: 'Intermedi', us: 'Contenidors de sistema' },
      ] },
    ],
    nota: 'Existeixen altres eines equivalents a Ansible (Chef, Puppet, SaltStack), però Ansible és la més estesa i la que millor s\'adapta al nivell d\'ASIX, per la seva senzillesa (no requereix agent) i la corba d\'aprenentatge més suau.',
  },
  {
    id: 'automatitzacio',
    nom: 'Automatització i Scripting',
    icon: Terminal,
    color: 'bg-slate-600',
    aspectes: [
      'Scripts de manteniment automatitzats.',
      'Rotació de logs i neteja.',
      'Renovació automàtica de certificats.',
      'Tasques programades (cron jobs en contenidors).',
      'Automatització de resposta a incidents.',
      'ChatOps (operacions des de Slack/Discord).',
    ],
    grups: [
      { items: [
        { nom: 'Bash', nivell: 'Bàsic', us: 'Scripts de sistema' },
        { nom: 'Python', nivell: 'Bàsic', us: 'Automatització complexa' },
        { nom: 'Ansible', nivell: 'Bàsic', us: 'Automatització de tasques' },
        { nom: 'Rundeck', nivell: 'Intermedi', us: 'Automatització d\'operacions' },
        { nom: 'n8n / Huginn', nivell: 'Intermedi', us: 'Automatització de workflows' },
        { nom: 'Kubernetes CronJob', nivell: 'Intermedi', us: 'Tasques programades a K8s' },
      ] },
    ],
  },
  {
    id: 'integracions',
    nom: 'Integracions i Protocols',
    icon: Plug,
    color: 'bg-lime-600',
    aspectes: [
      'Integració amb sistemes externs (APIs, webhooks).',
      'Protocols IoT.',
      'Integració amb directori d\'usuaris.',
      'Connexió amb serveis de correu electrònic.',
      'Integració amb sistemes de notificacions.',
    ],
    grups: [
      { items: [
        { nom: 'MQTT', nivell: 'Intermedi', us: 'Protocol IoT, sensors' },
        { nom: 'LDAP / OpenLDAP', nivell: 'Intermedi', us: 'Directori d\'usuaris' },
        { nom: 'SAML / OAuth2 / OIDC', nivell: 'Intermedi', us: 'Single Sign-On' },
        { nom: 'Keycloak', nivell: 'Intermedi', us: 'Identity provider' },
        { nom: 'Postfix / Mailgun', nivell: 'Bàsic', us: 'Enviament de correus' },
        { nom: 'Gotify / ntfy', nivell: 'Bàsic', us: 'Notificacions push autoallotjades' },
        { nom: 'Webhooks', nivell: 'Bàsic', us: 'Integració entre sistemes' },
      ] },
    ],
  },
]

function NivellBadge({ nivell }) {
  const key = nivell.startsWith('Avançat') ? 'Avançat' : nivell.startsWith('Intermedi') ? 'Intermedi' : 'Bàsic'
  const styles = {
    'Bàsic': 'bg-green-100 text-green-800',
    'Intermedi': 'bg-yellow-100 text-yellow-800',
    'Avançat': 'bg-red-100 text-red-800',
  }
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${styles[key]}`}>
      {nivell}
    </span>
  )
}

function TaulaTecnologies({ items }) {
  return (
    <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
      {items.map((t, i) => (
        <div key={i} className="flex items-center justify-between gap-3 p-2.5 bg-white">
          <div className="min-w-0">
            <p className="font-medium text-gray-800 text-sm">{t.nom}</p>
            <p className="text-xs text-gray-500">{t.us}</p>
          </div>
          <NivellBadge nivell={t.nivell} />
        </div>
      ))}
    </div>
  )
}

function MaterialCard({ mat }) {
  if (mat.tipus === 'video') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
        <div className="flex items-start space-x-3 mb-3">
          <div className="bg-red-100 text-red-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{mat.nom}</h4>
            <p className="text-sm text-gray-500 mt-1">{mat.desc}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <span className="px-2 py-0.5 bg-gray-100 rounded font-medium">Vídeo</span>
          <span>{mat.durada}</span>
        </div>
        <div className="mt-auto pt-3 border-t border-gray-100">
          <a
            href={mat.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            <ExternalLink className="w-4 h-4" /> Veure a YouTube (surt de la web)
          </a>
        </div>
      </div>
    )
  }

  const href = import.meta.env.BASE_URL + 'recursos/' + mat.fitxer
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
      <div className="flex items-start space-x-3 mb-3">
        <div className="bg-primary-100 text-primary-700 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
          <mat.icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{mat.nom}</h4>
          <p className="text-sm text-gray-500 mt-1">{mat.desc}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
        <span className="px-2 py-0.5 bg-gray-100 rounded font-medium">{mat.format}</span>
        <span>{mat.mida}</span>
      </div>
      {(mat.relacio || mat.relacioAncora) && (
        <p className="text-xs text-gray-500 mb-3">
          Ja tens el contingut en format web a{' '}
          {mat.relacio ? (
            <Link to={mat.relacio.to} className="underline text-primary-600">{mat.relacio.label}</Link>
          ) : (
            <a href={mat.relacioAncora.href} className="underline text-primary-600">{mat.relacioAncora.label}</a>
          )}, no cal que llegeixis tot el document.
        </p>
      )}
      <div className="mt-auto flex flex-wrap gap-4 pt-3 border-t border-gray-100">
        <a
          href={href}
          download
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          <Download className="w-4 h-4" /> Descarregar
        </a>
        {mat.format === 'PDF' && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <ExternalLink className="w-4 h-4" /> Obrir al navegador
          </a>
        )}
      </div>
    </div>
  )
}

export default function Recursos() {
  const [dominisOberts, setDominisOberts] = useState({})

  const toggleDomini = (id) => {
    setDominisOberts((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Recursos</h1>
        <p className="text-gray-600">
          Col·lecció d'eines, plataformes i tutorials gratuïts per documentar el teu projecte de transformació digital,
          més el catàleg de tecnologies d'arquitectura per a ASIX.
        </p>
      </div>

      {/* AI usage notice */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 flex items-start space-x-4">
        <AlertTriangle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-purple-900 mb-1">Sobre l'ús de la IA en aquest mòdul</h3>
          <p className="text-sm text-purple-800">
            La IA és una eina permesa i esperada per prototipar i fer esborranys, sempre que es declari el seu ús,
            però a la defensa (Activitat 5) cal saber justificar cada decisió del projecte.
            Consulta la política completa a la pàgina <Link to="/avaluacio" className="underline font-medium">Avaluació</Link>.
          </p>
        </div>
      </div>

      {/* Tools per activity */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Eines per Activitat</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {einesPerActivitat.map((act) => (
            <div key={act.act} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-xs font-bold px-2 py-1 rounded bg-primary-100 text-primary-700">{act.act}</span>
                <h3 className="font-semibold text-gray-900">{act.titol}</h3>
              </div>
              <ul className="space-y-2">
                {act.eines.map((e, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-medium text-gray-800">{e.nom}</span>
                    <span className="text-gray-500"> — {e.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* AI prototyping tools */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <Sparkles className="w-6 h-6 text-purple-500" />
          <h2 className="text-xl font-semibold text-gray-900">Eines de Prototipatge amb IA (Activitat 4)</h2>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          S'espera un prototip navegable de 5-8 pantalles (web i mòbil) que cobreixi el flux principal del projecte.
          Qualsevol d'aquestes eines pot generar-lo a partir d'una descripció en llenguatge natural o de les històries d'usuari.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {einesPrototipatgeIA.map((eina, i) => (
            <a
              key={i}
              href={eina.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100 group"
            >
              <div>
                <p className="font-medium text-gray-800 group-hover:text-primary-600">{eina.nom}</p>
                <p className="text-sm text-gray-500">{eina.desc}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-500 flex-shrink-0 ml-2 mt-1" />
            </a>
          ))}
        </div>
      </div>

      {/* Tools by category */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Eines i Plataformes Gratuïtes</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {recursos.map((cat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`${cat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{cat.categoria}</h3>
              </div>
              <div className="space-y-2">
                {cat.items.map((item, j) => (
                  <a
                    key={j}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 group"
                  >
                    <div>
                      <p className="font-medium text-gray-800 group-hover:text-primary-600">{item.nom}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-500" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ASIX architecture catalogue */}
      <div id="catalog-arquitectura-asix">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Catàleg d'Arquitectura per a ASIX</h2>
        <p className="text-gray-600 text-sm mb-6">
          Deu dominis de tecnologies habilitadores per dissenyar la infraestructura del projecte (Activitats 2 i 3).
          Cada grup tria i investiga les tecnologies que millor s'adaptin al seu projecte i al seu nivell: no cal cobrir-los tots.
        </p>
        <div className="space-y-3">
          {dominisASIX.map((dom) => {
            const obert = !!dominisOberts[dom.id]
            return (
              <div key={dom.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleDomini(dom.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`${dom.color} w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <dom.icon className="w-4.5 h-4.5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{dom.nom}</h3>
                  </div>
                  {obert ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                {obert && (
                  <div className="px-5 pb-5 space-y-5">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Aspectes a investigar i implementar</h4>
                      <ul className="space-y-1">
                        {dom.aspectes.map((a, i) => (
                          <li key={i} className="text-sm text-gray-600">• {a}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      {dom.grups.map((grup, i) => (
                        <div key={i}>
                          {grup.titol && <h4 className="text-sm font-semibold text-gray-700 mb-2">{grup.titol}</h4>}
                          <TaulaTecnologies items={grup.items} />
                        </div>
                      ))}
                    </div>
                    {dom.pipeline && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Exemple de pipeline complet</h4>
                        <p className="text-xs font-mono bg-gray-900 text-gray-100 rounded-lg p-3 overflow-x-auto">{dom.pipeline}</p>
                      </div>
                    )}
                    {dom.nota && (
                      <p className="text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg p-3">{dom.nota}</p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Tutorials */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-6">
          <Video className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900">Tutorials i Cursos Recomanats</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tutorials.map((tut, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">{tut.tema}</h3>
              <ul className="space-y-2">
                {tut.recursos.map((rec, j) => (
                  <li key={j}>
                    <a
                      href={rec.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-gray-700 hover:text-primary-600"
                    >
                      <span>{rec.nom}</span>
                      <span className="text-xs px-2 py-1 bg-gray-200 rounded">{rec.tipus}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Module materials */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Material del Mòdul</h2>
        <p className="text-gray-600 text-sm mb-6">
          Materials descarregables directament des d'aquesta web, agrupats segons per a què serveixen.
        </p>
        <div className="space-y-8">
          {materialsModul.map((grup) => (
            <div key={grup.titol}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{grup.titol}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {grup.materials.map((mat) => (
                  <MaterialCard key={mat.fitxer || mat.url} mat={mat} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start space-x-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-900">
            El vídeo s'allotja a YouTube (enllaç extern); la resta de materials es pot descarregar directament des d'aquesta web.
            Els originals també són disponibles a Moodle.
          </p>
        </div>
      </div>

      {/* GitHub repos */}
      <div className="bg-gray-900 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-2 mb-4">
          <Github className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Repositoris d'Exemple</h2>
        </div>
        <p className="text-gray-400 mb-4">
          Projectes de referència per inspirar el teu prototip:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="https://github.com/topics/iot-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
          >
            <p className="font-medium">IoT Dashboards</p>
            <p className="text-sm text-gray-400">Exemples de visualització IoT</p>
          </a>
          <a
            href="https://github.com/topics/predictive-maintenance"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
          >
            <p className="font-medium">Predictive Maintenance</p>
            <p className="text-sm text-gray-400">ML per manteniment predictiu</p>
          </a>
          <a
            href="https://github.com/topics/smart-agriculture"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
          >
            <p className="font-medium">Smart Agriculture</p>
            <p className="text-sm text-gray-400">IoT per agricultura</p>
          </a>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h3 className="font-semibold text-yellow-900 mb-3">Consells per al Prototip</h3>
        <p className="text-yellow-900 text-sm mb-3">
          Recorda: aquest curs el prototip <strong>no és funcional</strong>. És un prototip navegable d'interfície
          (baixa o mitjana fidelitat) més un cartell publicitari del projecte, no una implementació.
        </p>
        <ul className="space-y-2 text-yellow-800 text-sm">
          <li>• <strong>Comença petit:</strong> 5-8 pantalles del flux principal és millor que un prototip inacabat</li>
          <li>• <strong>No implementis res:</strong> navegació clicable entre pantalles n'hi ha prou, no cal codi funcional</li>
          <li>• <strong>Deixa'ns fer servir la IA:</strong> Google AI Studio, v0, Figma Make, Bolt o Lovable generen pantalles en minuts</li>
          <li>• <strong>Documenta tot:</strong> el procés és tan important com el resultat, i cal declarar l'ús de la IA</li>
          <li>• <strong>Coherència amb l'Activitat 2:</strong> el prototip ha de reflectir les històries d'usuari i el model de dades ja definits</li>
        </ul>
      </div>
    </div>
  )
}
