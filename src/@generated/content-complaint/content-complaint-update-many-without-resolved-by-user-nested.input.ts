import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateWithoutResolvedByUserInput } from './content-complaint-create-without-resolved-by-user.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateOrConnectWithoutResolvedByUserInput } from './content-complaint-create-or-connect-without-resolved-by-user.input';
import { ContentComplaintUpsertWithWhereUniqueWithoutResolvedByUserInput } from './content-complaint-upsert-with-where-unique-without-resolved-by-user.input';
import { ContentComplaintCreateManyResolvedByUserInputEnvelope } from './content-complaint-create-many-resolved-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { ContentComplaintUpdateWithWhereUniqueWithoutResolvedByUserInput } from './content-complaint-update-with-where-unique-without-resolved-by-user.input';
import { ContentComplaintUpdateManyWithWhereWithoutResolvedByUserInput } from './content-complaint-update-many-with-where-without-resolved-by-user.input';
import { ContentComplaintScalarWhereInput } from './content-complaint-scalar-where.input';

@InputType()
export class ContentComplaintUpdateManyWithoutResolvedByUserNestedInput {

    @Field(() => [ContentComplaintCreateWithoutResolvedByUserInput], {nullable:true})
    @Type(() => ContentComplaintCreateWithoutResolvedByUserInput)
    create?: Array<ContentComplaintCreateWithoutResolvedByUserInput>;

    @Field(() => [ContentComplaintCreateOrConnectWithoutResolvedByUserInput], {nullable:true})
    @Type(() => ContentComplaintCreateOrConnectWithoutResolvedByUserInput)
    connectOrCreate?: Array<ContentComplaintCreateOrConnectWithoutResolvedByUserInput>;

    @Field(() => [ContentComplaintUpsertWithWhereUniqueWithoutResolvedByUserInput], {nullable:true})
    @Type(() => ContentComplaintUpsertWithWhereUniqueWithoutResolvedByUserInput)
    upsert?: Array<ContentComplaintUpsertWithWhereUniqueWithoutResolvedByUserInput>;

    @Field(() => ContentComplaintCreateManyResolvedByUserInputEnvelope, {nullable:true})
    @Type(() => ContentComplaintCreateManyResolvedByUserInputEnvelope)
    createMany?: ContentComplaintCreateManyResolvedByUserInputEnvelope;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [ContentComplaintUpdateWithWhereUniqueWithoutResolvedByUserInput], {nullable:true})
    @Type(() => ContentComplaintUpdateWithWhereUniqueWithoutResolvedByUserInput)
    update?: Array<ContentComplaintUpdateWithWhereUniqueWithoutResolvedByUserInput>;

    @Field(() => [ContentComplaintUpdateManyWithWhereWithoutResolvedByUserInput], {nullable:true})
    @Type(() => ContentComplaintUpdateManyWithWhereWithoutResolvedByUserInput)
    updateMany?: Array<ContentComplaintUpdateManyWithWhereWithoutResolvedByUserInput>;

    @Field(() => [ContentComplaintScalarWhereInput], {nullable:true})
    @Type(() => ContentComplaintScalarWhereInput)
    deleteMany?: Array<ContentComplaintScalarWhereInput>;
}
