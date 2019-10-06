export interface IAccessToken {
    accessToken: string;
    accessTokenExpiresAt: Date;
}

export interface IRefreshToken {
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}

export interface ITokenService {
    generateAccessToken(): Promise<IAccessToken>;
    generateRefreshToken(): Promise<IRefreshToken>;
}

export default ITokenService;
