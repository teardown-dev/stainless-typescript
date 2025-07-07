// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class User extends APIResource {
  /**
   * Fetches the profile details for the currently authenticated user.
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<UserRetrieveCurrentResponse> {
    return this._client.get('/api/v1/user/current', options);
  }
}

export interface UserRetrieveCurrentResponse {
  id: string;

  created_at: string;

  email: string;

  invite_code: string | null;

  name: string;

  status: 'PENDING' | 'ACTIVE' | 'DELETED' | 'DISABLED';

  updated_at: string;

  user_code: string;
}

export declare namespace User {
  export { type UserRetrieveCurrentResponse as UserRetrieveCurrentResponse };
}
