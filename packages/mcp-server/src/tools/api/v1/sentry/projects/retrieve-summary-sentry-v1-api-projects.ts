// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.sentry.projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sentry/projects/summary',
  operationId: 'getApiV1SentryProjectsSummary',
};

export const tool: Tool = {
  name: 'retrieve_summary_sentry_v1_api_projects',
  description: 'Retrieves a summary of all Sentry projects with reduced information.',
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
  const response = await client.api.v1.sentry.projects.retrieveSummary(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
