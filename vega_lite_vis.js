let vg_1 = "astronaut_map.vg.json";
let vg_2 = "military_status.vg.json";

vegaEmbed("#map", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#military", vg_2).then(function(result) {}).catch(console.error);
