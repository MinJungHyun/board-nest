import { Repository, EntityRepository } from 'typeorm';
import { User } from 'src/entities/User.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
