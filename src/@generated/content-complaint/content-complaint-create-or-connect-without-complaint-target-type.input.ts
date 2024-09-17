import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateWithoutComplaintTargetTypeInput } from './content-complaint-create-without-complaint-target-type.input';

@InputType()
export class ContentComplaintCreateOrConnectWithoutComplaintTargetTypeInput {

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:false})
    @Type(() => ContentComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => ContentComplaintCreateWithoutComplaintTargetTypeInput, {nullable:false})
    @Type(() => ContentComplaintCreateWithoutComplaintTargetTypeInput)
    create!: ContentComplaintCreateWithoutComplaintTargetTypeInput;
}
