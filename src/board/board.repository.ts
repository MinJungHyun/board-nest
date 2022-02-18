import { Repository, EntityRepository } from 'typeorm';
import { BoardFree } from './board_free.entity';

@EntityRepository(BoardFree)
export class BoardRepository extends Repository<BoardFree> {}
