import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';

@Module({
  providers: [NovelService]
})
export class NovelModule {}
