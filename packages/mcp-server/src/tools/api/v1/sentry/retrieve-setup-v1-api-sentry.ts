// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.sentry',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sentry/setup',
  operationId: 'getApiV1SentrySetup',
};

export const tool: Tool = {
  name: 'retrieve_setup_v1_api_sentry',
  description: 'Handle the OAuth callback from Sentry and complete the integration setup',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
      },
      installationId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.sentry.retrieveSetup(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
