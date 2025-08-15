// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.sentry.webhook',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/sentry/webhook/test',
  operationId: 'postApiV1SentryWebhookTest',
};

export const tool: Tool = {
  name: 'test_sentry_v1_api_webhook',
  description: 'Test endpoint to validate webhook signature verification',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'object',
        additionalProperties: true,
      },
      'x-sentry-signature': {
        type: 'string',
      },
    },
    required: ['body'],
  },
  annotations: {},
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.sentry.webhook.test(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
