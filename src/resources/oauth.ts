// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Access to our API is authorized using the [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) authorization framework.
 *
 * To get started, you will need to create an API Client and obtain a client ID and secret.
 *
 * Users can then be authorized by providing a link to our authorization url:
 *
 * ```html
 * <a href="https://api.hammerhead.io/v1/auth/oauth/authorize
 *   ?client_id={client_id}
 *   &redirect_uri={redirect_uri}
 *   &response_type=code
 *   &scope={scope}
 *   &state={state}"
 * />
 * ```
 *
 * This will redirect users to our OAuth Confirm page where users will be allowed to
 * select a subset of scopes from the ones requested. Scopes should be space delimited.
 *
 * On deny, users will be sent to the `redirect_uri` with an error set:
 *
 * ```
 * {redirect_uri}?error=access_denied&state={state}
 * ```
 *
 * On accept, users accounts will be linked with the selected scopes and will be sent to
 * the `redirect_uri` with the auth code and state:
 *
 * ```
 * {redirect_uri}?code={code}&state={state}
 * ```
 *
 * Once code and state are received, they can be exchanged for an access token using the `/oauth/token` endpoint.
 *
 * This bearer token can then be used to access our API endpoints.
 */
export class OAuth extends APIResource {
  /**
   * Authorize redirect endpoint to obtain consent from users.
   */
  authorize(query: OAuthAuthorizeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/oauth/authorize', {
      query,
      defaultBaseURL: 'https://api.hammerhead.io/v1/auth',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove a user's account link, all of their imported routes and workouts, and
   * removes their current refresh tokens.
   */
  deauthorize(body: OAuthDeauthorizeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/oauth/deauthorize', {
      body,
      defaultBaseURL: 'https://api.hammerhead.io/v1/auth',
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/x-www-form-urlencoded', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Exchange authorization codes or refresh tokens for a new bearer token.
   */
  exchangeToken(
    body: OAuthExchangeTokenParams,
    options?: RequestOptions,
  ): APIPromise<OAuthExchangeTokenResponse> {
    return this._client.post('/oauth/token', {
      body,
      defaultBaseURL: 'https://api.hammerhead.io/v1/auth',
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface OAuthExchangeTokenResponse {
  access_token?: string;

  expires_in?: number;

  refresh_token?: string;

  token_type?: string;

  user_id?: string;
}

export interface OAuthAuthorizeParams {
  /**
   * Your client ID
   */
  client_id: string;

  /**
   * Should match one of your configured redirect endpoints
   */
  redirect_uri: string;

  /**
   * OAuth response type
   */
  response_type: 'code';

  /**
   * Space delimited scopes being requested
   */
  scope: string;

  /**
   * Opaque value passed back in the redirect
   */
  state: string;
}

export interface OAuthDeauthorizeParams {
  /**
   * An access token for the user to deauthorize
   */
  token: string;

  /**
   * Your client ID
   */
  client_id: string;

  /**
   * Your client secret
   */
  client_secret: string;
}

export interface OAuthExchangeTokenParams {
  /**
   * Your client ID
   */
  client_id: string;

  /**
   * Your client secret
   */
  client_secret: string;

  /**
   * OAuth grant type
   */
  grant_type: 'authorization_code' | 'refresh_token';

  /**
   * Required for code auth, generated from initial authorize request
   */
  code?: string;

  /**
   * Required for code auth, should match the `redirect_uri` from the authorize
   * request
   */
  redirect_uri?: string;

  /**
   * Required for code auth, generated from previous token request
   */
  refresh_token?: string;
}

export declare namespace OAuth {
  export {
    type OAuthExchangeTokenResponse as OAuthExchangeTokenResponse,
    type OAuthAuthorizeParams as OAuthAuthorizeParams,
    type OAuthDeauthorizeParams as OAuthDeauthorizeParams,
    type OAuthExchangeTokenParams as OAuthExchangeTokenParams,
  };
}
