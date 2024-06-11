import express from 'express';
import Hello from './Hello.js';
import Lab5 from "./Lab5/index.js"
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/route.js';
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./Users/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors());
app.use(express.json());
Hello(app)
Lab5(app)
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000)