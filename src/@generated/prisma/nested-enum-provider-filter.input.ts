import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Provider } from './provider.enum';

@InputType()
export class NestedEnumProviderFilter {

    @Field(() => Provider, {nullable:true})
    equals?: keyof typeof Provider;

    @Field(() => [Provider], {nullable:true})
    in?: Array<keyof typeof Provider>;

    @Field(() => [Provider], {nullable:true})
    notIn?: Array<keyof typeof Provider>;

    @Field(() => NestedEnumProviderFilter, {nullable:true})
    not?: NestedEnumProviderFilter;
}
