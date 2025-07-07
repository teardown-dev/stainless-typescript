# Teardown

Methods:

- <code title="get /">client.<a href="./src/index.ts">getStatus</a>() -> void</code>

# Status

Methods:

- <code title="get /status">client.status.<a href="./src/resources/status.ts">retrieve</a>() -> void</code>

# API

## V1

Methods:

- <code title="get /api/v1/persons">client.api.v1.<a href="./src/resources/api/v1/v1.ts">retrievePersons</a>({ ...params }) -> void</code>
- <code title="get /api/v1/releases">client.api.v1.<a href="./src/resources/api/v1/v1.ts">retrieveReleases</a>({ ...params }) -> void</code>

### AppStoreConnect

Methods:

- <code title="get /api/v1/app-store-connect/status">client.api.v1.appStoreConnect.<a href="./src/resources/api/v1/app-store-connect/app-store-connect.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/v1/app-store-connect/token">client.api.v1.appStoreConnect.<a href="./src/resources/api/v1/app-store-connect/app-store-connect.ts">token</a>({ ...params }) -> void</code>

#### DistributionGroups

Methods:

- <code title="post /api/v1/app-store-connect/distribution-groups">client.api.v1.appStoreConnect.distributionGroups.<a href="./src/resources/api/v1/app-store-connect/distribution-groups.ts">distributionGroups</a>({ ...params }) -> void</code>
- <code title="get /api/v1/app-store-connect/distribution-groups">client.api.v1.appStoreConnect.distributionGroups.<a href="./src/resources/api/v1/app-store-connect/distribution-groups.ts">retrieveDistributionGroups</a>({ ...params }) -> void</code>

#### Versions

Methods:

- <code title="get /api/v1/app-store-connect/versions/{id}">client.api.v1.appStoreConnect.versions.<a href="./src/resources/api/v1/app-store-connect/versions.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/app-store-connect/versions">client.api.v1.appStoreConnect.versions.<a href="./src/resources/api/v1/app-store-connect/versions.ts">list</a>({ ...params }) -> void</code>

#### Builds

Methods:

- <code title="get /api/v1/app-store-connect/builds/{id}">client.api.v1.appStoreConnect.builds.<a href="./src/resources/api/v1/app-store-connect/builds.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/app-store-connect/builds">client.api.v1.appStoreConnect.builds.<a href="./src/resources/api/v1/app-store-connect/builds.ts">list</a>({ ...params }) -> void</code>

### AppstoreConnectConfig

Methods:

- <code title="get /api/v1/appstore-connect-config">client.api.v1.appstoreConnectConfig.<a href="./src/resources/api/v1/appstore-connect-config.ts">retrieveAppstoreConnectConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/appstore-connect-config">client.api.v1.appstoreConnectConfig.<a href="./src/resources/api/v1/appstore-connect-config.ts">updateAppstoreConnectConfig</a>({ ...params }) -> void</code>

### BitriseConfig

Methods:

- <code title="get /api/v1/bitrise-config">client.api.v1.bitriseConfig.<a href="./src/resources/api/v1/bitrise-config.ts">retrieveBitriseConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/bitrise-config">client.api.v1.bitriseConfig.<a href="./src/resources/api/v1/bitrise-config.ts">updateBitriseConfig</a>({ ...params }) -> void</code>

### Bitrise

Methods:

- <code title="get /api/v1/bitrise/builds">client.api.v1.bitrise.<a href="./src/resources/api/v1/bitrise.ts">retrieveBuilds</a>({ ...params }) -> void</code>

### Branches

Methods:

- <code title="get /api/v1/branches/{name}">client.api.v1.branches.<a href="./src/resources/api/v1/branches.ts">retrieve</a>(name, { ...params }) -> void</code>
- <code title="get /api/v1/branches">client.api.v1.branches.<a href="./src/resources/api/v1/branches.ts">list</a>({ ...params }) -> void</code>

### BuildConfig

Methods:

