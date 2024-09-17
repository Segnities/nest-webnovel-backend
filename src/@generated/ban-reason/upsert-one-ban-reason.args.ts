import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanReasonWhereUniqueInput } from './ban-reason-where-unique.input';
import { Type } from 'class-transformer';
import { BanReasonCreateInput } from './ban-reason-create.input';
import { BanReasonUpdateInput } from './ban-reason-update.input';

@ArgsType()
export class UpsertOneBanReasonArgs {

    @Field(() => BanReasonWhereUniqueInput, {nullable:false})
    @Type(() => BanReasonWhereUniqueInput)
    where!: Prisma.AtLeast<BanReasonWhereUniqueInput, 'id'>;

    @Field(() => BanReasonCreateInput, {nullable:false})
    @Type(() => BanReasonCreateInput)
    create!: BanReasonCreateInput;

    @Field(() => BanReasonUpdateInput, {nullable:false})
    @Type(() => BanReasonUpdateInput)
    update!: BanReasonUpdateInput;
}
