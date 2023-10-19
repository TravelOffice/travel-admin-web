// eslint-disable-next-line import/prefer-default-export
export const routes = {
  home: () => '/',
  signIn: () => '/sign-in',
  tenants: () => '/tenants',
  tenant: (id: string) => `/tenants/${id}`,
};
