// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.organisations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/organisations/{id}',
  operationId: 'getApiV1OrganisationsById',
};

export const tool: Tool = {
  name: 'retrieve_v1_api_organisations',
  description: 'Fetches details for a specific organisation by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.organisations.retrieve(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
