// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.branches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/branches/{name}',
  operationId: 'getApiV1BranchesByName',
};

export const tool: Tool = {
  name: 'retrieve_v1_api_branches',
  description: 'Get a single branch by its name',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  const response = await client.api.v1.branches.retrieve(name, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
