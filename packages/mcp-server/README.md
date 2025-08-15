# Teardown TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export TEARDOWN_API_KEY="My API Key"
npx -y teardown-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "teardown_mcp_api": {
      "command": "npx",
      "args": ["-y", "teardown-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "TEARDOWN_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| -------------------- | ------------------------ | --------------- |
| `x-teardown-api-key` | `apiKey` | bearerAuth |

A configuration JSON for this server might look like this:

```json
{
  "mcpServers": {
    "teardown_mcp_api": {
      "url": "http://localhost:3000", # or wherever the server is hosted
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "teardown-mcp/server";

// import a specific tool
import getStatusClient from "teardown-mcp/tools/top-level/get-status-client";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [getStatusClient, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `$client`:

- `get_status_client` (`read`): Get the status of the server

### Resource `status`:

- `retrieve_status` (`read`): Get the status of the server

### Resource `api.v1`:

- `retrieve_persons_api_v1` (`read`): Get all persons for a project with pagination
- `retrieve_releases_api_v1` (`read`): Fetches all releases for a specific project.

### Resource `api.v1.app_store_connect`:

- `retrieve_status_v1_api_app_store_connect` (`read`): Verifies if the App Store Connect credentials associated with the project ID are valid by attempting a simple API call (listing apps).
- `token_v1_api_app_store_connect` (`write`): Generates a short-lived JWT token for authenticating with the App Store Connect API using the provided credentials. Requires user access to the specified project.

### Resource `api.v1.app_store_connect.distribution_groups`:

- `distribution_groups_app_store_connect_v1_api_distribution_groups` (`write`): Creates a new App Store Connect distribution group for the specified project. Requires admin or owner access.
- `retrieve_distribution_groups_app_store_connect_v1_api_distribution_groups` (`read`): Fetches a list of App Store Connect distribution groups (internal and external testing groups) associated with the specified project ID.

### Resource `api.v1.app_store_connect.versions`:

- `retrieve_app_store_connect_v1_api_versions` (`read`): Fetches details for a specific App Store Connect version by its ID, associated with the specified project ID.
- `list_app_store_connect_v1_api_versions` (`read`): Fetches a list of App Store Connect versions (representing app versions in TestFlight or the App Store) associated with the specified project ID.

### Resource `api.v1.app_store_connect.builds`:

- `retrieve_app_store_connect_v1_api_builds` (`read`): Fetches details for a specific App Store Connect build by its ID, associated with the specified project ID.
- `list_app_store_connect_v1_api_builds` (`read`): Fetches a list of App Store Connect builds associated with the specified project ID.

### Resource `api.v1.appstore_connect_config`:

- `retrieve_appstore_connect_config_v1_api_appstore_connect_config` (`read`): Fetches the App Store Connect configuration for a specific project.
- `update_appstore_connect_config_v1_api_appstore_connect_config` (`write`): Updates the App Store Connect configuration for a specific project.

### Resource `api.v1.bitrise_config`:

- `retrieve_bitrise_config_v1_api_bitrise_config` (`read`): Fetches the Bitrise configuration for a specific project.
- `update_bitrise_config_v1_api_bitrise_config` (`write`): Updates the Bitrise configuration for a specific project.

### Resource `api.v1.bitrise`:

- `retrieve_builds_v1_api_bitrise` (`read`): Fetches the latest Bitrise builds for the specified project ID.

### Resource `api.v1.branches`:

- `retrieve_v1_api_branches` (`read`): Get a single branch by its name
- `list_v1_api_branches` (`read`): Get all branches for a project

### Resource `api.v1.build_config`:

- `retrieve_build_config_v1_api_build_config` (`read`): Fetches the build configuration for a specific project.
- `update_build_config_v1_api_build_config` (`write`): Updates the build configuration for a specific project.

### Resource `api.v1.builds`:

- `retrieve_v1_api_builds` (`read`): Get a build by ID
- `update_v1_api_builds` (`write`): Update a build by ID
- `list_v1_api_builds` (`read`): Get all builds for a project
- `retrieve_by_build_number_v1_api_builds` (`read`): Get a build by build number

### Resource `api.v1.commits`:

- `list_v1_api_commits` (`read`): Fetches the commits for the specified project from its linked Git repository with pagination support.

### Resource `api.v1.custom_domains`:

- `retrieve_v1_api_custom_domains` (`read`): Get a specific custom domain by its ID
- `update_v1_api_custom_domains` (`write`): Update a custom domain (Admin only)
- `delete_v1_api_custom_domains` (`write`): Delete a custom domain (Admin only)
- `custom_domains_v1_api_custom_domains` (`write`): Create a new custom domain for a project (Admin only)
- `lookup_by_domain_v1_api_custom_domains` (`read`): Looks up a custom domain by its name for middleware.
- `retrieve_custom_domains_v1_api_custom_domains` (`read`): Get all custom domains for a project

### Resource `api.v1.custom_domains.verify`:

- `create_custom_domains_v1_api_verify` (`write`): Trigger verification of a domain's DNS status (Admin only)
- `retrieve_custom_domains_v1_api_verify` (`read`): Get DNS verification records for a domain

### Resource `api.v1.deep_links`:

- `retrieve_v1_api_deep_links` (`read`): Get a specific deep link by its ID
- `update_v1_api_deep_links` (`write`): Update a deep link (Admin only)
- `delete_v1_api_deep_links` (`write`): Delete a deep link (Admin only)
- `deep_links_v1_api_deep_links` (`write`): Create a new deep link for a project (Admin only)
- `retrieve_by_short_code_v1_api_deep_links` (`read`): Get a deep link by its short code (public endpoint)
- `retrieve_deep_links_v1_api_deep_links` (`read`): Get all deep links for a project

### Resource `api.v1.distribution_groups`:

- `retrieve_v1_api_distribution_groups` (`read`): Get a specific distribution group by ID
- `retrieve_distribution_groups_v1_api_distribution_groups` (`read`): Get all distribution groups for a project

### Resource `api.v1.expo_config`:

- `retrieve_expo_config_v1_api_expo_config` (`read`): Fetches the Expo configuration for a specific project.
- `update_expo_config_v1_api_expo_config` (`write`): Updates the Expo configuration for a specific project.

### Resource `api.v1.feedback`:

- `create_v1_api_feedback` (`write`): Submit user feedback
- `retrieve_v1_api_feedback` (`read`): Get a specific feedback item by its ID
- `list_v1_api_feedback` (`read`): Get all feedback submitted by the authenticated user

### Resource `api.v1.github`:

- `retrieve_tags_v1_api_github` (`read`): Fetches a paginated list of tags from the GitHub repository associated with the specified project ID.
- `webhook_v1_api_github` (`write`): Receives and processes webhook events sent from GitHub (e.g., installation events, repository changes). This endpoint is typically called by GitHub, not directly by users.

### Resource `api.v1.github.installation`:

- `create_github_v1_api_installation` (`write`): Starts the process for installing the GitHub App for the specified organisation. Returns a URL to redirect the user to GitHub.
- `list_github_v1_api_installation` (`read`): Retrieves details about the GitHub App installation associated with the specified organisation ID.
- `retrieve_callback_github_v1_api_installation` (`read`): Handles the callback from GitHub after a user installs or authorizes the GitHub App. Associates the installation ID with the organisation based on the state parameter.

### Resource `api.v1.github.commits`:

- `list_github_v1_api_commits` (`read`): Fetches a list of commits from the GitHub repository associated with the specified project ID. Optionally filter by starting SHA.
- `retrieve_ref_github_v1_api_commits` (`read`): Fetches details for a specific commit (by SHA, branch, or tag name) from the GitHub repository associated with the specified project ID.

### Resource `api.v1.github.branches`:

- `list_github_v1_api_branches` (`read`): Fetches a list of branches from the GitHub repository associated with the specified project ID.
- `retrieve_ref_github_v1_api_branches` (`read`): Fetches details for a specific branch (by name/ref) from the GitHub repository associated with the specified project ID.

### Resource `api.v1.github.repositories`:

- `list_github_v1_api_repositories` (`read`): Fetches a list of repositories accessible by the installed GitHub App for the specified organisation ID.
- `connect_github_v1_api_repositories` (`write`): Links a specific GitHub repository (by its ID) to the specified project ID, updating the project's owner and repo details.
- `retrieve_project_github_v1_api_repositories` (`read`): Fetches details of the specific GitHub repository linked to the specified project ID.

### Resource `api.v1.google_play_config`:

- `retrieve_google_play_config_v1_api_google_play_config` (`read`): Fetches the Google Play configuration for a specific project.
- `update_google_play_config_v1_api_google_play_config` (`write`): Updates the Google Play configuration for a specific project.

### Resource `api.v1.google_play`:

- `retrieve_builds_v1_api_google_play` (`read`): Fetches a list of internal app sharing builds from Google Play associated with the specified project ID.
- `retrieve_status_v1_api_google_play` (`read`): Verifies if the Google Play credentials (service account key) associated with the project ID are valid by attempting a simple API call (listing tracks).

### Resource `api.v1.google_play.distribution_groups`:

- `retrieve_google_play_v1_api_distribution_groups` (`read`): Fetches details for a specific Google Play testing track by its name (internal, alpha, beta, or production), associated with the specified project ID. Note: These tracks are predefined by Google Play and cannot be created or modified.
- `retrieve_distribution_groups_google_play_v1_api_distribution_groups` (`read`): Fetches a list of Google Play testing tracks (internal, alpha, beta, production) available for the specified project ID. Note: These tracks are predefined by Google Play and cannot be created or modified.

### Resource `api.v1.google_play.versions`:

- `retrieve_google_play_v1_api_versions` (`read`): Fetches details for a specific Google Play app version by its internal ID (likely a version code or similar), associated with the specified project ID.
- `list_google_play_v1_api_versions` (`read`): Fetches a list of app versions from Google Play (across different tracks) associated with the specified project ID.

### Resource `api.v1.organisations`:

- `create_v1_api_organisations` (`write`): Creates a new organisation with the authenticated user as the owner.
- `retrieve_v1_api_organisations` (`read`): Fetches details for a specific organisation by its ID.
- `update_v1_api_organisations` (`write`): Updates the details (e.g., name) of an existing organisation.
- `list_v1_api_organisations` (`read`): Fetches a list of organisations that the currently authenticated user is a member of.
- `delete_v1_api_organisations` (`write`): Deletes an existing organisation by its ID.
- `retrieve_members_v1_api_organisations` (`read`): Fetches a list of all members within a specific organisation.

### Resource `api.v1.organisations.roles`:

- `create_organisations_v1_api_roles` (`write`): Assigns a role to a specific user within an organisation.
- `retrieve_organisations_v1_api_roles` (`read`): Fetches the role of a specific user within a specific organisation.
- `update_organisations_v1_api_roles` (`write`): Updates the role of a specific user within an organisation.
- `list_organisations_v1_api_roles` (`read`): Fetches a list of users and their roles within a specific organisation.
- `delete_organisations_v1_api_roles` (`write`): Removes a user's role assignment from an organisation.

### Resource `api.v1.integrations`:

- `retrieve_v1_api_integrations` (`read`): Get a specific integration
- `update_v1_api_integrations` (`write`): Save the fields for a specific integration type
- `list_v1_api_integrations` (`read`): Get all integrations
- `retrieve_validate_v1_api_integrations` (`read`): Validate the credentials for a specific integration type
- `retrieve_values_v1_api_integrations` (`read`): Get the configuration fields for a specific integration type
- `update_status_v1_api_integrations` (`write`): Update the status of a specific integration type

### Resource `api.v1.ota_update_config`:

- `retrieve_ota_update_config_v1_api_ota_update_config` (`read`): Fetches the OTA Update configuration for a specific project.
- `update_ota_update_config_v1_api_ota_update_config` (`write`): Updates the OTA Update configuration for a specific project.

### Resource `api.v1.projects`:

- `create_v1_api_projects` (`write`): Creates a new project for an organization. Requires organization-level access.
- `retrieve_v1_api_projects` (`read`): Fetches details for a specific project by its ID. Requires project-level access.
- `update_v1_api_projects` (`write`): Updates a project by ID. Requires project-level access.
- `list_v1_api_projects` (`read`): Fetches a list of projects belonging to the organisation associated with the current context (requires organisation-level access).
- `delete_v1_api_projects` (`write`): Deletes a project by ID. Requires project-level access.
- `transfer_v1_api_projects` (`write`): Transfers a project from its current organisation to a new destination organisation. Requires access to both the project and the destination organisation.

### Resource `api.v1.release_config`:

- `retrieve_release_config_v1_api_release_config` (`read`): Fetches the release configuration for a specific project.
- `update_release_config_v1_api_release_config` (`write`): Updates the release configuration for a specific project.

### Resource `api.v1.secrets`:

- `retrieve_v1_api_secrets` (`read`): Fetches the actual value of a secret by its ID
- `update_v1_api_secrets` (`write`): Creates a new secret or updates an existing one
- `retrieve_by_name_v1_api_secrets` (`read`): Fetches a specific secret by entity and name
- `retrieve_for_entity_v1_api_secrets` (`read`): Fetches all secrets for a specific entity (user, organisation, or project)
- `retrieve_organisation_secret_v1_api_secrets` (`read`): Fetches an organisation's secret by name
- `retrieve_project_secret_v1_api_secrets` (`read`): Fetches a project's secret by name
- `retrieve_user_secret_v1_api_secrets` (`read`): Fetches a user's secret by name

### Resource `api.v1.sentry_config`:

- `retrieve_sentry_config_v1_api_sentry_config` (`read`): Fetches the Sentry configuration for a specific project.
- `update_sentry_config_v1_api_sentry_config` (`write`): Updates the Sentry configuration for a specific project.

### Resource `api.v1.sentry`:

- `refresh_token_v1_api_sentry` (`write`): Refresh an expired Sentry authentication token
- `retrieve_setup_v1_api_sentry` (`read`): Handle the OAuth callback from Sentry and complete the integration setup

### Resource `api.v1.sentry.webhook`:

- `create_sentry_v1_api_webhook` (`write`): Receive and process webhooks from Sentry for various events
- `test_sentry_v1_api_webhook` (`write`): Test endpoint to validate webhook signature verification

### Resource `api.v1.sentry.projects`:

- `retrieve_sentry_v1_api_projects` (`read`): Retrieves a specific Sentry project by its slug.
- `list_sentry_v1_api_projects` (`read`): Retrieves all Sentry projects for the configured organization.
- `retrieve_search_sentry_v1_api_projects` (`read`): Search for Sentry projects by name, slug, or platform.
- `retrieve_summary_sentry_v1_api_projects` (`read`): Retrieves a summary of all Sentry projects with reduced information.

### Resource `api.v1.tags`:

- `retrieve_v1_api_tags` (`read`): Fetches details for a specific tag within the specified project's linked Git repository.
- `list_v1_api_tags` (`read`): Fetches all tags for the specified project from its linked Git repository.

### Resource `api.v1.tags.release`:

- `retrieve_tags_v1_api_release` (`read`): Fetches all release tags for the specified project from its linked Git repository for a specific commit.
- `list_tags_v1_api_release` (`read`): Fetches all release tags for the specified project from its linked Git repository.

### Resource `api.v1.tauri_config`:

- `retrieve_tauri_config_v1_api_tauri_config` (`read`): Fetches the Tauri configuration for a specific project.
- `update_tauri_config_v1_api_tauri_config` (`write`): Updates the Tauri configuration for a specific project.

### Resource `api.v1.user`:

- `retrieve_current_v1_api_user` (`read`): Fetches the profile details for the currently authenticated user.

### Resource `api.v1.version_config`:

- `retrieve_version_config_v1_api_version_config` (`read`): Fetches the version configuration for a specific project.
- `update_version_config_v1_api_version_config` (`write`): Updates the version configuration for a specific project.

### Resource `api.v1.versions`:

- `retrieve_v1_api_versions` (`read`): Fetches details for a specific version by its ID.
- `list_v1_api_versions` (`read`): Fetches a paginated list of versions for a specific project.

### Resource `api.v1.webhooks`:

- `database_v1_api_webhooks` (`write`): Receives and processes database change events (e.g., inserts, updates, deletes) sent from Supabase via webhook.

### Resource `api.v1.webhooks.email`:

- `auth_hook_webhooks_v1_api_email` (`write`): Receives and processes authentication-related events (e.g., user signup) sent from Supabase via webhook.

### Resource `api.v1.workflows.providers`:

- `retrieve_workflows_v1_api_providers` (`read`): Fetches details for a specific workflow provider.
- `list_workflows_v1_api_providers` (`read`): Fetches all available workflow providers for the specified project.

### Resource `api.v1.workflows.providers.workflows`:

- `list_providers_workflows_v1_api_workflows` (`read`): Fetches all workflows for a specific provider.
- `retrieve_params_providers_workflows_v1_api_workflows` (`read`): Fetches parameters for a specific workflow.

### Resource `api.v1.workflows.providers.workflows.runs`:

- `retrieve_workflows_providers_workflows_v1_api_runs` (`read`): Fetches detailed information for a specific workflow execution.
- `list_workflows_providers_workflows_v1_api_runs` (`read`): Fetches execution history for a specific workflow. Can be filtered by status.
- `trigger_workflows_providers_workflows_v1_api_runs` (`write`): Triggers a workflow run for a specific workflow provider.
