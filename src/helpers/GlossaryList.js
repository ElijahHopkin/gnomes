let id = 0;
const getId = () => ++id;

/*
Glossary list utilizes the benefits of idempotence over the value of an array. Rather than have to loop through the array, we are able to quickly scan for a match--like a pairing in an object.
This is functionally key/value pairs, AND it is iterable.
*/

const GlossaryList = {
  "ad-nauseam": {
    id: getId(),
    word: "ad nauseam",
    definition:
      "referring to something that has been done or repeated so often that it has become annoying or tiresome.",
  },
  bratwurst: {
    id: getId(),
    word: "bratwurst",
    definition:
      "a type of fine German pork sausage that is typically fried or grilled.",
  },
  conniving: {
    id: getId(),
    word: "conniving",
    definition:
      "given to or involved in conspiring to do something immoral, illegal, or harmful.",
  },
  deign: {
    id: getId(),
    word: "deign",
    definition: "do something that one considers to be beneath one's dignity.",
  },
  dun: {
    id: getId(),
    word: "dun",
    definition: "of a dull grayish-brown color.",
  },
  feign: {
    id: getId(),
    word: "feign",
    definition: "pretend to be affected by (a feeling, state, or injury).",
  },
  gnarled: {
    id: getId(),
    word: "gnarled",
    definition: "knobbly, rough, and twisted, especially with age.",
  },
  gnat: {
    id: getId(),
    word: "gnat",
    definition:
      "a small two-winged fly that resembles a mosquito. Gnats include both biting and nonbiting forms, and they typically form large swarms.",
  },
  gnathic: {
    id: getId(),
    word: "gnathic",
    definition: "relating to the jaws.",
  },
  gnaw: {
    id: getId(),
    word: "gnaw",
    definition: "bite at or nibble something persistently.",
  },
  gneiss: {
    id: getId(),
    word: "gneiss",
    definition:
      "a metamorphic rock with a banded or foliated structure, typically coarse-grained and consisting mainly of feldspar, quartz, and mica.",
  },
  gnome: {
    id: getId(),
    word: "gnome",
    definition:
      "a legendary dwarfish creature supposed to guard the earth's treasures underground.",
  },
  gnomon: {
    id: getId(),
    word: "gnomon",
    definition:
      "The projecting piece on a sundial that shows the time by the position of its shadow.",
  },
  gnostic: {
    id: getId(),
    word: "gnostic",
    definition:
      "relating to knowledge, especially esoteric mystical knowledge.",
  },
  gnu: {
    id: getId(),
    word: "gnu",
    definition:
      "a large dark African antelope with a long head, a beard and mane, and a sloping back.",
  },
  grog: {
    id: getId(),
    word: "grog",
    definition:
      "spirits (originally rum) mixed with water. informally: alcoholic drink, especially beer.",
  },
  knack: {
    id: getId(),
    word: "knack",
    definition: "an acquired or natural skill at performing a task.",
  },
  knackwurst: {
    id: getId(),
    word: "knackwurst",
    definition: "a type of short, fat, highly seasoned German sausage.",
  },
  knapsack: {
    id: getId(),
    word: "knapsack",
    definition:
      "a bag with shoulder straps, carried on the back, and typically made of canvas or other weatherproof material.",
  },
  knapweed: {
    id: getId(),
    word: "knapweed",
    definition:
      "a tough-stemmed Eurasian plant that typically has purple thistle-like flower heads, occurring chiefly in grassland and on roadsides.",
  },
  knave: {
    id: getId(),
    word: "knave",
    definition: "a dishonest or unscrupulous man.",
  },
  knawel: {
    id: getId(),
    word: "knawel",
    definition:
      "a low-growing inconspicuous plant of the pink family, growing in temperate regions of the northern hemisphere.",
  },
  knead: {
    id: getId(),
    word: "knead",
    definition: "massage or squeeze with the hands.",
  },
  knell: {
    id: getId(),
    word: "knell",
    definition:
      "the sound of a bell, especially when rung solemnly for a death or funeral.",
  },
  knickers: {
    id: getId(),
    word: "knickers",
    definition: "loose-fitting trousers gathered at the knee or calf.",
  },
  knish: {
    id: getId(),
    word: "knish",
    definition:
      "a dumpling of dough that is stuffed with a filling and baked or fried.",
  },
  knobby: {
    id: getId(),
    word: "knobby",
    definition: "having or covered with small knobs; knobbly.",
  },
  knoll: {
    id: getId(),
    word: "knoll",
    definition: "a small hill or mound.",
    source: "Dictionary.com",
  },
  knots: {
    id: getId(),
    word: "knots",
    definition:
      "a unit of speed equivalent to one nautical mile per hour, used especially of ships, aircraft, or winds.",
  },
  kobold: {
    id: getId(),
    word: "kobold",
    definition:
      "(in Germanic mythology) a spirit that haunts houses or lives underground in caves or mines.",
  },
  malign: {
    id: getId(),
    word: "malign",
    definition: "evil in nature or effect; malevolent.",
  },
  nape: {
    id: getId(),
    word: "nape",
    definition: "the back of a person's neck.",
  },
  naught: {
    id: getId(),
    word: "naught",
    definition: "nothing.",
  },
  nausea: {
    id: getId(),
    word: "nausea",
    definition: "a feeling of sickness with an inclination to vomit.",
  },
  navel: {
    id: getId(),
    word: "navel",
    definition:
      "a rounded knotty depression in the center of a person's belly caused by the detachment of the umbilical cord after birth; the umbilicus.",
  },
  nether: {
    id: getId(),
    word: "nether",
    definition: "lower in position.",
  },
  neume: {
    id: getId(),
    word: "neume",
    definition:
      "(in plainsong) a note or group of notes to be sung to a single syllable.",
  },
  niche: {
    id: getId(),
    word: "niche",
    definition:
      "a specialized segment of the market for a particular kind of product or service. ALSO place (something) in a niche or recess.",
  },
  nicker: {
    id: getId(),
    word: "nicker",
    definition: "(of a horse) give a soft, low, breathy whinny.",
  },
  niger: {
    id: getId(),
    word: "niger",
    definition: "Latin for 'black' ",
  },
  nimbus: {
    id: getId(),
    word: "nimbus",
    definition: "a large gray rain cloud.' ",
  },
  nomad: {
    id: getId(),
    word: "nomad",
    definition:
      "a person who does not stay long in the same place; a wanderer.' ",
  },
  nosh: {
    id: getId(),
    word: "nosh",
    definition: "food.",
  },
  notch: {
    id: getId(),
    word: "notch",
    definition:
      "an indentation or incision on an edge or surface. To score or achieve (something).",
  },
  nub: {
    id: getId(),
    word: "nub",
    definition:
      "Unknown. Used akin to tap, nab, or brush like 'grandma' nimbly squeezing my cheeks. ",
  },
  "pell-mell": {
    id: getId(),
    word: "pell mell",
    definition: "recklessly hasty or disorganized; headlong.' ",
  },
  pneumatic: {
    id: getId(),
    word: "pneumatic",
    definition: "containing or operated by air or gas under pressure. ",
  },
  rune: {
    id: getId(),
    word: "rune",
    definition: "a mark or letter of mysterious or magic significance. ",
  },
  vignette: {
    id: getId(),
    word: "vignette",
    definition: "a brief evocative description, account, or episode. ",
  },
};

export default GlossaryList;
