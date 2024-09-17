import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Provider } from './provider.enum';

@InputType()
export class EnumProviderFieldUpdateOperationsInput {

    @Field(() => Provider, {nullable:true})
    set?: keyof typeof Provider;
}
