// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.google_play_config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/google-play-config',
  operationId: 'putApiV1Google-play-config',
};

export const tool: Tool = {
  name: 'update_google_play_config_v1_api_google_play_config',
  description: 'Updates the Google Play configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      package_name: {
        type: 'string',
      },
      service_account_json: {
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
  const response = await client.api.v1.googlePlayConfig.updateGooglePlayConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
