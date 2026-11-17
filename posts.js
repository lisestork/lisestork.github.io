// Add new posts at the top. 'sort' is YYYY-MM-DD and controls ordering on all pages.
// Use 'title' + 'url' for posts with a dedicated page.
// Use 'titleHtml' (may contain HTML/links) for news items without a dedicated page.
const POSTS = [
  {
    date: "5 Nov 2026",
    sort: "2026-11-05",
    title: "DH.arc Seminar: Hybrid Intelligence for the Digital Humanities",
    url: "posts/dharc-2026.html",
    tags: ["post", "talk"],
    slides: "talks/hybrid-intelligence-dh-2026.pdf",
    description: null,
    byline: null
  },
  {
    date: "Oct 2026",
    sort: "2026-10-29",
    title: "ISWC 2026 Trip Report",
    url: "posts/iswc-2026.html",
    tags: ["post", "trip report"],
    slides: null,
    description: "Notes from ISWC 2026 in Bari: the CHARGED workshop on multimodal cultural heritage data, Sci-K (sixth edition), keynotes by Frank van Harmelen and Jim Hendler on rethinking the Semantic Web at 25, and the visionary track.",
    byline: null
  },
  {
    date: "26 Oct 2026",
    sort: "2026-10-26",
    titleHtml: 'Co-organized <a href="https://sci-k.github.io/2026/">Sci-K workshop</a> at ISWC 2026, Bari, Italy',
    url: null,
    tags: ["news"],
    slides: null,
    description: null,
    byline: null
  },
  {
    date: "Oct 2026",
    sort: "2026-10-25",
    titleHtml: 'Paper published at WOP@ISWC 2026: <a href="https://odpa.github.io/workshop-on-ontology-design-and-patterns/2026/#schedule">Fit for Purpose: Selecting a Reification Method for the TIDO Ontology</a>',
    url: null,
    tags: ["paper"],
    slides: null,
    description: null,
    byline: "Roothaert, Stork, Poveda-Villalón"
  },
  {
    date: "Sep 2026",
    sort: "2026-09-15",
    titleHtml: 'Paper published at SEMANTiCS 2026: <a href="https://ceur-ws.org/Vol-4293/">Bridging Theory and Practice in Semantic Data Science</a>',
    url: null,
    tags: ["short paper", "poster"],
    slides: null,
    description: null,
    byline: "Orlov, Stork, Yakovets, Miedema"
  },
  {
    date: "2026",
    sort: "2026-06-01",
    titleHtml: 'Co-organized the <a href="https://semdh.github.io/">SemDH@ESWC</a> 2026',
    url: null,
    tags: ["news"],
    slides: null,
    description: null,
    byline: null
  },
  {
    date: "2026",
    sort: "2026-05-28",
    titleHtml: 'Paper published at QKG@ESWC 2026: <a href="https://ceur-ws.org/Vol-4205/paper7.pdf">Ranking-Guided Autoregressive Modeling for Multimodal Tabular Anomaly Detection</a>',
    url: null,
    tags: ["paper"],
    slides: null,
    description: null,
    byline: "Georgakopoulos, Groth, Stork"
  },
  {
    date: "11 Feb 2026",
    sort: "2026-02-11",
    titleHtml: '<a href="https://www.uva.nl/en/shared-content/faculteiten/en/faculteit-der-natuurwetenschappen-wiskunde-en-informatica/news/2026/02/gaining-more-insights-from-scientific-data.html">UvA: “Gaining more insights from scientific data”</a>',
    url: null,
    tags: ["news"],
    slides: null,
    description: null,
    byline: null
  },
  {
    date: "21 Oct 2025",
    sort: "2025-10-22",
    titleHtml: '<a href="https://www.uva.nl/en/shared-content/faculteiten/en/faculteit-der-natuurwetenschappen-wiskunde-en-informatica/news/2025/10/four-uva-macgillavry-fellows-share-their-year.html">UvA: “Four MacGillavry fellows share their year”</a>',
    url: null,
    tags: ["news"],
    slides: null,
    description: null,
    byline: null
  },
  {
    date: "21 Oct 2025",
    sort: "2025-10-21",
    titleHtml: '<a href="https://tlc.uva.nl/en/article/traditional-lecturing-into-active-learning-moments/">TLC: “How three STEM lecturers turned traditional lecturing into active learning moments”</a>',
    url: null,
    tags: ["news"],
    slides: null,
    description: null,
    byline: null
  },
  {
    date: "2025",
    sort: "2025-06-01",
    titleHtml: 'Paper published in <em>DH Benelux Journal</em>: <a href="https://journal.dhbenelux.org/wp-content/uploads/2025/11/V7_P8_Furuta_DH_Benelux_Journal_Volume_7___2025.pdf">Herbaria Heritage: Visualizing Colonial Bias in Natural History Collections</a>',
    url: null,
    tags: ["paper"],
    slides: null,
    description: null,
    byline: "Furuta, Salamanca, Todd, Stork, Weber · pp. 103–121"
  },
  {
    date: "2025",
    sort: "2025-05-01",
    titleHtml: 'Paper published at K-CAP 2025: <a href="https://doi.org/10.1145/3731443.3771351">TIDO: The Threat Intelligence Decision Ontology</a>',
    url: null,
    tags: ["paper"],
    slides: null,
    description: null,
    byline: "Roothaert, Schlobach, Massacci, Stork"
  },
  {
    date: "28 Nov 2024",
    sort: "2024-11-28",
    titleHtml: '<a href="https://ivi.uva.nl/content/news/2024/11/discovering-a-host-of-data-sources.html">IVI: “Discovering a host of data sources”</a>',
    url: null,
    tags: ["news"],
    slides: null,
    description: null,
    byline: null
  },
  {
    date: "2024",
    sort: "2024-09-01",
    title: "Joined INDElab as Assistant Professor",
    url: null,
    tags: ["news"],
    slides: null,
    description: null,
    byline: null
  }
];
