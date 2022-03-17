const express = require("express");
const app = express();
cors = require("cors");

app.use(cors());

db = [
  { id: 1, name: "Charminar", Location: "Hyderabad", Address: "", District: "Hyderabad", Coordinates: '<yyyyy data-mw-deduplicate="TemplateStyles:r1073938472">.mw-parser-output .geo-default,.mw-parser-output .geo-dms,.mw-parser-output .geo-dec{display:inline}.mw-parser-output .geo-nondefault,.mw-parser-output .geo-multi-punct{display:none}.mw-parser-output .longitude,.mw-parser-output .latitude{white-space:nowrap}17°21′42″N 78°28′29″E﻿ / ﻿17.36163°N 78.47467°E﻿ / 17.36163; 78.47467﻿ (SL. No. N-AP-78)', Image: "" },
  { id: 2, name: "Golkonda Fort, Fortifications", Location: "Hyderabad", Address: "", District: "Hyderabad", Coordinates: "17°23′N 78°24′E﻿ / ﻿17.38°N 78.40°E﻿ / 17.38; 78.40﻿ (SL. No. N-AP-79)", Image: "" },

  { id: 3, "SL. No.": "N-AP-105", name: "Ancient Mound", Location: "Kondapur", Address: "", District: "Medak district", Coordinates: "17°33′41″N 78°00′40″E﻿ / ﻿17.5614°N 78.0111°E﻿ / 17.5614; 78.0111﻿ (SL. No. N-AP-105)", Image: "" },
  {
    id: 4,
    name: "Alampur Temples",
    Location: "Alampur",
    Address: "",
    District: "Mahbubnagar district",
    Coordinates: "15°52′40″N 78°08′08″E﻿ / ﻿15.877843°N 78.135427°E﻿ / 15.877843; 78.135427﻿ (SL. No. N-AP-106)",
    Image: "More images"
  },
  {
    name: "Thousand Pillar Temple",
    Location: "Hanamkonda",
    Address: "",
    District: "Warangal district",
    Coordinates: "18°01′00″N 79°38′00″E﻿ / ﻿18.0167°N 79.6333°E﻿ / 18.0167; 79.6333﻿ (SL. No. N-AP-129)",
    Image: ""
  },
  {
    name: "Ramappa Temple",
    Location: "Palampet",
    Address: "",
    District: "Warangal district",
    Coordinates: "18°15′33″N 79°56′36″E﻿ / ﻿18.259167°N 79.943333°E﻿ / 18.259167; 79.943333﻿ (SL. No. N-AP-130)",
    Image: ""
  },
  {
    name: "Warangal Fort, and Gateways",
    Location: "Warangal",
    Address: "",
    District: "Warangal district",
    Coordinates: "17°57′26″N 79°36′52″E﻿ / ﻿17.95722222°N 79.61444444°E﻿ / 17.95722222; 79.61444444﻿ (SL. No. N-AP-131)",
    Image: ""
  },
  {
    name: "Pillalamarri Temple",
    Location: "Pillalamarri",
    Address: "",
    District: "Suryapet district",
    Coordinates: "17°10′11″N 79°34′56″E﻿ / ﻿17.169683°N 79.582198°E﻿ / 17.169683; 79.582198﻿ (SL. No. N-AP-132)",
    Image: "More images"
  }
];

app.listen(3001, () => {
  console.log(3000);
});

app.get("/", (req, res) => {
  res.json(db);
});
