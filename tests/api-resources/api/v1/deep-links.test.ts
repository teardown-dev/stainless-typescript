// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deepLinks', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v1.deepLinks.retrieve('id', { 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.api.v1.deepLinks.retrieve('id', { 'td-project-id': 'td-project-id' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v1.deepLinks.update('id', { 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.api.v1.deepLinks.update('id', {
      'td-project-id': 'td-project-id',
      android_app_uri: 'android_app_uri',
      android_package_name: 'android_package_name',
      android_store_url: 'android_store_url',
      custom_data: 'custom_data',
      ios_app_store_id: 'ios_app_store_id',
      ios_app_uri: 'ios_app_uri',
      ios_store_url: 'ios_store_url',
      title: 'x',
      web_fallback_url: 'web_fallback_url',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v1.deepLinks.delete('id', { 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.api.v1.deepLinks.delete('id', { 'td-project-id': 'td-project-id' });
  });

  // skipped: tests are disabled for the time being
  test.skip('deepLinks: only required params', async () => {
    const responsePromise = client.api.v1.deepLinks.deepLinks({
      short_code: 'SQfNkl1n-JR-',
      title: 'x',
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
  test.skip('deepLinks: required and optional params', async () => {
    const response = await client.api.v1.deepLinks.deepLinks({
      short_code: 'SQfNkl1n-JR-',
      title: 'x',
      'td-project-id': 'td-project-id',
      android_app_uri: 'android_app_uri',
      android_package_name: 'android_package_name',
      android_store_url: 'android_store_url',
      custom_data: 'custom_data',
      ios_app_store_id: 'ios_app_store_id',
      ios_app_uri: 'ios_app_uri',
      ios_store_url: 'ios_store_url',
      web_fallback_url: 'web_fallback_url',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveDeepLinks: only required params', async () => {
    const responsePromise = client.api.v1.deepLinks.retrieveDeepLinks({ 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveDeepLinks: required and optional params', async () => {
    const response = await client.api.v1.deepLinks.retrieveDeepLinks({ 'td-project-id': 'td-project-id' });
  });
});
