let vg_1 = "astronaut_map.vg.json";
let vg_2 = "military_status.vg.json";
let vg_3 = "gender.vg.json";
let vg_4 = "age.vg.json";
let vg_5 = "occupation.vg.json";

vegaEmbed("#map", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#military", vg_2).then(function(result) {}).catch(console.error);
vegaEmbed("#gender", vg_3).then(function(result) {}).catch(console.error);
vegaEmbed("#age", vg_4).then(function(result) {}).catch(console.error);
vegaEmbed("#occupation", vg_5).then(function(result) {}).catch(console.error);
