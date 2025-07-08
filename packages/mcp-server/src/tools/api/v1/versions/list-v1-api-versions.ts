// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/versions',
  operationId: 'getApiV1Versions',
};

export const tool: Tool = {
  name: 'list_v1_api_versions',
  description: 'Fetches a paginated list of versions for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      page: {
        type: 'number',
      },
      page_size: {
        type: 'number',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.versions.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
