// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RoutesAPI from './routes';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class File extends APIResource {
  /**
   * Create a route using a supported route file.
   */
  create(body: FileCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Route> {
    return this._client.post('/routes/file', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Update a route using a supported route file.
   */
  update(
    routeID: string,
    body: FileUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Route> {
    return this._client.put(
      path`/routes/${routeID}/file`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface Route extends RoutesAPI.RouteSummary {
  polyline?: string;

  updatedAt?: string;
}

export interface FileCreateParams {
  /**
   * A route file. Filename should have one of the following extensions: .gpx .fit
   * .tcx .kml .kmz
   */
  file?: Uploadable;
}

export interface FileUpdateParams {
  /**
   * A route file. Filename should have one of the following extensions: .gpx .fit
   * .tcx .kml .kmz
   */
  file?: Uploadable;
}

export declare namespace File {
  export {
    type Route as Route,
    type FileCreateParams as FileCreateParams,
    type FileUpdateParams as FileUpdateParams,
  };
}
