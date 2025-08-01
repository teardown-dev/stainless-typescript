// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.github.branches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/github/branches/ref',
  operationId: 'getApiV1GithubBranchesRef',
};

export const tool: Tool = {
  name: 'retrieve_ref_github_v1_api_branches',
  description:
    'Fetches details for a specific branch (by name/ref) from the GitHub repository associated with the specified project ID.',
  inputSchema: {
    type: 'object',
    properties: {
      ref: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
    required: ['ref', 'td-project-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.github.branches.retrieveRef(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
