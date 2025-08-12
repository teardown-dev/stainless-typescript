// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integrations', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v1.integrations.retrieve('APP_STORE_CONNECT', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.api.v1.integrations.retrieve('APP_STORE_CONNECT', {
      'td-project-id': 'td-project-id',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v1.integrations.update('APP_STORE_CONNECT', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.api.v1.integrations.update('APP_STORE_CONNECT', {
      'td-project-id': 'td-project-id',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.v1.integrations.list({ 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.api.v1.integrations.list({ 'td-project-id': 'td-project-id' });
  });

  // Prism tests are disabled
  test.skip('retrieveValidate: only required params', async () => {
    const responsePromise = client.api.v1.integrations.retrieveValidate('APP_STORE_CONNECT', {
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
  test.skip('retrieveValidate: required and optional params', async () => {
    const response = await client.api.v1.integrations.retrieveValidate('APP_STORE_CONNECT', {
      'td-project-id': 'td-project-id',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveValues: only required params', async () => {
    const responsePromise = client.api.v1.integrations.retrieveValues('APP_STORE_CONNECT', {
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
  test.skip('retrieveValues: required and optional params', async () => {
    const response = await client.api.v1.integrations.retrieveValues('APP_STORE_CONNECT', {
      'td-project-id': 'td-project-id',
    });
  });

  // Prism tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.api.v1.integrations.updateStatus('APP_STORE_CONNECT', {
      status: 'NOT_CONFIGURED',
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
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.api.v1.integrations.updateStatus('APP_STORE_CONNECT', {
      status: 'NOT_CONFIGURED',
      'td-project-id': 'td-project-id',
    });
  });
});
