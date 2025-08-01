// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/secrets/user/{userId}/{name}',
  operationId: 'getApiV1SecretsUserByUserIdByName',
};

export const tool: Tool = {
  name: 'retrieve_user_secret_v1_api_secrets',
  description: "Fetches a user's secret by name",
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
    required: ['userId', 'name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  const response = await client.api.v1.secrets.retrieveUserSecret(name, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
