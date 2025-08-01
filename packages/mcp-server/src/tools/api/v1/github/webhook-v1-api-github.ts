// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.github',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/github/webhook',
  operationId: 'postApiV1GithubWebhook',
};

export const tool: Tool = {
  name: 'webhook_v1_api_github',
  description:
    'Receives and processes webhook events sent from GitHub (e.g., installation events, repository changes). This endpoint is typically called by GitHub, not directly by users.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const response = await client.api.v1.github.webhook().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
