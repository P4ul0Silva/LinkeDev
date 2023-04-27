import * as jsonServer from "json-server";
import * as auth from "json-server-auth";
import * as cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = 3001;

server.db = router.db;

const rules = auth.rewriter({
  users: 640,
  jobs: 664,
});

server.use(rules);
server.use(auth);
server.use(router);
server.listen(port);
server.use(cors());

console.log("Server is running on port:", port);
