import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorSubscriptionModule } from './author-subscription/author-subscription.module';
import { AuthorModule } from './author/author.module';
import { CountryService } from './country/country.service';
import { GenreService } from './genre/genre.service';
import { NotificationModule } from './notification/notification.module';
import { NovelModule } from './novel/novel.module';
import { PrismaService } from './prisma/prisma.service';
import { TagService } from './tag/tag.service';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { GenreModule } from './genre/genre.module';
import { AlternativeTitleModule } from './alternative-title/alternative-title.module';
import { CountryModule } from './country/country.module';
import { UserRatingModule } from './user-rating/user-rating.module';
import { NovelSubscriptionModule } from './novel-subscription/novel-subscription.module';
import { UserNotificationSettingsModule } from './user-notification-settings/user-notification-settings.module';
import { RoleModule } from './role/role.module';
import { TeamModule } from './team/team.module';
import { AuthModule } from './auth/auth.module';
import { BanModule } from './ban/ban.module';
import { AppealModule } from './appeal/appeal.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { CommentModule } from './comment/comment.module';
import { ComplaintReasonModule } from './complaint-reason/complaint-reason.module';
import { ContentComplaintModule } from './content-complaint/content-complaint.module';
import { ContinueReadingModule } from './continue-reading/continue-reading.module';
import { NewsModule } from './news/news.module';
import { NotificationGroupModule } from './notification-group/notification-group.module';
import { ReviewModule } from './review/review.module';
import { UserCollectionMappingModule } from './user-collection-mapping/user-collection-mapping.module';

@Module({
  imports: [
    AuthorModule,
    NovelModule,
    NotificationModule,
    AuthorSubscriptionModule,
    UserModule,
    TagModule,
    GenreModule,
    AlternativeTitleModule,
    CountryModule,
    UserRatingModule,
    NovelSubscriptionModule,
    UserNotificationSettingsModule,
    RoleModule,
    TeamModule,
    AuthModule,
    ConfigModule.forRoot(),
    BanModule,
    AppealModule,
    BookmarkModule,
    CommentModule,
    ComplaintReasonModule,
    ContentComplaintModule,
    ContinueReadingModule,
    NewsModule,
    NotificationGroupModule,
    ReviewModule,
    UserCollectionMappingModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    TagService,
    GenreService,
    CountryService,
  ],
})
export class AppModule {}
