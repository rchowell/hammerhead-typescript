// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hammerhead from 'hammerhead-typescript';

const client = new Hammerhead({
  webhookSignature: 'My Webhook Signature',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workouts', () => {
  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.workouts.delete('workoutId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
