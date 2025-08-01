// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.release_config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/release-config',
  operationId: 'putApiV1Release-config',
};

export const tool: Tool = {
  name: 'update_release_config_v1_api_release_config',
  description: 'Updates the release configuration for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
      git_branch_pattern: {
        type: 'string',
      },
      git_tag_pattern: {
        type: 'string',
      },
      prepare_version_script_id: {
        type: 'string',
      },
      prepare_workflow_id: {
        type: 'string',
      },
      prepare_workflow_provider: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['NOT_CONFIGURED', 'DISABLED', 'ENABLED'],
      },
    },
    required: ['td-project-id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.releaseConfig.updateReleaseConfig(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
