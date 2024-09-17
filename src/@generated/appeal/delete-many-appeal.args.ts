import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealWhereInput } from './appeal-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAppealArgs {

    @Field(() => AppealWhereInput, {nullable:true})
    @Type(() => AppealWhereInput)
    where?: AppealWhereInput;
}
