import { Module } from '@nestjs/common';
import { AuthorSubscriptionService } from './author-subscription.service';

@Module({
  providers: [AuthorSubscriptionService],
})
export class AuthorSubscriptionModule {}
