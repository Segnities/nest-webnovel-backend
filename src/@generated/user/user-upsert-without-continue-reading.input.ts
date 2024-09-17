import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutContinueReadingInput } from './user-update-without-continue-reading.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutContinueReadingInput } from './user-create-without-continue-reading.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutContinueReadingInput {

    @Field(() => UserUpdateWithoutContinueReadingInput, {nullable:false})
    @Type(() => UserUpdateWithoutContinueReadingInput)
    update!: UserUpdateWithoutContinueReadingInput;

    @Field(() => UserCreateWithoutContinueReadingInput, {nullable:false})
    @Type(() => UserCreateWithoutContinueReadingInput)
    create!: UserCreateWithoutContinueReadingInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
