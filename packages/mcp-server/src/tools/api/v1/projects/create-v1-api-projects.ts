// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/projects',
  operationId: 'postApiV1Projects',
};

export const tool: Tool = {
  name: 'create_v1_api_projects',
  description: 'Creates a new project for an organization. Requires organization-level access.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      organisation_id: {
        type: 'string',
      },
      project_type: {
        type: 'string',
        enum: ['TAURI', 'REACT_NATIVE', 'REACT_NATIVE_EXPO', 'ANDROID', 'IOS', 'LYNX', 'FLUTTER'],
      },
      working_branch: {
        type: 'string',
      },
      git_connection: {
        type: 'string',
        enum: ['GITHUB', 'GITLAB', 'BITBUCKET'],
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.projects.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
