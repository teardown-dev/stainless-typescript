// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/projects/transfer',
  operationId: 'postApiV1ProjectsTransfer',
};

export const tool: Tool = {
  name: 'transfer_v1_api_projects',
  description:
    'Transfers a project from its current organisation to a new destination organisation. Requires access to both the project and the destination organisation.',
  inputSchema: {
    type: 'object',
    properties: {
      destination_org_id: {
        type: 'string',
      },
      project_id: {
        type: 'string',
      },
    },
    required: ['destination_org_id', 'project_id'],
  },
  annotations: {},
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.projects.transfer(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