- <code title="get /api/v1/build-config">client.api.v1.buildConfig.<a href="./src/resources/api/v1/build-config.ts">retrieveBuildConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/build-config">client.api.v1.buildConfig.<a href="./src/resources/api/v1/build-config.ts">updateBuildConfig</a>({ ...params }) -> void</code>

### Builds

Methods:

- <code title="get /api/v1/builds/distribution-group/{distributionGroupId}">client.api.v1.builds.<a href="./src/resources/api/v1/builds.ts">retrieve</a>(distributionGroupID, { ...params }) -> void</code>
- <code title="patch /api/v1/builds/{buildId}">client.api.v1.builds.<a href="./src/resources/api/v1/builds.ts">update</a>(buildID, { ...params }) -> void</code>
- <code title="get /api/v1/builds">client.api.v1.builds.<a href="./src/resources/api/v1/builds.ts">list</a>({ ...params }) -> void</code>

### Commits

Methods:

- <code title="get /api/v1/commits/{commitSha}">client.api.v1.commits.<a href="./src/resources/api/v1/commits.ts">retrieve</a>(commitSha, { ...params }) -> void</code>
- <code title="get /api/v1/commits">client.api.v1.commits.<a href="./src/resources/api/v1/commits.ts">list</a>({ ...params }) -> void</code>

### CustomDomains

Methods:

- <code title="get /api/v1/custom-domains/{id}">client.api.v1.customDomains.<a href="./src/resources/api/v1/custom-domains/custom-domains.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="patch /api/v1/custom-domains/{id}">client.api.v1.customDomains.<a href="./src/resources/api/v1/custom-domains/custom-domains.ts">update</a>(id, { ...params }) -> void</code>
- <code title="delete /api/v1/custom-domains/{id}">client.api.v1.customDomains.<a href="./src/resources/api/v1/custom-domains/custom-domains.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/custom-domains">client.api.v1.customDomains.<a href="./src/resources/api/v1/custom-domains/custom-domains.ts">customDomains</a>({ ...params }) -> void</code>
- <code title="get /api/v1/custom-domains">client.api.v1.customDomains.<a href="./src/resources/api/v1/custom-domains/custom-domains.ts">retrieveCustomDomains</a>({ ...params }) -> void</code>

#### Verify

Methods:

- <code title="post /api/v1/custom-domains/{id}/verify">client.api.v1.customDomains.verify.<a href="./src/resources/api/v1/custom-domains/verify.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/custom-domains/verify/{domain}">client.api.v1.customDomains.verify.<a href="./src/resources/api/v1/custom-domains/verify.ts">retrieve</a>(domain, { ...params }) -> void</code>

### DeepLinks

Methods:

- <code title="get /api/v1/deep-links/{id}">client.api.v1.deepLinks.<a href="./src/resources/api/v1/deep-links.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="patch /api/v1/deep-links/{id}">client.api.v1.deepLinks.<a href="./src/resources/api/v1/deep-links.ts">update</a>(id, { ...params }) -> void</code>
- <code title="delete /api/v1/deep-links/{id}">client.api.v1.deepLinks.<a href="./src/resources/api/v1/deep-links.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/v1/deep-links">client.api.v1.deepLinks.<a href="./src/resources/api/v1/deep-links.ts">deepLinks</a>({ ...params }) -> void</code>
- <code title="get /api/v1/deep-links">client.api.v1.deepLinks.<a href="./src/resources/api/v1/deep-links.ts">retrieveDeepLinks</a>({ ...params }) -> void</code>

### DistributionGroups

Methods:

- <code title="get /api/v1/distribution-groups/{groupId}">client.api.v1.distributionGroups.<a href="./src/resources/api/v1/distribution-groups.ts">retrieve</a>(groupID, { ...params }) -> void</code>
- <code title="get /api/v1/distribution-groups">client.api.v1.distributionGroups.<a href="./src/resources/api/v1/distribution-groups.ts">retrieveDistributionGroups</a>({ ...params }) -> void</code>

### ExpoConfig

Methods:

