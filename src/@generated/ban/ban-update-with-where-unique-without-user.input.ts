import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanUpdateWithoutUserInput } from './ban-update-without-user.input';

@InputType()
export class BanUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanUpdateWithoutUserInput, {nullable:false})
    @Type(() => BanUpdateWithoutUserInput)
    data!: BanUpdateWithoutUserInput;
}
