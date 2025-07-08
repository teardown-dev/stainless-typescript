// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v1.workflows.providers.workflows.runs.retrieve('runId', {
      providerType: 'GITHUB',
      workflowId: 'workflowId',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.api.v1.workflows.providers.workflows.runs.retrieve('runId', {
      providerType: 'GITHUB',
      workflowId: 'workflowId',
      'td-project-id': 'td-project-id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.v1.workflows.providers.workflows.runs.list('workflowId', {
      providerType: 'GITHUB',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.api.v1.workflows.providers.workflows.runs.list('workflowId', {
      providerType: 'GITHUB',
      'td-project-id': 'td-project-id',
      commit_sha: 'commit_sha',
      limit: 'string',
      page: 'string',
      status: ['UNKNOWN'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('trigger: only required params', async () => {
    const responsePromise = client.api.v1.workflows.providers.workflows.runs.trigger('workflowId', {
      providerType: 'GITHUB',
      branchName: 'branchName',
      commitSha: 'commitSha',
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
  test.skip('trigger: required and optional params', async () => {
    const response = await client.api.v1.workflows.providers.workflows.runs.trigger('workflowId', {
      providerType: 'GITHUB',
      branchName: 'branchName',
      commitSha: 'commitSha',
      'td-project-id': 'td-project-id',
      inputs: {},
    });
  });
});
