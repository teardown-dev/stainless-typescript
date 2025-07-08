// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.version_config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/version-config',
  operationId: 'putApiV1Version-config',
};

export const tool: Tool = {
  name: 'update_version_config_v1_api_version_config',
  description: 'Updates the version configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['NOT_CONFIGURED', 'DISABLED', 'ENABLED'],
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.versionConfig.updateVersionConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
