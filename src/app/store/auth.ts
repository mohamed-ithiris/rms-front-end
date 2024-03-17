export type authState = {
  accessToken: string | null;
  refreshToken: string | null;
};

export type authActions = {
  setTokens: (accessToken: string, refreshToken: string) => void;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
};

export const authInitialValue = {
  accessToken: null,
  refreshToken: null,
};
