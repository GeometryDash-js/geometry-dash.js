
    // [    Structures    ] \\

import Client from "./Structures/Managers/Client"
import CommentManager from "./Structures/Managers/CommentManager"
import Manager from "./Structures/Managers/Manager"
import RelationshipsManager from "./Structures/Managers/RelationshipManager"

import Artist from "./Structures/ApiStructures/Artist"
import Song from "./Structures/ApiStructures/Song"
import User from "./Structures/ApiStructures/User"

    // [    Endpoints    ] \\

import getUserFromID from "./Endpoints/getGJUserInfo20"
import getTopArtists from "./Endpoints/getGJTopArtists"
import getSongInfo from "./Endpoints/getGJSongInfo"

export default {
    Client,
    CommentManager,
    Manager,
    RelationshipsManager,

    Artist,
    Song,
    User,

    getUserFromID,
    getTopArtists,
    getSongInfo
}