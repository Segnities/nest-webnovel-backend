import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { ContentComplaintUpdateWithoutResolvedByUserInput } from './content-complaint-update-without-resolved-by-user.input';
import { ContentComplaintCreateWithoutResolvedByUserInput } from './content-complaint-create-without-resolved-by-user.input';

@InputType()
export class ContentComplaintUpsertWithWhereUniqueWithoutResolvedByUserInput {

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:false})
    @Type(() => ContentComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => ContentComplaintUpdateWithoutResolvedByUserInput, {nullable:false})
    @Type(() => ContentComplaintUpdateWithoutResolvedByUserInput)
    update!: ContentComplaintUpdateWithoutResolvedByUserInput;

    @Field(() => ContentComplaintCreateWithoutResolvedByUserInput, {nullable:false})
    @Type(() => ContentComplaintCreateWithoutResolvedByUserInput)
    create!: ContentComplaintCreateWithoutResolvedByUserInput;
}
