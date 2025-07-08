// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/secrets/project/{projectId}/{name}',
  operationId: 'getApiV1SecretsProjectByProjectIdByName',
};

export const tool: Tool = {
  name: 'retrieve_project_secret_v1_api_secrets',
  description: "Fetches a project's secret by name",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  const response = await client.api.v1.secrets.retrieveProjectSecret(name, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
