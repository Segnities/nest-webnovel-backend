import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';
import { Type } from 'class-transformer';
import { UserRatingCreateWithoutNovelInput } from './user-rating-create-without-novel.input';

@InputType()
export class UserRatingCreateOrConnectWithoutNovelInput {

    @Field(() => UserRatingWhereUniqueInput, {nullable:false})
    @Type(() => UserRatingWhereUniqueInput)
    where!: Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>;

    @Field(() => UserRatingCreateWithoutNovelInput, {nullable:false})
    @Type(() => UserRatingCreateWithoutNovelInput)
    create!: UserRatingCreateWithoutNovelInput;
}
