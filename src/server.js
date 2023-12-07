import * as jsonServer from 'json-server';
import * as auth from 'json-server-auth';
import * as cors from 'cors';
import * as fs from 'fs';

const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));
const router = jsonServer.router(db);
const port = 3001;
const middlewares = jsonServer.defaults();

server.db = router.db;

const rules = auth.rewriter({
  users: 640,
  jobs: 664,
});

server.use(rules);
server.use(auth);
server.use(router);
server.use(middlewares);
server.use(cors());
server.listen(port);

console.log('Server is running on port:', port);
