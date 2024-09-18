import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [GenreController],
  providers: [GenreService, PrismaService]
})
export class GenreModule {}
