import * as genresAPI from "./fakeGenreService";

const chats = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        publishDate: "2018-01-03T19:04:28.809Z",
        host: {
            initiated: true,
            content: "Welcome to the chat"
        },
        guest: {
            initiated: false,
            content: "Welcome to the chat"
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        publishDate: "2018-01-03T19:06:33.609Z"


    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",

    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Trip to Italy",

    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",

    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",

    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",

    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Sixth Sense",

    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",

    }
];

export function getChats() {
    return chats;
}

export function getChat(id) {
    return chats.find(m => m._id === id);
}

export function saveChat(movie) {
    let chatInDb = chats.find(m => m._id === chat._id) || {};
    chatInDb.name = chat.name;
    chatInDb.genre = genresAPI.genres.find(g => g._id === chat.genreId);
    chatInDb.numberInStock = chat.numberInStock;
    chatInDb.dailyRentalRate = chat.dailyRentalRate;

    if (!chatInDb._id) {
        chatInDb._id = Date.now();
        chats.push(chatInDb);
    }

    return chatInDb;
}

export function deleteChat(id) {
    let chatInDb = chats.find(m => m._id === id);
    chats.splice(chats.indexOf(chatInDb), 1);
    return chatInDb;
}
