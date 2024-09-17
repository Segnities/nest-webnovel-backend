import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyCommendableTypeInput } from './comment-create-many-commendable-type.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyCommendableTypeInputEnvelope {

    @Field(() => [CommentCreateManyCommendableTypeInput], {nullable:false})
    @Type(() => CommentCreateManyCommendableTypeInput)
    data!: Array<CommentCreateManyCommendableTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
