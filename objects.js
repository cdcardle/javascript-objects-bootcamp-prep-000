var playlist = new Object({ Weird Al: `I'm fat`, AC/DC: `Thunderstruck` })

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, {[artist]: song})
}
function removeFromPlaylist(obj, artist) {
  delete obj.artist;
  return obj
}
