// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FileAPI from './file';
import { File, FileCreateParams, FileUpdateParams, Workout } from './file';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Endpoints related to user workout management.
 */
export class Workouts extends APIResource {
  file: FileAPI.File = new FileAPI.File(this._client);

  /**
   * Delete a workout by ID. Can only delete workouts created by your client.
   */
  delete(workoutID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/workouts/${workoutID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Workouts.File = File;

export declare namespace Workouts {
  export {
    File as File,
    type Workout as Workout,
    type FileCreateParams as FileCreateParams,
    type FileUpdateParams as FileUpdateParams,
  };
}
