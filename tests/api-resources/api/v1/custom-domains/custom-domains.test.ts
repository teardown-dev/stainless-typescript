// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customDomains', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v1.customDomains.retrieve('id', { 'td-project-id': 'td-project-id' });
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
    const response = await client.api.v1.customDomains.retrieve('id', { 'td-project-id': 'td-project-id' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v1.customDomains.update('id', { 'td-project-id': 'td-project-id' });
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
    const response = await client.api.v1.customDomains.update('id', {
      'td-project-id': 'td-project-id',
      environment: 'PRODUCTION',
      redirect_type: 0,
      redirect_url: 'redirect_url',
      status: 'NO_DEPLOYMENT',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v1.customDomains.delete('id', { 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.api.v1.customDomains.delete('id', { 'td-project-id': 'td-project-id' });
  });

  // Prism tests are disabled
  test.skip('customDomains: only required params', async () => {
    const responsePromise = client.api.v1.customDomains.customDomains({
      domain:
        'l6FW2K-n-J.BBu0-2.JV--.w-0o-6l--4.TJdq-.Z-k-H-8.74.A2---U-Kx-.3L3vu-fNI.5P54N-n82-s-.A84y0t-.V-6.ref',
      environment: 'PRODUCTION',
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
  test.skip('customDomains: required and optional params', async () => {
    const response = await client.api.v1.customDomains.customDomains({
      domain:
        'l6FW2K-n-J.BBu0-2.JV--.w-0o-6l--4.TJdq-.Z-k-H-8.74.A2---U-Kx-.3L3vu-fNI.5P54N-n82-s-.A84y0t-.V-6.ref',
      environment: 'PRODUCTION',
      'td-project-id': 'td-project-id',
      redirect_type: 0,
      redirect_url: 'redirect_url',
    });
  });

  // Prism tests are disabled
  test.skip('lookupByDomain', async () => {
    const responsePromise = client.api.v1.customDomains.lookupByDomain('domainName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCustomDomains: only required params', async () => {
    const responsePromise = client.api.v1.customDomains.retrieveCustomDomains({
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
  test.skip('retrieveCustomDomains: required and optional params', async () => {
    const response = await client.api.v1.customDomains.retrieveCustomDomains({
      'td-project-id': 'td-project-id',
    });
  });
});
