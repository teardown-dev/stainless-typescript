// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from 'teardown';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource repositories', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.v1.github.repositories.list({
      'td-organisation-id': 'td-organisation-id',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.api.v1.github.repositories.list({
      'td-organisation-id': 'td-organisation-id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('connect: only required params', async () => {
    const responsePromise = client.api.v1.github.repositories.connect({
      projectId: 'projectId',
      repositoryId: 'repositoryId',
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
  test.skip('connect: required and optional params', async () => {
    const response = await client.api.v1.github.repositories.connect({
      projectId: 'projectId',
      repositoryId: 'repositoryId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveProject: only required params', async () => {
    const responsePromise = client.api.v1.github.repositories.retrieveProject({
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
  test.skip('retrieveProject: required and optional params', async () => {
    const response = await client.api.v1.github.repositories.retrieveProject({
      'td-project-id': 'td-project-id',
    });
  });
});
