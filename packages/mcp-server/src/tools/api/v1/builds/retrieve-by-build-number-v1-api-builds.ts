// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.builds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/builds/build-number/{buildNumber}',
  operationId: 'getApiV1BuildsBuild-numberByBuildNumber',
};

export const tool: Tool = {
  name: 'retrieve_by_build_number_v1_api_builds',
  description: 'Get a build by build number',
  inputSchema: {
    type: 'object',
    properties: {
      buildNumber: {
        type: 'string',
      },
      'td-project-id': {
        type: 'string',
      },
    },
    required: ['buildNumber', 'td-project-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { buildNumber, ...body } = args as any;
  const response = await client.api.v1.builds.retrieveByBuildNumber(buildNumber, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
