import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emailSupportApi = createApi({
  reducerPath: 'emailSupportApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://web.vottamean.com/api/v1'
        : '/api/v1',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('credentials', 'include'); 
      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (emailData) => ({
        url: 'email/receive-email-support',
        method: 'POST',
        body: emailData,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = emailSupportApi;
