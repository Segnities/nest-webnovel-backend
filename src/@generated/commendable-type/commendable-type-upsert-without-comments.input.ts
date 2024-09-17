import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeUpdateWithoutCommentsInput } from './commendable-type-update-without-comments.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutCommentsInput } from './commendable-type-create-without-comments.input';
import { CommendableTypeWhereInput } from './commendable-type-where.input';

@InputType()
export class CommendableTypeUpsertWithoutCommentsInput {

    @Field(() => CommendableTypeUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutCommentsInput)
    update!: CommendableTypeUpdateWithoutCommentsInput;

    @Field(() => CommendableTypeCreateWithoutCommentsInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutCommentsInput)
    create!: CommendableTypeCreateWithoutCommentsInput;

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;
}