- <code title="get /api/v1/expo-config">client.api.v1.expoConfig.<a href="./src/resources/api/v1/expo-config.ts">retrieveExpoConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/expo-config">client.api.v1.expoConfig.<a href="./src/resources/api/v1/expo-config.ts">updateExpoConfig</a>({ ...params }) -> void</code>

### Feedback

Methods:

- <code title="post /api/v1/feedback">client.api.v1.feedback.<a href="./src/resources/api/v1/feedback.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/feedback/{id}">client.api.v1.feedback.<a href="./src/resources/api/v1/feedback.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/v1/feedback">client.api.v1.feedback.<a href="./src/resources/api/v1/feedback.ts">list</a>() -> void</code>

### GitHub

Methods:

- <code title="get /api/v1/github/tags">client.api.v1.github.<a href="./src/resources/api/v1/github/github.ts">retrieveTags</a>({ ...params }) -> void</code>
- <code title="post /api/v1/github/webhook">client.api.v1.github.<a href="./src/resources/api/v1/github/github.ts">webhook</a>() -> void</code>

#### Installation

Methods:

- <code title="post /api/v1/github/installation">client.api.v1.github.installation.<a href="./src/resources/api/v1/github/installation.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/github/installation">client.api.v1.github.installation.<a href="./src/resources/api/v1/github/installation.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/v1/github/installation/callback">client.api.v1.github.installation.<a href="./src/resources/api/v1/github/installation.ts">retrieveCallback</a>({ ...params }) -> void</code>

#### Commits

Methods:

- <code title="get /api/v1/github/commits">client.api.v1.github.commits.<a href="./src/resources/api/v1/github/commits.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/v1/github/commits/ref">client.api.v1.github.commits.<a href="./src/resources/api/v1/github/commits.ts">retrieveRef</a>({ ...params }) -> void</code>

#### Branches

Methods:

- <code title="get /api/v1/github/branches">client.api.v1.github.branches.<a href="./src/resources/api/v1/github/branches.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/v1/github/branches/ref">client.api.v1.github.branches.<a href="./src/resources/api/v1/github/branches.ts">retrieveRef</a>({ ...params }) -> void</code>

#### Repositories

Methods:

- <code title="get /api/v1/github/repositories">client.api.v1.github.repositories.<a href="./src/resources/api/v1/github/repositories.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/v1/github/repositories/connect">client.api.v1.github.repositories.<a href="./src/resources/api/v1/github/repositories.ts">connect</a>({ ...params }) -> void</code>
- <code title="get /api/v1/github/repositories/project">client.api.v1.github.repositories.<a href="./src/resources/api/v1/github/repositories.ts">retrieveProject</a>({ ...params }) -> void</code>

### GooglePlayConfig

Methods:

- <code title="get /api/v1/google-play-config">client.api.v1.googlePlayConfig.<a href="./src/resources/api/v1/google-play-config.ts">retrieveGooglePlayConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/google-play-config">client.api.v1.googlePlayConfig.<a href="./src/resources/api/v1/google-play-config.ts">updateGooglePlayConfig</a>({ ...params }) -> void</code>

### GooglePlay

Methods:

- <code title="get /api/v1/google-play/builds">client.api.v1.googlePlay.<a href="./src/resources/api/v1/google-play/google-play.ts">retrieveBuilds</a>({ ...params }) -> void</code>
- <code title="get /api/v1/google-play/status">client.api.v1.googlePlay.<a href="./src/resources/api/v1/google-play/google-play.ts">retrieveStatus</a>({ ...params }) -> void</code>

#### DistributionGroups

Methods:

- <code title="get /api/v1/google-play/distribution-groups/{track}">client.api.v1.googlePlay.distributionGroups.<a href="./src/resources/api/v1/google-play/distribution-groups.ts">retrieve</a>(track, { ...params }) -> void</code>
- <code title="get /api/v1/google-play/distribution-groups">client.api.v1.googlePlay.distributionGroups.<a href="./src/resources/api/v1/google-play/distribution-groups.ts">retrieveDistributionGroups</a>({ ...params }) -> void</code>

#### Versions

Methods:

