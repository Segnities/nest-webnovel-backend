import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommendableTypeCreateInput } from './commendable-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommendableTypeArgs {

    @Field(() => CommendableTypeCreateInput, {nullable:false})
    @Type(() => CommendableTypeCreateInput)
    data!: CommendableTypeCreateInput;
}
