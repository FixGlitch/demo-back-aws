import { Request, Response } from "express";
import { UserService } from "../../application/services/UserService";
import { PostgresUserRepository } from "../../infrastructure/database/PostgresUserRepository";

const userRepository = new PostgresUserRepository();
const userService = new UserService(userRepository);

export class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    try {
      const user = await userService.createUser({ name, email, password });
      return res.status(201).json(user);
    } catch (error) {
      const typedError = error as Error;
      return res.status(400).json({ error: typedError.message });
    }
  }
}
