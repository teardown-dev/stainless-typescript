// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.organisations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/organisations/{id}/members',
  operationId: 'getApiV1OrganisationsByIdMembers',
};

export const tool: Tool = {
  name: 'retrieve_members_v1_api_organisations',
  description: 'Fetches a list of all members within a specific organisation.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.organisations.retrieveMembers(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
