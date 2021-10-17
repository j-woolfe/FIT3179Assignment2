let map_vg = "vis/astronaut_map.vg.json";
let military_vg = "vis/military_status.vg.json";
let gender_vg = "vis/gender.vg.json";
let age_vg = "vis/age.vg.json";
let occupation_vg = "vis/occupation.vg.json";

vegaEmbed("#map", map_vg).then(function(result) {}).catch(console.error);
vegaEmbed("#military", military_vg).then(function(result) {}).catch(console.error);
vegaEmbed("#gender", gender_vg).then(function(result) {}).catch(console.error);
vegaEmbed("#age", age_vg).then(function(result) {}).catch(console.error);
vegaEmbed("#occupation", occupation_vg).then(function(result) {}).catch(console.error);
