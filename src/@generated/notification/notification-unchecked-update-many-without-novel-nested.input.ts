import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutNovelInput } from './notification-create-without-novel.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutNovelInput } from './notification-create-or-connect-without-novel.input';
import { NotificationUpsertWithWhereUniqueWithoutNovelInput } from './notification-upsert-with-where-unique-without-novel.input';
import { NotificationCreateManyNovelInputEnvelope } from './notification-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutNovelInput } from './notification-update-with-where-unique-without-novel.input';
import { NotificationUpdateManyWithWhereWithoutNovelInput } from './notification-update-many-with-where-without-novel.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUncheckedUpdateManyWithoutNovelNestedInput {

    @Field(() => [NotificationCreateWithoutNovelInput], {nullable:true})
    @Type(() => NotificationCreateWithoutNovelInput)
    create?: Array<NotificationCreateWithoutNovelInput>;

    @Field(() => [NotificationCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutNovelInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutNovelInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutNovelInput>;

    @Field(() => NotificationCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyNovelInputEnvelope)
    createMany?: NotificationCreateManyNovelInputEnvelope;

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

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutNovelInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutNovelInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutNovelInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutNovelInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutNovelInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
