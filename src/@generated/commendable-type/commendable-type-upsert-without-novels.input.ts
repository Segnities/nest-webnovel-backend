import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeUpdateWithoutNovelsInput } from './commendable-type-update-without-novels.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutNovelsInput } from './commendable-type-create-without-novels.input';
import { CommendableTypeWhereInput } from './commendable-type-where.input';

@InputType()
export class CommendableTypeUpsertWithoutNovelsInput {

    @Field(() => CommendableTypeUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutNovelsInput)
    update!: CommendableTypeUpdateWithoutNovelsInput;

    @Field(() => CommendableTypeCreateWithoutNovelsInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutNovelsInput)
    create!: CommendableTypeCreateWithoutNovelsInput;

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;
}
