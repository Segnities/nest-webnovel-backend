import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReviewedAppealsInput } from './user-update-without-reviewed-appeals.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReviewedAppealsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReviewedAppealsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewedAppealsInput)
    data!: UserUpdateWithoutReviewedAppealsInput;
}
