// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/user/current',
  operationId: 'getApiV1UserCurrent',
};

export const tool: Tool = {
  name: 'retrieve_current_v1_api_user',
  description: 'Fetches the profile details for the currently authenticated user.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.api.v1.user.retrieveCurrent());
};

export default { metadata, tool, handler };
