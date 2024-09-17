import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanUpdateWithoutUserInput } from './ban-update-without-user.input';
import { BanCreateWithoutUserInput } from './ban-create-without-user.input';

@InputType()
export class BanUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanUpdateWithoutUserInput, {nullable:false})
    @Type(() => BanUpdateWithoutUserInput)
    update!: BanUpdateWithoutUserInput;

    @Field(() => BanCreateWithoutUserInput, {nullable:false})
    @Type(() => BanCreateWithoutUserInput)
    create!: BanCreateWithoutUserInput;
}
