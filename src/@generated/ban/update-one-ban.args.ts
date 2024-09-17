import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanUpdateInput } from './ban-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';

@ArgsType()
export class UpdateOneBanArgs {

    @Field(() => BanUpdateInput, {nullable:false})
    @Type(() => BanUpdateInput)
    data!: BanUpdateInput;

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;
}
