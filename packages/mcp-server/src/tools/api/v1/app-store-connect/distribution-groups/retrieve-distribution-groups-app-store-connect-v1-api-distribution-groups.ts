// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.app_store_connect.distribution_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/app-store-connect/distribution-groups',
  operationId: 'getApiV1App-store-connectDistribution-groups',
};

export const tool: Tool = {
  name: 'retrieve_distribution_groups_app_store_connect_v1_api_distribution_groups',
  description:
    'Fetches a list of App Store Connect distribution groups (internal and external testing groups) associated with the specified project ID.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      limit: {
        type: 'number',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.appStoreConnect.distributionGroups
    .retrieveDistributionGroups(body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
