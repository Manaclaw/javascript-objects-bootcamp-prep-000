var playlist = { "artistName": "songTitle" };

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, { [artistName]: songTitle })
}