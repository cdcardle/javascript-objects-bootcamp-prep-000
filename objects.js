
var playlist = {};
playlist[`Weird Al`] = `I'm fat`

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, {[artist]: song})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
