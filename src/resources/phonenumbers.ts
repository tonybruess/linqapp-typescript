// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Phone Numbers represent the phone numbers assigned to your partner account.
 *
 * Use the list phone numbers endpoint to discover which phone numbers are available
 * for sending messages. Each phone number has capabilities (SMS, MMS, voice) and
 * a status indicating whether it's ready for use.
 *
 * When creating chats or sending messages, use one of your assigned phone numbers
 * in the `from` field.
 */
export class Phonenumbers extends APIResource {
  /**
   * Returns all phone numbers assigned to the authenticated partner. Use this
   * endpoint to discover which phone numbers are available for sending messages via
   * the `from` field in create chat and send message requests.
   */
  list(options?: RequestOptions): APIPromise<PhonenumberListResponse> {
    return this._client.get('/v3/phonenumbers', options);
  }
}

export interface PhonenumberListResponse {
  /**
   * List of phone numbers assigned to the partner
   */
  phone_numbers: Array<PhonenumberListResponse.PhoneNumber>;
}

export namespace PhonenumberListResponse {
  export interface PhoneNumber {
    /**
     * Unique identifier for the phone number
     */
    id: string;

    capabilities: PhoneNumber.Capabilities;

    /**
     * ISO 3166-1 alpha-2 country code
     */
    country_code: string;

    /**
     * Phone number in E.164 format
     */
    phone_number: string;

    /**
     * Type of phone number
     */
    type: 'TWILIO' | 'APPLE_ID';
  }

  export namespace PhoneNumber {
    export interface Capabilities {
      /**
       * Whether MMS messaging is supported
       */
      mms: boolean;

      /**
       * Whether SMS messaging is supported
       */
      sms: boolean;

      /**
       * Whether voice calls are supported
       */
      voice: boolean;
    }
  }
}

export declare namespace Phonenumbers {
  export { type PhonenumberListResponse as PhonenumberListResponse };
}
