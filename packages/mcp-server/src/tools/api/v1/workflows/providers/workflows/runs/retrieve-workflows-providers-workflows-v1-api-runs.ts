// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.workflows.providers.workflows.runs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/workflows/providers/{providerType}/workflows/{workflowId}/runs/{runId}',
  operationId: 'getApiV1WorkflowsProvidersByProviderTypeWorkflowsByWorkflowIdRunsByRunId',
};

export const tool: Tool = {
  name: 'retrieve_workflows_providers_workflows_v1_api_runs',
  description: 'Fetches detailed information for a specific workflow execution.',
  inputSchema: {
    type: 'object',
    properties: {
      providerType: {
        type: 'string',
        enum: ['GITHUB', 'BITRISE', 'VERCEL', 'CIRCLE_CI', 'CODE_MAGIC', 'EXPO'],
      },
      workflowId: {
        type: 'string',
      },
      runId: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { runId, ...body } = args as any;
  const response = await client.api.v1.workflows.providers.workflows.runs.retrieve(runId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
