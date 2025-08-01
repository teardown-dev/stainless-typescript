// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.github.repositories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/github/repositories',
  operationId: 'getApiV1GithubRepositories',
};

export const tool: Tool = {
  name: 'list_github_v1_api_repositories',
  description:
    'Fetches a list of repositories accessible by the installed GitHub App for the specified organisation ID.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-organisation-id': {
        type: 'string',
      },
    },
    required: ['td-organisation-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.github.repositories.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
