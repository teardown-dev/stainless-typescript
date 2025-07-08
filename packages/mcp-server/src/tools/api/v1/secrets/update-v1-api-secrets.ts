// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/secrets/{entity_type}/{entity_id}/{name}',
  operationId: 'putApiV1SecretsByEntity_typeByEntity_idByName',
};

export const tool: Tool = {
  name: 'update_v1_api_secrets',
  description: 'Creates a new secret or updates an existing one',
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
      name: {
        type: 'string',
      },
      value: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  const response = await client.api.v1.secrets.update(name, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
