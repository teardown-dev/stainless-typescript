// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/status',
  operationId: 'getStatus',
};

export const tool: Tool = {
  name: 'retrieve_status',
  description: 'Get the status of the server',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const response = await client.status.retrieve().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
