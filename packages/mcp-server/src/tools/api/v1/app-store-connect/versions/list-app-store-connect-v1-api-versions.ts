// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.app_store_connect.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/app-store-connect/versions',
  operationId: 'getApiV1App-store-connectVersions',
};

export const tool: Tool = {
  name: 'list_app_store_connect_v1_api_versions',
  description:
    'Fetches a list of App Store Connect versions (representing app versions in TestFlight or the App Store) associated with the specified project ID.',
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
  const response = await client.api.v1.appStoreConnect.versions.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
