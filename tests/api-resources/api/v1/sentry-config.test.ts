// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sentryConfig', () => {
  // Prism tests are disabled
  test.skip('retrieveSentryConfig: only required params', async () => {
    const responsePromise = client.api.v1.sentryConfig.retrieveSentryConfig({
      'td-project-id': 'td-project-id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSentryConfig: required and optional params', async () => {
    const response = await client.api.v1.sentryConfig.retrieveSentryConfig({
      'td-project-id': 'td-project-id',
    });
  });

  // Prism tests are disabled
  test.skip('updateSentryConfig: only required params', async () => {
    const responsePromise = client.api.v1.sentryConfig.updateSentryConfig({
      'td-project-id': 'td-project-id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateSentryConfig: required and optional params', async () => {
    const response = await client.api.v1.sentryConfig.updateSentryConfig({
      'td-project-id': 'td-project-id',
      token: 'token',
      organisation_slug: 'organisation_slug',
      project_slug: 'project_slug',
      status: 'NOT_CONFIGURED',
    });
  });
});
