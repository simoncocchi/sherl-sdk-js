export const endpoints = {
  GET_NOTIFICATION: '/api/notifications',
  POST_DISABLE_NOTIFICATION: '/api/notifications/:id/disable-to-organization',
  POST_ENABLE_NOTIFICATION: '/api/notifications/:id/enable-to-organization',
  POST_TEST_NOTIFICATION: '/api/notification/push/test',
  POST_REGISTRATION_NOTIFICATION: '/api/notification/registration',
  POST_NOTIFICATION: '/api/notification/:type',
};
