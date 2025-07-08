// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.custom_domains',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/custom-domains',
  operationId: 'postApiV1Custom-domains',
};

export const tool: Tool = {
  name: 'custom_domains_v1_api_custom_domains',
  description: 'Create a new custom domain for a project (Admin only)',
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
      },
      environment: {
        type: 'string',
        enum: ['PRODUCTION', 'DEVELOPMENT', 'PREVIEW'],
      },
      'td-project-id': {
        type: 'string',
      },
      redirect_type: {
        type: 'number',
      },
      redirect_url: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.customDomains.customDomains(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
