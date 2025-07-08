// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.tags.release',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/tags/release/commit/{commitSha}',
  operationId: 'getApiV1TagsReleaseCommitByCommitSha',
};

export const tool: Tool = {
  name: 'retrieve_tags_v1_api_release',
  description:
    'Fetches all release tags for the specified project from its linked Git repository for a specific commit.',
  inputSchema: {
    type: 'object',
    properties: {
      commitSha: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { commitSha, ...body } = args as any;
  const response = await client.api.v1.tags.release.retrieve(commitSha, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
