import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';
import { Type } from 'class-transformer';
import { CommendableTypeUpdateWithoutCommentsInput } from './commendable-type-update-without-comments.input';

@InputType()
export class CommendableTypeUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;

    @Field(() => CommendableTypeUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutCommentsInput)
    data!: CommendableTypeUpdateWithoutCommentsInput;
}
