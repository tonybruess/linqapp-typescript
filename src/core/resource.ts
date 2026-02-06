// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Linqapp } from '../client';

export abstract class APIResource {
  protected _client: Linqapp;

  constructor(client: Linqapp) {
    this._client = client;
  }
}
