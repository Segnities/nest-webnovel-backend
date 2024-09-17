import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeUpdateWithoutNewsInput } from './commendable-type-update-without-news.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutNewsInput } from './commendable-type-create-without-news.input';
import { CommendableTypeWhereInput } from './commendable-type-where.input';

@InputType()
export class CommendableTypeUpsertWithoutNewsInput {

    @Field(() => CommendableTypeUpdateWithoutNewsInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutNewsInput)
    update!: CommendableTypeUpdateWithoutNewsInput;

    @Field(() => CommendableTypeCreateWithoutNewsInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutNewsInput)
    create!: CommendableTypeCreateWithoutNewsInput;

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;
}
