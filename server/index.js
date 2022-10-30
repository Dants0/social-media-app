import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = Express();
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"

//middleware
app.use(Express.json());
app.use(cors())
app.use(cookieParser());

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/auth", authRoutes)


app.listen(8000, () => console.log('listening on port 8000'))