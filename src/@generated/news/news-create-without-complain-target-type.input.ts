import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommendableTypeCreateNestedOneWithoutNewsInput } from '../commendable-type/commendable-type-create-nested-one-without-news.input';
import { UserCreateNestedOneWithoutNewsInput } from '../user/user-create-nested-one-without-news.input';

@InputType()
export class NewsCreateWithoutComplainTargetTypeInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommendableTypeCreateNestedOneWithoutNewsInput, {nullable:false})
    commendableType!: CommendableTypeCreateNestedOneWithoutNewsInput;

    @Field(() => UserCreateNestedOneWithoutNewsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutNewsInput;
}
