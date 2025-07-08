// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.builds',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v1/builds/{buildId}',
  operationId: 'patchApiV1BuildsByBuildId',
};

export const tool: Tool = {
  name: 'update_v1_api_builds',
  description: 'Update a build by ID',
  inputSchema: {
    type: 'object',
    properties: {
      buildId: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
      branch: {
        type: 'string',
      },
      commit_sha: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['RELEASED', 'PENDING', 'DISABLED'],
      },
      version_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { buildId, ...body } = args as any;
  const response = await client.api.v1.builds.update(buildId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
