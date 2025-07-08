// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.version_config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/version-config',
  operationId: 'getApiV1Version-config',
};

export const tool: Tool = {
  name: 'retrieve_version_config_v1_api_version_config',
  description: 'Fetches the version configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.versionConfig.retrieveVersionConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
