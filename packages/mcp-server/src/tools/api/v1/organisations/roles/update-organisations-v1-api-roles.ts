// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.organisations.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/organisations/{id}/roles/{userId}',
  operationId: 'putApiV1OrganisationsByIdRolesByUserId',
};

export const tool: Tool = {
  name: 'update_organisations_v1_api_roles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the role of a specific user within an organisation.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      userId: {
        type: 'string',
      },
      role: {
        type: 'string',
        enum: ['OWNER', 'ADMIN', 'DEVELOPER', 'PRODUCT', 'DATA', 'MARKETING'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'userId', 'role'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { userId, ...body } = args as any;
  const response = await client.api.v1.organisations.roles.update(userId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
