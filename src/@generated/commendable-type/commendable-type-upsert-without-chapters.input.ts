import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeUpdateWithoutChaptersInput } from './commendable-type-update-without-chapters.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutChaptersInput } from './commendable-type-create-without-chapters.input';
import { CommendableTypeWhereInput } from './commendable-type-where.input';

@InputType()
export class CommendableTypeUpsertWithoutChaptersInput {

    @Field(() => CommendableTypeUpdateWithoutChaptersInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutChaptersInput)
    update!: CommendableTypeUpdateWithoutChaptersInput;

    @Field(() => CommendableTypeCreateWithoutChaptersInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutChaptersInput)
    create!: CommendableTypeCreateWithoutChaptersInput;

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;
}
