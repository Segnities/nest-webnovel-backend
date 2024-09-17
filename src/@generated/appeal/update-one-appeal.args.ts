import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealUpdateInput } from './appeal-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';

@ArgsType()
export class UpdateOneAppealArgs {

    @Field(() => AppealUpdateInput, {nullable:false})
    @Type(() => AppealUpdateInput)
    data!: AppealUpdateInput;

    @Field(() => AppealWhereUniqueInput, {nullable:false})
    @Type(() => AppealWhereUniqueInput)
    where!: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;
}
