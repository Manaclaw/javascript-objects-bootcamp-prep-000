var playlist = { "artistName": "songTitle" }

playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'

function updatePlaylist('laylist, artistName, songtitle) {
return Object.assign({playlist}, playlist, { ["artistName"]: "songTitle" })
}