- <code title="get /api/v1/google-play/versions/{id}">client.api.v1.googlePlay.versions.<a href="./src/resources/api/v1/google-play/versions.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/google-play/versions">client.api.v1.googlePlay.versions.<a href="./src/resources/api/v1/google-play/versions.ts">list</a>({ ...params }) -> void</code>

### Organisations

Methods:

- <code title="post /api/v1/organisations">client.api.v1.organisations.<a href="./src/resources/api/v1/organisations/organisations.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/organisations/{id}">client.api.v1.organisations.<a href="./src/resources/api/v1/organisations/organisations.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/v1/organisations/{id}">client.api.v1.organisations.<a href="./src/resources/api/v1/organisations/organisations.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/organisations">client.api.v1.organisations.<a href="./src/resources/api/v1/organisations/organisations.ts">list</a>() -> void</code>
- <code title="delete /api/v1/organisations/{id}">client.api.v1.organisations.<a href="./src/resources/api/v1/organisations/organisations.ts">delete</a>(id) -> void</code>
- <code title="get /api/v1/organisations/{id}/members">client.api.v1.organisations.<a href="./src/resources/api/v1/organisations/organisations.ts">retrieveMembers</a>(id) -> void</code>

#### Roles

Methods:

- <code title="post /api/v1/organisations/{id}/roles">client.api.v1.organisations.roles.<a href="./src/resources/api/v1/organisations/roles.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/organisations/{id}/roles/{userId}">client.api.v1.organisations.roles.<a href="./src/resources/api/v1/organisations/roles.ts">retrieve</a>(userID, { ...params }) -> void</code>
- <code title="put /api/v1/organisations/{id}/roles/{userId}">client.api.v1.organisations.roles.<a href="./src/resources/api/v1/organisations/roles.ts">update</a>(userID, { ...params }) -> void</code>
- <code title="get /api/v1/organisations/{id}/roles">client.api.v1.organisations.roles.<a href="./src/resources/api/v1/organisations/roles.ts">list</a>(id) -> void</code>
- <code title="delete /api/v1/organisations/{id}/roles/{userId}">client.api.v1.organisations.roles.<a href="./src/resources/api/v1/organisations/roles.ts">delete</a>(userID, { ...params }) -> void</code>

### Integrations

Methods:

- <code title="get /api/v1/integrations/{type}">client.api.v1.integrations.<a href="./src/resources/api/v1/integrations.ts">retrieve</a>(type, { ...params }) -> void</code>
- <code title="put /api/v1/integrations/{type}">client.api.v1.integrations.<a href="./src/resources/api/v1/integrations.ts">update</a>(type, { ...params }) -> void</code>
- <code title="get /api/v1/integrations">client.api.v1.integrations.<a href="./src/resources/api/v1/integrations.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/v1/integrations/{type}/validate">client.api.v1.integrations.<a href="./src/resources/api/v1/integrations.ts">retrieveValidate</a>(type, { ...params }) -> void</code>
- <code title="get /api/v1/integrations/{type}/values">client.api.v1.integrations.<a href="./src/resources/api/v1/integrations.ts">retrieveValues</a>(type, { ...params }) -> void</code>
- <code title="put /api/v1/integrations/{type}/status">client.api.v1.integrations.<a href="./src/resources/api/v1/integrations.ts">updateStatus</a>(type, { ...params }) -> void</code>

### OtaUpdateConfig

Methods:

- <code title="get /api/v1/ota-update-config">client.api.v1.otaUpdateConfig.<a href="./src/resources/api/v1/ota-update-config.ts">retrieveOtaUpdateConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/ota-update-config">client.api.v1.otaUpdateConfig.<a href="./src/resources/api/v1/ota-update-config.ts">updateOtaUpdateConfig</a>({ ...params }) -> void</code>

### Projects

Methods:

