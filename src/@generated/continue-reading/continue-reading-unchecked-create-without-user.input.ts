import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class ContinueReadingUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:false})
    progressPercentage!: number;

    @Field(() => Int, {nullable:false})
    lastChapterId!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;
}
