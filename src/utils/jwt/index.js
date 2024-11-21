import JWT from "jsonwebtoken"
import { config } from "../../config/index.js"
export const accessTokenSing = (payload) => {
    return JWT.sign(payload, config.jwt.access.secret, {
        expiresIn: config.jwt.access.expiresIn,
    })
}

export const refreshTokenSing = (payload) => {
    return JWT.sign(payload, config.jwt.refresh.secret, {
        expiresIn: config.jwt.refresh.expiresIn,
    })
}
