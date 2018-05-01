var playlist = {keys: "0" }



function updatePlaylist(playlist, artistName, songTitle) {
return Object.assign({playlist}, playlist, { [artistName]: "songTitle" })
}

