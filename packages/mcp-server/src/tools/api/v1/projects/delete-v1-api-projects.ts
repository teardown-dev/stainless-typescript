// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v1/projects/{id}',
  operationId: 'deleteApiV1ProjectsById',
};

export const tool: Tool = {
  name: 'delete_v1_api_projects',
  description: 'Deletes a project by ID. Requires project-level access.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v1.projects.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
