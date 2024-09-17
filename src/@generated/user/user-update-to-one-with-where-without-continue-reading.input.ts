import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutContinueReadingInput } from './user-update-without-continue-reading.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutContinueReadingInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutContinueReadingInput, {nullable:false})
    @Type(() => UserUpdateWithoutContinueReadingInput)
    data!: UserUpdateWithoutContinueReadingInput;
}
