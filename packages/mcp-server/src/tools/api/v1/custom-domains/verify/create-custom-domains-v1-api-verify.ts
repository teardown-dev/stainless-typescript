// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.custom_domains.verify',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/custom-domains/{id}/verify',
  operationId: 'postApiV1Custom-domainsByIdVerify',
};

export const tool: Tool = {
  name: 'create_custom_domains_v1_api_verify',
  description: "Trigger verification of a domain's DNS status (Admin only)",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
    required: ['id', 'td-project-id'],
  },
  annotations: {},
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.customDomains.verify.create(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
