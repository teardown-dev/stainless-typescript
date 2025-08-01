// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.sentry',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/sentry/refresh-token',
  operationId: 'postApiV1SentryRefresh-token',
};

export const tool: Tool = {
  name: 'refresh_token_v1_api_sentry',
  description: 'Refresh an expired Sentry authentication token',
  inputSchema: {
    type: 'object',
    properties: {
      installationId: {
        type: 'string',
      },
      refreshToken: {
        type: 'string',
      },
    },
    required: ['installationId', 'refreshToken'],
  },
  annotations: {},
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.sentry.refreshToken(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
