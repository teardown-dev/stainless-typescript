// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.organisations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/organisations',
  operationId: 'getApiV1Organisations',
};

export const tool: Tool = {
  name: 'list_v1_api_organisations',
  description: 'Fetches a list of organisations that the currently authenticated user is a member of.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const response = await client.api.v1.organisations.list().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
