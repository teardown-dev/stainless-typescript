// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/integrations/{type}/validate',
  operationId: 'getApiV1IntegrationsByTypeValidate',
};

export const tool: Tool = {
  name: 'retrieve_validate_v1_api_integrations',
  description: 'Validate the credentials for a specific integration type',
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        enum: ['APP_STORE_CONNECT', 'GOOGLE_PLAY_STORE', 'BITRISE', 'SENTRY', 'VERCEL', 'POSTHOG', 'EXPO'],
      },
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { type, ...body } = args as any;
  const response = await client.api.v1.integrations.retrieveValidate(type, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
