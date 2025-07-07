// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EmailAPI from './email';
import { Email } from './email';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Webhooks extends APIResource {
  email: EmailAPI.Email = new EmailAPI.Email(this._client);

  /**
   * Receives and processes database change events (e.g., inserts, updates, deletes)
   * sent from Supabase via webhook.
   */
  database(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/webhooks/database', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Webhooks.Email = Email;

export declare namespace Webhooks {
  export { Email as Email };
}
