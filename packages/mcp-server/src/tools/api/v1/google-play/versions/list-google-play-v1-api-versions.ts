// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.google_play.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/google-play/versions',
  operationId: 'getApiV1Google-playVersions',
};

export const tool: Tool = {
  name: 'list_google_play_v1_api_versions',
  description:
    'Fetches a list of app versions from Google Play (across different tracks) associated with the specified project ID.',
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
  const response = await client.api.v1.googlePlay.versions.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
