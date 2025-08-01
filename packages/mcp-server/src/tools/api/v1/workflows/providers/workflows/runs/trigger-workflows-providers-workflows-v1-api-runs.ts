// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.workflows.providers.workflows.runs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/workflows/providers/{providerType}/workflows/{workflowId}/runs/trigger',
  operationId: 'postApiV1WorkflowsProvidersByProviderTypeWorkflowsByWorkflowIdRunsTrigger',
};

export const tool: Tool = {
  name: 'trigger_workflows_providers_workflows_v1_api_runs',
  description: 'Triggers a workflow run for a specific workflow provider.',
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
      branchName: {
        type: 'string',
      },
      commitSha: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
      inputs: {
        type: 'object',
      },
    },
    required: ['providerType', 'workflowId', 'branchName', 'commitSha', 'td-project-id'],
  },
  annotations: {},
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { workflowId, ...body } = args as any;
  const response = await client.api.v1.workflows.providers.workflows.runs
    .trigger(workflowId, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
