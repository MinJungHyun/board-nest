import { BoardModule } from './../board/board.module';
import { BoardController } from './../board/board.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [BoardModule, TypeOrmModule.forRoot(), UserModule],
  controllers: [BoardController, AppController],
  providers: [AppService]
})
export class AppModule {}
