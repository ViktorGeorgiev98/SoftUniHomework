function songs(arr) {
    let numberOfSongs = Number(arr.shift());
    let sameType = arr.pop();
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    for (let i = 0; i < arr.length; i++) {
        let dataForSongs = arr[i].split('_');
        let typeList, name, time
        [typeList, name, time] = [dataForSongs[0], dataForSongs[1], dataForSongs[2]];
        let song = new Song(typeList, name, time);
        songs.push(Object.values(song));   
    }   
    // if (sameType === 'all') {
    //     songs.forEach((i) => console.log(i.name));
    // } else {
    //     let filtered = songs.filter((i) => i.type === sameType);
    //     filtered.forEach((i) => console.log(i.name));
    // }
    let newSongs = [];
    for (let j = 0; j < songs.length; j++) {
        let currentSong = songs[j];
        if (sameType === 'all') {
            console.log(currentSong[1]);
        } else {
            if (currentSong[0] === sameType) {
                console.log(currentSong[1]);
            }
        }
    }
}
songs([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'])