import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';
import { Type } from 'class-transformer';
import { UserRatingUpdateWithoutNovelInput } from './user-rating-update-without-novel.input';

@InputType()
export class UserRatingUpdateWithWhereUniqueWithoutNovelInput {

    @Field(() => UserRatingWhereUniqueInput, {nullable:false})
    @Type(() => UserRatingWhereUniqueInput)
    where!: Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>;

    @Field(() => UserRatingUpdateWithoutNovelInput, {nullable:false})
    @Type(() => UserRatingUpdateWithoutNovelInput)
    data!: UserRatingUpdateWithoutNovelInput;
}
