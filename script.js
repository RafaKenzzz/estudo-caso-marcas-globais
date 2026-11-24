// Dados do dossiê de pesquisa (29 out. 2026). FY25 = 1 set. 2024 a 31 ago. 2025.

// ---------- Ícones ----------
const ICON = {
  scales: '<path d="M12 3v18M5 7h14M5 7l-3 7a3 3 0 0 0 6 0L5 7Zm14 0-3 7a3 3 0 0 0 6 0l-3-7ZM8 21h8"/>',
  check: '<path d="M5 12l4 4L19 6"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Zm0 16h15"/>',
  question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17.5v.01"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  zoom: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M10.5 8v5M8 10.5h5"/>'
};
const svg = (name, extra = "") => `<svg viewBox="0 0 24 24" aria-hidden="true"${extra}>${ICON[name]}</svg>`;

// ---------- Fotografias (Wikimedia Commons) ----------
const credits = {
  matosinhos: { img: "img/matosinhos.jpg", what: "Loja IKEA de Matosinhos", author: "chermida", lic: "CC BY 2.0", licUrl: "https://creativecommons.org/licenses/by/2.0", page: "https://commons.wikimedia.org/wiki/File:Ikea_Matosinhos_(2916311750).jpg" },
  armazem: { img: "img/armazem.jpg", what: "Armazém self-service, IKEA Anderlecht (Bélgica)", author: "Trougnouf", lic: "CC BY 4.0", licUrl: "https://creativecommons.org/licenses/by/4.0", page: "https://commons.wikimedia.org/wiki/File:IKEA_Anderlecht_self-serve_warehouse_(DSCF3734).jpg" },
  alfragide: { img: "img/promo-alfragide.jpg", what: "IKEA Alfragide (Amadora)", author: "Dvfernandes", lic: "CC BY-SA 4.0", licUrl: "https://creativecommons.org/licenses/by-sa/4.0", page: "https://commons.wikimedia.org/wiki/File:IKEA_Amadora_Alfragide.jpg" },
  acronimo: { img: "img/acronimo.jpg", what: "Painel da sigla IKEA, IKEA Museum (Älmhult)", author: "Kigsz", lic: "CC BY-SA 4.0", licUrl: "https://creativecommons.org/licenses/by-sa/4.0", page: "https://commons.wikimedia.org/wiki/File:IKEA-Acronym.jpg" },
  museu: { img: "img/almhult-museu.jpg", what: "IKEA Museum, Älmhult", author: "Kigsz", lic: "CC BY-SA 4.0", licUrl: "https://creativecommons.org/licenses/by-sa/4.0", page: "https://commons.wikimedia.org/wiki/File:IKEA-Museum-August-2016.jpg" },
  almhult: { img: "img/almhult-loja.jpg", what: "Loja IKEA de Älmhult", author: "Lesnydzban", lic: "CC BY 4.0", licUrl: "https://creativecommons.org/licenses/by/4.0", page: "https://commons.wikimedia.org/wiki/File:IKEA_%C3%84lmhult_(13).jpg" },
  hyderabad: { img: "img/hyderabad.jpg", what: "IKEA Hyderabad (Índia)", author: "Nikhil B", lic: "CC BY 3.0", licUrl: "https://creativecommons.org/licenses/by/3.0", page: "https://commons.wikimedia.org/wiki/File:IKEA_showroom,_Hyderabad_17032019.jpg" },
  frango: { img: "img/almondegas-frango.jpg", what: "Almôndegas de frango, IKEA Hyderabad", author: "Bssasidhar", lic: "CC BY-SA 4.0", licUrl: "https://creativecommons.org/licenses/by-sa/4.0", page: "https://commons.wikimedia.org/wiki/File:Ikea_chicken_meatballs_(Hyderabad).jpg" },
  almondegas: { img: "img/almondegas.jpg", what: "Almôndegas, IKEA Brighton (Reino Unido)", author: "Andy Li", lic: "CC0", licUrl: "https://creativecommons.org/publicdomain/zero/1.0/", page: "https://commons.wikimedia.org/wiki/File:8_Meatballs_served_with_mashed_potatoes_and_peas_-_IKEA_Brighton_2025-11-04.jpg" }
};

// Etiqueta com a fonte, por cima de cada fotografia
const creditTag = (c, top = false) => credits[c]
  ? `<span class="credit${top ? " credit--top" : ""}" title="${credits[c].what} · Wikimedia Commons">Foto: ${credits[c].author}, ${credits[c].lic}</span>` : "";

// ---------- Atalhos ----------
const cats = [
  { href: "#identidade", num: "Ponto 1", title: "Identidade e percurso", img: "img/acronimo.jpg", c: "acronimo" },
  { href: "#geografia", num: "Ponto 2", title: "Geografia da empresa", img: "img/armazem.jpg", c: "armazem" },
  { href: "#mapa", num: "Ponto 2", title: "Mapa-mundo", img: "img/mapa-europa.svg", map: true },
  { href: "#global-local", num: "Ponto 3", title: "Global e local", img: "img/almondegas-frango.jpg", c: "frango" },
  { href: "#balanco", num: "Ponto 4", title: "Balanço crítico", tone: "black", icon: "scales" },
  { href: "#conclusao", num: "Ponto 4", title: "Conclusão", tone: "yellow", icon: "check" },
  { href: "#fontes", num: "Ponto 5", title: "Evidências e fontes", tone: "blue", icon: "book" },
  { href: "#por-confirmar", num: "Notas", title: "Por confirmar", tone: "grey", icon: "question" }
];

// ---------- Ponto 1 ----------
const gallery = [
  { c: "acronimo", wide: true, cap: "O nome: Ingvar Kamprad, Elmtaryd, Agunnaryd", alt: "Painel no IKEA Museum que explica a sigla IKEA: Ingvar Kamprad, Elmtaryd, Agunnaryd" },
  { c: "museu", cap: "Älmhult: a primeira loja é hoje o IKEA Museum", alt: "Edifício do IKEA Museum em Älmhult, na Suécia" },
  { c: "almhult", cap: "Loja IKEA de Älmhult", alt: "Interior da loja IKEA de Älmhult, com um sistema de arrumação e roupa pendurada" }
];

