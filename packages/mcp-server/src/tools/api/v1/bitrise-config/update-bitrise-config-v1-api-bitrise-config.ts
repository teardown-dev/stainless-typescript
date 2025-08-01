// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.bitrise_config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/bitrise-config',
  operationId: 'putApiV1Bitrise-config',
};

export const tool: Tool = {
  name: 'update_bitrise_config_v1_api_bitrise_config',
  description: 'Updates the Bitrise configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      api_token: {
        type: 'string',
      },
      app_slug: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['NOT_CONFIGURED', 'DISABLED', 'ENABLED'],
      },
      trigger_token: {
        type: 'string',
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
  const response = await client.api.v1.bitriseConfig.updateBitriseConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
