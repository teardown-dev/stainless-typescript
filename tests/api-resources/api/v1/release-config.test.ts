// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource releaseConfig', () => {
  // Prism tests are disabled
  test.skip('retrieveReleaseConfig: only required params', async () => {
    const responsePromise = client.api.v1.releaseConfig.retrieveReleaseConfig({
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
  test.skip('retrieveReleaseConfig: required and optional params', async () => {
    const response = await client.api.v1.releaseConfig.retrieveReleaseConfig({
      'td-project-id': 'td-project-id',
    });
  });

  // Prism tests are disabled
  test.skip('updateReleaseConfig: only required params', async () => {
    const responsePromise = client.api.v1.releaseConfig.updateReleaseConfig({
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
  test.skip('updateReleaseConfig: required and optional params', async () => {
    const response = await client.api.v1.releaseConfig.updateReleaseConfig({
      'td-project-id': 'td-project-id',
      git_branch_pattern: 'git_branch_pattern',
      git_tag_pattern: 'git_tag_pattern',
      prepare_version_script_id: 'prepare_version_script_id',
      prepare_workflow_id: 'prepare_workflow_id',
      prepare_workflow_provider: 'prepare_workflow_provider',
      status: 'NOT_CONFIGURED',
    });
  });
});