const facts = [
  { k: "Nome", v: "IKEA: sigla de Ingvar Kamprad, Elmtaryd (a quinta da família) e Agunnaryd (a aldeia onde cresceu)", s: "Wikipédia" },
  { k: "Logótipo", v: "A palavra IKEA em letras azuis, numa oval amarela sobre fundo azul. O amarelo e o azul são as cores da bandeira da Suécia.", s: "IKEA, «Our heritage» (ikea.com); logótipo © Inter IKEA Systems B.V.", img: "logo-recortado.png" },
  { k: "Ramo de atividade", v: "Retalho de mobiliário e artigos para o lar; o maior retalhista de mobiliário do mundo desde 2008", s: "Wikipédia" },
  { k: "Ano de criação", v: "1943, em Småland (Suécia); primeira loja em 1958, em Älmhult", s: "Wikipédia" },
  { k: "Sede", v: "Operação em Älmhult (Suécia); Inter IKEA Systems B.V. em Delft e Ingka Group em Leiden (Países Baixos)", s: "Wikipédia; Ingka Group, FAQ" },
  { k: "Empresa a que pertence", v: "A marca e o conceito são do Inter IKEA Group (franqueador). O maior franqueado é o Ingka Group, detido pela fundação holandesa Stichting INGKA Foundation", s: "Ingka Group, FAQ" }
];

const timeline = [
  { y: "1943", t: "Aos 17 anos, Ingvar Kamprad regista a empresa IKEA, inicialmente de venda por correspondência", s: "The Local", img: "img/acronimo.jpg", c: "acronimo", alt: "Painel com a sigla IKEA" },
  { y: "1958", t: "Abre a primeira loja, em Älmhult (Suécia)", s: "Wikipédia", img: "img/almhult-museu.jpg", c: "museu", alt: "IKEA Museum em Älmhult, no edifício da primeira loja" },
  { y: "1963", t: "Abre a primeira loja fora da Suécia, na Noruega", s: "Wikipédia", tone: "yellow", word: "Noruega<small>primeira loja fora da Suécia</small>" },
  { y: "1973–74", t: "Sai da Escandinávia para a Europa Central, começando pela Alemanha", s: "Wikipédia", tone: "red", word: "Alemanha<small>primeira fora da Escandinávia</small>" },
  { y: "1986", t: "Kamprad deixa a gestão executiva e o IKEA reparte-se em Inter IKEA Group, Ingka Group e Ikano Group", s: "Pamono", tone: "blue", word: "Inter IKEA<br>Ingka<br>Ikano" },
  { y: "1998", t: "Abre a primeira loja na China", s: "Business Today", tone: "red", word: "China<small>primeira loja</small>" },
  { y: "2004", t: "Abre em Alfragide a primeira loja em Portugal", s: "Postal", img: "img/promo-alfragide.jpg", c: "alfragide", alt: "Loja IKEA de Alfragide" },
  { y: "2026", t: "Abre a loja de Coimbra (30 de julho), num formato compacto inédito em Portugal: o primeiro exemplo de glocalização do IKEA em Portugal", s: "NiT", tone: "yellow", word: "Coimbra<small>4 124 m² · formato compacto</small>" }
];

// ---------- Ponto 2 ----------
// group: ingka | inter | pt
const stats = [
  { v: "41,5", u: "mil M€", l: "Volume de negócios (receitas)", g: "ingka", s: "Ingka, Annual Summary FY25" },
  { v: "1,4", u: "mil M€", l: "Resultado líquido", g: "ingka", s: "Ingka, Annual Summary FY25" },
  { v: "166 460", u: "", l: "Trabalhadores", g: "ingka", s: "Ingka, Annual Summary FY25" },
  { v: "620", u: "", l: "Lojas e outros formatos", g: "ingka", s: "Ingka, Annual Summary FY25" },
  { v: "44,6", u: "mil M€", l: "Vendas totais de retalho IKEA (todos os franqueados)", g: "inter", s: "Inter IKEA, newsroom" },
  { v: "26,3", u: "mil M€", l: "Volume de negócios (receitas), dos quais 1,32 mil M€ em taxas de franquia", g: "inter", s: "Inter IKEA, FY25 financial results" },
  { v: "25 971", u: "", l: "Trabalhadores (média, equivalentes a tempo inteiro)", g: "inter", s: "Inter IKEA, FY25 financial results" },
  { v: "3", u: "%", l: "Taxa de franquia sobre as vendas líquidas de cada franqueado", g: "inter", s: "Inter IKEA, FY25 financial results" },
  { v: "611,4", u: "M€", l: "Vendas do IKEA Portugal", g: "pt", s: "ECO, 16 out. 2025" }
];
const statGroups = [
  { id: "all", name: "Todos" },
  { id: "ingka", name: "Ingka Group" },
  { id: "inter", name: "Inter IKEA Group" },
  { id: "pt", name: "IKEA Portugal" }
];
const groupName = { ingka: "Ingka Group", inter: "Inter IKEA Group", pt: "IKEA Portugal" };

const countries = [
  { n: "Alemanha", v: 15.4 },
  { n: "Estados Unidos", v: 12.6 },
  { n: "França", v: 9.0 },
  { n: "Reino Unido", v: 6.8 },
  { n: "Itália", v: 5.6 },
  { n: "Portugal", v: 1.6, est: true, note: "≈ 611,4 M€ em 38,9 mil M€ (cálculo do grupo, a confirmar)" }
];
const regions = [
  { n: "Europa", v: 73.8 },
  { n: "Américas", v: 17.2 },
  { n: "Ásia-Pacífico", v: 9.0 }
];

