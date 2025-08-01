// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.expo_config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/expo-config',
  operationId: 'putApiV1Expo-config',
};

export const tool: Tool = {
  name: 'update_expo_config_v1_api_expo_config',
  description: 'Updates the Expo configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      app_id: {
        type: 'string',
      },
      issuer_id: {
        type: 'string',
      },
      private_key: {
        type: 'string',
      },
      private_key_id: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['NOT_CONFIGURED', 'PENDING', 'DISABLED', 'ENABLED'],
      },
    },
    required: ['td-project-id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.expoConfig.updateExpoConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
