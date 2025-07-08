// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: '$client',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/',
  operationId: 'getIndex',
};

export const tool: Tool = {
  name: 'get_status_client',
  description: 'Get the status of the server',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const response = await client.getStatus().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
