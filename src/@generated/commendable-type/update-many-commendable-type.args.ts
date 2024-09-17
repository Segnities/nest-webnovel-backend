import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommendableTypeUpdateManyMutationInput } from './commendable-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommendableTypeWhereInput } from './commendable-type-where.input';

@ArgsType()
export class UpdateManyCommendableTypeArgs {

    @Field(() => CommendableTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => CommendableTypeUpdateManyMutationInput)
    data!: CommendableTypeUpdateManyMutationInput;

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;
}
