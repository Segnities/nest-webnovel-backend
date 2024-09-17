import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorSubscriptionCreateManyInput } from './author-subscription-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAuthorSubscriptionArgs {

    @Field(() => [AuthorSubscriptionCreateManyInput], {nullable:false})
    @Type(() => AuthorSubscriptionCreateManyInput)
    data!: Array<AuthorSubscriptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
