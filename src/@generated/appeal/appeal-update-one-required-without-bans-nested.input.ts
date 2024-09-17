import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealCreateWithoutBansInput } from './appeal-create-without-bans.input';
import { Type } from 'class-transformer';
import { AppealCreateOrConnectWithoutBansInput } from './appeal-create-or-connect-without-bans.input';
import { AppealUpsertWithoutBansInput } from './appeal-upsert-without-bans.input';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { AppealUpdateToOneWithWhereWithoutBansInput } from './appeal-update-to-one-with-where-without-bans.input';

@InputType()
export class AppealUpdateOneRequiredWithoutBansNestedInput {

    @Field(() => AppealCreateWithoutBansInput, {nullable:true})
    @Type(() => AppealCreateWithoutBansInput)
    create?: AppealCreateWithoutBansInput;

    @Field(() => AppealCreateOrConnectWithoutBansInput, {nullable:true})
    @Type(() => AppealCreateOrConnectWithoutBansInput)
    connectOrCreate?: AppealCreateOrConnectWithoutBansInput;

    @Field(() => AppealUpsertWithoutBansInput, {nullable:true})
    @Type(() => AppealUpsertWithoutBansInput)
    upsert?: AppealUpsertWithoutBansInput;

    @Field(() => AppealWhereUniqueInput, {nullable:true})
    @Type(() => AppealWhereUniqueInput)
    connect?: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;

    @Field(() => AppealUpdateToOneWithWhereWithoutBansInput, {nullable:true})
    @Type(() => AppealUpdateToOneWithWhereWithoutBansInput)
    update?: AppealUpdateToOneWithWhereWithoutBansInput;
}
