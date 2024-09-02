import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { TagService } from './tag/tag.service';
import { GenreService } from './genre/genre.service';
import { CountryService } from './country/country.service';
import { StatusService } from './status/status.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.ENV === 'dev',
      autoSchemaFile: join(process.cwd(), 'src/shema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    TagService,
    GenreService,
    CountryService,
    StatusService,
  ],
})
export class AppModule {}
