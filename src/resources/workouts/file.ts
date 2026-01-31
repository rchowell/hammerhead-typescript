// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class File extends APIResource {
  /**
   * Create a workout using a supported workout file.
   */
  create(params: FileCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Workout> {
    const { plannedDate, ...body } = params ?? {};
    return this._client.post(
      '/workouts/file',
      multipartFormRequestOptions({ query: { plannedDate }, body, ...options }, this._client),
    );
  }

  /**
   * Update a workout using a supported workout file.
   */
  update(
    workoutID: string,
    params: FileUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Workout> {
    const { plannedDate, ...body } = params ?? {};
    return this._client.put(
      path`/workouts/${workoutID}/file`,
      multipartFormRequestOptions({ query: { plannedDate }, body, ...options }, this._client),
    );
  }
}

export interface Workout {
  id?: string;

  createdAt?: string;

  description?: string;

  name?: string;

  plannedDate?: string;

  updatedAt?: string;
}

export interface FileCreateParams {
  /**
   * Query param: Optional. Date the workout is planned to be done. Format is
   * YYYY-MM-DD
   */
  plannedDate?: string;

  /**
   * Body param: A workout file. Filename should have one of the following
   * extensions: .fit .zwo
   */
  file?: Uploadable;
}

export interface FileUpdateParams {
  /**
   * Query param: Optional. Date the workout is planned to be done. Format is
   * YYYY-MM-DD
   */
  plannedDate?: string;

  /**
   * Body param: A workout file. Filename should have one of the following
   * extensions: .fit .zwo
   */
  file?: Uploadable;
}

export declare namespace File {
  export {
    type Workout as Workout,
    type FileCreateParams as FileCreateParams,
    type FileUpdateParams as FileUpdateParams,
  };
}
