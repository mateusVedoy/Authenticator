import { App } from "./App";
import { mainRouter } from "./adapter/route/router";

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";
const app = new App();

app.server.use("/", mainRouter);

app.server.listen(PORT, HOST, () => { console.log(`Running at ${PORT}`) });