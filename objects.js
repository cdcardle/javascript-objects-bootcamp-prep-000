//define playlist
var playlist = {};
playlist[`Weird Al`] = `I'm fat`

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, {[artist]: song})
}
function removeFromPlaylist(obj, artist) {
  delete obj.artist;
  return obj
}
