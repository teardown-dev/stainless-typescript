// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.organisations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/organisations/{id}',
  operationId: 'putApiV1OrganisationsById',
};

export const tool: Tool = {
  name: 'update_v1_api_organisations',
  description: 'Updates the details (e.g., name) of an existing organisation.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      domain: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.organisations.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
