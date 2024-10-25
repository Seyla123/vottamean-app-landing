import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emailSupportApi = createApi({
  reducerPath: 'emailSupportApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1',
  }),
  endpoints: builder => ({
    sendEmail: builder.mutation({
      query: emailData => ({
        url: 'email/receive-email-support/',
        method: 'POST',
        body: emailData,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = emailSupportApi;
