// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.workflows.providers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/workflows/providers',
  operationId: 'getApiV1WorkflowsProviders',
};

export const tool: Tool = {
  name: 'list_workflows_v1_api_providers',
  description: 'Fetches all available workflow providers for the specified project.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
    },
    required: ['td-project-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.workflows.providers.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
