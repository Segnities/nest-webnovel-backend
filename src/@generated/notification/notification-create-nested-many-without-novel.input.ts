import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutNovelInput } from './notification-create-without-novel.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutNovelInput } from './notification-create-or-connect-without-novel.input';
import { NotificationCreateManyNovelInputEnvelope } from './notification-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationCreateNestedManyWithoutNovelInput {

    @Field(() => [NotificationCreateWithoutNovelInput], {nullable:true})
    @Type(() => NotificationCreateWithoutNovelInput)
    create?: Array<NotificationCreateWithoutNovelInput>;

    @Field(() => [NotificationCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutNovelInput>;

    @Field(() => NotificationCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyNovelInputEnvelope)
    createMany?: NotificationCreateManyNovelInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
