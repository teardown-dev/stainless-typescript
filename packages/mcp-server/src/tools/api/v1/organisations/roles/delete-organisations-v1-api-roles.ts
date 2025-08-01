// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.organisations.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v1/organisations/{id}/roles/{userId}',
  operationId: 'deleteApiV1OrganisationsByIdRolesByUserId',
};

export const tool: Tool = {
  name: 'delete_organisations_v1_api_roles',
  description: "Removes a user's role assignment from an organisation.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      userId: {
        type: 'string',
      },
    },
    required: ['id', 'userId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { userId, ...body } = args as any;
  const response = await client.api.v1.organisations.roles.delete(userId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
