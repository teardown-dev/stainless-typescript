// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.github.branches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/github/branches',
  operationId: 'getApiV1GithubBranches',
};

export const tool: Tool = {
  name: 'list_github_v1_api_branches',
  description:
    'Fetches a list of branches from the GitHub repository associated with the specified project ID.',
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
  const response = await client.api.v1.github.branches.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