const reasons = [
  { h: "Produção e mão de obra", t: "O Inter IKEA fabrica cerca de 10% da gama e compra o resto a mais de 800 fornecedores externos. Em Paços de Ferreira, a fábrica emprega 1 500 pessoas, exporta 96% da produção para 21 países e usa matéria-prima sobretudo da Península Ibérica.", s: "Inter IKEA; ECO, 15 nov. 2025", i: '<path d="M3 21V10l6 4V10l6 4V6l6-3v18Z"/>' },
  { h: "Transportes", t: "As peças seguem de camião para lojas em Portugal, Espanha e França; para a América do Norte vão de contentor, a partir do porto de Leixões.", s: "ECO", i: '<path d="M2 7h12v9H2zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>' },
  { h: "Matérias-primas", t: "O Inter IKEA acordou comprar 8 000 hectares de floresta na Letónia e prevê uma instalação de triagem de madeira reciclada na Lituânia.", s: "Inter IKEA", i: '<path d="M12 2 5 12h4l-4 6h14l-4-6h4L12 2Zm0 16v4"/>' },
  { h: "Regras e custos locais", t: "Na Índia, a lei obriga a comprar localmente pelo menos 30% das matérias-primas em cinco anos; na China, fábricas locais ajudaram a contornar taxas de importação elevadas.", s: "World Economic Forum, 2018; Business Today", i: ICON.scales },
  { h: "Consumidores", t: "A Europa concentra 73,8% das vendas do Ingka Group (FY25).", s: "Ingka, Annual Summary FY25", i: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.9 3.1-6 7-6s7 2.1 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.4.6 4 2.6 4 6"/>' },
  { h: "Fiscalidade", t: "A taxa efetiva de imposto foi 32,8% no Ingka e 21,3% no Inter IKEA (FY25). Um dado a explorar, não uma conclusão.", s: "Ingka; Inter IKEA", i: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>' }
];

// Local, tipo, atividade, fonte, ponto do mapa
const mapRows = [
  ["Älmhult (Suécia)", "Sede operacional; loja", "Operação; primeira loja (1958)", "Wikipédia", "se"],
  ["Delft (Países Baixos)", "Sede da marca", "Inter IKEA Systems B.V. (franqueador)", "Ingka Group, FAQ", "nl"],
  ["Leiden (Países Baixos)", "Sede do retalho", "Sede do Ingka Group", "Ingka Group, FAQ", "nl"],
  ["Paços de Ferreira (Portugal)", "Produção", "Fábrica: 1 500 pessoas, 96% exportado para 21 países", "ECO, 15 nov. 2025", "pt"],
  ["Leixões (Portugal)", "Logística", "Porto de saída de contentores para a América do Norte", "ECO", "pt"],
  ["Alfragide, Loures, Matosinhos, Braga, Loulé e Coimbra (Portugal)", "Lojas", "6 lojas: a primeira em Alfragide (2004), a mais recente em Coimbra (2026, formato compacto)", "Postal; NiT, 30 jul. 2026", "pt"],
  ["Alemanha", "Mercado principal", "1.º mercado do Ingka: 15,4% das vendas (FY25)", "Ingka, Annual Summary FY25", "de"],
  ["Estados Unidos", "Mercado principal", "2.º mercado do Ingka: 12,6% das vendas (FY25)", "Ingka, Annual Summary FY25", "us"],
  ["França", "Mercado principal", "3.º mercado do Ingka: 9,0% das vendas (FY25)", "Ingka, Annual Summary FY25", "fr"],
  ["Reino Unido", "Mercado principal", "4.º mercado do Ingka: 6,8% das vendas (FY25)", "Ingka, Annual Summary FY25", "gb"],
  ["Itália", "Mercado principal", "5.º mercado do Ingka: 5,6% das vendas (FY25)", "Ingka, Annual Summary FY25", "it"],
  ["Letónia", "Matérias-primas", "8 000 hectares de floresta", "Inter IKEA", "baltic"],
  ["Lituânia", "Matérias-primas", "Triagem de madeira reciclada (prevista)", "Inter IKEA", "baltic"],
  ["Hyderabad (Índia)", "Loja", "Primeira loja na Índia (9 ago. 2018)", "Quartz, 9 ago. 2018", "in"],
  ["Índia", "Regras locais", "30% de matérias-primas locais obrigatórias", "World Economic Forum, 2018", "in"],
  ["China", "Produção; lojas", "Fábricas locais; primeira loja (1998)", "Business Today", "cn"],
  ["Japão", "Lojas", "Entrada em 1974, saída ao fim de 12 anos e regresso em 2006", "The Local", "jp"],
  ["Roménia", "Crítica ambiental", "Críticas sobre abates em florestas antigas", "Mongabay, abr. 2024", "ro"]
];
// Posições calculadas nas projeções dos mapas (img/mapa-mundo.svg e img/mapa-europa.svg), em %
const worldSpots = [
  { id: "us", x: 22.21, y: 29.07, name: "Estados Unidos" },
  { id: "in", x: 68.72, y: 42.22, name: "Índia" },
  { id: "cn", x: 74.63, y: 32.07, name: "China" },
  { id: "jp", x: 83.45, y: 31.01, name: "Japão" }
];
const europeSpots = [
  { id: "pt", x: 6.51, y: 86.21, name: "Portugal" },
  { id: "gb", x: 21.4, y: 40.71, name: "Reino Unido" },
  { id: "nl", x: 38.14, y: 43.05, name: "Países Baixos" },
  { id: "fr", x: 31.16, y: 63.46, name: "França" },
  { id: "de", x: 49.77, y: 47.25, name: "Alemanha" },
  { id: "it", x: 54.88, y: 76.13, name: "Itália" },
  { id: "se", x: 58.44, y: 25.33, name: "Suécia" },
  { id: "baltic", x: 82.09, y: 27.26, name: "Letónia e Lituânia" },
  { id: "ro", x: 83.65, y: 65.72, name: "Roménia" }
];

// Pontos na fotografia principal (loja de Matosinhos)
const heroSpots = [
  { id: "marca", x: 52, y: 51, title: "A marca IKEA", text: "A marca e o conceito são do Inter IKEA Group (franqueador), que cobra 3% das vendas líquidas a cada franqueado.", src: "Inter IKEA, FY25 financial results", href: "#geografia", link: "Geografia da empresa" },
  { id: "pub", x: 75, y: 53, title: "Comunicação em português", text: "Publicidade em português na fachada. Em 2018, a comunicação do IKEA em Portugal passou a apelar à «saudade».", src: "ECO, 2018", href: "#global-local", link: "Global e local" },
  { id: "pt", x: 81, y: 67, title: "IKEA Portugal", text: "611,4 M€ de vendas e 3 224 colaboradores no retalho, no FY25.", src: "ECO, 16 out. 2025", href: "#global-local", link: "Portugal em números" }
];

// ---------- Ponto 3 ----------
const examples = [
  {
    name: "Loja de Coimbra",
    where: "Portugal · 2026",
    global: "Nome, design escandinavo, produtos mais procurados, IKEA Food (almôndegas, cachorros-quentes), Área Circular.",
    local: "Primeiro formato «pequena mas poderosa» em Portugal: 4 124 m², cerca de 2 000 artigos de compra imediata, investimento de 3 milhões de €.",
    hyp: "Numa cidade onde a loja mais próxima ficava a 120 km, um formato compacto e ligado ao digital leva a marca mais perto sem uma loja grande.",
    ev: "NiT, 30 jul. 2026; The Portugal News",
    c: "almondegas", cap: "IKEA Food: as almôndegas são iguais em todo o mundo", alt: "Prato de almôndegas com puré e ervilhas num restaurante IKEA"
  },
  {
    name: "Comunicação em Portugal",
    where: "Portugal · 2018",
    global: "A ideia de casa e de design acessível.",
    local: "A comunicação passou a apelar à personalização da casa e à «saudade» típica portuguesa, depois de uma equipa visitar casas de portugueses.",
    hyp: "Um apelo emocional ligado a uma ideia cultural local cria mais ligação do que uma mensagem igual para todos os países.",
    ev: "ECO, 2018",
    c: "matosinhos", cap: "Publicidade em português na loja de Matosinhos", alt: "Fachada da loja IKEA de Matosinhos com publicidade em português"
  },
  {
    name: "Comida e preços na Índia",
    where: "Índia · 2018",
    global: "Restaurante IKEA, almôndegas, bolos de canela.",
    local: "Biryani a 99 rupias, samosas desde 10 rupias, cerca de 1 000 produtos abaixo de 200 rupias; almôndegas de frango ou de legumes.",
    hyp: "Com rendimentos mais baixos e outros hábitos alimentares, só preços e menu locais atraem clientes.",
    ev: "Quartz, 2018; PYMNTS",
    c: "frango", cap: "Almôndegas de frango no IKEA de Hyderabad", alt: "Almôndegas de frango com puré e legumes e uma bandeira da Suécia, no IKEA de Hyderabad"
  },
  {
    name: "Gama e serviços na Índia",
    where: "Índia · 2018",
    global: "Móveis como a estante BILLY e o sofá KLIPPAN.",
    local: "Tawas, caixas de especiarias, colchão com fibra de coco; serviço de montagem com 150 pessoas; talheres só com colher e garfo.",
    hyp: "Onde o hábito de montar móveis e de cozinhar é diferente, a gama e o serviço mudam, mas só numa parte pequena.",
    ev: "Oman Observer (AFP); Quartz; PYMNTS",
    c: "hyderabad", cap: "IKEA Hyderabad, a primeira loja na Índia", alt: "Loja IKEA de Hyderabad ao fim do dia, com as luzes acesas"
  },
  {
    name: "Produção portuguesa",
    where: "Paços de Ferreira",
    global: "Produtos como KALLAX, MICKE e BESTÅ, iguais em todo o mundo.",
    local: "Produzidos em Paços de Ferreira; 96% da produção é exportada.",
    hyp: "Uma gama única permite produzir em grande escala num sítio com tradição industrial e vender em 21 países.",
    ev: "IKEA Industry Portugal; ECO, 15 nov. 2025",
    c: "armazem", cap: "Embalagens planas no armazém self-service (IKEA Anderlecht)", alt: "Corredores do armazém self-service de uma loja IKEA, com caixas de embalagem plana em prateleiras altas"
  }
];

// Portugal e Índia: a presença da marca
const vsRows = [
  ["Entrada no país", "2004: primeira loja, em Alfragide (Postal)", "2018: primeira loja, em Hyderabad, a 9 de agosto (Quartz)"],
  ["Lojas", "6 lojas (Alfragide, Loures, Matosinhos, Braga, Loulé e Coimbra) e 16 estúdios de planificação (NiT, 2026; ECO, 2025)", "Primeira loja em Hyderabad (Quartz, 2018)"],
  ["Produção", "Fábrica em Paços de Ferreira: 1 500 pessoas e 96% da produção exportada (ECO, 2025)", "A lei obriga a comprar localmente pelo menos 30% das matérias-primas em cinco anos (World Economic Forum, 2018)"],
  ["Gama", "Gama global; em Coimbra, formato compacto com cerca de 2 000 artigos (NiT, 2026)", "5% a 10% da gama adaptada ao mercado local (India Retailing)"],
  ["Comida", "IKEA Food com almôndegas e cachorros-quentes, como no resto do mundo (NiT, 2026)", "Biryani, samosas e almôndegas de frango ou de legumes (Quartz; PYMNTS, 2018)"],
  ["Vendas e emprego", "611,4 M€ de vendas e 3 224 colaboradores no retalho (ECO, FY25)", "Serviço de montagem com 150 pessoas (Oman Observer/AFP)"]
];

const ptData = [
  { v: "611,4 M€", l: "vendas" },
  { v: "3 224", l: "colaboradores no retalho" },
  { v: "≈ 21%", l: "das vendas online" },
  { v: "16", l: "estúdios de planificação" },
  { v: "4 700", l: "postos de trabalho diretos (retalho + IKEA Industry)" },
  { v: "1 500", l: "pessoas na fábrica de Paços de Ferreira" }
];

// ---------- Ponto 5 ----------
const sources = [
  ["Ingka Group Annual Summary FY25", "Ingka Holding B.V.", "FY25 (auditoria de 4 nov. 2025)", "Empresa", "https://assets.site.ingka.com/ingka-com/reports/ingka-group-annual-report-summary-fy25.pdf"],
  ["FY25 financial results", "Inter IKEA Group", "FY25 (auditoria de 6 nov. 2025)", "Empresa", "https://www.inter.ikea.com/en/performance/fy25-financial-results"],
  ["FAQ, Ingka Group", "Ingka Group", "sem data visível", "Empresa", "https://www.ingka.com/newsroom/faq/"],
  ["IKEA Industry, Portugal", "IKEA (Inter IKEA Systems B.V.)", "sem data visível", "Empresa", "https://www.ikea.com/global/en/jobs/industry/portugal/"],
  ["Our heritage (a herança do IKEA)", "IKEA (Inter IKEA Systems B.V.)", "sem data visível", "Empresa", "https://www.ikea.com/sg/en/this-is-ikea/about-us/our-heritage-pubb5d40c2f"],
  ["Ikea Portugal sobe vendas em 1,5% para 611,4 milhões de euros", "ECO, Ana Marcela", "16 out. 2025", "Notícia, a partir de comunicado da empresa", "https://eco.sapo.pt/2025/10/16/ikea-portugal-sobe-vendas-em-15-para-6114-milhoes-de-euros/"],
  ["Da capital do móvel para o mundo, fábrica Ikea em Paços de Ferreira é a quinta maior do grupo sueco", "ECO, Fátima Castro", "15 nov. 2025", "Reportagem independente", "https://eco.sapo.pt/reportagem/da-capital-do-movel-para-o-mundo-fabrica-ikea-em-pacos-de-ferreira-e-a-quinta-maior-do-grupo-sueco/"],
  ["Já abriu a nova loja da IKEA em Coimbra com um conceito inédito no País", "NiT, Filipa Marcos", "30 jul. 2026", "Notícia independente", "https://www.nit.pt/compras/decoracao/ja-abriu-a-nova-loja-da-ikea-em-coimbra-com-um-conceito-inedito-no-pais"],
  ["Nova loja da IKEA em Portugal será inaugurada", "The Portugal News", "7 jul. 2026", "Notícia independente", "https://www.theportugalnews.com/pt/noticias/2026-07-07/nova-loja-da-ikea-em-portugal-sera-inaugurada/1051811"],
  ["Ikea Portugal muda de estratégia. E quer ser mais português", "ECO", "21 ago. 2018", "Notícia independente", "https://eco.sapo.pt/2018/08/21/ikea-portugal-muda-de-estrategia-e-quer-ser-mais-portugues"],
  ["Inside IKEA's first Indian store", "Quartz", "9 ago. 2018", "Notícia independente", "https://qz.com/india/1351348/first-ikea-store-in-india-opens-in-hyderabad"],
  ["IKEA has opened its first store in India", "World Economic Forum", "ago. 2018", "Notícia independente", "https://www.weforum.org/stories/2018/08/undeterred-by-taxes-ikea-puts-together-cheap-india-pricing"],
  ["IKEA blamed for Romanian forest destruction", "Mongabay", "abr. 2024", "Imprensa ambiental independente", "https://news.mongabay.com/2024/04/ikea-blamed-for-romanian-forest-destruction/"]
];

const unsure = [
  ["Número de países do Ingka", "31 nos relatórios (tax report FY25) e 32 no FAQ do Ingka."],
  ["Peso do Ingka nas vendas do IKEA", "88% na página de resultados do Ingka e cerca de 87% no tax report."],
  ["Abertura da loja de Coimbra", "30 de julho de 2026 e 37 colaboradores segundo a NiT; a Postal fala em abertura «durante o mês de agosto» e a ECO (fevereiro) previa 34 postos de trabalho."],
  ["Tamanho da fábrica de Paços de Ferreira", "A ECO (2025) diz que é a quinta maior do grupo; o URBACT fala na segunda maior fábrica de móveis do mundo, sem data. As duas comparações não são equivalentes."],
  ["Investimento na loja de Hyderabad", "O Quartz indica 1 000 crore de rupias (cerca de 146 milhões de dólares) num ponto do texto e 4 500 crore já gastos noutro."],
  ["Dados em falta", "Só encontrámos o número de lojas de Portugal (6, segundo a NiT); não encontrámos o de outros países nem as vendas do IKEA em cada um dos três mercados, só a percentagem das vendas do Ingka. Também não encontrámos dados recentes sobre as vendas na Índia."]
];

const popular = ["Coimbra", "Índia", "FY25", "Paços de Ferreira", "Japão", "Roménia", "franquia", "Ingka"];

// =====================================================================
// Render
// =====================================================================
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Atalhos
$("cats").innerHTML = cats.map(c => `
  <a href="${c.href}" class="cat">
    <span class="cat__media ${c.map ? "cat__media--map" : c.tone ? "cat__media--" + c.tone : ""}">
      ${c.img ? `<img src="${c.img}" alt="" loading="lazy" decoding="async">` : svg(c.icon)}
      ${c.c ? creditTag(c.c) : ""}
    </span>
    <span class="cat__num">${c.num}</span>
    <span class="cat__title">${c.title}</span>
  </a>`).join("");

// Galeria do ponto 1
$("gallery").innerHTML = gallery.map((g, i) => `
  <button type="button" class="pip__img${g.wide ? " pip__img--wide" : ""}" data-photo="${i}" aria-label="Ampliar: ${esc(g.cap)}">
    <img src="${credits[g.c].img}" alt="${esc(g.alt)}" loading="lazy" decoding="async">
    <span class="pip__zoom">${svg("zoom")}</span>
    <figcaption><span>${g.cap}</span></figcaption>
    ${creditTag(g.c)}
  </button>`).join("");

// Ficha da marca (acordeão)
$("facts").innerHTML = facts.map((f, i) => `
  <details${i === 0 ? " open" : ""}>
    <summary><span class="acc__k">${f.k}</span><span class="acc__peek">${f.v}</span>${svg("chevron")}</summary>
    <div class="acc__body">${f.img ? `<img class="acc__logo" src="${f.img}" alt="Logótipo do IKEA" width="140" height="57">` : ""}<p>${f.v}</p><span class="src">Fonte: ${f.s}</span></div>
  </details>`).join("");

// Cronologia
$("timeline").innerHTML = timeline.map(e => `
  <article class="tl">
    <div class="tl__media${e.tone ? " tl__media--" + e.tone : ""}">
      ${e.img ? `<img src="${e.img}" alt="${esc(e.alt)}" loading="lazy" decoding="async">${creditTag(e.c)}` : `<span class="tl__word">${e.word}</span>`}
    </div>
    <div class="tl__body">
      <span class="tl__year">${e.y}</span>
      <h4>${e.t}</h4>
      <span class="src">${e.s}</span>
    </div>
  </article>`).join("");

// Números com filtro por empresa
const statChips = $("statChips");
statChips.innerHTML = statGroups.map((g, i) =>
  `<button type="button" role="tab" class="chip${i === 0 ? " is-active" : ""}" data-g="${g.id}" aria-selected="${i === 0}">${g.name}</button>`).join("");
function renderStats(g) {
  $("stats").innerHTML = stats.filter(s => g === "all" || s.g === g).map(s => `
    <article class="stat">
      <span class="product__tag product__tag--${s.g}">${groupName[s.g]} · FY25</span>
      <span class="price-tag">${s.v}${s.u ? `<sup>${s.u}</sup>` : ""}</span>
      <span class="stat__label">${s.l}</span>
      <span class="src">${s.s}</span>
    </article>`).join("");
}
renderStats("all");
statChips.addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  setActive(statChips, btn);
  renderStats(btn.dataset.g);
});

