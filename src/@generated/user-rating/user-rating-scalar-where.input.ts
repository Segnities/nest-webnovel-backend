import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserRatingScalarWhereInput {

    @Field(() => [UserRatingScalarWhereInput], {nullable:true})
    AND?: Array<UserRatingScalarWhereInput>;

    @Field(() => [UserRatingScalarWhereInput], {nullable:true})
    OR?: Array<UserRatingScalarWhereInput>;

    @Field(() => [UserRatingScalarWhereInput], {nullable:true})
    NOT?: Array<UserRatingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
