// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.app_store_connect',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/app-store-connect/token',
  operationId: 'postApiV1App-store-connectToken',
};

export const tool: Tool = {
  name: 'token_v1_api_app_store_connect',
  description:
    'Generates a short-lived JWT token for authenticating with the App Store Connect API using the provided credentials. Requires user access to the specified project.',
  inputSchema: {
    type: 'object',
    properties: {
      issuerId: {
        type: 'string',
      },
      privateKey: {
        type: 'string',
      },
      privateKeyId: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
    required: ['issuerId', 'privateKey', 'privateKeyId', 'td-project-id'],
  },
  annotations: {},
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.appStoreConnect.token(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
