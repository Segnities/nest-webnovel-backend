import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRatingCreateManyNovelInput } from './user-rating-create-many-novel.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRatingCreateManyNovelInputEnvelope {

    @Field(() => [UserRatingCreateManyNovelInput], {nullable:false})
    @Type(() => UserRatingCreateManyNovelInput)
    data!: Array<UserRatingCreateManyNovelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
