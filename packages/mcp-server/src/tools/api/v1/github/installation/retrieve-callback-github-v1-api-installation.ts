// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.github.installation',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/github/installation/callback',
  operationId: 'getApiV1GithubInstallationCallback',
};

export const tool: Tool = {
  name: 'retrieve_callback_github_v1_api_installation',
  description:
    'Handles the callback from GitHub after a user installs or authorizes the GitHub App. Associates the installation ID with the organisation based on the state parameter.',
  inputSchema: {
    type: 'object',
    properties: {
      installation_id: {
        type: 'string',
      },
      state: {
        type: 'string',
      },
    },
    required: ['installation_id', 'state'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.github.installation.retrieveCallback(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
