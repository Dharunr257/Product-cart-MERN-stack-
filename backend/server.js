import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.json())

app.use("/api/products",productRoutes)

console.log(process.env.MONGO_URI)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "./frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}


app.listen(PORT,()=>{
    connectDB();
	console.log(`Server is running on port ${PORT}`)
    console.log("server is running on port 5000 link http://localhost:"+PORT)
})


