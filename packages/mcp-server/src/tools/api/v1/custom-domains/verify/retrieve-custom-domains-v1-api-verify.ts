// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.custom_domains.verify',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/custom-domains/verify/{domain}',
  operationId: 'getApiV1Custom-domainsVerifyByDomain',
};

export const tool: Tool = {
  name: 'retrieve_custom_domains_v1_api_verify',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet DNS verification records for a domain\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
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
    required: ['domain', 'td-project-id'],
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { domain, ...body } = args as any;
  const response = await client.api.v1.customDomains.verify.retrieve(domain, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
