const { gql } = require('apollo-server');
const typeDefs = gql `
    type Query {
TrackHome: [Track!]! # Tracks on the home page
    }
" track is a collection of modules  thatteaches about specific topic"
type Track {
id: ID! 
title: String! 
author: Author
thumbnail: String
length: Int
modulesCout: int

}
type Author {
    id: int! 
    name: String! 
    photo: String
}

`;
module.exports = typeDefs;