// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/persons',
  operationId: 'getApiV1Persons',
};

export const tool: Tool = {
  name: 'retrieve_persons_api_v1',
  description: 'Get all persons for a project with pagination',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      limit: {
        type: 'string',
      },
      offset: {
        type: 'string',
      },
    },
    required: ['td-project-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.retrievePersons(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
