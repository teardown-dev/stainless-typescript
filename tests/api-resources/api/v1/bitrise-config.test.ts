// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bitriseConfig', () => {
  // Prism tests are disabled
  test.skip('retrieveBitriseConfig: only required params', async () => {
    const responsePromise = client.api.v1.bitriseConfig.retrieveBitriseConfig({
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
  test.skip('retrieveBitriseConfig: required and optional params', async () => {
    const response = await client.api.v1.bitriseConfig.retrieveBitriseConfig({
      'td-project-id': 'td-project-id',
    });
  });

  // Prism tests are disabled
  test.skip('updateBitriseConfig: only required params', async () => {
    const responsePromise = client.api.v1.bitriseConfig.updateBitriseConfig({
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
  test.skip('updateBitriseConfig: required and optional params', async () => {
    const response = await client.api.v1.bitriseConfig.updateBitriseConfig({
      'td-project-id': 'td-project-id',
      api_token: 'api_token',
      app_slug: 'app_slug',
      status: 'NOT_CONFIGURED',
      trigger_token: 'trigger_token',
    });
  });
});
