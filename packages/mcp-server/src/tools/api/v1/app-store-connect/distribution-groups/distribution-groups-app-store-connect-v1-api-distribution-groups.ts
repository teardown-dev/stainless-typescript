// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.app_store_connect.distribution_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/app-store-connect/distribution-groups',
  operationId: 'postApiV1App-store-connectDistribution-groups',
};

export const tool: Tool = {
  name: 'distribution_groups_app_store_connect_v1_api_distribution_groups',
  description:
    'Creates a new App Store Connect distribution group for the specified project. Requires admin or owner access.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
      publicLinkEnabled: {
        type: 'boolean',
      },
    },
    required: ['name', 'td-project-id'],
  },
  annotations: {},
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.appStoreConnect.distributionGroups
    .distributionGroups(body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
