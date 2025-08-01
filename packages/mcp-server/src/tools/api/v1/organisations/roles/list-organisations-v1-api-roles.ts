// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.organisations.roles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/organisations/{id}/roles',
  operationId: 'getApiV1OrganisationsByIdRoles',
};

export const tool: Tool = {
  name: 'list_organisations_v1_api_roles',
  description: 'Fetches a list of users and their roles within a specific organisation.',
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
  const response = await client.api.v1.organisations.roles.list(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
