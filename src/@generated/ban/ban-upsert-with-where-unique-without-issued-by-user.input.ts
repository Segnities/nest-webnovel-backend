import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanUpdateWithoutIssuedByUserInput } from './ban-update-without-issued-by-user.input';
import { BanCreateWithoutIssuedByUserInput } from './ban-create-without-issued-by-user.input';

@InputType()
export class BanUpsertWithWhereUniqueWithoutIssuedByUserInput {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanUpdateWithoutIssuedByUserInput, {nullable:false})
    @Type(() => BanUpdateWithoutIssuedByUserInput)
    update!: BanUpdateWithoutIssuedByUserInput;

    @Field(() => BanCreateWithoutIssuedByUserInput, {nullable:false})
    @Type(() => BanCreateWithoutIssuedByUserInput)
    create!: BanCreateWithoutIssuedByUserInput;
}
