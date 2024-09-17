import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutReviewInput } from './notification-create-without-review.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutReviewInput } from './notification-create-or-connect-without-review.input';
import { NotificationCreateManyReviewInputEnvelope } from './notification-create-many-review-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationUncheckedCreateNestedManyWithoutReviewInput {

    @Field(() => [NotificationCreateWithoutReviewInput], {nullable:true})
    @Type(() => NotificationCreateWithoutReviewInput)
    create?: Array<NotificationCreateWithoutReviewInput>;

    @Field(() => [NotificationCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutReviewInput>;

    @Field(() => NotificationCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyReviewInputEnvelope)
    createMany?: NotificationCreateManyReviewInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
