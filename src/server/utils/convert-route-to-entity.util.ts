const mapping: Record<string, string> = {
  accounts: 'account',
  banks: 'bank',
  transactions: 'transaction',
  users: 'user',
  'user-profiles': 'user_profile',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
