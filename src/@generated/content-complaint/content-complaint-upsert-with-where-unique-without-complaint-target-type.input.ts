import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { ContentComplaintUpdateWithoutComplaintTargetTypeInput } from './content-complaint-update-without-complaint-target-type.input';
import { ContentComplaintCreateWithoutComplaintTargetTypeInput } from './content-complaint-create-without-complaint-target-type.input';

@InputType()
export class ContentComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput {

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:false})
    @Type(() => ContentComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => ContentComplaintUpdateWithoutComplaintTargetTypeInput, {nullable:false})
    @Type(() => ContentComplaintUpdateWithoutComplaintTargetTypeInput)
    update!: ContentComplaintUpdateWithoutComplaintTargetTypeInput;

    @Field(() => ContentComplaintCreateWithoutComplaintTargetTypeInput, {nullable:false})
    @Type(() => ContentComplaintCreateWithoutComplaintTargetTypeInput)
    create!: ContentComplaintCreateWithoutComplaintTargetTypeInput;
}
