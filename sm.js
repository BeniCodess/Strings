const apiData = {
    Fruits: [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeyberry",
        "Indian Fig",
        "Jackfruits",
        {
            favouriteArtist: "Taylor swift",
            favouritesong: "Love Story",
        },
    ],
    User: {
        name: "John Doe",
        emil: "john.doe@example.com",
        age: 30,
        pereferences: {
            color: "Blue",
            genre: "Pop",
            isActive: true,
        },
        playlists: [
            {
                name: "Chill Vibes",
                songs: [
                    {
                        title: "Ocean Eyes",
                        artist: "Billie Eilish",
                        duration: 3.2,
                        isFavorite: true,                         
                    },
                    {
                        title: "Shape of you",
                        artist: "Ed Sheeran",
                        duration: 4.24,
                        isFavorite: false,
                    },
                ],
            },
            {
                name: "Workout Mix",
                songs: [
                    {
                        title: "Eye of the Tiger",
                        artist: "Survivor",
                        duration: 4.04,
                        isFavorite: true,
                    },
                    {
                        title: "Loose yourself",
                        artist: "Eminem",
                        duration: 5.2,
                        isFavorite: false,

                    },
                ],
            },
        ],
    },
};

// 1
console.log(apiData.fruits[9]);
// 2
console.log(apiData.fruits[10].favouriteArtist);
// 3
console.log(apiData.fruits[10].favouritesong);
// 4
console.log(apiData.user.name);
// 5
console.log(apiData.user.email);
// 6
console.log(apiData.user.age);
// 7
console.log(apiData.user.preference.color);
// 8
console.log(apiData.user.preference.isActive);
// 9
console.log(apiData.user.playlists[0].songs[0].duration);
// 10
console.log(apiData.user.playlists[0].songs[1 ].isFavorite);
// 11
console.log(apiData.user.playlists[1].name);
// 12
console.log(apiData.user.playlists[1].songs[1].title)
