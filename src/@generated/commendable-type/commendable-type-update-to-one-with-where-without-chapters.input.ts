import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';
import { Type } from 'class-transformer';
import { CommendableTypeUpdateWithoutChaptersInput } from './commendable-type-update-without-chapters.input';

@InputType()
export class CommendableTypeUpdateToOneWithWhereWithoutChaptersInput {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;

    @Field(() => CommendableTypeUpdateWithoutChaptersInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutChaptersInput)
    data!: CommendableTypeUpdateWithoutChaptersInput;
}
