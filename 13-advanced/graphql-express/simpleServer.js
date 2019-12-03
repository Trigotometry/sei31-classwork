const express = require('express');
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');

// Scehma
const schema = buildSchema(`
		type Query {
			message: String,
			luckyNumber: Float
		}
	`);

// Root resolver
const root = {
	message: () => 'Hello, world.'
};

const server = express();
server.use('/graphql', expressGraphQL({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

server.listen( 4000, () => console.log('http://localhost:4000/graphql'));