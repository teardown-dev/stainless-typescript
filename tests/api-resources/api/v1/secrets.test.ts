// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Teardown from '@teardown/mcp';

const client = new Teardown({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource secrets', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v1.secrets.retrieve('secretId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v1.secrets.update('name', {
      entity_type: 'user',
      entity_id: 'entity_id',
      value: 'value',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.api.v1.secrets.update('name', {
      entity_type: 'user',
      entity_id: 'entity_id',
      value: 'value',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByName: only required params', async () => {
    const responsePromise = client.api.v1.secrets.retrieveByName('name', {
      entity_type: 'user',
      entity_id: 'entity_id',
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
  test.skip('retrieveByName: required and optional params', async () => {
    const response = await client.api.v1.secrets.retrieveByName('name', {
      entity_type: 'user',
      entity_id: 'entity_id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveForEntity: only required params', async () => {
    const responsePromise = client.api.v1.secrets.retrieveForEntity('entity_id', { entity_type: 'user' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveForEntity: required and optional params', async () => {
    const response = await client.api.v1.secrets.retrieveForEntity('entity_id', { entity_type: 'user' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveOrganisationSecret: only required params', async () => {
    const responsePromise = client.api.v1.secrets.retrieveOrganisationSecret('name', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveOrganisationSecret: required and optional params', async () => {
    const response = await client.api.v1.secrets.retrieveOrganisationSecret('name', { orgId: 'orgId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveProjectSecret: only required params', async () => {
    const responsePromise = client.api.v1.secrets.retrieveProjectSecret('name', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveProjectSecret: required and optional params', async () => {
    const response = await client.api.v1.secrets.retrieveProjectSecret('name', { projectId: 'projectId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveUserSecret: only required params', async () => {
    const responsePromise = client.api.v1.secrets.retrieveUserSecret('name', { userId: 'userId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveUserSecret: required and optional params', async () => {
    const response = await client.api.v1.secrets.retrieveUserSecret('name', { userId: 'userId' });
  });
});
