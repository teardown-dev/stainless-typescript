// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.feedback',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/feedback',
  operationId: 'getApiV1Feedback',
};

export const tool: Tool = {
  name: 'list_v1_api_feedback',
  description: 'Get all feedback submitted by the authenticated user',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const response = await client.api.v1.feedback.list().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
