import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import { resolvers } from './schema/Resolvers.js';
import { typeDefs } from './schema/TypeDefs.js';
import cors from 'cors';
import Dotenv from 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

await server.start();

app.use(cors(), express.json(), express.urlencoded({ extended: true }));
app.use('/graphql', expressMiddleware(server));

// Serve frontend
// Set build folder as static
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Modified server startup
await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));

console.log(`🚀 Server ready at http://localhost:5000/`);
