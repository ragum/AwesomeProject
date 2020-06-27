const AUTH_DATA = '[AUTH].DATA';

export default {
  name: {
    AUTH_DATA,
  },
  setToken: (data) => ({
    type: AUTH_DATA,
    user: data,
  }),
};
