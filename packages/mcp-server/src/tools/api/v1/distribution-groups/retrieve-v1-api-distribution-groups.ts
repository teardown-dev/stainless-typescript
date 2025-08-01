// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.distribution_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/distribution-groups/{groupId}',
  operationId: 'getApiV1Distribution-groupsByGroupId',
};

export const tool: Tool = {
  name: 'retrieve_v1_api_distribution_groups',
  description: 'Get a specific distribution group by ID',
  inputSchema: {
    type: 'object',
    properties: {
      groupId: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
    required: ['groupId', 'td-project-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { groupId, ...body } = args as any;
  const response = await client.api.v1.distributionGroups.retrieve(groupId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
