import { User } from "../../domain/entities/User";
import { UserModel } from "./models/UserModel";

export class PostgresUserRepository {
  async save(user: User): Promise<User> {
    const createdUser = await UserModel.create({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return new User(
      createdUser.id,
      createdUser.name,
      createdUser.email,
      createdUser.password
    );
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await UserModel.findByPk(id);
    if (!user) return undefined;

    return new User(user.id, user.name, user.email, user.password);
  }
}
