// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/releases',
  operationId: 'getApiV1Releases',
};

export const tool: Tool = {
  name: 'retrieve_releases_api_v1',
  description: 'Fetches all releases for a specific project.',
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
  const response = await client.api.v1.retrieveReleases(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
