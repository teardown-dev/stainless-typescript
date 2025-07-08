// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.workflows.providers.workflows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/workflows/providers/{providerType}/workflows',
  operationId: 'getApiV1WorkflowsProvidersByProviderTypeWorkflows',
};

export const tool: Tool = {
  name: 'list_providers_workflows_v1_api_workflows',
  description: 'Fetches all workflows for a specific provider.',
  inputSchema: {
    type: 'object',
    properties: {
      providerType: {
        type: 'string',
        enum: ['GITHUB', 'BITRISE', 'VERCEL', 'CIRCLE_CI', 'CODE_MAGIC', 'EXPO'],
      },
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { providerType, ...body } = args as any;
  const response = await client.api.v1.workflows.providers.workflows.list(providerType, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
