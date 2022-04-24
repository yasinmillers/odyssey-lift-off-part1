const { gql } = require('apollo-server');
const typeDefs = gql `
" track is a collection of modules  thatteaches about specific topic"
type Track {
id: ID! 
title: String! 
author: Author
thumbnail: String
length: Int
modulesCout: int


}

`;
module.exports = typeDefs;