// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Email extends APIResource {
  /**
   * Receives and processes authentication-related events (e.g., user signup) sent
   * from Supabase via webhook.
   */
  authHook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/webhooks/email/auth-hook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
