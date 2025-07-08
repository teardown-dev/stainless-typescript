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
  httpPath: '/api/v1/sentry/projects/{slug}',
  operationId: 'getApiV1SentryProjectsBySlug',
};

export const tool: Tool = {
  name: 'retrieve_sentry_v1_api_projects',
  description: 'Retrieves a specific Sentry project by its slug.',
  inputSchema: {
    type: 'object',
    properties: {
      slug: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { slug, ...body } = args as any;
  const response = await client.api.v1.sentry.projects.retrieve(slug, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
