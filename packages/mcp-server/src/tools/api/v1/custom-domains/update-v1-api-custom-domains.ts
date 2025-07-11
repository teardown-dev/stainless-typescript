// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.custom_domains',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v1/custom-domains/{id}',
  operationId: 'patchApiV1Custom-domainsById',
};

export const tool: Tool = {
  name: 'update_v1_api_custom_domains',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a custom domain (Admin only)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
      environment: {
        type: 'string',
        enum: ['PRODUCTION', 'DEVELOPMENT', 'PREVIEW'],
      },
      redirect_type: {
        type: 'number',
      },
      redirect_url: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['NO_DEPLOYMENT', 'CONFIGURED_CORRECTLY', 'VERIFICATION_NEEDED'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.customDomains.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
