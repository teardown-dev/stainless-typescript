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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches details for a specific tag within the specified project's linked Git repository.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      tagName: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['tagName', 'td-project-id'],
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { tagName, ...body } = args as any;
  const response = await client.api.v1.tags.retrieve(tagName, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
