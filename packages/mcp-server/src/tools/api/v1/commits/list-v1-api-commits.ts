// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.commits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/commits',
  operationId: 'getApiV1Commits',
};

export const tool: Tool = {
  name: 'list_v1_api_commits',
  description:
    'Fetches the commits for the specified project from its linked Git repository with pagination support.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      branch_name: {
        type: 'string',
      },
      commit_sha: {
        type: 'string',
      },
      page: {
        type: 'number',
      },
      per_page: {
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
  const response = await client.api.v1.commits.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