- <code title="post /api/v1/projects">client.api.v1.projects.<a href="./src/resources/api/v1/projects.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/v1/projects/{id}">client.api.v1.projects.<a href="./src/resources/api/v1/projects.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/v1/projects/{id}">client.api.v1.projects.<a href="./src/resources/api/v1/projects.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/v1/projects">client.api.v1.projects.<a href="./src/resources/api/v1/projects.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/v1/projects/{id}">client.api.v1.projects.<a href="./src/resources/api/v1/projects.ts">delete</a>(id) -> void</code>
- <code title="post /api/v1/projects/transfer">client.api.v1.projects.<a href="./src/resources/api/v1/projects.ts">transfer</a>({ ...params }) -> void</code>

### ReleaseConfig

Methods:

- <code title="get /api/v1/release-config">client.api.v1.releaseConfig.<a href="./src/resources/api/v1/release-config.ts">retrieveReleaseConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/release-config">client.api.v1.releaseConfig.<a href="./src/resources/api/v1/release-config.ts">updateReleaseConfig</a>({ ...params }) -> void</code>

### Secrets

Methods:

- <code title="get /api/v1/secrets/value/{secretId}">client.api.v1.secrets.<a href="./src/resources/api/v1/secrets.ts">retrieve</a>(secretID) -> void</code>
- <code title="put /api/v1/secrets/{entity_type}/{entity_id}/{name}">client.api.v1.secrets.<a href="./src/resources/api/v1/secrets.ts">update</a>(name, { ...params }) -> void</code>

### SentryConfig

Methods:

- <code title="get /api/v1/sentry-config">client.api.v1.sentryConfig.<a href="./src/resources/api/v1/sentry-config.ts">retrieveSentryConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/sentry-config">client.api.v1.sentryConfig.<a href="./src/resources/api/v1/sentry-config.ts">updateSentryConfig</a>({ ...params }) -> void</code>

### Sentry

Methods:

- <code title="post /api/v1/sentry/refresh-token">client.api.v1.sentry.<a href="./src/resources/api/v1/sentry/sentry.ts">refreshToken</a>({ ...params }) -> void</code>
- <code title="get /api/v1/sentry/setup">client.api.v1.sentry.<a href="./src/resources/api/v1/sentry/sentry.ts">retrieveSetup</a>({ ...params }) -> void</code>

#### Webhook

Methods:

- <code title="post /api/v1/sentry/webhook">client.api.v1.sentry.webhook.<a href="./src/resources/api/v1/sentry/webhook.ts">create</a>({ ...params }) -> void</code>
- <code title="post /api/v1/sentry/webhook/test">client.api.v1.sentry.webhook.<a href="./src/resources/api/v1/sentry/webhook.ts">test</a>({ ...params }) -> void</code>

#### Projects

Methods:

- <code title="get /api/v1/sentry/projects/{slug}">client.api.v1.sentry.projects.<a href="./src/resources/api/v1/sentry/projects.ts">retrieve</a>(slug, { ...params }) -> void</code>
- <code title="get /api/v1/sentry/projects">client.api.v1.sentry.projects.<a href="./src/resources/api/v1/sentry/projects.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/v1/sentry/projects/search">client.api.v1.sentry.projects.<a href="./src/resources/api/v1/sentry/projects.ts">retrieveSearch</a>({ ...params }) -> void</code>
- <code title="get /api/v1/sentry/projects/summary">client.api.v1.sentry.projects.<a href="./src/resources/api/v1/sentry/projects.ts">retrieveSummary</a>({ ...params }) -> void</code>

### Tags

Methods:

- <code title="get /api/v1/tags/{tagName}">client.api.v1.tags.<a href="./src/resources/api/v1/tags/tags.ts">retrieve</a>(tagName, { ...params }) -> void</code>
- <code title="get /api/v1/tags">client.api.v1.tags.<a href="./src/resources/api/v1/tags/tags.ts">list</a>({ ...params }) -> void</code>

#### Release

Methods:

- <code title="get /api/v1/tags/release/commit/{commitSha}">client.api.v1.tags.release.<a href="./src/resources/api/v1/tags/release.ts">retrieve</a>(commitSha, { ...params }) -> void</code>
- <code title="get /api/v1/tags/release">client.api.v1.tags.release.<a href="./src/resources/api/v1/tags/release.ts">list</a>({ ...params }) -> void</code>

