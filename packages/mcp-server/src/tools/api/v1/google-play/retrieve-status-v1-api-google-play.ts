// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.google_play',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/google-play/status',
  operationId: 'getApiV1Google-playStatus',
};

export const tool: Tool = {
  name: 'retrieve_status_v1_api_google_play',
  description:
    'Verifies if the Google Play credentials (service account key) associated with the project ID are valid by attempting a simple API call (listing tracks).',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.googlePlay.retrieveStatus(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
