// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.webhooks.email',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/webhooks/email/auth-hook',
  operationId: 'postApiV1WebhooksEmailAuth-hook',
};

export const tool: Tool = {
  name: 'auth_hook_webhooks_v1_api_email',
  description:
    'Receives and processes authentication-related events (e.g., user signup) sent from Supabase via webhook.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const response = await client.api.v1.webhooks.email.authHook().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
