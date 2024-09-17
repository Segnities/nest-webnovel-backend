import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCommendableTypeArgs {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;
}
