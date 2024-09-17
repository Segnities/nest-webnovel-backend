import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { ContentComplaintUpdateWithoutResolvedByUserInput } from './content-complaint-update-without-resolved-by-user.input';

@InputType()
export class ContentComplaintUpdateWithWhereUniqueWithoutResolvedByUserInput {

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:false})
    @Type(() => ContentComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => ContentComplaintUpdateWithoutResolvedByUserInput, {nullable:false})
    @Type(() => ContentComplaintUpdateWithoutResolvedByUserInput)
    data!: ContentComplaintUpdateWithoutResolvedByUserInput;
}
