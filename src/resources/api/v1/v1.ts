// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppstoreConnectConfigAPI from './appstore-connect-config';
import {
  AppstoreConnectConfig,
  AppstoreConnectConfigRetrieveAppstoreConnectConfigParams,
  AppstoreConnectConfigUpdateAppstoreConnectConfigParams,
} from './appstore-connect-config';
import * as BitriseAPI from './bitrise';
import { Bitrise, BitriseRetrieveBuildsParams } from './bitrise';
import * as BitriseConfigAPI from './bitrise-config';
import {
  BitriseConfig,
  BitriseConfigRetrieveBitriseConfigParams,
  BitriseConfigUpdateBitriseConfigParams,
} from './bitrise-config';
import * as BranchesAPI from './branches';
import { BranchListParams, BranchRetrieveParams, Branches } from './branches';
import * as BuildConfigAPI from './build-config';
import {
  BuildConfig,
  BuildConfigRetrieveBuildConfigParams,
  BuildConfigUpdateBuildConfigParams,
} from './build-config';
import * as BuildsAPI from './builds';
import {
  BuildListParams,
  BuildRetrieveByBuildNumberParams,
  BuildRetrieveParams,
  BuildUpdateParams,
  Builds,
} from './builds';
import * as CommitsAPI from './commits';
import { CommitListParams, Commits } from './commits';
import * as DeepLinksAPI from './deep-links';
import {
  DeepLinkDeepLinksParams,
  DeepLinkDeleteParams,
  DeepLinkRetrieveDeepLinksParams,
  DeepLinkRetrieveParams,
  DeepLinkUpdateParams,
  DeepLinks,
} from './deep-links';
import * as DistributionGroupsAPI from './distribution-groups';
import {
  DistributionGroupRetrieveDistributionGroupsParams,
  DistributionGroupRetrieveParams,
  DistributionGroups,
} from './distribution-groups';
import * as ExpoConfigAPI from './expo-config';
import {
  ExpoConfig,
  ExpoConfigRetrieveExpoConfigParams,
  ExpoConfigUpdateExpoConfigParams,
} from './expo-config';
import * as FeedbackAPI from './feedback';
import { Feedback, FeedbackCreateParams } from './feedback';
import * as GooglePlayConfigAPI from './google-play-config';
import {
  GooglePlayConfig,
  GooglePlayConfigRetrieveGooglePlayConfigParams,
  GooglePlayConfigUpdateGooglePlayConfigParams,
} from './google-play-config';
import * as IntegrationsAPI from './integrations';
import {
  IntegrationListParams,
  IntegrationRetrieveParams,
  IntegrationRetrieveValidateParams,
  IntegrationRetrieveValuesParams,
  IntegrationUpdateParams,
  IntegrationUpdateStatusParams,
  Integrations,
} from './integrations';
import * as OtaUpdateConfigAPI from './ota-update-config';
import {
  OtaUpdateConfig,
  OtaUpdateConfigRetrieveOtaUpdateConfigParams,
  OtaUpdateConfigUpdateOtaUpdateConfigParams,
} from './ota-update-config';
import * as ProjectsAPI from './projects';
import {
  ProjectCreateParams,
  ProjectListParams,
  ProjectTransferParams,
  ProjectUpdateParams,
  Projects,
} from './projects';
import * as ReleaseConfigAPI from './release-config';
import {
  ReleaseConfig,
  ReleaseConfigRetrieveReleaseConfigParams,
  ReleaseConfigUpdateReleaseConfigParams,
} from './release-config';
import * as SecretsAPI from './secrets';
import {
  SecretRetrieveByNameParams,
  SecretRetrieveForEntityParams,
  SecretRetrieveOrganisationSecretParams,
  SecretRetrieveProjectSecretParams,
  SecretRetrieveUserSecretParams,
  SecretUpdateParams,
  Secrets,
} from './secrets';
import * as SentryConfigAPI from './sentry-config';
import {
  SentryConfig,
  SentryConfigRetrieveSentryConfigParams,
  SentryConfigUpdateSentryConfigParams,
} from './sentry-config';
import * as TauriConfigAPI from './tauri-config';
import {
  TauriConfig,
  TauriConfigRetrieveTauriConfigParams,
  TauriConfigUpdateTauriConfigParams,
} from './tauri-config';
import * as UserAPI from './user';
import { User, UserRetrieveCurrentResponse } from './user';
import * as VersionConfigAPI from './version-config';
import {
  VersionConfig,
  VersionConfigRetrieveVersionConfigParams,
  VersionConfigUpdateVersionConfigParams,
} from './version-config';
import * as VersionsAPI from './versions';
import { VersionListParams, VersionRetrieveParams, Versions } from './versions';
import * as AppStoreConnectAPI from './app-store-connect/app-store-connect';
import {
  AppStoreConnect,
  AppStoreConnectRetrieveStatusParams,
  AppStoreConnectTokenParams,
} from './app-store-connect/app-store-connect';
import * as CustomDomainsAPI from './custom-domains/custom-domains';
import {
  CustomDomainCustomDomainsParams,
  CustomDomainDeleteParams,
  CustomDomainRetrieveCustomDomainsParams,
  CustomDomainRetrieveParams,
  CustomDomainUpdateParams,
  CustomDomains,
} from './custom-domains/custom-domains';
import * as GitHubAPI from './github/github';
import { GitHub, GitHubRetrieveTagsParams } from './github/github';
import * as GooglePlayAPI from './google-play/google-play';
import {
  GooglePlay,
  GooglePlayRetrieveBuildsParams,
  GooglePlayRetrieveStatusParams,
} from './google-play/google-play';
import * as OrganisationsAPI from './organisations/organisations';
import {
  OrganisationCreateParams,
  OrganisationUpdateParams,
  Organisations,
} from './organisations/organisations';
import * as SentryAPI from './sentry/sentry';
import { Sentry, SentryRefreshTokenParams, SentryRetrieveSetupParams } from './sentry/sentry';
import * as TagsAPI from './tags/tags';
import { TagListParams, TagRetrieveParams, Tags } from './tags/tags';
import * as WebhooksAPI from './webhooks/webhooks';
import { Webhooks } from './webhooks/webhooks';
import * as WorkflowsAPI from './workflows/workflows';
import { Workflows } from './workflows/workflows';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  appStoreConnect: AppStoreConnectAPI.AppStoreConnect = new AppStoreConnectAPI.AppStoreConnect(this._client);
  appstoreConnectConfig: AppstoreConnectConfigAPI.AppstoreConnectConfig =
    new AppstoreConnectConfigAPI.AppstoreConnectConfig(this._client);
  bitriseConfig: BitriseConfigAPI.BitriseConfig = new BitriseConfigAPI.BitriseConfig(this._client);
  bitrise: BitriseAPI.Bitrise = new BitriseAPI.Bitrise(this._client);
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  buildConfig: BuildConfigAPI.BuildConfig = new BuildConfigAPI.BuildConfig(this._client);
  builds: BuildsAPI.Builds = new BuildsAPI.Builds(this._client);
  commits: CommitsAPI.Commits = new CommitsAPI.Commits(this._client);
  customDomains: CustomDomainsAPI.CustomDomains = new CustomDomainsAPI.CustomDomains(this._client);
  deepLinks: DeepLinksAPI.DeepLinks = new DeepLinksAPI.DeepLinks(this._client);
  distributionGroups: DistributionGroupsAPI.DistributionGroups = new DistributionGroupsAPI.DistributionGroups(
    this._client,
  );
  expoConfig: ExpoConfigAPI.ExpoConfig = new ExpoConfigAPI.ExpoConfig(this._client);
  feedback: FeedbackAPI.Feedback = new FeedbackAPI.Feedback(this._client);
  github: GitHubAPI.GitHub = new GitHubAPI.GitHub(this._client);
  googlePlayConfig: GooglePlayConfigAPI.GooglePlayConfig = new GooglePlayConfigAPI.GooglePlayConfig(
    this._client,
  );
  googlePlay: GooglePlayAPI.GooglePlay = new GooglePlayAPI.GooglePlay(this._client);
  organisations: OrganisationsAPI.Organisations = new OrganisationsAPI.Organisations(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  otaUpdateConfig: OtaUpdateConfigAPI.OtaUpdateConfig = new OtaUpdateConfigAPI.OtaUpdateConfig(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  releaseConfig: ReleaseConfigAPI.ReleaseConfig = new ReleaseConfigAPI.ReleaseConfig(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  sentryConfig: SentryConfigAPI.SentryConfig = new SentryConfigAPI.SentryConfig(this._client);
  sentry: SentryAPI.Sentry = new SentryAPI.Sentry(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  tauriConfig: TauriConfigAPI.TauriConfig = new TauriConfigAPI.TauriConfig(this._client);
  user: UserAPI.User = new UserAPI.User(this._client);
  versionConfig: VersionConfigAPI.VersionConfig = new VersionConfigAPI.VersionConfig(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);

  /**
   * Get all persons for a project with pagination
   */
  retrievePersons(params: V1RetrievePersonsParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID, ...query } = params;
    return this._client.get('/api/v1/persons', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }

  /**
   * Fetches all releases for a specific project.
   */
  retrieveReleases(params: V1RetrieveReleasesParams, options?: RequestOptions): APIPromise<void> {
    const { 'td-project-id': tdProjectID } = params;
    return this._client.get('/api/v1/releases', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'td-project-id': tdProjectID }, options?.headers]),
    });
  }
}

