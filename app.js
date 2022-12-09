import express from "express";
// import morgan from "morgan";
import  petsRouter  from "./Routes/PetsRoutes.js";
import  ownersRouter  from "./Routes/OwnersRoutes.js";
import cors from 'cors'; // import cors package 

export const app = express();
const PORT = process.env.port || 3000;
app.use(cors());
// app.use(express.static("public")); not needed???
// app.use(cors());
app.use(express.json());

app.use("/search/pets", petsRouter);
app.use("/search/owners", ownersRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});