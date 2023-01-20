const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

//function streamerLegendsOld(streamer) {
//  if (streamer.gameMorePlayed.includes("Legends")) {
//    return streamer;
//  } else if (streamer.age > 35) {
//    const mayusc = streamer.gameMorePlayed.toUpperCase()
//  return  mayusc
//} 
//}
function streamerLegends(streamer) {
    return streamer.gameMorePlayed.includes("Legends") 
}
function streamersOld(streamer) {
if (streamer.age > 35){
    return streamer.gameMorePlayed.toUpperCase()
}
}

let steamersLegends = streamers.filter(streamerLegends);
let streamersLegendsOld = streamers.filter(streamerOld)

console.log(streamersLegendsOld);

