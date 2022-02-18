import { Repository, EntityRepository } from 'typeorm';
import { BoardFree } from 'src/entities/board/board_free.entity';

@EntityRepository(BoardFree)
export class BoardRepository extends Repository<BoardFree> {}
