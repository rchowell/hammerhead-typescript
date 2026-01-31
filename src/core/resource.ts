// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Hammerhead } from '../client';

export abstract class APIResource {
  protected _client: Hammerhead;

  constructor(client: Hammerhead) {
    this._client = client;
  }
}
