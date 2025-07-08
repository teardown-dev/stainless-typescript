// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'teardown-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Teardown from '@teardown/mcp';

export const metadata: Metadata = {
  resource: 'api.v1.custom_domains',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/custom-domains/lookup-by-domain/{domainName}',
  operationId: 'getApiV1Custom-domainsLookup-by-domainByDomainName',
};

export const tool: Tool = {
  name: 'lookup_by_domain_v1_api_custom_domains',
  description: 'Looks up a custom domain by its name for middleware.',
  inputSchema: {
    type: 'object',
    properties: {
      domainName: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Teardown, args: Record<string, unknown> | undefined) => {
  const { domainName, ...body } = args as any;
  const response = await client.api.v1.customDomains.lookupByDomain(domainName).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
