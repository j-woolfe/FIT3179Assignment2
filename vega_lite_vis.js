let map_vg = "vis/astronaut_map.vg.json";
let military_vg = "vis/military_status.vg.json";
let gender_vg = "vis/gender.vg.json";
let age_vg = "vis/age.vg.json";
let occupation_early_vg = "vis/occupation_early.vg.json";
let occupation_mid_vg = "vis/occupation_mid.vg.json";
let occupation_late_vg = "vis/occupation_late.vg.json";

vegaEmbed("#map", map_vg, {"actions": false}).then(function(result) {}).catch(console.error);
vegaEmbed("#military", military_vg, {"actions": false}).then(function(result) {}).catch(console.error);
vegaEmbed("#gender", gender_vg, {"actions": false}).then(function(result) {}).catch(console.error);
vegaEmbed("#age", age_vg, {"actions": false}).then(function(result) {}).catch(console.error);
vegaEmbed("#occupation_early", occupation_early_vg, {"actions": false}).then(function(result) {}).catch(console.error);
vegaEmbed("#occupation_mid", occupation_mid_vg, {"actions": false}).then(function(result) {}).catch(console.error);
vegaEmbed("#occupation_late", occupation_late_vg, {"actions": false}).then(function(result) {}).catch(console.error);
