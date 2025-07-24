// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/integrations/{type}/status',
  operationId: 'putApiV1IntegrationsByTypeStatus',
};

export const tool: Tool = {
  name: 'update_status_v1_api_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the status of a specific integration type\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        enum: [
          'APP_STORE_CONNECT',
          'GOOGLE_PLAY_STORE',
          'BITRISE',
          'CODE_MAGIC',
          'SENTRY',
          'VERCEL',
          'POSTHOG',
          'EXPO',
          'CIRCLE_CI',
        ],
      },
      status: {
        type: 'string',
        enum: ['NOT_CONFIGURED', 'PENDING', 'ENABLED', 'DISABLED'],
      },
      'td-project-id': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['type', 'status', 'td-project-id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { type, ...body } = args as any;
  const response = await client.api.v1.integrations.updateStatus(type, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
