// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.google_play',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/google-play/builds',
  operationId: 'getApiV1Google-playBuilds',
};

export const tool: Tool = {
  name: 'retrieve_builds_v1_api_google_play',
  description:
    'Fetches a list of internal app sharing builds from Google Play associated with the specified project ID.',
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
    required: ['td-project-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.googlePlay.retrieveBuilds(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
