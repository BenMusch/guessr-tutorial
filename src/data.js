const allStations = [
  {
    lines: ["red"],
    longitude: -71.142483,
    latitude: 42.395428,
    name: "Alewife",
  },
  {
    lines: ["greenB"],
    longitude: -71.137955,
    latitude: 42.348701,
    name: "Allston Street",
  },
  {
    lines: ["greenB"],
    longitude: -71.114748,
    latitude: 42.350992,
    name: "Amory Street",
  },
  {
    lines: ["red"],
    longitude: -71.057655,
    latitude: 42.330154,
    name: "Andrew",
  },
  {
    lines: ["blue"],
    longitude: -71.030395,
    latitude: 42.374262,
    name: "Airport",
  },
  {
    lines: ["blue"],
    longitude: -71.051652,
    latitude: 42.359784,
    name: "Aquarium",
  },
  {
    lines: ["greenB", "greenC", "greenD", "greenE"],
    longitude: -71.070893,
    latitude: 42.351902,
    name: "Arlington",
  },
  {
    lines: ["red", "redM"],
    longitude: -71.063777,
    latitude: 42.28452,
    name: "Ashmont",
  },
  {
    lines: ["orange"],
    longitude: -71.077257,
    latitude: 42.392811,
    name: "Assembly",
  },
  {
    lines: ["greenB"],
    longitude: -71.119924,
    latitude: 42.351616,
    name: "Babcock Street",
  },
  {
    lines: ["greenE"],
    longitude: -71.111003,
    latitude: 42.399889,
    name: "Ball Square",
  },
  {
    lines: ["orange"],
    longitude: -71.075727,
    latitude: 42.34735,
    name: "Back Bay",
  },
  {
    lines: ["greenE"],
    longitude: -71.111313,
    latitude: 42.330139,
    name: "Back of the Hill",
  },
  {
    lines: ["greenD"],
    longitude: -71.140455,
    latitude: 42.335765,
    name: "Beaconsfield",
  },
  {
    lines: ["greenC"],
    longitude: -71.13533,
    latitude: 42.339394,
    name: "Washington Square",
  },
  {
    lines: ["greenB"],
    longitude: -71.100258,
    latitude: 42.349293,
    name: "Blandford Street",
  },
  {
    lines: ["blue"],
    longitude: -70.992319,
    latitude: 42.397542,
    name: "Beachmont",
  },
  {
    lines: ["greenC"],
    longitude: -71.129082,
    latitude: 42.340023,
    name: "Brandon Hall",
  },
  {
    lines: ["blue"],
    longitude: -71.062037,
    latitude: 42.361365,
    name: "Bowdoin",
  },
  {
    lines: ["greenB", "greenC", "greenD", "greenE"],
    longitude: -71.06459,
    latitude: 42.35302,
    name: "Boylston",
  },
  {
    lines: ["red"],
    longitude: -71.056967,
    latitude: 42.342622,
    name: "Broadway",
  },
  {
    lines: ["greenB"],
    longitude: -71.125031,
    latitude: 42.351967,
    name: "Packard's Corner",
  },
  {
    lines: ["greenD"],
    longitude: -71.126683,
    latitude: 42.331316,
    name: "Brookline Hills",
  },
  {
    lines: ["greenE"],
    longitude: -71.104609,
    latitude: 42.334229,
    name: "Brigham Circle",
  },
  {
    lines: ["red"],
    longitude: -71.001138,
    latitude: 42.207854,
    name: "Braintree",
  },
  {
    lines: ["greenB"],
    longitude: -71.106865,
    latitude: 42.350082,
    name: "Boston University Central",
  },
  {
    lines: ["greenB"],
    longitude: -71.103889,
    latitude: 42.349735,
    name: "Boston University East",
  },
  {
    lines: ["redM"],
    longitude: -71.062519,
    latitude: 42.272429,
    name: "Butler",
  },
  {
    lines: ["greenD"],
    longitude: -71.116857,
    latitude: 42.332608,
    name: "Brookline Village",
  },
  {
    lines: ["redM"],
    longitude: -71.087338,
    latitude: 42.267563,
    name: "Capen Street",
  },
  {
    lines: ["orange"],
    longitude: -71.069533,
    latitude: 42.373622,
    name: "Community College",
  },
  {
    lines: ["redM"],
    longitude: -71.060394,
    latitude: 42.279629,
    name: "Cedar Grove",
  },
  {
    lines: ["redM"],
    longitude: -71.073444,
    latitude: 42.270027,
    name: "Central Avenue",
  },
  {
    lines: ["greenD"],
    longitude: -71.164699,
    latitude: 42.326753,
    name: "Chestnut Hill",
  },
  {
    lines: ["greenB"],
    longitude: -71.15316,
    latitude: 42.338169,
    name: "Chestnut Hill Avenue",
  },
  {
    lines: ["red"],
    longitude: -71.070628,
    latitude: 42.361166,
    name: "Charles/MGH",
  },
  {
    lines: ["orange"],
    longitude: -71.062752,
    latitude: 42.352547,
    name: "Chinatown",
  },
  {
    lines: ["greenB"],
    longitude: -71.150711,
    latitude: 42.340805,
    name: "Chiswick Road",
  },
  {
    lines: ["greenC"],
    longitude: -71.149326,
    latitude: 42.336142,
    name: "Cleveland Circle",
  },
  {
    lines: ["red"],
    longitude: -71.103802,
    latitude: 42.365486,
    name: "Central",
  },
  {
    lines: ["greenB", "greenC", "greenD", "greenE"],
    longitude: -71.077447,
    latitude: 42.349974,
    name: "Copley",
  },
  {
    lines: ["greenC"],
    longitude: -71.121263,
    latitude: 42.342116,
    name: "Coolidge Corner",
  },
  {
    lines: ["red"],
    longitude: -71.121815,
    latitude: 42.39674,
    name: "Davis",
  },
  {
    lines: ["greenC"],
    longitude: -71.141853,
    latitude: 42.337807,
    name: "Dean Road",
  },
  {
    lines: ["red", "orange"],
    longitude: -71.060225,
    latitude: 42.355518,
    name: "Downtown Crossing",
  },
  {
    lines: ["greenD"],
    longitude: -71.216684,
    latitude: 42.319045,
    name: "Eliot",
  },
  {
    lines: ["greenC"],
    longitude: -71.14566,
    latitude: 42.336971,
    name: "Englewood Avenue",
  },
  {
    lines: ["greenE"],
    longitude: -71.086625,
    latitude: 42.379467,
    name: "East Somerville",
  },
  {
    lines: ["greenC"],
    longitude: -71.131073,
    latitude: 42.339725,
    name: "Fairbanks Street",
  },
  {
    lines: ["greenE"],
    longitude: -71.105728,
    latitude: 42.333706,
    name: "Fenwood Road",
  },
  {
    lines: ["greenD"],
    longitude: -71.104213,
    latitude: 42.345403,
    name: "Fenway",
  },
  {
    lines: ["red"],
    longitude: -71.061667,
    latitude: 42.300093,
    name: "Fields Corner",
  },
  {
    lines: ["orange"],
    longitude: -71.113686,
    latitude: 42.300523,
    name: "Forest Hills",
  },
  {
    lines: ["greenE"],
    longitude: -71.096766,
    latitude: 42.387928,
    name: "Gilman Square",
  },
  {
    lines: ["blue", "greenB", "greenC", "greenD", "greenE"],
    longitude: -71.059215,
    latitude: 42.359705,
    name: "Government Center",
  },
  {
    lines: ["greenB"],
    longitude: -71.134949,
    latitude: 42.348545,
    name: "Griggs Street",
  },
  {
    lines: ["orange"],
    longitude: -71.107414,
    latitude: 42.310525,
    name: "Green Street",
  },
  {
    lines: ["orange", "greenD", "greenE"],
    longitude: -71.05829,
    latitude: 42.363021,
    name: "Haymarket",
  },
  {
    lines: ["red"],
    longitude: -71.118956,
    latitude: 42.373362,
    name: "Harvard",
  },
  {
    lines: ["greenB"],
    longitude: -71.131355,
    latitude: 42.350243,
    name: "Harvard Avenue",
  },
  {
    lines: ["greenE"],
    longitude: -71.110252,
    latitude: 42.328316,
    name: "Heath Street",
  },
  {
    lines: ["greenC"],
    longitude: -71.111145,
    latitude: 42.344906,
    name: "Hawes Street",
  },
  {
    lines: ["greenB", "greenC", "greenD"],
    longitude: -71.087903,
    latitude: 42.347888,
    name: "Hynes Convention Center",
  },
  {
    lines: ["orange"],
    longitude: -71.099592,
    latitude: 42.323132,
    name: "Jackson Square",
  },
  {
    lines: ["red"],
    longitude: -71.052391,
    latitude: 42.320685,
    name: "JFK/UMass",
  },
  {
    lines: ["greenB", "greenC", "greenD"],
    longitude: -71.095169,
    latitude: 42.348949,
    name: "Kenmore",
  },
  {
    lines: ["red"],
    longitude: -71.086176,
    latitude: 42.362491,
    name: "Kendall/MIT",
  },
  {
    lines: ["greenC"],
    longitude: -71.114197,
    latitude: 42.344074,
    name: "Kent Street",
  },
  {
    lines: ["greenB"],
    longitude: -71.166769,
    latitude: 42.340081,
    name: "Boston College",
  },
  {
    lines: ["greenD", "greenE"],
    longitude: -71.076584,
    latitude: 42.371572,
    name: "Lechmere",
  },
  {
    lines: ["greenE"],
    longitude: -71.100052,
    latitude: 42.33596,
    name: "Longwood Medical Area",
  },
  {
    lines: ["greenD"],
    longitude: -71.109956,
    latitude: 42.341702,
    name: "Longwood",
  },
  {
    lines: ["orange"],
    longitude: -71.083423,
    latitude: 42.341512,
    name: "Massachusetts Avenue",
  },
  {
    lines: ["redM"],
    longitude: -71.092486,
    latitude: 42.26762,
    name: "Mattapan",
  },
  {
    lines: ["greenE"],
    longitude: -71.117044,
    latitude: 42.407975,
    name: "Medford/Tufts",
  },
  {
    lines: ["greenE"],
    longitude: -71.095512,
    latitude: 42.337711,
    name: "Museum of Fine Arts",
  },
  {
    lines: ["greenE"],
    longitude: -71.106388,
    latitude: 42.393682,
    name: "Magoun Square",
  },
  {
    lines: ["redM"],
    longitude: -71.067266,
    latitude: 42.270349,
    name: "Milton",
  },
  {
    lines: ["greenE"],
    longitude: -71.109756,
    latitude: 42.333195,
    name: "Mission Park",
  },
  {
    lines: ["orange"],
    longitude: -71.07411,
    latitude: 42.426632,
    name: "Malden Center",
  },
  {
    lines: ["blue"],
    longitude: -71.03953,
    latitude: 42.369119,
    name: "Maverick",
  },
  {
    lines: ["greenD"],
    longitude: -71.205509,
    latitude: 42.322381,
    name: "Newton Highlands",
  },
  {
    lines: ["greenD"],
    longitude: -71.192414,
    latitude: 42.329443,
    name: "Newton Centre",
  },
  {
    lines: ["orange", "greenD", "greenE"],
    longitude: -71.06129,
    latitude: 42.365577,
    name: "North Station",
  },
  {
    lines: ["red"],
    longitude: -71.029583,
    latitude: 42.275275,
    name: "North Quincy",
  },
  {
    lines: ["greenE"],
    longitude: -71.088806,
    latitude: 42.340401,
    name: "Northeastern University",
  },
  {
    lines: ["orange"],
    longitude: -71.071097,
    latitude: 42.43668,
    name: "Oak Grove",
  },
  {
    lines: ["blue"],
    longitude: -71.004736,
    latitude: 42.386867,
    name: "Orient Heights",
  },
  {
    lines: ["red", "greenB", "greenC", "greenD", "greenE"],
    longitude: -71.062424,
    latitude: 42.356395,
    name: "Park Street",
  },
  {
    lines: ["red"],
    longitude: -71.119149,
    latitude: 42.3884,
    name: "Porter",
  },
  {
    lines: ["greenE"],
    longitude: -71.081696,
    latitude: 42.34557,
    name: "Prudential",
  },
  {
    lines: ["red"],
    longitude: -71.007153,
    latitude: 42.233391,
    name: "Quincy Adams",
  },
  {
    lines: ["red"],
    longitude: -71.005409,
    latitude: 42.251809,
    name: "Quincy Center",
  },
  {
    lines: ["blue"],
    longitude: -70.992533,
    latitude: 42.407843,
    name: "Revere Beach",
  },
  {
    lines: ["orange"],
    longitude: -71.095451,
    latitude: 42.331397,
    name: "Roxbury Crossing",
  },
  {
    lines: ["greenD"],
    longitude: -71.252685,
    latitude: 42.337352,
    name: "Riverside",
  },
  {
    lines: ["greenD"],
    longitude: -71.148758,
    latitude: 42.335088,
    name: "Reservoir",
  },
  {
    lines: ["orange"],
    longitude: -71.088961,
    latitude: 42.336377,
    name: "Ruggles",
  },
  {
    lines: ["greenE"],
    longitude: -71.111931,
    latitude: 42.331684,
    name: "Riverway",
  },
  {
    lines: ["orange"],
    longitude: -71.104248,
    latitude: 42.317062,
    name: "Stony Brook",
  },
  {
    lines: ["blue"],
    longitude: -70.997123,
    latitude: 42.390501,
    name: "Suffolk Downs",
  },
  {
    lines: ["red"],
    longitude: -71.053331,
    latitude: 42.31129,
    name: "Savin Hill",
  },
  {
    lines: ["greenC"],
    longitude: -71.107353,
    latitude: 42.345974,
    name: "Saint Mary's Street",
  },
  {
    lines: ["red"],
    longitude: -71.065738,
    latitude: 42.293126,
    name: "Shawmut",
  },
  {
    lines: ["greenB"],
    longitude: -71.157661,
    latitude: 42.3396,
    name: "South Street",
  },
  {
    lines: ["greenD", "greenE"],
    longitude: -71.067666,
    latitude: 42.366664,
    name: "Science Park/West End",
  },
  {
    lines: ["red"],
    longitude: -71.055242,
    latitude: 42.352271,
    name: "South Station",
  },
  {
    lines: ["blue", "orange"],
    longitude: -71.057598,
    latitude: 42.358978,
    name: "State",
  },
  {
    lines: ["greenB"],
    longitude: -71.146202,
    latitude: 42.341614,
    name: "Sutherland Road",
  },
  {
    lines: ["greenC"],
    longitude: -71.116997,
    latitude: 42.343327,
    name: "Saint Paul Street",
  },
  {
    lines: ["orange"],
    longitude: -71.076994,
    latitude: 42.383975,
    name: "Sullivan Square",
  },
  {
    lines: ["greenC"],
    longitude: -71.12561,
    latitude: 42.34111,
    name: "Summit Avenue",
  },
  {
    lines: ["greenE"],
    longitude: -71.085056,
    latitude: 42.342687,
    name: "Symphony",
  },
  {
    lines: ["greenC"],
    longitude: -71.138702,
    latitude: 42.338459,
    name: "Tappan Street",
  },
  {
    lines: ["orange"],
    longitude: -71.063917,
    latitude: 42.349662,
    name: "Tufts Medical Center",
  },
  {
    lines: ["greenD"],
    longitude: -71.094761,
    latitude: 42.377359,
    name: "Union Square",
  },
  {
    lines: ["redM"],
    longitude: -71.081343,
    latitude: 42.268347,
    name: "Valley Road",
  },
  {
    lines: ["greenD"],
    longitude: -71.230609,
    latitude: 42.325845,
    name: "Waban",
  },
  {
    lines: ["greenB"],
    longitude: -71.142853,
    latitude: 42.343864,
    name: "Washington Street",
  },
  {
    lines: ["orange"],
    longitude: -71.077082,
    latitude: 42.40237,
    name: "Wellington",
  },
  {
    lines: ["blue"],
    longitude: -71.022865,
    latitude: 42.37964,
    name: "Wood Island",
  },
  {
    lines: ["red"],
    longitude: -71.020337,
    latitude: 42.266514,
    name: "Wollaston",
  },
  {
    lines: ["blue"],
    longitude: -70.991648,
    latitude: 42.41342,
    name: "Wonderland",
  },
  {
    lines: ["greenD"],
    longitude: -71.243362,
    latitude: 42.332902,
    name: "Woodland",
  },
  {
    lines: ["greenB"],
    longitude: -71.140457,
    latitude: 42.348343,
    name: "Warren Street",
  },
];

export default allStations;
