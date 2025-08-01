// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.app_store_connect.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/app-store-connect/versions/{id}',
  operationId: 'getApiV1App-store-connectVersionsById',
};

export const tool: Tool = {
  name: 'retrieve_app_store_connect_v1_api_versions',
  description:
    'Fetches details for a specific App Store Connect version by its ID, associated with the specified project ID.',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.appStoreConnect.versions.retrieve(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
