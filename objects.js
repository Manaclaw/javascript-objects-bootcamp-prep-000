var playlist = {keys: "0" }



function updatePlaylist(playlist, [artistName]: `songtitle`) {
return Object.assign({playlist}, playlist, { [artistName]: "songTitle" })
}

