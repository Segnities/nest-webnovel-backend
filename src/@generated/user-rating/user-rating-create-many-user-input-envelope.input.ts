import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRatingCreateManyUserInput } from './user-rating-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRatingCreateManyUserInputEnvelope {

    @Field(() => [UserRatingCreateManyUserInput], {nullable:false})
    @Type(() => UserRatingCreateManyUserInput)
    data!: Array<UserRatingCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
