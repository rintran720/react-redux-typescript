export function isProduction() {
  return process.env.NODE_ENV === 'production';
}

export const API_URL = process.env.API_URL || 'https://6335724eea0de5318a13ad6d.mockapi.io/api/';
