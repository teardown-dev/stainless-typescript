// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.google_play.distribution_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/google-play/distribution-groups',
  operationId: 'getApiV1Google-playDistribution-groups',
};

export const tool: Tool = {
  name: 'retrieve_distribution_groups_google_play_v1_api_distribution_groups',
  description:
    'Fetches a list of Google Play testing tracks (internal, alpha, beta, production) available for the specified project ID. Note: These tracks are predefined by Google Play and cannot be created or modified.',
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
  const response = await client.api.v1.googlePlay.distributionGroups
    .retrieveDistributionGroups(body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
