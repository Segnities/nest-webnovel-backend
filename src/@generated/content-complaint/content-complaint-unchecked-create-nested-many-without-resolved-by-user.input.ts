import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateWithoutResolvedByUserInput } from './content-complaint-create-without-resolved-by-user.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateOrConnectWithoutResolvedByUserInput } from './content-complaint-create-or-connect-without-resolved-by-user.input';
import { ContentComplaintCreateManyResolvedByUserInputEnvelope } from './content-complaint-create-many-resolved-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';

@InputType()
export class ContentComplaintUncheckedCreateNestedManyWithoutResolvedByUserInput {

    @Field(() => [ContentComplaintCreateWithoutResolvedByUserInput], {nullable:true})
    @Type(() => ContentComplaintCreateWithoutResolvedByUserInput)
    create?: Array<ContentComplaintCreateWithoutResolvedByUserInput>;

    @Field(() => [ContentComplaintCreateOrConnectWithoutResolvedByUserInput], {nullable:true})
    @Type(() => ContentComplaintCreateOrConnectWithoutResolvedByUserInput)
    connectOrCreate?: Array<ContentComplaintCreateOrConnectWithoutResolvedByUserInput>;

    @Field(() => ContentComplaintCreateManyResolvedByUserInputEnvelope, {nullable:true})
    @Type(() => ContentComplaintCreateManyResolvedByUserInputEnvelope)
    createMany?: ContentComplaintCreateManyResolvedByUserInputEnvelope;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;
}
