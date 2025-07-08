// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.feedback',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/feedback',
  operationId: 'postApiV1Feedback',
};

export const tool: Tool = {
  name: 'create_v1_api_feedback',
  description: 'Submit user feedback',
  inputSchema: {
    type: 'object',
    properties: {
      feedback: {
        type: 'string',
      },
      feedback_type: {
        type: 'string',
        enum: ['BUG', 'FEATURE_REQUEST', 'PRICING', 'OTHER'],
      },
      follow_up: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.feedback.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
