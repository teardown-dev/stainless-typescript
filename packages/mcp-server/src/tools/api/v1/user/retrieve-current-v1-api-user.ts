// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'teardown-mcp/filtering';
import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/user/current',
  operationId: 'getApiV1UserCurrent',
};

export const tool: Tool = {
  name: 'retrieve_current_v1_api_user',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the profile details for the currently authenticated user.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    created_at: {\n      type: 'string'\n    },\n    email: {\n      type: 'string'\n    },\n    invite_code: {\n      type: 'string'\n    },\n    name: {\n      type: 'string'\n    },\n    status: {\n      type: 'string',\n      enum: [        'PENDING',\n        'ACTIVE',\n        'DELETED',\n        'DISABLED'\n      ]\n    },\n    updated_at: {\n      type: 'string'\n    },\n    user_code: {\n      type: 'string'\n    }\n  },\n  required: [    'id',\n    'created_at',\n    'email',\n    'invite_code',\n    'name',\n    'status',\n    'updated_at',\n    'user_code'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.api.v1.user.retrieveCurrent()));
};

export default { metadata, tool, handler };
