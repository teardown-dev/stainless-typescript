// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProjectsAPI from './projects';
import {
  ProjectListParams,
  ProjectRetrieveParams,
  ProjectRetrieveSearchParams,
  ProjectRetrieveSummaryParams,
  Projects,
} from './projects';
import * as WebhookAPI from './webhook';
import { Webhook, WebhookCreateParams, WebhookTestParams } from './webhook';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../../../internal/uploads';

export class Sentry extends APIResource {
  webhook: WebhookAPI.Webhook = new WebhookAPI.Webhook(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);

  /**
   * Refresh an expired Sentry authentication token
   */
  refreshToken(body: SentryRefreshTokenParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/api/v1/sentry/refresh-token',
      maybeMultipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Handle the OAuth callback from Sentry and complete the integration setup
   */
  retrieveSetup(query: SentryRetrieveSetupParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/sentry/setup', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SentryRefreshTokenParams {
  installationId: string;

  refreshToken: string;
}

export interface SentryRetrieveSetupParams {
  code: string;

  installationId: string;
}

Sentry.Webhook = Webhook;
Sentry.Projects = Projects;

export declare namespace Sentry {
  export {
    type SentryRefreshTokenParams as SentryRefreshTokenParams,
    type SentryRetrieveSetupParams as SentryRetrieveSetupParams,
  };

  export {
    Webhook as Webhook,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookTestParams as WebhookTestParams,
  };

  export {
    Projects as Projects,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectListParams as ProjectListParams,
    type ProjectRetrieveSearchParams as ProjectRetrieveSearchParams,
    type ProjectRetrieveSummaryParams as ProjectRetrieveSummaryParams,
  };
}
