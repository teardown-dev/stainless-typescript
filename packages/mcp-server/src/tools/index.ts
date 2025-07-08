// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import get_status_client from './top-level/get-status-client';
import retrieve_status from './status/retrieve-status';
import retrieve_persons_api_v1 from './api/v1/retrieve-persons-api-v1';
import retrieve_releases_api_v1 from './api/v1/retrieve-releases-api-v1';
import retrieve_status_v1_api_app_store_connect from './api/v1/app-store-connect/retrieve-status-v1-api-app-store-connect';
import token_v1_api_app_store_connect from './api/v1/app-store-connect/token-v1-api-app-store-connect';
import distribution_groups_app_store_connect_v1_api_distribution_groups from './api/v1/app-store-connect/distribution-groups/distribution-groups-app-store-connect-v1-api-distribution-groups';
import retrieve_distribution_groups_app_store_connect_v1_api_distribution_groups from './api/v1/app-store-connect/distribution-groups/retrieve-distribution-groups-app-store-connect-v1-api-distribution-groups';
import retrieve_app_store_connect_v1_api_versions from './api/v1/app-store-connect/versions/retrieve-app-store-connect-v1-api-versions';
import list_app_store_connect_v1_api_versions from './api/v1/app-store-connect/versions/list-app-store-connect-v1-api-versions';
import retrieve_app_store_connect_v1_api_builds from './api/v1/app-store-connect/builds/retrieve-app-store-connect-v1-api-builds';
import list_app_store_connect_v1_api_builds from './api/v1/app-store-connect/builds/list-app-store-connect-v1-api-builds';
import retrieve_appstore_connect_config_v1_api_appstore_connect_config from './api/v1/appstore-connect-config/retrieve-appstore-connect-config-v1-api-appstore-connect-config';
import update_appstore_connect_config_v1_api_appstore_connect_config from './api/v1/appstore-connect-config/update-appstore-connect-config-v1-api-appstore-connect-config';
import retrieve_bitrise_config_v1_api_bitrise_config from './api/v1/bitrise-config/retrieve-bitrise-config-v1-api-bitrise-config';
import update_bitrise_config_v1_api_bitrise_config from './api/v1/bitrise-config/update-bitrise-config-v1-api-bitrise-config';
import retrieve_builds_v1_api_bitrise from './api/v1/bitrise/retrieve-builds-v1-api-bitrise';
import retrieve_v1_api_branches from './api/v1/branches/retrieve-v1-api-branches';
import list_v1_api_branches from './api/v1/branches/list-v1-api-branches';
import retrieve_build_config_v1_api_build_config from './api/v1/build-config/retrieve-build-config-v1-api-build-config';
import update_build_config_v1_api_build_config from './api/v1/build-config/update-build-config-v1-api-build-config';
import retrieve_v1_api_builds from './api/v1/builds/retrieve-v1-api-builds';
import update_v1_api_builds from './api/v1/builds/update-v1-api-builds';
import list_v1_api_builds from './api/v1/builds/list-v1-api-builds';
import retrieve_by_build_number_v1_api_builds from './api/v1/builds/retrieve-by-build-number-v1-api-builds';
import retrieve_v1_api_commits from './api/v1/commits/retrieve-v1-api-commits';
import list_v1_api_commits from './api/v1/commits/list-v1-api-commits';
import retrieve_v1_api_custom_domains from './api/v1/custom-domains/retrieve-v1-api-custom-domains';
import update_v1_api_custom_domains from './api/v1/custom-domains/update-v1-api-custom-domains';
import delete_v1_api_custom_domains from './api/v1/custom-domains/delete-v1-api-custom-domains';
import custom_domains_v1_api_custom_domains from './api/v1/custom-domains/custom-domains-v1-api-custom-domains';
import lookup_by_domain_v1_api_custom_domains from './api/v1/custom-domains/lookup-by-domain-v1-api-custom-domains';
import retrieve_custom_domains_v1_api_custom_domains from './api/v1/custom-domains/retrieve-custom-domains-v1-api-custom-domains';
import create_custom_domains_v1_api_verify from './api/v1/custom-domains/verify/create-custom-domains-v1-api-verify';
import retrieve_custom_domains_v1_api_verify from './api/v1/custom-domains/verify/retrieve-custom-domains-v1-api-verify';
import retrieve_v1_api_deep_links from './api/v1/deep-links/retrieve-v1-api-deep-links';
import update_v1_api_deep_links from './api/v1/deep-links/update-v1-api-deep-links';
import delete_v1_api_deep_links from './api/v1/deep-links/delete-v1-api-deep-links';
import deep_links_v1_api_deep_links from './api/v1/deep-links/deep-links-v1-api-deep-links';
import retrieve_by_short_code_v1_api_deep_links from './api/v1/deep-links/retrieve-by-short-code-v1-api-deep-links';
import retrieve_deep_links_v1_api_deep_links from './api/v1/deep-links/retrieve-deep-links-v1-api-deep-links';
import retrieve_v1_api_distribution_groups from './api/v1/distribution-groups/retrieve-v1-api-distribution-groups';
import retrieve_distribution_groups_v1_api_distribution_groups from './api/v1/distribution-groups/retrieve-distribution-groups-v1-api-distribution-groups';
import retrieve_expo_config_v1_api_expo_config from './api/v1/expo-config/retrieve-expo-config-v1-api-expo-config';
import update_expo_config_v1_api_expo_config from './api/v1/expo-config/update-expo-config-v1-api-expo-config';
import create_v1_api_feedback from './api/v1/feedback/create-v1-api-feedback';
import retrieve_v1_api_feedback from './api/v1/feedback/retrieve-v1-api-feedback';
import list_v1_api_feedback from './api/v1/feedback/list-v1-api-feedback';
import retrieve_tags_v1_api_github from './api/v1/github/retrieve-tags-v1-api-github';
import webhook_v1_api_github from './api/v1/github/webhook-v1-api-github';
import create_github_v1_api_installation from './api/v1/github/installation/create-github-v1-api-installation';
import list_github_v1_api_installation from './api/v1/github/installation/list-github-v1-api-installation';
import retrieve_callback_github_v1_api_installation from './api/v1/github/installation/retrieve-callback-github-v1-api-installation';
import list_github_v1_api_commits from './api/v1/github/commits/list-github-v1-api-commits';
import retrieve_ref_github_v1_api_commits from './api/v1/github/commits/retrieve-ref-github-v1-api-commits';
import list_github_v1_api_branches from './api/v1/github/branches/list-github-v1-api-branches';
import retrieve_ref_github_v1_api_branches from './api/v1/github/branches/retrieve-ref-github-v1-api-branches';
import list_github_v1_api_repositories from './api/v1/github/repositories/list-github-v1-api-repositories';
import connect_github_v1_api_repositories from './api/v1/github/repositories/connect-github-v1-api-repositories';
import retrieve_project_github_v1_api_repositories from './api/v1/github/repositories/retrieve-project-github-v1-api-repositories';
import retrieve_google_play_config_v1_api_google_play_config from './api/v1/google-play-config/retrieve-google-play-config-v1-api-google-play-config';
import update_google_play_config_v1_api_google_play_config from './api/v1/google-play-config/update-google-play-config-v1-api-google-play-config';
import retrieve_builds_v1_api_google_play from './api/v1/google-play/retrieve-builds-v1-api-google-play';
import retrieve_status_v1_api_google_play from './api/v1/google-play/retrieve-status-v1-api-google-play';
import retrieve_google_play_v1_api_distribution_groups from './api/v1/google-play/distribution-groups/retrieve-google-play-v1-api-distribution-groups';
import retrieve_distribution_groups_google_play_v1_api_distribution_groups from './api/v1/google-play/distribution-groups/retrieve-distribution-groups-google-play-v1-api-distribution-groups';
import retrieve_google_play_v1_api_versions from './api/v1/google-play/versions/retrieve-google-play-v1-api-versions';
import list_google_play_v1_api_versions from './api/v1/google-play/versions/list-google-play-v1-api-versions';
import create_v1_api_organisations from './api/v1/organisations/create-v1-api-organisations';
import retrieve_v1_api_organisations from './api/v1/organisations/retrieve-v1-api-organisations';
import update_v1_api_organisations from './api/v1/organisations/update-v1-api-organisations';
import list_v1_api_organisations from './api/v1/organisations/list-v1-api-organisations';
import delete_v1_api_organisations from './api/v1/organisations/delete-v1-api-organisations';
import retrieve_members_v1_api_organisations from './api/v1/organisations/retrieve-members-v1-api-organisations';
import create_organisations_v1_api_roles from './api/v1/organisations/roles/create-organisations-v1-api-roles';
import retrieve_organisations_v1_api_roles from './api/v1/organisations/roles/retrieve-organisations-v1-api-roles';
import update_organisations_v1_api_roles from './api/v1/organisations/roles/update-organisations-v1-api-roles';
import list_organisations_v1_api_roles from './api/v1/organisations/roles/list-organisations-v1-api-roles';
import delete_organisations_v1_api_roles from './api/v1/organisations/roles/delete-organisations-v1-api-roles';
import retrieve_v1_api_integrations from './api/v1/integrations/retrieve-v1-api-integrations';
import update_v1_api_integrations from './api/v1/integrations/update-v1-api-integrations';
import list_v1_api_integrations from './api/v1/integrations/list-v1-api-integrations';
import retrieve_validate_v1_api_integrations from './api/v1/integrations/retrieve-validate-v1-api-integrations';
import retrieve_values_v1_api_integrations from './api/v1/integrations/retrieve-values-v1-api-integrations';
import update_status_v1_api_integrations from './api/v1/integrations/update-status-v1-api-integrations';
import retrieve_ota_update_config_v1_api_ota_update_config from './api/v1/ota-update-config/retrieve-ota-update-config-v1-api-ota-update-config';
import update_ota_update_config_v1_api_ota_update_config from './api/v1/ota-update-config/update-ota-update-config-v1-api-ota-update-config';
import create_v1_api_projects from './api/v1/projects/create-v1-api-projects';
import retrieve_v1_api_projects from './api/v1/projects/retrieve-v1-api-projects';
import update_v1_api_projects from './api/v1/projects/update-v1-api-projects';
import list_v1_api_projects from './api/v1/projects/list-v1-api-projects';
import delete_v1_api_projects from './api/v1/projects/delete-v1-api-projects';
import transfer_v1_api_projects from './api/v1/projects/transfer-v1-api-projects';
import retrieve_release_config_v1_api_release_config from './api/v1/release-config/retrieve-release-config-v1-api-release-config';
import update_release_config_v1_api_release_config from './api/v1/release-config/update-release-config-v1-api-release-config';
import retrieve_v1_api_secrets from './api/v1/secrets/retrieve-v1-api-secrets';
import update_v1_api_secrets from './api/v1/secrets/update-v1-api-secrets';
import retrieve_by_name_v1_api_secrets from './api/v1/secrets/retrieve-by-name-v1-api-secrets';
import retrieve_for_entity_v1_api_secrets from './api/v1/secrets/retrieve-for-entity-v1-api-secrets';
import retrieve_organisation_secret_v1_api_secrets from './api/v1/secrets/retrieve-organisation-secret-v1-api-secrets';
import retrieve_project_secret_v1_api_secrets from './api/v1/secrets/retrieve-project-secret-v1-api-secrets';
import retrieve_user_secret_v1_api_secrets from './api/v1/secrets/retrieve-user-secret-v1-api-secrets';
import retrieve_sentry_config_v1_api_sentry_config from './api/v1/sentry-config/retrieve-sentry-config-v1-api-sentry-config';
import update_sentry_config_v1_api_sentry_config from './api/v1/sentry-config/update-sentry-config-v1-api-sentry-config';
import refresh_token_v1_api_sentry from './api/v1/sentry/refresh-token-v1-api-sentry';
import retrieve_setup_v1_api_sentry from './api/v1/sentry/retrieve-setup-v1-api-sentry';
import create_sentry_v1_api_webhook from './api/v1/sentry/webhook/create-sentry-v1-api-webhook';
import test_sentry_v1_api_webhook from './api/v1/sentry/webhook/test-sentry-v1-api-webhook';
import retrieve_sentry_v1_api_projects from './api/v1/sentry/projects/retrieve-sentry-v1-api-projects';
import list_sentry_v1_api_projects from './api/v1/sentry/projects/list-sentry-v1-api-projects';
import retrieve_search_sentry_v1_api_projects from './api/v1/sentry/projects/retrieve-search-sentry-v1-api-projects';
import retrieve_summary_sentry_v1_api_projects from './api/v1/sentry/projects/retrieve-summary-sentry-v1-api-projects';
import retrieve_v1_api_tags from './api/v1/tags/retrieve-v1-api-tags';
import list_v1_api_tags from './api/v1/tags/list-v1-api-tags';
import retrieve_tags_v1_api_release from './api/v1/tags/release/retrieve-tags-v1-api-release';
import list_tags_v1_api_release from './api/v1/tags/release/list-tags-v1-api-release';
import retrieve_tauri_config_v1_api_tauri_config from './api/v1/tauri-config/retrieve-tauri-config-v1-api-tauri-config';
import update_tauri_config_v1_api_tauri_config from './api/v1/tauri-config/update-tauri-config-v1-api-tauri-config';
import retrieve_current_v1_api_user from './api/v1/user/retrieve-current-v1-api-user';
import retrieve_version_config_v1_api_version_config from './api/v1/version-config/retrieve-version-config-v1-api-version-config';
import update_version_config_v1_api_version_config from './api/v1/version-config/update-version-config-v1-api-version-config';
import retrieve_v1_api_versions from './api/v1/versions/retrieve-v1-api-versions';
import list_v1_api_versions from './api/v1/versions/list-v1-api-versions';
import database_v1_api_webhooks from './api/v1/webhooks/database-v1-api-webhooks';
import auth_hook_webhooks_v1_api_email from './api/v1/webhooks/email/auth-hook-webhooks-v1-api-email';
import retrieve_workflows_v1_api_providers from './api/v1/workflows/providers/retrieve-workflows-v1-api-providers';
import list_workflows_v1_api_providers from './api/v1/workflows/providers/list-workflows-v1-api-providers';
import list_providers_workflows_v1_api_workflows from './api/v1/workflows/providers/workflows/list-providers-workflows-v1-api-workflows';
import retrieve_params_providers_workflows_v1_api_workflows from './api/v1/workflows/providers/workflows/retrieve-params-providers-workflows-v1-api-workflows';
import retrieve_workflows_providers_workflows_v1_api_runs from './api/v1/workflows/providers/workflows/runs/retrieve-workflows-providers-workflows-v1-api-runs';
import list_workflows_providers_workflows_v1_api_runs from './api/v1/workflows/providers/workflows/runs/list-workflows-providers-workflows-v1-api-runs';
import trigger_workflows_providers_workflows_v1_api_runs from './api/v1/workflows/providers/workflows/runs/trigger-workflows-providers-workflows-v1-api-runs';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(get_status_client);
addEndpoint(retrieve_status);
addEndpoint(retrieve_persons_api_v1);
addEndpoint(retrieve_releases_api_v1);
addEndpoint(retrieve_status_v1_api_app_store_connect);
addEndpoint(token_v1_api_app_store_connect);
addEndpoint(distribution_groups_app_store_connect_v1_api_distribution_groups);
addEndpoint(retrieve_distribution_groups_app_store_connect_v1_api_distribution_groups);
addEndpoint(retrieve_app_store_connect_v1_api_versions);
addEndpoint(list_app_store_connect_v1_api_versions);
addEndpoint(retrieve_app_store_connect_v1_api_builds);
addEndpoint(list_app_store_connect_v1_api_builds);
addEndpoint(retrieve_appstore_connect_config_v1_api_appstore_connect_config);
addEndpoint(update_appstore_connect_config_v1_api_appstore_connect_config);
addEndpoint(retrieve_bitrise_config_v1_api_bitrise_config);
addEndpoint(update_bitrise_config_v1_api_bitrise_config);
addEndpoint(retrieve_builds_v1_api_bitrise);
addEndpoint(retrieve_v1_api_branches);
addEndpoint(list_v1_api_branches);
addEndpoint(retrieve_build_config_v1_api_build_config);
addEndpoint(update_build_config_v1_api_build_config);
addEndpoint(retrieve_v1_api_builds);
addEndpoint(update_v1_api_builds);
addEndpoint(list_v1_api_builds);
addEndpoint(retrieve_by_build_number_v1_api_builds);
addEndpoint(retrieve_v1_api_commits);
addEndpoint(list_v1_api_commits);
addEndpoint(retrieve_v1_api_custom_domains);
addEndpoint(update_v1_api_custom_domains);
addEndpoint(delete_v1_api_custom_domains);
addEndpoint(custom_domains_v1_api_custom_domains);
addEndpoint(lookup_by_domain_v1_api_custom_domains);
addEndpoint(retrieve_custom_domains_v1_api_custom_domains);
addEndpoint(create_custom_domains_v1_api_verify);
addEndpoint(retrieve_custom_domains_v1_api_verify);
addEndpoint(retrieve_v1_api_deep_links);
addEndpoint(update_v1_api_deep_links);
addEndpoint(delete_v1_api_deep_links);
addEndpoint(deep_links_v1_api_deep_links);
addEndpoint(retrieve_by_short_code_v1_api_deep_links);
addEndpoint(retrieve_deep_links_v1_api_deep_links);
addEndpoint(retrieve_v1_api_distribution_groups);
addEndpoint(retrieve_distribution_groups_v1_api_distribution_groups);
addEndpoint(retrieve_expo_config_v1_api_expo_config);
addEndpoint(update_expo_config_v1_api_expo_config);
addEndpoint(create_v1_api_feedback);
addEndpoint(retrieve_v1_api_feedback);
addEndpoint(list_v1_api_feedback);
addEndpoint(retrieve_tags_v1_api_github);
addEndpoint(webhook_v1_api_github);
addEndpoint(create_github_v1_api_installation);
addEndpoint(list_github_v1_api_installation);
addEndpoint(retrieve_callback_github_v1_api_installation);
addEndpoint(list_github_v1_api_commits);
addEndpoint(retrieve_ref_github_v1_api_commits);
addEndpoint(list_github_v1_api_branches);
addEndpoint(retrieve_ref_github_v1_api_branches);
addEndpoint(list_github_v1_api_repositories);
addEndpoint(connect_github_v1_api_repositories);
addEndpoint(retrieve_project_github_v1_api_repositories);
addEndpoint(retrieve_google_play_config_v1_api_google_play_config);
addEndpoint(update_google_play_config_v1_api_google_play_config);
addEndpoint(retrieve_builds_v1_api_google_play);
addEndpoint(retrieve_status_v1_api_google_play);
addEndpoint(retrieve_google_play_v1_api_distribution_groups);
addEndpoint(retrieve_distribution_groups_google_play_v1_api_distribution_groups);
addEndpoint(retrieve_google_play_v1_api_versions);
addEndpoint(list_google_play_v1_api_versions);
addEndpoint(create_v1_api_organisations);
addEndpoint(retrieve_v1_api_organisations);
addEndpoint(update_v1_api_organisations);
addEndpoint(list_v1_api_organisations);
addEndpoint(delete_v1_api_organisations);
addEndpoint(retrieve_members_v1_api_organisations);
addEndpoint(create_organisations_v1_api_roles);
addEndpoint(retrieve_organisations_v1_api_roles);
addEndpoint(update_organisations_v1_api_roles);
addEndpoint(list_organisations_v1_api_roles);
addEndpoint(delete_organisations_v1_api_roles);
addEndpoint(retrieve_v1_api_integrations);
addEndpoint(update_v1_api_integrations);
addEndpoint(list_v1_api_integrations);
addEndpoint(retrieve_validate_v1_api_integrations);
addEndpoint(retrieve_values_v1_api_integrations);
addEndpoint(update_status_v1_api_integrations);
addEndpoint(retrieve_ota_update_config_v1_api_ota_update_config);
addEndpoint(update_ota_update_config_v1_api_ota_update_config);
addEndpoint(create_v1_api_projects);
addEndpoint(retrieve_v1_api_projects);
addEndpoint(update_v1_api_projects);
addEndpoint(list_v1_api_projects);
addEndpoint(delete_v1_api_projects);
addEndpoint(transfer_v1_api_projects);
addEndpoint(retrieve_release_config_v1_api_release_config);
addEndpoint(update_release_config_v1_api_release_config);
addEndpoint(retrieve_v1_api_secrets);
addEndpoint(update_v1_api_secrets);
addEndpoint(retrieve_by_name_v1_api_secrets);
addEndpoint(retrieve_for_entity_v1_api_secrets);
addEndpoint(retrieve_organisation_secret_v1_api_secrets);
addEndpoint(retrieve_project_secret_v1_api_secrets);
addEndpoint(retrieve_user_secret_v1_api_secrets);
addEndpoint(retrieve_sentry_config_v1_api_sentry_config);
addEndpoint(update_sentry_config_v1_api_sentry_config);
addEndpoint(refresh_token_v1_api_sentry);
addEndpoint(retrieve_setup_v1_api_sentry);
addEndpoint(create_sentry_v1_api_webhook);
addEndpoint(test_sentry_v1_api_webhook);
addEndpoint(retrieve_sentry_v1_api_projects);
addEndpoint(list_sentry_v1_api_projects);
addEndpoint(retrieve_search_sentry_v1_api_projects);
addEndpoint(retrieve_summary_sentry_v1_api_projects);
addEndpoint(retrieve_v1_api_tags);
addEndpoint(list_v1_api_tags);
addEndpoint(retrieve_tags_v1_api_release);
addEndpoint(list_tags_v1_api_release);
addEndpoint(retrieve_tauri_config_v1_api_tauri_config);
addEndpoint(update_tauri_config_v1_api_tauri_config);
addEndpoint(retrieve_current_v1_api_user);
addEndpoint(retrieve_version_config_v1_api_version_config);
addEndpoint(update_version_config_v1_api_version_config);
addEndpoint(retrieve_v1_api_versions);
addEndpoint(list_v1_api_versions);
addEndpoint(database_v1_api_webhooks);
addEndpoint(auth_hook_webhooks_v1_api_email);
addEndpoint(retrieve_workflows_v1_api_providers);
addEndpoint(list_workflows_v1_api_providers);
addEndpoint(list_providers_workflows_v1_api_workflows);
addEndpoint(retrieve_params_providers_workflows_v1_api_workflows);
addEndpoint(retrieve_workflows_providers_workflows_v1_api_runs);
addEndpoint(list_workflows_providers_workflows_v1_api_runs);
addEndpoint(trigger_workflows_providers_workflows_v1_api_runs);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
