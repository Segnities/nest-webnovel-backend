import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';
import { Type } from 'class-transformer';
import { CommendableTypeUpdateWithoutNewsInput } from './commendable-type-update-without-news.input';

@InputType()
export class CommendableTypeUpdateToOneWithWhereWithoutNewsInput {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;

    @Field(() => CommendableTypeUpdateWithoutNewsInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutNewsInput)
    data!: CommendableTypeUpdateWithoutNewsInput;
}
