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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the Tauri configuration for a specific project.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
