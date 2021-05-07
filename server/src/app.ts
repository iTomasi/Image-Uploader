import express from "express";
import cors from "cors";
import path from "path";
import routePages from "./routes/pages.routes";

const app = express();

app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", routePages);


export default app;