// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.deep_links',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v1/deep-links/{id}',
  operationId: 'patchApiV1Deep-linksById',
};

export const tool: Tool = {
  name: 'update_v1_api_deep_links',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a deep link (Admin only)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
      android_app_uri: {
        type: 'string',
      },
      android_package_name: {
        type: 'string',
      },
      android_store_url: {
        type: 'string',
      },
      custom_data: {
        type: 'string',
      },
      ios_app_store_id: {
        type: 'string',
      },
      ios_app_uri: {
        type: 'string',
      },
      ios_store_url: {
        type: 'string',
      },
      title: {
        type: 'string',
      },
      web_fallback_url: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'td-project-id'],
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.deepLinks.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
