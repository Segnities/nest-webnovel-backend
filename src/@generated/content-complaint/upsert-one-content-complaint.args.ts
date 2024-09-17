import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateInput } from './content-complaint-create.input';
import { ContentComplaintUpdateInput } from './content-complaint-update.input';

@ArgsType()
export class UpsertOneContentComplaintArgs {

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:false})
    @Type(() => ContentComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => ContentComplaintCreateInput, {nullable:false})
    @Type(() => ContentComplaintCreateInput)
    create!: ContentComplaintCreateInput;

    @Field(() => ContentComplaintUpdateInput, {nullable:false})
    @Type(() => ContentComplaintUpdateInput)
    update!: ContentComplaintUpdateInput;
}
