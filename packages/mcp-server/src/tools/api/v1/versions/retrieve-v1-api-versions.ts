// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/versions/{versionId}',
  operationId: 'getApiV1VersionsByVersionId',
};

export const tool: Tool = {
  name: 'retrieve_v1_api_versions',
  description: 'Fetches details for a specific version by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      versionId: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { versionId, ...body } = args as any;
  const response = await client.api.v1.versions.retrieve(versionId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
