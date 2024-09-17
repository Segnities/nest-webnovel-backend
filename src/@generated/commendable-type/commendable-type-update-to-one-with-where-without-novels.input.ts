import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';
import { Type } from 'class-transformer';
import { CommendableTypeUpdateWithoutNovelsInput } from './commendable-type-update-without-novels.input';

@InputType()
export class CommendableTypeUpdateToOneWithWhereWithoutNovelsInput {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;

    @Field(() => CommendableTypeUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutNovelsInput)
    data!: CommendableTypeUpdateWithoutNovelsInput;
}
