// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appStoreConnect', () => {
  // Prism tests are disabled
  test.skip('retrieveStatus: only required params', async () => {
    const responsePromise = client.api.v1.appStoreConnect.retrieveStatus({
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
  test.skip('retrieveStatus: required and optional params', async () => {
    const response = await client.api.v1.appStoreConnect.retrieveStatus({ 'td-project-id': 'td-project-id' });
  });

  // Prism tests are disabled
  test.skip('token: only required params', async () => {
    const responsePromise = client.api.v1.appStoreConnect.token({
      issuerId: 'issuerId',
      privateKey: 'privateKey',
      privateKeyId: 'privateKeyId',
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
  test.skip('token: required and optional params', async () => {
    const response = await client.api.v1.appStoreConnect.token({
      issuerId: 'issuerId',
      privateKey: 'privateKey',
      privateKeyId: 'privateKeyId',
      'td-project-id': 'td-project-id',
    });
  });
});
