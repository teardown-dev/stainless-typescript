// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.ota_update_config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/ota-update-config',
  operationId: 'putApiV1Ota-update-config',
};

export const tool: Tool = {
  name: 'update_ota_update_config_v1_api_ota_update_config',
  description: 'Updates the OTA Update configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      auto_download: {
        type: 'boolean',
      },
      auto_install: {
        type: 'boolean',
      },
      channels: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      require_user_approval: {
        type: 'boolean',
      },
      status: {
        type: 'string',
        enum: ['NOT_CONFIGURED', 'DISABLED', 'ENABLED'],
      },
      update_check_interval: {
        type: 'number',
      },
      update_url: {
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
  const response = await client.api.v1.otaUpdateConfig.updateOtaUpdateConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
