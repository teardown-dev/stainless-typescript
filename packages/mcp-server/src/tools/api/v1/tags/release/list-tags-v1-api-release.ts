// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.tags.release',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/tags/release',
  operationId: 'getApiV1TagsRelease',
};

export const tool: Tool = {
  name: 'list_tags_v1_api_release',
  description: 'Fetches all release tags for the specified project from its linked Git repository.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
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
  const response = await client.api.v1.tags.release.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
