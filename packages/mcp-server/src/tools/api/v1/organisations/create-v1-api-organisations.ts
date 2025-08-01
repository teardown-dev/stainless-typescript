// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.organisations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/organisations',
  operationId: 'postApiV1Organisations',
};

export const tool: Tool = {
  name: 'create_v1_api_organisations',
  description: 'Creates a new organisation with the authenticated user as the owner.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['PERSONAL', 'BUSINESS', 'ENTERPRISE', 'START_UP'],
      },
    },
    required: ['name', 'type'],
  },
  annotations: {},
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.organisations.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
