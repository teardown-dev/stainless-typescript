// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Feedback extends APIResource {
  /**
   * Submit user feedback
   */
  create(body: FeedbackCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/v1/feedback',
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Get a specific feedback item by its ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/v1/feedback/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all feedback submitted by the authenticated user
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/feedback', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FeedbackCreateParams {
  feedback: string;

  feedback_type: 'BUG' | 'FEATURE_REQUEST' | 'PRICING' | 'OTHER';

  follow_up: boolean;
}

export declare namespace Feedback {
  export { type FeedbackCreateParams as FeedbackCreateParams };
}
