// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Teardown } from '../client';

export abstract class APIResource {
  protected _client: Teardown;

  constructor(client: Teardown) {
    this._client = client;
  }
}
