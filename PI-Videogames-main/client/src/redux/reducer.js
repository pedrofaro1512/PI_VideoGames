// El reducer es una función que recibe el estado que va a modificar y la action que le indica que va a hacer

// Se le debe dar un estado inicial que sera un array vacio
const initialState = {
    videogames: [
        {
            "id": 3498,
            "name": "Grand Theft Auto V",
            "platforms": [
                "PlayStation 5",
                "Xbox Series S/X",
                "PlayStation 4",
                "PC",
                "PlayStation 3",
                "Xbox 360",
                "Xbox One"
            ],
            "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            "released": "2013-09-17",
            "rating": 4.47,
            "created": false,
            "genres": [
                "Action",
                "Adventure"
            ]
        },
        {
            "id": 3328,
            "name": "The Witcher 3: Wild Hunt",
            "platforms": [
                "Xbox Series S/X",
                "PlayStation 4",
                "Nintendo Switch",
                "PC",
                "Xbox One",
                "PlayStation 5"
            ],
            "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            "released": "2015-05-18",
            "rating": 4.66,
            "created": true,
            "genres": [
                "Action",
                "Adventure",
                "RPG"
            ]
        },
        {
            "id": 4200,
            "name": "Portal 2",
            "platforms": [
                "Xbox 360",
                "Linux",
                "macOS",
                "PlayStation 3",
                "PC",
                "Xbox One"
            ],
            "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            "released": "2011-04-18",
            "rating": 4.62,
            "created": false,
            "genres": [
                "Shooter",
                "Puzzle"
            ]
        },
        {
            "id": 5286,
            "name": "Tomb Raider (2013)",
            "platforms": [
                "PlayStation 4",
                "macOS",
                "PC",
                "Xbox One",
                "Xbox 360",
                "PlayStation 3"
            ],
            "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            "released": "2013-03-05",
            "rating": 4.05,
            "created": false,
            "genres": [
                "Action",
                "Adventure"
            ]
        },
        {
            "id": 4291,
            "name": "Counter-Strike: Global Offensive",
            "platforms": [
                "PC",
                "Xbox 360",
                "PlayStation 3"
            ],
            "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            "released": "2012-08-21",
            "rating": 3.56,
            "created": false,
            "genres": [
                "Action",
                "Shooter"
            ]
        }
    ],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return { ...state };
    }
};

export default rootReducer;