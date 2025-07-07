// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from 'teardown';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tauriConfig', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveTauriConfig: only required params', async () => {
    const responsePromise = client.api.v1.tauriConfig.retrieveTauriConfig({
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
  test.skip('retrieveTauriConfig: required and optional params', async () => {
    const response = await client.api.v1.tauriConfig.retrieveTauriConfig({
      'td-project-id': 'td-project-id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateTauriConfig: only required params', async () => {
    const responsePromise = client.api.v1.tauriConfig.updateTauriConfig({ 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateTauriConfig: required and optional params', async () => {
    const response = await client.api.v1.tauriConfig.updateTauriConfig({
      'td-project-id': 'td-project-id',
      app_name: 'app_name',
      build_number: 'build_number',
      bundle_identifier: 'bundle_identifier',
      linux_targets: ['string'],
      macos_targets: ['string'],
      status: 'NOT_CONFIGURED',
      version: 'version',
      windows_targets: ['string'],
    });
  });
});
