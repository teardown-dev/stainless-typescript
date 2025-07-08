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
  httpPath: '/api/v1/secrets/value/{secretId}',
  operationId: 'getApiV1SecretsValueBySecretId',
};

export const tool: Tool = {
  name: 'retrieve_v1_api_secrets',
  description: 'Fetches the actual value of a secret by its ID',
  inputSchema: {
    type: 'object',
    properties: {
      secretId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { secretId, ...body } = args as any;
  const response = await client.api.v1.secrets.retrieve(secretId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
