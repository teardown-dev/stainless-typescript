// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.ota_update_config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/ota-update-config',
  operationId: 'getApiV1Ota-update-config',
};

export const tool: Tool = {
  name: 'retrieve_ota_update_config_v1_api_ota_update_config',
  description: 'Fetches the OTA Update configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
    },
    required: ['td-project-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.otaUpdateConfig.retrieveOtaUpdateConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