export interface V1RetrievePersonsParams {
  /**
   * Header param:
   */
  'td-project-id': string;

  /**
   * Query param:
   */
  limit?: string;

  /**
   * Query param:
   */
  offset?: string;
}

export interface V1RetrieveReleasesParams {
  'td-project-id': string;
}

V1.AppStoreConnect = AppStoreConnect;
V1.AppstoreConnectConfig = AppstoreConnectConfig;
V1.BitriseConfig = BitriseConfig;
V1.Bitrise = Bitrise;
V1.Branches = Branches;
V1.BuildConfig = BuildConfig;
V1.Builds = Builds;
V1.Commits = Commits;
V1.CustomDomains = CustomDomains;
V1.DeepLinks = DeepLinks;
V1.DistributionGroups = DistributionGroups;
V1.ExpoConfig = ExpoConfig;
V1.Feedback = Feedback;
V1.GitHub = GitHub;
V1.GooglePlayConfig = GooglePlayConfig;
V1.GooglePlay = GooglePlay;
V1.Organisations = Organisations;
V1.Integrations = Integrations;
V1.OtaUpdateConfig = OtaUpdateConfig;
V1.Projects = Projects;
V1.ReleaseConfig = ReleaseConfig;
V1.Secrets = Secrets;
V1.SentryConfig = SentryConfig;
V1.Sentry = Sentry;
V1.Tags = Tags;
V1.TauriConfig = TauriConfig;
V1.User = User;
V1.VersionConfig = VersionConfig;
V1.Versions = Versions;
V1.Webhooks = Webhooks;
V1.Workflows = Workflows;

