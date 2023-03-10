import { Request, Response, Router } from "express";

const userRouter = Router({ mergeParams: true });

userRouter.get("/login", (req: Request, res: Response) => {
  res.send("login");
});

export default userRouter;
