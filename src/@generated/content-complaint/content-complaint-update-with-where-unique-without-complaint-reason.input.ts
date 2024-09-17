import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { ContentComplaintUpdateWithoutComplaintReasonInput } from './content-complaint-update-without-complaint-reason.input';

@InputType()
export class ContentComplaintUpdateWithWhereUniqueWithoutComplaintReasonInput {

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:false})
    @Type(() => ContentComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => ContentComplaintUpdateWithoutComplaintReasonInput, {nullable:false})
    @Type(() => ContentComplaintUpdateWithoutComplaintReasonInput)
    data!: ContentComplaintUpdateWithoutComplaintReasonInput;
}
