import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'services/ContactsAPI';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [
          'meta.arg',
          'meta.baseQueryMeta.request',
          'meta.baseQueryMeta.response',
          'payload.headers',
          'payload.config',
          'payload.request',
        ],
      },
    }).concat(contactsApi.middleware),
});
