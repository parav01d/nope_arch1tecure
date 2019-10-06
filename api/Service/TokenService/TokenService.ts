import { ITokenService, IAccessToken, IRefreshToken } from "Service";
import * as moment from "moment";
import { injectable } from "inversify";
import { randomBytes, createHash } from "crypto";
import { promisify } from "util";

@injectable()
export class TokenService implements ITokenService {
    public async generateAccessToken(): Promise<IAccessToken> {
        const randomToken = await this.generateRandomToken();
        return {
            accessToken: randomToken,
            accessTokenExpiresAt: moment()
                .add(1, "day")
                .toDate()
        };
    }

    public async generateRefreshToken(): Promise<IRefreshToken> {
        const randomToken = await this.generateRandomToken();
        return {
            refreshToken: randomToken,
            refreshTokenExpiresAt: moment()
                .add(30, "days")
                .toDate()
        };
    }

    private async generateRandomToken(): Promise<string> {
        return promisify(randomBytes)(256).then((buffer) => {
            return createHash("sha1")
                .update(buffer)
                .digest("hex");
        });
    }
}

export default TokenService;
