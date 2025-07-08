// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.github.repositories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/github/repositories/connect',
  operationId: 'postApiV1GithubRepositoriesConnect',
};

export const tool: Tool = {
  name: 'connect_github_v1_api_repositories',
  description:
    "Links a specific GitHub repository (by its ID) to the specified project ID, updating the project's owner and repo details.",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      repositoryId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.github.repositories.connect(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
