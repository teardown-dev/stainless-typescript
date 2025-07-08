// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.deep_links',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/deep-links',
  operationId: 'postApiV1Deep-links',
};

export const tool: Tool = {
  name: 'deep_links_v1_api_deep_links',
  description: 'Create a new deep link for a project (Admin only)',
  inputSchema: {
    type: 'object',
    properties: {
      short_code: {
        type: 'string',
      },
      title: {
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
      web_fallback_url: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.deepLinks.deepLinks(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
