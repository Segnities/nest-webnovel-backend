import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';
import { Type } from 'class-transformer';
import { UserRatingUpdateWithoutNovelInput } from './user-rating-update-without-novel.input';
import { UserRatingCreateWithoutNovelInput } from './user-rating-create-without-novel.input';

@InputType()
export class UserRatingUpsertWithWhereUniqueWithoutNovelInput {

    @Field(() => UserRatingWhereUniqueInput, {nullable:false})
    @Type(() => UserRatingWhereUniqueInput)
    where!: Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>;

    @Field(() => UserRatingUpdateWithoutNovelInput, {nullable:false})
    @Type(() => UserRatingUpdateWithoutNovelInput)
    update!: UserRatingUpdateWithoutNovelInput;

    @Field(() => UserRatingCreateWithoutNovelInput, {nullable:false})
    @Type(() => UserRatingCreateWithoutNovelInput)
    create!: UserRatingCreateWithoutNovelInput;
}
