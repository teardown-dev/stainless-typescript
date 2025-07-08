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
  description: 'Receive and process webhooks from Sentry for various events',
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
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.sentry.webhook.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
