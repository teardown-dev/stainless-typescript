// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource googlePlayConfig', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveGooglePlayConfig: only required params', async () => {
    const responsePromise = client.api.v1.googlePlayConfig.retrieveGooglePlayConfig({
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveGooglePlayConfig: required and optional params', async () => {
    const response = await client.api.v1.googlePlayConfig.retrieveGooglePlayConfig({
      'td-project-id': 'td-project-id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateGooglePlayConfig: only required params', async () => {
    const responsePromise = client.api.v1.googlePlayConfig.updateGooglePlayConfig({
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

  // skipped: tests are disabled for the time being
  test.skip('updateGooglePlayConfig: required and optional params', async () => {
    const response = await client.api.v1.googlePlayConfig.updateGooglePlayConfig({
      'td-project-id': 'td-project-id',
      package_name: 'package_name',
      service_account_json: 'service_account_json',
      status: 'NOT_CONFIGURED',
    });
  });
});
