import { User } from '../../domain/entities/User';
import { PostgresUserRepository } from '../../infrastructure/database/PostgresUserRepository';

export class UserService {
  constructor(private userRepository: PostgresUserRepository) {}

  async createUser(userData: Partial<User>): Promise<User> {
    const user = new User(
      this.generateId(),
      userData.name!,
      userData.email!,
      userData.password!
    );
    return this.userRepository.save(user);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  async getUserById(userId: string): Promise<User | undefined> {
    return this.userRepository.findById(userId);
  }
}
