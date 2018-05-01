var playlist = { "artistName": "songTitle" }
function updatePlaylist(playlist, key, value) {
  return Object.assign({}, playlist, { ["artistName"]: "songTitle"})
}

