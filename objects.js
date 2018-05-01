var playlist = { "artistName": "songTitle" };

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({playlist}, { artistName, songTitle })
}