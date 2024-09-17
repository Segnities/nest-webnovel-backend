import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NovelOrderByWithRelationInput } from '../novel/novel-order-by-with-relation.input';

@InputType()
export class AlternativeTitleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;

    @Field(() => NovelOrderByWithRelationInput, {nullable:true})
    novel?: NovelOrderByWithRelationInput;
}
