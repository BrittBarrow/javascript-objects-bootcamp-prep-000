var playlist = {artist: "song"}

function updatePlaylist(playlist, newArtistName, newSongTitle) {
  playlist[newArtistName] = newSongTitle
  return playlist; 
}
