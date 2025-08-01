// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.tauri_config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/tauri-config',
  operationId: 'putApiV1Tauri-config',
};

export const tool: Tool = {
  name: 'update_tauri_config_v1_api_tauri_config',
  description: 'Updates the Tauri configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      app_name: {
        type: 'string',
      },
      build_number: {
        type: 'string',
      },
      bundle_identifier: {
        type: 'string',
      },
      linux_targets: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      macos_targets: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      status: {
        type: 'string',
        enum: ['NOT_CONFIGURED', 'DISABLED', 'ENABLED'],
      },
      version: {
        type: 'string',
      },
      windows_targets: {
        type: 'array',
        items: {
          type: 'string',
        },
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
  const response = await client.api.v1.tauriConfig.updateTauriConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
