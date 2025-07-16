// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.app_store_connect.distribution_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/app-store-connect/distribution-groups',
  operationId: 'postApiV1App-store-connectDistribution-groups',
};

export const tool: Tool = {
  name: 'distribution_groups_app_store_connect_v1_api_distribution_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new App Store Connect distribution group for the specified project. Requires admin or owner access.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
      publicLinkEnabled: {
        type: 'boolean',
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
  const body = args as any;
  const response = await client.api.v1.appStoreConnect.distributionGroups
    .distributionGroups(body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
