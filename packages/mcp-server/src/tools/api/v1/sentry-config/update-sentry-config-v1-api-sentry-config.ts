// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.sentry_config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/sentry-config',
  operationId: 'putApiV1Sentry-config',
};

export const tool: Tool = {
  name: 'update_sentry_config_v1_api_sentry_config',
  description: 'Updates the Sentry configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      token: {
        type: 'string',
      },
      organisation_slug: {
        type: 'string',
      },
      project_slug: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['NOT_CONFIGURED', 'DISABLED', 'ENABLED'],
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
  const response = await client.api.v1.sentryConfig.updateSentryConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
