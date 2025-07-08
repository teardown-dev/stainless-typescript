// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource googlePlay', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveBuilds: only required params', async () => {
    const responsePromise = client.api.v1.googlePlay.retrieveBuilds({ 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBuilds: required and optional params', async () => {
    const response = await client.api.v1.googlePlay.retrieveBuilds({
      'td-project-id': 'td-project-id',
      limit: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveStatus: only required params', async () => {
    const responsePromise = client.api.v1.googlePlay.retrieveStatus({ 'td-project-id': 'td-project-id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveStatus: required and optional params', async () => {
    const response = await client.api.v1.googlePlay.retrieveStatus({ 'td-project-id': 'td-project-id' });
  });
});
