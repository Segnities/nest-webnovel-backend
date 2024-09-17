import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewedAppealsInput } from './user-update-without-reviewed-appeals.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewedAppealsInput } from './user-create-without-reviewed-appeals.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReviewedAppealsInput {

    @Field(() => UserUpdateWithoutReviewedAppealsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewedAppealsInput)
    update!: UserUpdateWithoutReviewedAppealsInput;

    @Field(() => UserCreateWithoutReviewedAppealsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewedAppealsInput)
    create!: UserCreateWithoutReviewedAppealsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
