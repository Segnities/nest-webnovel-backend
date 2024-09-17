import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyComplainTargetTypeInput } from './comment-create-many-complain-target-type.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyComplainTargetTypeInputEnvelope {

    @Field(() => [CommentCreateManyComplainTargetTypeInput], {nullable:false})
    @Type(() => CommentCreateManyComplainTargetTypeInput)
    data!: Array<CommentCreateManyComplainTargetTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
