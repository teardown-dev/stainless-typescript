// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from 'teardown';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource otaUpdateConfig', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveOtaUpdateConfig: only required params', async () => {
    const responsePromise = client.api.v1.otaUpdateConfig.retrieveOtaUpdateConfig({
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
  test.skip('retrieveOtaUpdateConfig: required and optional params', async () => {
    const response = await client.api.v1.otaUpdateConfig.retrieveOtaUpdateConfig({
      'td-project-id': 'td-project-id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateOtaUpdateConfig: only required params', async () => {
    const responsePromise = client.api.v1.otaUpdateConfig.updateOtaUpdateConfig({
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
  test.skip('updateOtaUpdateConfig: required and optional params', async () => {
    const response = await client.api.v1.otaUpdateConfig.updateOtaUpdateConfig({
      'td-project-id': 'td-project-id',
      auto_download: true,
      auto_install: true,
      channels: ['string'],
      require_user_approval: true,
      status: 'NOT_CONFIGURED',
      update_check_interval: 0,
      update_url: 'update_url',
    });
  });
});