// Gráficos de barras (uma série, escala comum em cada gráfico)
function renderBars(el, rows, max) {
  el.innerHTML = rows.map(r => `
    <div class="bar${r.est ? " bar--est" : ""}" tabindex="0" data-tip="${r.n}: ${r.v.toFixed(1).replace(".", ",")}%${r.note ? " · " + r.note : ""}">
      <span class="bar__name">${r.n}${r.est ? " <em>(estimativa)</em>" : ""}</span>
      <span class="bar__track"><span class="bar__fill" style="--w:${(r.v / max) * 100}%"></span></span>
      <span class="bar__val">${r.v.toFixed(1).replace(".", ",")}%</span>
    </div>`).join("");
}
renderBars($("countryBars"), countries, 16);
renderBars($("regionBars"), regions, 80);

$("reasons").innerHTML = reasons.map(r => `
  <article class="tile">
    <span class="tile__icon"><svg viewBox="0 0 24 24" aria-hidden="true">${r.i}</svg></span>
    <h3>${r.h}</h3>
    <p>${r.t}</p>
    <span class="src">${r.s}</span>
  </article>`).join("");

$("mapRows").innerHTML = mapRows.map(r =>
  `<tr data-spot="${r[4]}"><td><strong>${r[0]}</strong></td><td><span class="kind">${r[1]}</span></td><td>${r[2]}</td><td class="muted">${r[3]}</td></tr>`).join("");

