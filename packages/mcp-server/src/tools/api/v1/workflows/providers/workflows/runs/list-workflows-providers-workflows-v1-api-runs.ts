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
  httpPath: '/api/v1/workflows/providers/{providerType}/workflows/{workflowId}/runs',
  operationId: 'getApiV1WorkflowsProvidersByProviderTypeWorkflowsByWorkflowIdRuns',
};

export const tool: Tool = {
  name: 'list_workflows_providers_workflows_v1_api_runs',
  description: 'Fetches execution history for a specific workflow. Can be filtered by status.',
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
      'td-project-id': {
        type: 'string',
      },
      commit_sha: {
        type: 'string',
      },
      limit: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'number',
          },
        ],
      },
      page: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'number',
          },
        ],
      },
      status: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['UNKNOWN', 'IDLE', 'IN_PROGRESS', 'SUCCESS', 'FAILED', 'CANCELLED'],
        },
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { workflowId, ...body } = args as any;
  const response = await client.api.v1.workflows.providers.workflows.runs.list(workflowId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
