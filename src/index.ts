import {GraphQLServer} from 'graphql-yoga';
import resolvers from './resolvers';
import { UserPhotoUploadRouter } from './routes/storage.router';
import Express from 'express';
import {createConnection} from "typeorm";
import * as firebase from "firebase/app";
import {firebaseServiceAccount} from "../config/config";

const bodyParser = require('body-parser');
const cors = require('cors');

const DATABASE_URL = process.env.DATABASE_URL;
const SYNCHRONIZE: boolean = process.env.TYPEORM_SYNCHRONIZE === "true";
const LOGGING: boolean = process.env.TYPEORM_LOGGING === "true";


firebase.initializeApp(firebaseServiceAccount);

createConnection({
    type: 'postgres',
    synchronize: SYNCHRONIZE,
    url: DATABASE_URL,
    logging: LOGGING,
    entities: ["./src/models/*{.ts,.js}"],
}).then(() => console.log('connected to db'))
    .catch((err) => {
        console.log('error connecting to db ', err);
        process.exit(1);
    });

const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers,
    context: request => ({
        ...request,
    }),
});

server.express.get('/health', function (req, res) {
    res.send('OK');
});
server.use(cors());

server.express.use(bodyParser.json());
const customRouter = Express.Router();
customRouter.use('/upload', UserPhotoUploadRouter);

server.express.use(customRouter);

server.start(() => console.log(`Server is running on http://localhost:4000`)).catch((err) => {
    console.log('error starting the server ', err);
    process.exit(1);
});
