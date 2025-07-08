// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/secrets/{entity_type}/{entity_id}',
  operationId: 'getApiV1SecretsByEntity_typeByEntity_id',
};

export const tool: Tool = {
  name: 'retrieve_for_entity_v1_api_secrets',
  description: 'Fetches all secrets for a specific entity (user, organisation, or project)',
  inputSchema: {
    type: 'object',
    properties: {
      entity_type: {
        type: 'string',
        enum: ['user', 'organisation', 'project'],
      },
      entity_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { entity_id, ...body } = args as any;
  const response = await client.api.v1.secrets.retrieveForEntity(entity_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
