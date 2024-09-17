import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutReviewInput } from './notification-create-without-review.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutReviewInput } from './notification-create-or-connect-without-review.input';
import { NotificationUpsertWithWhereUniqueWithoutReviewInput } from './notification-upsert-with-where-unique-without-review.input';
import { NotificationCreateManyReviewInputEnvelope } from './notification-create-many-review-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutReviewInput } from './notification-update-with-where-unique-without-review.input';
import { NotificationUpdateManyWithWhereWithoutReviewInput } from './notification-update-many-with-where-without-review.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUncheckedUpdateManyWithoutReviewNestedInput {

    @Field(() => [NotificationCreateWithoutReviewInput], {nullable:true})
    @Type(() => NotificationCreateWithoutReviewInput)
    create?: Array<NotificationCreateWithoutReviewInput>;

    @Field(() => [NotificationCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutReviewInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutReviewInput>;

    @Field(() => NotificationCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyReviewInputEnvelope)
    createMany?: NotificationCreateManyReviewInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutReviewInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutReviewInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
