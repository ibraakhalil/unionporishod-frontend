export const PUBLIC_URL = process.env.NEXT_PUBLIC_API;

// ADMIN ROUTES
export const CREATE_HOLDING = `${PUBLIC_URL}/admin/holding/create`;
export const GET_ALL_HOLDINGS = `${PUBLIC_URL}/admin/holding/all`;
export const GET_HOLDING_BY_WARD = `${PUBLIC_URL}/admin/holding/ward`;

export const TAX_COLLECTION = `${PUBLIC_URL}/admin/holding/tax-collection`;
export const GET_ALL_TRANSACTIONS = `${PUBLIC_URL}/admin/holding/all-transactions`;

// USER ROUTES
export const GET_HOLDING_BY_SEARCH = `${PUBLIC_URL}/user/holding/search`;
