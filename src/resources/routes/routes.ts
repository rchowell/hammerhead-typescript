// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActivitiesAPI from '../activities';
import * as FileAPI from './file';
import { File, FileCreateParams, FileUpdateParams, Route } from './file';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Routes extends APIResource {
  file: FileAPI.File = new FileAPI.File(this._client);

  /**
   * Get a paginated list of user route summaries.
   */
  list(
    query: RouteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RouteListResponse> {
    return this._client.get('/routes', { query, ...options });
  }

  /**
   * Delete a route by ID. Can only delete routes created by your client.
   */
  delete(routeID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/routes/${routeID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RouteSummary {
  id?: string;

  createdAt?: string;

  distance?: number;

  gain?: number;

  name?: string;
}

export interface RouteListResponse extends ActivitiesAPI.Pagination {
  data?: Array<RouteSummary>;
}

export interface RouteListParams {
  /**
   * Requested page of routes
   */
  page?: number;

  /**
   * Number of routes per page
   */
  perPage?: number;
}

Routes.File = File;

export declare namespace Routes {
  export {
    type RouteSummary as RouteSummary,
    type RouteListResponse as RouteListResponse,
    type RouteListParams as RouteListParams,
  };

  export {
    File as File,
    type Route as Route,
    type FileCreateParams as FileCreateParams,
    type FileUpdateParams as FileUpdateParams,
  };
}