export declare namespace V1 {
  export {
    type V1RetrievePersonsParams as V1RetrievePersonsParams,
    type V1RetrieveReleasesParams as V1RetrieveReleasesParams,
  };

  export {
    AppStoreConnect as AppStoreConnect,
    type AppStoreConnectRetrieveStatusParams as AppStoreConnectRetrieveStatusParams,
    type AppStoreConnectTokenParams as AppStoreConnectTokenParams,
  };

  export {
    AppstoreConnectConfig as AppstoreConnectConfig,
    type AppstoreConnectConfigRetrieveAppstoreConnectConfigParams as AppstoreConnectConfigRetrieveAppstoreConnectConfigParams,
    type AppstoreConnectConfigUpdateAppstoreConnectConfigParams as AppstoreConnectConfigUpdateAppstoreConnectConfigParams,
  };

  export {
    BitriseConfig as BitriseConfig,
    type BitriseConfigRetrieveBitriseConfigParams as BitriseConfigRetrieveBitriseConfigParams,
    type BitriseConfigUpdateBitriseConfigParams as BitriseConfigUpdateBitriseConfigParams,
  };

  export { Bitrise as Bitrise, type BitriseRetrieveBuildsParams as BitriseRetrieveBuildsParams };

  export {
    Branches as Branches,
    type BranchRetrieveParams as BranchRetrieveParams,
    type BranchListParams as BranchListParams,
  };

  export {
    BuildConfig as BuildConfig,
    type BuildConfigRetrieveBuildConfigParams as BuildConfigRetrieveBuildConfigParams,
    type BuildConfigUpdateBuildConfigParams as BuildConfigUpdateBuildConfigParams,
  };

  export {
    Builds as Builds,
    type BuildRetrieveParams as BuildRetrieveParams,
    type BuildUpdateParams as BuildUpdateParams,
    type BuildListParams as BuildListParams,
    type BuildRetrieveByBuildNumberParams as BuildRetrieveByBuildNumberParams,
  };

  export { Commits as Commits, type CommitListParams as CommitListParams };

  export {
    CustomDomains as CustomDomains,
    type CustomDomainRetrieveParams as CustomDomainRetrieveParams,
    type CustomDomainUpdateParams as CustomDomainUpdateParams,
    type CustomDomainDeleteParams as CustomDomainDeleteParams,
    type CustomDomainCustomDomainsParams as CustomDomainCustomDomainsParams,
    type CustomDomainRetrieveCustomDomainsParams as CustomDomainRetrieveCustomDomainsParams,
  };

  export {
    DeepLinks as DeepLinks,
    type DeepLinkRetrieveParams as DeepLinkRetrieveParams,
    type DeepLinkUpdateParams as DeepLinkUpdateParams,
    type DeepLinkDeleteParams as DeepLinkDeleteParams,
    type DeepLinkDeepLinksParams as DeepLinkDeepLinksParams,
    type DeepLinkRetrieveDeepLinksParams as DeepLinkRetrieveDeepLinksParams,
  };

