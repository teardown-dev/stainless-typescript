// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.tags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/tags/{tagName}',
  operationId: 'getApiV1TagsByTagName',
};

export const tool: Tool = {
  name: 'retrieve_v1_api_tags',
  description: "Fetches details for a specific tag within the specified project's linked Git repository.",
  inputSchema: {
    type: 'object',
    properties: {
      tagName: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
    required: ['tagName', 'td-project-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { tagName, ...body } = args as any;
  const response = await client.api.v1.tags.retrieve(tagName, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
