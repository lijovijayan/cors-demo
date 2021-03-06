import express from 'express';
import cors, { CorsOptions } from 'cors';
const app: express.Application = express();
const PORT = process.env.PORT || ((process.argv[2] != undefined) ? parseInt(process.argv[2]) : 3000);
const whitelist = [
    'http://127.0.0.1:4300',
    'http://127.0.0.1:4200',
    'http://localhost:4300',
    'http://localhost:4200',
];
const corsOptions: CorsOptions = {
    origin: function (origin: any, callback) {
        console.log(origin);
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));
app.get('/api', (request, res) => {
    res.json(`response from ${request.headers.host}`);
});
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
});
