import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CollectionUpdateOneRequiredWithoutUserCollectionMappingNestedInput } from '../collection/collection-update-one-required-without-user-collection-mapping-nested.input';
import { UserUpdateOneRequiredWithoutUserCollectionMappingNestedInput } from '../user/user-update-one-required-without-user-collection-mapping-nested.input';
import { NovelCollectionMappingUpdateManyWithoutUserCollectionMappingNestedInput } from '../novel-collection-mapping/novel-collection-mapping-update-many-without-user-collection-mapping-nested.input';

@InputType()
export class UserCollectionMappingUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CollectionUpdateOneRequiredWithoutUserCollectionMappingNestedInput, {nullable:true})
    collection?: CollectionUpdateOneRequiredWithoutUserCollectionMappingNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUserCollectionMappingNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserCollectionMappingNestedInput;

    @Field(() => NovelCollectionMappingUpdateManyWithoutUserCollectionMappingNestedInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingUpdateManyWithoutUserCollectionMappingNestedInput;
}
