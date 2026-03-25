// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints related to user activity data and syncing.
 */
export class Activities extends APIResource {
  /**
   * Get detailed information about a single activity by ID.
   */
  retrieve(activityID: string, options?: RequestOptions): APIPromise<ActivityRetrieveResponse> {
    return this._client.get(path`/activities/${activityID}`, options);
  }

  /**
   * Get a paginated list of user activity summaries.
   */
  list(
    query: ActivityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActivityListResponse> {
    return this._client.get('/activities', { query, ...options });
  }

  /**
   * Get the FIT file of a single activity by ID.
   */
  retrieveFile(activityID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/activities/${activityID}/file`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.ant.fit' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface ActivitySummary {
  id?: string;

  createdAt?: string;

  distance?: number;

  duration?: number;

  name?: string;
}

export interface Pagination {
  /**
   * Current page number
   */
  currentPage?: number;

  /**
   * Number of items per page
   */
  perPage?: number;

  /**
   * Total paginated items
   */
  totalItems?: number;

  /**
   * Total number of pages
   */
  totalPages?: number;
}

export interface ActivityRetrieveResponse extends ActivitySummary {
  activityType?: 'RIDE' | 'EBIKE' | 'MOUNTAIN_BIKE' | 'GRAVEL' | 'EMOUNTAIN_BIKE' | 'VELOMOBILE';

  description?: string;

  polyline?: string;

  updatedAt?: string;
}

export interface ActivityListResponse extends Pagination {
  data?: Array<ActivitySummary>;
}

export interface ActivityListParams {
  /**
   * Requested page of activities
   */
  page?: number;

  /**
   * Number of activities per page
   */
  perPage?: number;

  /**
   * A starting date in the form `YYYY-MM-DD`
   */
  startDate?: string;
}

export declare namespace Activities {
  export {
    type ActivitySummary as ActivitySummary,
    type Pagination as Pagination,
    type ActivityRetrieveResponse as ActivityRetrieveResponse,
    type ActivityListResponse as ActivityListResponse,
    type ActivityListParams as ActivityListParams,
  };
}
