var playlist = {artist: "song"}

function updatePlaylist(playlist, newArtistName, newSongTitle) {
  playlist[newArtistName] = newSongTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  playlist;
}
