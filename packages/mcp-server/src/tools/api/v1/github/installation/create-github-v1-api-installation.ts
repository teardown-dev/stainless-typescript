// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.github.installation',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/github/installation',
  operationId: 'postApiV1GithubInstallation',
};

export const tool: Tool = {
  name: 'create_github_v1_api_installation',
  description:
    'Starts the process for installing the GitHub App for the specified organisation. Returns a URL to redirect the user to GitHub.',
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
  const response = await client.api.v1.github.installation.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
