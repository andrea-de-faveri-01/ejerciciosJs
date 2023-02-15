const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const filteredStreamers = streamers.filter((streamer) =>
  streamer.gameMorePlayed.includes("League of Legends")
);

const modifiedStreamers = filteredStreamers.map((streamer) => {
  if (streamer.age > 35) {
    return {
      name: streamer.name,
      age: streamer.age,
      gameMorePlayed: streamer.gameMorePlayed.toUpperCase(),
    };
  }
  return streamer;
});

console.log(modifiedStreamers);
