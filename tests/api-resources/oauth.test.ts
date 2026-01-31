// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hammerhead from 'hammerhead-typescript';

const client = new Hammerhead({
  webhookSignature: 'My Webhook Signature',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth', () => {
  // Prism doesn't properly handle redirects
  test.skip('authorize: only required params', async () => {
    const responsePromise = client.oauth.authorize({
      client_id: 'client_id',
      redirect_uri: 'redirect_uri',
      response_type: 'code',
      scope: 'scope',
      state: 'state',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't properly handle redirects
  test.skip('authorize: required and optional params', async () => {
    const response = await client.oauth.authorize({
      client_id: 'client_id',
      redirect_uri: 'redirect_uri',
      response_type: 'code',
      scope: 'scope',
      state: 'state',
    });
  });

  // Prism tests are disabled
  test.skip('deauthorize: only required params', async () => {
    const responsePromise = client.oauth.deauthorize({
      token: 'token',
      client_id: 'client_id',
      client_secret: 'client_secret',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deauthorize: required and optional params', async () => {
    const response = await client.oauth.deauthorize({
      token: 'token',
      client_id: 'client_id',
      client_secret: 'client_secret',
    });
  });

  // Prism tests are disabled
  test.skip('exchangeToken: only required params', async () => {
    const responsePromise = client.oauth.exchangeToken({
      client_id: 'client_id',
      client_secret: 'client_secret',
      grant_type: 'authorization_code',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('exchangeToken: required and optional params', async () => {
    const response = await client.oauth.exchangeToken({
      client_id: 'client_id',
      client_secret: 'client_secret',
      grant_type: 'authorization_code',
      code: 'code',
      redirect_uri: 'redirect_uri',
      refresh_token: 'refresh_token',
    });
  });
});
