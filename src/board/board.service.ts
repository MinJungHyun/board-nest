import { Injectable } from '@nestjs/common';

import { BoardFree } from 'src/entities/board/board_free.entity';
import { BoardRepository } from './board.repository';
import { BoardList, BoardParam } from './board.type';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  public async list(param: BoardParam): Promise<BoardList> {
    const rows: BoardList = await this.boardRepository.find({
      //   where: {
      //     page: param.page
      //   }
    });

    return rows;
  }
}
