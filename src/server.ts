import express, { Application, Request, Response } from "express";
import userRouter from "./routes/user.router";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo a api english school!");
});

app.use("/user", userRouter);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
