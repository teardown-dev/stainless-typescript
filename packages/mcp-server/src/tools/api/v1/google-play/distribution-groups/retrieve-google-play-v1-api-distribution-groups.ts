// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.google_play.distribution_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/google-play/distribution-groups/{track}',
  operationId: 'getApiV1Google-playDistribution-groupsByTrack',
};

export const tool: Tool = {
  name: 'retrieve_google_play_v1_api_distribution_groups',
  description:
    'Fetches details for a specific Google Play testing track by its name (internal, alpha, beta, or production), associated with the specified project ID. Note: These tracks are predefined by Google Play and cannot be created or modified.',
  inputSchema: {
    type: 'object',
    properties: {
      track: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { track, ...body } = args as any;
  const response = await client.api.v1.googlePlay.distributionGroups.retrieve(track, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
