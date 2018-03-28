var playlist = {artist: "song"}

function updatePlaylist(playlist, newArtistName, newSongTitle) {
  playlist[newArtistName] = newSongTitle
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
}
