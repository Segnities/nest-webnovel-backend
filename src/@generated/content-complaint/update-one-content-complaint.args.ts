import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentComplaintUpdateInput } from './content-complaint-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';

@ArgsType()
export class UpdateOneContentComplaintArgs {

    @Field(() => ContentComplaintUpdateInput, {nullable:false})
    @Type(() => ContentComplaintUpdateInput)
    data!: ContentComplaintUpdateInput;

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:false})
    @Type(() => ContentComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;
}
