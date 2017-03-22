console.log("hello");
function Artist(name){
  this.name = name;
  this.song = [];
}

Artist.prototype.getSongCount = function() {
  return this.song.length;
}

Artist.prototype.addSong = function(song){
  this.song.push(song);
}

var artist = new Artist('Him');

var playCount = 0;

function Song (title, artist) {
  this.title = title;
  this.artist = artist;
  this.playCount = playCount;
    playCount = playCount++;
}

var songs1 = new Song('Jump', 'Vaan Halen');
var songs2 = new Song('Work', 'Brtiney Spears');
var songs3 = new Song('queen', 'History');

artist.addSong(songs1);
artist.addSong(songs2);
artist.addSong(songs3);


console.log('Number of song' + ' ' + artist.getSongCount());

console.log(songs1);
console.log(songs2);
console.log(songs3);
console.log(artist);
