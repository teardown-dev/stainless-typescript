// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource expoConfig', () => {
  // Prism tests are disabled
  test.skip('retrieveExpoConfig: only required params', async () => {
    const responsePromise = client.api.v1.expoConfig.retrieveExpoConfig({ 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveExpoConfig: required and optional params', async () => {
    const response = await client.api.v1.expoConfig.retrieveExpoConfig({ 'td-project-id': 'td-project-id' });
  });

  // Prism tests are disabled
  test.skip('updateExpoConfig: only required params', async () => {
    const responsePromise = client.api.v1.expoConfig.updateExpoConfig({ 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateExpoConfig: required and optional params', async () => {
    const response = await client.api.v1.expoConfig.updateExpoConfig({
      'td-project-id': 'td-project-id',
      app_id: 'app_id',
      issuer_id: 'issuer_id',
      private_key: 'private_key',
      private_key_id: 'private_key_id',
      status: 'NOT_CONFIGURED',
    });
  });
});
