// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.sentry.projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sentry/projects',
  operationId: 'getApiV1SentryProjects',
};

export const tool: Tool = {
  name: 'list_sentry_v1_api_projects',
  description: 'Retrieves all Sentry projects for the configured organization.',
  inputSchema: {
    type: 'object',
    properties: {
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v1.sentry.projects.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
