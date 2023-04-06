function gramophone(bandName, albumName, songName) {
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let plateRotationNumber = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${plateRotationNumber} times.`);
}
gramophone('Black Sabbath', 'Paranoid','War Pigs');
gramophone('Rammstein', 'Sehnsucht','Engel');