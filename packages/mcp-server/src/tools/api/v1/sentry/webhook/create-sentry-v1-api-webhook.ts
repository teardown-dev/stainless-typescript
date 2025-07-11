// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.sentry.webhook',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/sentry/webhook',
  operationId: 'postApiV1SentryWebhook',
};

export const tool: Tool = {
  name: 'create_sentry_v1_api_webhook',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReceive and process webhooks from Sentry for various events\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      action: {
        type: 'string',
      },
      actor: {
        type: 'object',
        properties: {
          id: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'number',
              },
            ],
          },
          name: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['user', 'application'],
          },
        },
        required: ['id', 'name', 'type'],
      },
      data: {
        type: 'object',
      },
      installation: {
        type: 'object',
        properties: {
          uuid: {
            type: 'string',
          },
        },
        required: ['uuid'],
      },
      'request-id': {
        type: 'string',
      },
      'sentry-hook-resource': {
        type: 'string',
      },
      'sentry-hook-signature': {
        type: 'string',
      },
      'sentry-hook-timestamp': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.sentry.webhook.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