### TauriConfig

Methods:

- <code title="get /api/v1/tauri-config">client.api.v1.tauriConfig.<a href="./src/resources/api/v1/tauri-config.ts">retrieveTauriConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/tauri-config">client.api.v1.tauriConfig.<a href="./src/resources/api/v1/tauri-config.ts">updateTauriConfig</a>({ ...params }) -> void</code>

### User

Types:

- <code><a href="./src/resources/api/v1/user.ts">UserRetrieveCurrentResponse</a></code>

Methods:

- <code title="get /api/v1/user/current">client.api.v1.user.<a href="./src/resources/api/v1/user.ts">retrieveCurrent</a>() -> UserRetrieveCurrentResponse</code>

### VersionConfig

Methods:

- <code title="get /api/v1/version-config">client.api.v1.versionConfig.<a href="./src/resources/api/v1/version-config.ts">retrieveVersionConfig</a>({ ...params }) -> void</code>
- <code title="put /api/v1/version-config">client.api.v1.versionConfig.<a href="./src/resources/api/v1/version-config.ts">updateVersionConfig</a>({ ...params }) -> void</code>

### Versions

Methods:

- <code title="get /api/v1/versions/{versionId}">client.api.v1.versions.<a href="./src/resources/api/v1/versions.ts">retrieve</a>(versionID, { ...params }) -> void</code>
- <code title="get /api/v1/versions">client.api.v1.versions.<a href="./src/resources/api/v1/versions.ts">list</a>({ ...params }) -> void</code>

### Webhooks

Methods:

- <code title="post /api/v1/webhooks/database">client.api.v1.webhooks.<a href="./src/resources/api/v1/webhooks/webhooks.ts">database</a>() -> void</code>

#### Email

Methods:

- <code title="post /api/v1/webhooks/email/auth-hook">client.api.v1.webhooks.email.<a href="./src/resources/api/v1/webhooks/email.ts">authHook</a>() -> void</code>

### Workflows

#### Providers

Methods:

- <code title="get /api/v1/workflows/providers/{providerType}">client.api.v1.workflows.providers.<a href="./src/resources/api/v1/workflows/providers/providers.ts">retrieve</a>(providerType, { ...params }) -> void</code>
- <code title="get /api/v1/workflows/providers">client.api.v1.workflows.providers.<a href="./src/resources/api/v1/workflows/providers/providers.ts">list</a>({ ...params }) -> void</code>

##### Workflows

Methods:

- <code title="get /api/v1/workflows/providers/{providerType}/workflows">client.api.v1.workflows.providers.workflows.<a href="./src/resources/api/v1/workflows/providers/workflows/workflows.ts">list</a>(providerType, { ...params }) -> void</code>
- <code title="get /api/v1/workflows/providers/{providerType}/workflows/{workflowId}/params">client.api.v1.workflows.providers.workflows.<a href="./src/resources/api/v1/workflows/providers/workflows/workflows.ts">retrieveParams</a>(workflowID, { ...params }) -> void</code>

###### Runs

Methods:

- <code title="get /api/v1/workflows/providers/{providerType}/workflows/{workflowId}/runs/{runId}">client.api.v1.workflows.providers.workflows.runs.<a href="./src/resources/api/v1/workflows/providers/workflows/runs.ts">retrieve</a>(runID, { ...params }) -> void</code>
- <code title="get /api/v1/workflows/providers/{providerType}/workflows/{workflowId}/runs">client.api.v1.workflows.providers.workflows.runs.<a href="./src/resources/api/v1/workflows/providers/workflows/runs.ts">list</a>(workflowID, { ...params }) -> void</code>
- <code title="post /api/v1/workflows/providers/{providerType}/workflows/{workflowId}/runs/trigger">client.api.v1.workflows.providers.workflows.runs.<a href="./src/resources/api/v1/workflows/providers/workflows/runs.ts">trigger</a>(workflowID, { ...params }) -> void</code>
