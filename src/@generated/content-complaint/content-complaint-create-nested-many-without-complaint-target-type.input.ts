import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateWithoutComplaintTargetTypeInput } from './content-complaint-create-without-complaint-target-type.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateOrConnectWithoutComplaintTargetTypeInput } from './content-complaint-create-or-connect-without-complaint-target-type.input';
import { ContentComplaintCreateManyComplaintTargetTypeInputEnvelope } from './content-complaint-create-many-complaint-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';

@InputType()
export class ContentComplaintCreateNestedManyWithoutComplaintTargetTypeInput {

    @Field(() => [ContentComplaintCreateWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => ContentComplaintCreateWithoutComplaintTargetTypeInput)
    create?: Array<ContentComplaintCreateWithoutComplaintTargetTypeInput>;

    @Field(() => [ContentComplaintCreateOrConnectWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => ContentComplaintCreateOrConnectWithoutComplaintTargetTypeInput)
    connectOrCreate?: Array<ContentComplaintCreateOrConnectWithoutComplaintTargetTypeInput>;

    @Field(() => ContentComplaintCreateManyComplaintTargetTypeInputEnvelope, {nullable:true})
    @Type(() => ContentComplaintCreateManyComplaintTargetTypeInputEnvelope)
    createMany?: ContentComplaintCreateManyComplaintTargetTypeInputEnvelope;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;
}
