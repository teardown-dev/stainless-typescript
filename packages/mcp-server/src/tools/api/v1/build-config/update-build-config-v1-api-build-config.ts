// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.build_config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/build-config',
  operationId: 'putApiV1Build-config',
};

export const tool: Tool = {
  name: 'update_build_config_v1_api_build_config',
  description: 'Updates the build configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['NOT_CONFIGURED', 'DISABLED', 'ENABLED'],
      },
      tag_pattern: {
        type: 'string',
      },
      tag_pattern_target: {
        type: 'string',
      },
      workflow_id: {
        type: 'string',
      },
      workflow_provider: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.buildConfig.updateBuildConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
