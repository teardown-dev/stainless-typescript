// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.deep_links',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/deep-links/by-code/{shortCode}',
  operationId: 'getApiV1Deep-linksBy-codeByShortCode',
};

export const tool: Tool = {
  name: 'retrieve_by_short_code_v1_api_deep_links',
  description: 'Get a deep link by its short code (public endpoint)',
  inputSchema: {
    type: 'object',
    properties: {
      shortCode: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { shortCode, ...body } = args as any;
  const response = await client.api.v1.deepLinks.retrieveByShortCode(shortCode).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
