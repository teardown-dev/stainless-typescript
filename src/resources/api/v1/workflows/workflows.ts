// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProvidersAPI from './providers/providers';
import { ProviderListParams, ProviderRetrieveParams, Providers } from './providers/providers';

export class Workflows extends APIResource {
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);
}

Workflows.Providers = Providers;

export declare namespace Workflows {
  export {
    Providers as Providers,
    type ProviderRetrieveParams as ProviderRetrieveParams,
    type ProviderListParams as ProviderListParams,
  };
}
