// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/webhooks/database',
  operationId: 'postApiV1WebhooksDatabase',
};

export const tool: Tool = {
  name: 'database_v1_api_webhooks',
  description:
    'Receives and processes database change events (e.g., inserts, updates, deletes) sent from Supabase via webhook.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const response = await client.api.v1.webhooks.database().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
