// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.custom_domains',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v1/custom-domains/{id}',
  operationId: 'deleteApiV1Custom-domainsById',
};

export const tool: Tool = {
  name: 'delete_v1_api_custom_domains',
  description: 'Delete a custom domain (Admin only)',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
    required: ['id', 'td-project-id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.customDomains.delete(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
