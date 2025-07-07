// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../../internal/uploads';

export class Webhook extends APIResource {
  /**
   * Receive and process webhooks from Sentry for various events
   */
  create(params: WebhookCreateParams, options?: RequestOptions): APIPromise<void> {
    const {
      'request-id': requestID,
      'sentry-hook-resource': sentryHookResource,
      'sentry-hook-signature': sentryHookSignature,
      'sentry-hook-timestamp': sentryHookTimestamp,
      ...body
    } = params;
    return this._client.post(
      '/api/v1/sentry/webhook',
      maybeMultipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([
            {
              Accept: '*/*',
              'request-id': requestID,
              'sentry-hook-resource': sentryHookResource,
              'sentry-hook-signature': sentryHookSignature,
              'sentry-hook-timestamp': sentryHookTimestamp,
            },
            options?.headers,
          ]),
        },
        this._client,
      ),
    );
  }

  /**
   * Test endpoint to validate webhook signature verification
   */
  test(params: WebhookTestParams, options?: RequestOptions): APIPromise<void> {
    const { body, 'x-sentry-signature': xSentrySignature } = params;
    return this._client.post(
      '/api/v1/sentry/webhook/test',
      maybeMultipartFormRequestOptions(
        {
          body: body,
          ...options,
          headers: buildHeaders([
            {
              Accept: '*/*',
              ...(xSentrySignature != null ? { 'x-sentry-signature': xSentrySignature } : undefined),
            },
            options?.headers,
          ]),
        },
        this._client,
      ),
    );
  }
}

export interface WebhookCreateParams {
  /**
   * Body param:
   */
  action: string;

  /**
   * Body param:
   */
  actor: WebhookCreateParams.Actor;

  /**
   * Body param:
   */
  data: unknown;

  /**
   * Body param:
   */
  installation: WebhookCreateParams.Installation;

  /**
   * Header param:
   */
  'request-id': string;

  /**
   * Header param:
   */
  'sentry-hook-resource': string;

  /**
   * Header param:
   */
  'sentry-hook-signature': string;

  /**
   * Header param:
   */
  'sentry-hook-timestamp': string;
}

export namespace WebhookCreateParams {
  export interface Actor {
    id: string | number;

    name: string;

    type: 'user' | 'application';
  }

  export interface Installation {
    uuid: string;
  }
}

export interface WebhookTestParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Header param:
   */
  'x-sentry-signature'?: string;
}

export declare namespace Webhook {
  export { type WebhookCreateParams as WebhookCreateParams, type WebhookTestParams as WebhookTestParams };
}