$("vsRows").innerHTML = vsRows.map(r =>
  `<tr><th scope="row">${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("");

// Exemplos global/local
const exChips = $("exChips");
exChips.innerHTML = examples.map((x, i) =>
  `<button type="button" role="tab" class="chip${i === 0 ? " is-active" : ""}" data-i="${i}" aria-selected="${i === 0}">${x.name}</button>`).join("");
function renderExample(i) {
  const x = examples[i];
  $("example").innerHTML = `
    <figure class="example__media">
      <img src="${credits[x.c].img}" alt="${esc(x.alt)}" decoding="async">
      <figcaption><span>${x.cap}</span></figcaption>
      ${creditTag(x.c, true)}
    </figure>
    <div class="example__content">
      <div class="example__head"><span class="tag">${x.where}</span><h3>${x.name}</h3></div>
      <div class="example__grid">
        <div class="ex ex--global"><span class="ex__k">O que é global</span><p>${x.global}</p></div>
        <div class="ex ex--local"><span class="ex__k">O que é local</span><p>${x.local}</p></div>
        <div class="ex ex--hyp"><span class="ex__k">Hipótese a defender</span><p>${x.hyp}</p></div>
      </div>
      <span class="src">Evidência: ${x.ev}</span>
    </div>`;
}
function selectExample(i) {
  setActive(exChips, exChips.children[i]);
  renderExample(i);
}
renderExample(0);
exChips.addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (btn) selectExample(+btn.dataset.i);
});
// Pré-carrega as fotos dos exemplos para a troca ser imediata
window.addEventListener("load", () => examples.forEach(x => { new Image().src = credits[x.c].img; }));

$("ptGrid").innerHTML = ptData.map(p => `<div class="pt"><strong>${p.v}</strong><span>${p.l}</span></div>`).join("") +
  '<span class="src pt-src">Fontes: ECO, 16 out. 2025; ECO, 15 nov. 2025</span>';

const shortUrl = u => {
  const m = u.match(/^https?:\/\/(?:www\.)?([^/]+)(\/.*)?$/);
  if (!m) return u;
  const p = (m[2] || "").replace(/\/$/, "");
  return m[1] + (p.length > 26 ? p.slice(0, 24) + "…" : p);
};
$("sources").innerHTML = sources.map(s => {
  const company = s[3] === "Empresa";
  return `<tr>
    <td><strong>${s[0]}</strong></td><td>${s[1]}</td><td>${s[2]}</td>
    <td><span class="type type--${company ? "co" : "ind"}">${s[3]}</span></td>
    <td><a class="src-link" href="${s[4]}" target="_blank" rel="noopener" title="${s[4]}">${shortUrl(s[4])}</a></td></tr>`;
}).join("");

// Fontes das fotografias colocadas no HTML
document.querySelectorAll("[data-credit]").forEach(el => el.insertAdjacentHTML("beforeend", creditTag(el.dataset.credit)));

$("unsure").innerHTML = unsure.map(u => `<li><strong>${u[0]}.</strong> ${u[1]}</li>`).join("");

$("credits").innerHTML = Object.values(credits).map(c => `
  <li>
    <img src="${c.img}" alt="" loading="lazy" decoding="async">
    <div><a href="${c.page}" target="_blank" rel="noopener">${c.what}</a>
    <span>${c.author} · <a href="${c.licUrl}" target="_blank" rel="noopener">${c.lic}</a></span></div>
  </li>`).join("") +
  '<li class="credits__note"><span>Fotografias recortadas e redimensionadas pelo grupo. Mapa: Natural Earth (domínio público).</span></li>';

function setActive(group, btn) {
  group.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("is-active", c === btn);
    c.setAttribute("aria-selected", c === btn);
  });
}

// =====================================================================
// Pontos clicáveis (como as fotografias do site do IKEA)
// =====================================================================
let openSpot = null;
function closeSpot() {
  if (!openSpot) return;
  openSpot.card.remove();
  openSpot.btn.setAttribute("aria-expanded", "false");
  if (openSpot.onClose) openSpot.onClose();
  openSpot = null;
}
function addHotspots(fig, spots, render, hooks = {}) {
  spots.forEach(s => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "hotspot";
    b.style.setProperty("--x", s.x + "%");
    b.style.setProperty("--y", s.y + "%");
    b.setAttribute("aria-label", "Ver: " + (s.title || s.name));
    b.setAttribute("aria-expanded", "false");
    fig.appendChild(b);
    b.addEventListener("click", e => {
      e.stopPropagation();
      const same = openSpot && openSpot.btn === b;
      closeSpot();
      if (same) return;
      const card = document.createElement("div");
      card.className = "spot-card";
      card.setAttribute("role", "dialog");
      card.setAttribute("aria-label", s.title || s.name);
      card.innerHTML = render(s) + `<button type="button" class="spot-card__close" aria-label="Fechar">${svg("close")}</button>`;
      fig.appendChild(card);
      const fw = fig.clientWidth, fh = fig.clientHeight;
      const bx = s.x / 100 * fw, by = s.y / 100 * fh;
      const cw = card.offsetWidth, ch = card.offsetHeight;
      let left = bx + 26;
      if (left + cw > fw - 8) left = bx - 26 - cw;
      if (left < 8) left = Math.max(8, Math.min(fw - cw - 8, bx - cw / 2));
      const top = Math.max(8, Math.min(fh - ch - 8, by - ch / 2));
      card.style.left = left + "px";
      card.style.top = top + "px";
      b.setAttribute("aria-expanded", "true");
      openSpot = { btn: b, card, onClose: hooks.onClose && (() => hooks.onClose(s)) };
      card.querySelector(".spot-card__close").addEventListener("click", ev => { ev.stopPropagation(); closeSpot(); b.focus(); });
      if (hooks.onOpen) hooks.onOpen(s);
    });
  });
}
document.addEventListener("click", e => { if (openSpot && !openSpot.card.contains(e.target)) closeSpot(); });
// Fecha o cartão só se a largura mudar (no telemóvel, a barra do browser muda a altura ao fazer scroll)
let lastW = window.innerWidth;
window.addEventListener("resize", () => { if (window.innerWidth !== lastW) { lastW = window.innerWidth; closeSpot(); } });

addHotspots(document.querySelector('[data-hotspots="hero"]'), heroSpots, s => `
  <h4>${s.title}</h4><p>${s.text}</p><span class="src">${s.src}</span>
  <a class="spot-card__link" href="${s.href}">${s.link} ${svg("arrow", ' style="width:16px;height:16px"')}</a>`);

const mapTable = $("mapRows");
const mapCard = s => {
  const rows = mapRows.filter(r => r[4] === s.id);
  return `<h4>${s.name}</h4><ul class="spot-card__list">${rows.map(r =>
    `<li><span class="kind">${r[1]}</span>${r[0] !== s.name ? `<strong>${r[0]}</strong>` : ""}<span>${r[2]}</span><em>${r[3]}</em></li>`).join("")}</ul>`;
};
const mapHooks = {
  onOpen: s => mapTable.querySelectorAll("tr").forEach(tr => tr.classList.toggle("is-lit", tr.dataset.spot === s.id)),
  onClose: () => mapTable.querySelectorAll(".is-lit").forEach(tr => tr.classList.remove("is-lit"))
};
addHotspots(document.querySelector('[data-hotspots="world"]'), worldSpots, mapCard, mapHooks);
addHotspots(document.querySelector('[data-hotspots="europe"]'), europeSpots, mapCard, mapHooks);

// =====================================================================
// Fotografia ampliada
// =====================================================================
const lightbox = $("lightbox");
function openPhoto(c, alt, cap) {
  const cr = credits[c];
  $("lightboxImg").src = cr.img;
  $("lightboxImg").alt = alt;
  $("lightboxCap").innerHTML = `${cap} · Foto: ${cr.author}, <a href="${cr.page}" target="_blank" rel="noopener">${cr.lic}</a>`;
  if (typeof lightbox.showModal === "function") lightbox.showModal();
}
$("gallery").addEventListener("click", e => {
  const b = e.target.closest("[data-photo]");
  if (!b) return;
  const g = gallery[+b.dataset.photo];
  openPhoto(g.c, g.alt, g.cap);
});
lightbox.addEventListener("click", e => { if (e.target === lightbox || e.target.closest("[data-close-lightbox]")) lightbox.close(); });

// =====================================================================
// Toast
// =====================================================================
const toastEl = $("toast");
let toastTimer;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("is-show"), 3200);
}
document.querySelector("[data-fy]").addEventListener("click", () =>
  toast("No IKEA, o ano financeiro 2025 (FY25) vai de 1 de setembro de 2024 a 31 de agosto de 2025."));

// Dica ao passar nas barras
const tip = document.createElement("div");
tip.className = "tip";
document.body.appendChild(tip);
document.querySelectorAll(".bar").forEach(b => {
  const show = () => {
    tip.textContent = b.dataset.tip;
    const r = b.querySelector(".bar__fill").getBoundingClientRect();
    tip.style.left = `${r.right + window.scrollX}px`;
    tip.style.top = `${r.top + window.scrollY - 8}px`;
    tip.classList.add("is-show");
  };
  const hide = () => tip.classList.remove("is-show");
  b.addEventListener("mouseenter", show);
  b.addEventListener("focus", show);
  b.addEventListener("mouseleave", hide);
  b.addEventListener("blur", hide);
});

// =====================================================================
// Pesquisa com sugestões
// =====================================================================
const searchBox = $("search"), input = $("searchInput"), panel = $("searchPanel");
const resultsEl = $("searchResults"), clearBtn = $("searchClear");
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

$("searchChips").innerHTML = popular.map(p => `<button type="button" data-q="${p}">${svg("search")}${p}</button>`).join("");

function sectionName(el) {
  const sec = el.closest("section[id]");
  const h = sec && sec.querySelector("h2");
  return h ? h.textContent.trim() : "Início";
}
function highlight(el) {
  document.querySelectorAll(".is-hit").forEach(x => x.classList.remove("is-hit"));
  let d = el.closest("details");
  while (d) { d.open = true; d = d.parentElement.closest("details"); }
  el.classList.add("is-hit");
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => el.classList.remove("is-hit"), 3500);
}
function buildIndex() {
  const seen = new Set();
  const items = [];
  document.querySelectorAll("main h2, main h3, main h4, main p, main td, main li, .stat__label").forEach(el => {
    if (seen.has(el) || el.closest("#example, .spot-card, .search, #credits")) return;
    seen.add(el);
    const text = el.textContent.replace(/\s+/g, " ").trim();
    if (text) items.push({ text, where: sectionName(el), go: () => highlight(el) });
  });
  examples.forEach((x, i) => items.push({
    text: `${x.name}: ${x.global} ${x.local} ${x.hyp}`,
    where: "Global e local · " + x.name,
    go: () => { selectExample(i); highlight($("example")); }
  }));
  return items;
}
let results = [], active = -1, cycle = -1, lastQ = "";

function snippet(text, q) {
  const i = norm(text).indexOf(q);
  if (i < 0) return esc(text.slice(0, 120));
  const start = Math.max(0, i - 40);
  const pre = (start > 0 ? "…" : "") + esc(text.slice(start, i));
  const hit = esc(text.slice(i, i + q.length));
  const post = esc(text.slice(i + q.length, i + q.length + 90)) + (i + q.length + 90 < text.length ? "…" : "");
  return `${pre}<mark>${hit}</mark>${post}`;
}
function runSearch() {
  const raw = input.value.trim();
  const q = norm(raw);
  clearBtn.hidden = !raw;
  $("searchPopular").hidden = !!q;
  $("searchResultsTitle").hidden = !q;
  active = -1;
  if (q !== lastQ) cycle = -1;
  lastQ = q;
  if (!q) { results = []; resultsEl.innerHTML = ""; return; }
  results = buildIndex().filter(it => norm(it.text).includes(q));
  resultsEl.innerHTML = results.length
    ? results.slice(0, 7).map((r, i) => `<li><button type="button" role="option" data-i="${i}">${svg("search")}
        <span><span class="r-where">${esc(r.where)}</span><span class="r-text">${snippet(r.text, q)}</span></span></button></li>`).join("")
    : `<li class="search__empty">Sem resultados para «${esc(raw)}». Experimente «Coimbra» ou «Índia».</li>`;
}
function openPanel() {
  panel.hidden = false;
  input.setAttribute("aria-expanded", "true");
  header.classList.remove("is-hidden");
}
function closePanel() {
  panel.hidden = true;
  input.setAttribute("aria-expanded", "false");
}
function go(i) {
  const r = results[i];
  if (!r) return;
  closePanel();
  input.blur();
  r.go();
}
function setActiveResult(i) {
  const btns = [...resultsEl.querySelectorAll("button")];
  if (!btns.length) return;
  active = (i + btns.length) % btns.length;
  btns.forEach((b, k) => b.classList.toggle("is-active", k === active));
  btns[active].scrollIntoView({ block: "nearest" });
}
let searchTimer;
input.addEventListener("focus", () => { runSearch(); openPanel(); });
input.addEventListener("input", () => { clearTimeout(searchTimer); searchTimer = setTimeout(runSearch, 100); openPanel(); });
input.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); setActiveResult(active + 1); }
  else if (e.key === "ArrowUp") { e.preventDefault(); setActiveResult(active - 1); }
  else if (e.key === "Escape") { closePanel(); input.blur(); }
});
$("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  runSearch();
  if (!input.value.trim()) return;
  if (!results.length) return toast(`Sem resultados para «${input.value.trim()}»`);
  if (active >= 0) return go(active);
  cycle = (cycle + 1) % results.length;
  closePanel();
  results[cycle].go();
  toast(`${cycle + 1} de ${results.length} resultados (Enter para o seguinte)`);
});
resultsEl.addEventListener("click", e => {
  const b = e.target.closest("button[data-i]");
  if (b) go(+b.dataset.i);
});
$("searchChips").addEventListener("click", e => {
  const b = e.target.closest("button[data-q]");
  if (!b) return;
  input.value = b.dataset.q;
  runSearch();
  input.focus();
});
clearBtn.addEventListener("click", () => { input.value = ""; runSearch(); input.focus(); });
document.addEventListener("click", e => { if (!searchBox.contains(e.target)) closePanel(); });

// =====================================================================
// Carrosséis com setas e barra de progresso
// =====================================================================
function updateScrollers() {
  document.querySelectorAll("[data-scroller]").forEach(s => {
    const t = s.querySelector(".scroller__track");
    const max = t.scrollWidth - t.clientWidth;
    s.querySelector(".scroller__btn--prev").disabled = t.scrollLeft <= 4;
    s.querySelector(".scroller__btn--next").disabled = t.scrollLeft >= max - 4;
    const bar = s.querySelector(".scroller__bar span");
    if (bar) {
      const w = Math.min(100, t.clientWidth / t.scrollWidth * 100);
      bar.style.width = w + "%";
      bar.style.transform = `translateX(${max > 0 ? (t.scrollLeft / max) * (100 / w * 100 - 100) : 0}%)`;
    }
  });
}
document.querySelectorAll("[data-scroller]").forEach(s => {
  const t = s.querySelector(".scroller__track");
  s.querySelector(".scroller__btn--prev").addEventListener("click", () => t.scrollBy({ left: -t.clientWidth * 0.8 }));
  s.querySelector(".scroller__btn--next").addEventListener("click", () => t.scrollBy({ left: t.clientWidth * 0.8 }));
  t.addEventListener("scroll", updateScrollers, { passive: true });
});
window.addEventListener("resize", updateScrollers);
window.addEventListener("load", updateScrollers);
updateScrollers();

// =====================================================================
// Menu e painel "Hej!"
// =====================================================================
let lastFocus = null;
function openSheet(id) {
  const sheet = $(id);
  lastFocus = document.activeElement;
  sheet.inert = false;
  sheet.classList.add("is-open");
  document.body.style.overflow = "hidden";
  setTimeout(() => sheet.querySelector("[data-close]").focus(), 50);
}
function closeSheets() {
  document.querySelectorAll(".sheet.is-open").forEach(sheet => {
    sheet.classList.remove("is-open");
    sheet.inert = true;
  });
  document.body.style.overflow = "";
  if (lastFocus) { lastFocus.focus({ preventScroll: true }); lastFocus = null; }
}
document.querySelectorAll("[data-open]").forEach(b => b.addEventListener("click", () => openSheet(b.dataset.open)));
document.querySelectorAll(".sheet").forEach(sheet => sheet.addEventListener("click", e => {
  if (e.target === sheet || e.target.closest("[data-close]")) closeSheets();
  else if (e.target.closest("a[href^='#']")) { lastFocus = null; closeSheets(); }
}));
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  closeSheets();
  closeSpot();
});

// =====================================================================
// Cabeçalho: esconde ao descer, aparece ao subir; secção ativa no menu
// =====================================================================
const header = $("header");
const toTop = $("toTop");
let lastY = window.scrollY;
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.classList.toggle("is-stuck", y > 40);
  if (panel.hidden) {
    if (y > lastY + 6 && y > 400) header.classList.add("is-hidden");
    else if (y < lastY - 6 || y < 200) header.classList.remove("is-hidden");
  }
  toTop.classList.toggle("is-show", y > 1400);
  lastY = y;
}, { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const navLinks = [...document.querySelectorAll(".mainnav a")];
const spy = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle("is-active", a.hash === "#" + en.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
navLinks.forEach(a => spy.observe(document.querySelector(a.hash)));

// =====================================================================
// Aparecer ao fazer scroll (barras crescem quando ficam visíveis)
// =====================================================================
const revealEls = document.querySelectorAll(".section > *, .footer__top");
revealEls.forEach(el => el.classList.add("reveal"));
const reveal = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("is-in"); reveal.unobserve(en.target); }
}), { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
revealEls.forEach(el => reveal.observe(el));
document.querySelectorAll(".chart").forEach(el => reveal.observe(el));

// Rodapé: colunas abertas no computador, acordeão no telemóvel
const mq = window.matchMedia("(max-width: 900px)");
const syncFooter = () => document.querySelectorAll(".footer__cols details").forEach(d => d.open = !mq.matches);
mq.addEventListener("change", syncFooter);
syncFooter();
document.querySelectorAll(".footer__cols summary").forEach(s =>
  s.addEventListener("click", e => { if (!mq.matches) e.preventDefault(); }));
