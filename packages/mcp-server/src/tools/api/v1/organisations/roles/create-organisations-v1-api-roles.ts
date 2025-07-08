// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.organisations.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/organisations/{id}/roles',
  operationId: 'postApiV1OrganisationsByIdRoles',
};

export const tool: Tool = {
  name: 'create_organisations_v1_api_roles',
  description: 'Assigns a role to a specific user within an organisation.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      role: {
        type: 'string',
        enum: ['OWNER', 'ADMIN', 'DEVELOPER', 'PRODUCT', 'DATA', 'MARKETING'],
      },
      user_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.organisations.roles.create(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
