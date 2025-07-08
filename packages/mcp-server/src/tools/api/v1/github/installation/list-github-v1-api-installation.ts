// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.github.installation',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/github/installation',
  operationId: 'getApiV1GithubInstallation',
};

export const tool: Tool = {
  name: 'list_github_v1_api_installation',
  description:
    'Retrieves details about the GitHub App installation associated with the specified organisation ID.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-organisation-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.github.installation.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
