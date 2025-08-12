// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sentry', () => {
  // Prism tests are disabled
  test.skip('refreshToken: only required params', async () => {
    const responsePromise = client.api.v1.sentry.refreshToken({
      installationId: 'installationId',
      refreshToken: 'refreshToken',
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
  test.skip('refreshToken: required and optional params', async () => {
    const response = await client.api.v1.sentry.refreshToken({
      installationId: 'installationId',
      refreshToken: 'refreshToken',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveSetup: only required params', async () => {
    const responsePromise = client.api.v1.sentry.retrieveSetup({
      code: 'code',
      installationId: 'installationId',
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
  test.skip('retrieveSetup: required and optional params', async () => {
    const response = await client.api.v1.sentry.retrieveSetup({
      code: 'code',
      installationId: 'installationId',
    });
  });
});
