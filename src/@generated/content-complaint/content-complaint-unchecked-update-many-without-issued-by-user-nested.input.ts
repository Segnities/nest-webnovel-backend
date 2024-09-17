import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateWithoutIssuedByUserInput } from './content-complaint-create-without-issued-by-user.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateOrConnectWithoutIssuedByUserInput } from './content-complaint-create-or-connect-without-issued-by-user.input';
import { ContentComplaintUpsertWithWhereUniqueWithoutIssuedByUserInput } from './content-complaint-upsert-with-where-unique-without-issued-by-user.input';
import { ContentComplaintCreateManyIssuedByUserInputEnvelope } from './content-complaint-create-many-issued-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { ContentComplaintUpdateWithWhereUniqueWithoutIssuedByUserInput } from './content-complaint-update-with-where-unique-without-issued-by-user.input';
import { ContentComplaintUpdateManyWithWhereWithoutIssuedByUserInput } from './content-complaint-update-many-with-where-without-issued-by-user.input';
import { ContentComplaintScalarWhereInput } from './content-complaint-scalar-where.input';

@InputType()
export class ContentComplaintUncheckedUpdateManyWithoutIssuedByUserNestedInput {

    @Field(() => [ContentComplaintCreateWithoutIssuedByUserInput], {nullable:true})
    @Type(() => ContentComplaintCreateWithoutIssuedByUserInput)
    create?: Array<ContentComplaintCreateWithoutIssuedByUserInput>;

    @Field(() => [ContentComplaintCreateOrConnectWithoutIssuedByUserInput], {nullable:true})
    @Type(() => ContentComplaintCreateOrConnectWithoutIssuedByUserInput)
    connectOrCreate?: Array<ContentComplaintCreateOrConnectWithoutIssuedByUserInput>;

    @Field(() => [ContentComplaintUpsertWithWhereUniqueWithoutIssuedByUserInput], {nullable:true})
    @Type(() => ContentComplaintUpsertWithWhereUniqueWithoutIssuedByUserInput)
    upsert?: Array<ContentComplaintUpsertWithWhereUniqueWithoutIssuedByUserInput>;

    @Field(() => ContentComplaintCreateManyIssuedByUserInputEnvelope, {nullable:true})
    @Type(() => ContentComplaintCreateManyIssuedByUserInputEnvelope)
    createMany?: ContentComplaintCreateManyIssuedByUserInputEnvelope;

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

    @Field(() => [ContentComplaintUpdateWithWhereUniqueWithoutIssuedByUserInput], {nullable:true})
    @Type(() => ContentComplaintUpdateWithWhereUniqueWithoutIssuedByUserInput)
    update?: Array<ContentComplaintUpdateWithWhereUniqueWithoutIssuedByUserInput>;

    @Field(() => [ContentComplaintUpdateManyWithWhereWithoutIssuedByUserInput], {nullable:true})
    @Type(() => ContentComplaintUpdateManyWithWhereWithoutIssuedByUserInput)
    updateMany?: Array<ContentComplaintUpdateManyWithWhereWithoutIssuedByUserInput>;

    @Field(() => [ContentComplaintScalarWhereInput], {nullable:true})
    @Type(() => ContentComplaintScalarWhereInput)
    deleteMany?: Array<ContentComplaintScalarWhereInput>;
}
