 playlist = { "artistName": "songTitle" };

function updatePlaylist({playlist}, artistName, songTitle) {
  return object.assign({}, artistName, songTitle)
}
