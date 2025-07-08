// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.github',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/github/tags',
  operationId: 'getApiV1GithubTags',
};

export const tool: Tool = {
  name: 'retrieve_tags_v1_api_github',
  description:
    'Fetches a paginated list of tags from the GitHub repository associated with the specified project ID.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      page: {
        type: 'number',
      },
      pageSize: {
        type: 'number',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.github.retrieveTags(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