  export {
    DistributionGroups as DistributionGroups,
    type DistributionGroupRetrieveParams as DistributionGroupRetrieveParams,
    type DistributionGroupRetrieveDistributionGroupsParams as DistributionGroupRetrieveDistributionGroupsParams,
  };

  export {
    ExpoConfig as ExpoConfig,
    type ExpoConfigRetrieveExpoConfigParams as ExpoConfigRetrieveExpoConfigParams,
    type ExpoConfigUpdateExpoConfigParams as ExpoConfigUpdateExpoConfigParams,
  };

  export { Feedback as Feedback, type FeedbackCreateParams as FeedbackCreateParams };

  export { GitHub as GitHub, type GitHubRetrieveTagsParams as GitHubRetrieveTagsParams };

  export {
    GooglePlayConfig as GooglePlayConfig,
    type GooglePlayConfigRetrieveGooglePlayConfigParams as GooglePlayConfigRetrieveGooglePlayConfigParams,
    type GooglePlayConfigUpdateGooglePlayConfigParams as GooglePlayConfigUpdateGooglePlayConfigParams,
  };

  export {
    GooglePlay as GooglePlay,
    type GooglePlayRetrieveBuildsParams as GooglePlayRetrieveBuildsParams,
    type GooglePlayRetrieveStatusParams as GooglePlayRetrieveStatusParams,
  };

  export {
    Organisations as Organisations,
    type OrganisationCreateParams as OrganisationCreateParams,
    type OrganisationUpdateParams as OrganisationUpdateParams,
  };

  export {
    Integrations as Integrations,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationRetrieveValidateParams as IntegrationRetrieveValidateParams,
    type IntegrationRetrieveValuesParams as IntegrationRetrieveValuesParams,
    type IntegrationUpdateStatusParams as IntegrationUpdateStatusParams,
  };

  export {
    OtaUpdateConfig as OtaUpdateConfig,
    type OtaUpdateConfigRetrieveOtaUpdateConfigParams as OtaUpdateConfigRetrieveOtaUpdateConfigParams,
    type OtaUpdateConfigUpdateOtaUpdateConfigParams as OtaUpdateConfigUpdateOtaUpdateConfigParams,
  };

  export {
    Projects as Projects,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectTransferParams as ProjectTransferParams,
  };

  export {
    ReleaseConfig as ReleaseConfig,
    type ReleaseConfigRetrieveReleaseConfigParams as ReleaseConfigRetrieveReleaseConfigParams,
    type ReleaseConfigUpdateReleaseConfigParams as ReleaseConfigUpdateReleaseConfigParams,
  };

  export {
    Secrets as Secrets,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretRetrieveByNameParams as SecretRetrieveByNameParams,
    type SecretRetrieveForEntityParams as SecretRetrieveForEntityParams,
    type SecretRetrieveOrganisationSecretParams as SecretRetrieveOrganisationSecretParams,
    type SecretRetrieveProjectSecretParams as SecretRetrieveProjectSecretParams,
    type SecretRetrieveUserSecretParams as SecretRetrieveUserSecretParams,
  };

  export {
    SentryConfig as SentryConfig,
    type SentryConfigRetrieveSentryConfigParams as SentryConfigRetrieveSentryConfigParams,
    type SentryConfigUpdateSentryConfigParams as SentryConfigUpdateSentryConfigParams,
  };

  export {
    Sentry as Sentry,
    type SentryRefreshTokenParams as SentryRefreshTokenParams,
    type SentryRetrieveSetupParams as SentryRetrieveSetupParams,
  };

  export { Tags as Tags, type TagRetrieveParams as TagRetrieveParams, type TagListParams as TagListParams };

  export {
    TauriConfig as TauriConfig,
    type TauriConfigRetrieveTauriConfigParams as TauriConfigRetrieveTauriConfigParams,
    type TauriConfigUpdateTauriConfigParams as TauriConfigUpdateTauriConfigParams,
  };

  export { User as User, type UserRetrieveCurrentResponse as UserRetrieveCurrentResponse };

  export {
    VersionConfig as VersionConfig,
    type VersionConfigRetrieveVersionConfigParams as VersionConfigRetrieveVersionConfigParams,
    type VersionConfigUpdateVersionConfigParams as VersionConfigUpdateVersionConfigParams,
  };

  export {
    Versions as Versions,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
  };

  export { Webhooks as Webhooks };

  export { Workflows as Workflows };
}
