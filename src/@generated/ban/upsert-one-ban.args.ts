import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanCreateInput } from './ban-create.input';
import { BanUpdateInput } from './ban-update.input';

@ArgsType()
export class UpsertOneBanArgs {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanCreateInput, {nullable:false})
    @Type(() => BanCreateInput)
    create!: BanCreateInput;

    @Field(() => BanUpdateInput, {nullable:false})
    @Type(() => BanUpdateInput)
    update!: BanUpdateInput;
}
