interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Account Owner'],
  customerRoles: [],
  tenantRoles: ['Account Owner', 'Bank Administrator'],
  tenantName: 'Bank',
  applicationName: 'natwest',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user profiles', 'Manage transactions', 'Manage accounts', 'Manage users', 'Manage banks'],
  getQuoteUrl: 'https://app.roq.ai/proposal/491adba0-7196-4cdf-b09c-70534981e07c',
};
