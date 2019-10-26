const subjectTable = {
  ACCT: 'Accounting',
  AFAM: 'African American Studies',
  AFST: 'African Studies',
  AKKD: 'Akkadian',
  AMST: 'American Studies',
  AMTH: 'Applied Mathematics',
  ANTH: 'Anthropology',
  APHY: 'Applied Physics',
  ARBC: 'Arabic',
  ARCG: 'Archaeological Studies',
  ARCH: 'Architecture',
  ARMN: 'Armenian',
  ART: 'Art',
  ASL: 'American Sign Language',
  ASTR: 'Astronomy',
  BENG: 'Biomedical Engineering',
  BIOL: 'Biology',
  BNGL: 'Bengali',
  BRST: 'British Studies',
  BURM: 'Burmese',
  CENG: 'Chemical Engineering',
  CGSC: 'Cognitive Science',
  CHEM: 'Chemistry',
  CHLD: 'Child Study Center',
  CHNS: 'Chinese',
  CLCV: 'Classical Civilization',
  CLSS: 'Classics',
  CPAR: 'Computing and the Arts',
  CPSC: 'Computer Science',
  CSEC: 'Computer Science and Economics',
  CZEC: 'Czech',
  DEVN: 'DeVane Lecture Course',
  DRST: 'Directed Studies',
  DUTC: 'Dutch',
  EALL: 'East Asian Languages and Literatures',
  EAST: 'East Asian Studies',
  ECON: 'Economics',
  EDST: 'Education Studies',
  'E&EB': 'Ecology and Evolutionary Biology',
  EENG: 'Electrical Engineering',
  EGYP: 'Egyptian',
  EHS: 'Environmental Health and Safety',
  ELP: 'English Language Program',
  EMD: 'Epidemiology of Microbial Diseases',
  ENAS: 'Engineering and Applied Science',
  ENGL: 'English Language and Literature',
  ENRG: 'Energy Studies',
  ENVE: 'Environmental Engineering',
  'EP&E': 'Ethics, Politics, and Economics',
  'ER&M': 'Ethnicity, Race, and Migration',
  EVST: 'Environmental Studies',
  'F&ES': 'Forestry & Environmental Studies',
  FILM: 'Film and Media Studies',
  FNSH: 'Finnish',
  FREN: 'French',
  'G&G': 'Geology and Geophysics',
  GLBL: 'Global Affairs',
  GMAN: 'Germanic Languages and Literatures',
  GREK: 'Ancient Greek',
  HEBR: 'Hebrew',
  HGRN: 'Hungarian',
  HIST: 'History',
  HLTH: 'Global Health Studies',
  HMRT: 'Human Rights',
  HNDI: 'Hindi',
  HSAR: 'History of Art',
  HSHM: 'History of Science, Medicine, and Public Health',
  HUMS: 'Humanities',
  INDN: 'Indonesian',
  ITAL: 'Italian',
  JAPN: 'Japanese',
  JDST: 'Judaic Studies',
  KHMR: 'Khmer',
  KREN: 'Korean',
  LAST: 'Latin American Studies',
  LATN: 'Latin',
  LING: 'Linguistics',
  LITR: 'Literature',
  MATH: 'Mathematics',
  'MB&B': 'Molecular Biophysics and Biochemistry',
  MCDB: 'Molecular, Cellular, and Developmental Biology',
  MENG: 'Mechanical Engineering',
  MGRK: 'Modern Greek',
  MMES: 'Modern Middle East Studies',
  MTBT: 'Modern Tibetan',
  MUSI: 'Music',
  NAVY: 'Naval Science',
  NELC: 'Near Eastern Languages and Civilizations',
  NSCI: 'Neuroscience',
  PERS: 'Persian',
  PHIL: 'Philosophy',
  PHYS: 'Physics',
  PLSC: 'Political Science',
  PLSH: 'Polish',
  PNJB: 'Punjabi',
  PORT: 'Portuguese',
  PSYC: 'Psychology',
  RLST: 'Religious Studies',
  ROMN: 'Romanian',
  RSEE: 'Russian and East European Studies',
  RUSS: 'Russian',
  'S&DS': 'Statistics and Data Science',
  SAST: 'South Asian Studies',
  SBCR: 'Bosnian-Croatian-Serbian',
  SCIE: 'Science',
  SKRT: 'Sanskrit',
  SLAV: 'Slavic Languages and Literatures',
  SNHL: 'Sinhala',
  SOCY: 'Sociology',
  SPAN: 'Spanish',
  SPEC: 'Special Divisional Major',
  STCY: 'Study of the City',
  SWAH: 'Kiswahili',
  TAML: 'Tamil',
  TBTN: 'Classical Tibetan',
  THST: 'Theater Studies',
  TKSH: 'Turkish',
  TWI: 'Twi',
  UKRN: 'Ukrainian',
  URBN: 'Urban Studies',
  USAF: 'Aerospace Studies',
  VIET: 'Vietnamese',
  WGSS: "Women's, Gender, and Sexuality Studies",
  WLOF: 'Wolof',
  YORU: 'Yoruba',
  ZULU: 'isiZulu',
};

export function subjectLookup(key) {
  return subjectTable[key] || 'Unknown Subject';
}
