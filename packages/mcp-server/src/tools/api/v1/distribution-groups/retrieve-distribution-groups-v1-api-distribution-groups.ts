// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.distribution_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/distribution-groups',
  operationId: 'getApiV1Distribution-groups',
};

export const tool: Tool = {
  name: 'retrieve_distribution_groups_v1_api_distribution_groups',
  description: 'Get all distribution groups for a project',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
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
  const response = await client.api.v1.distributionGroups.retrieveDistributionGroups(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
