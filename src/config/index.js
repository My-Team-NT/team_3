import application from './app.js'
import jwt from './jwt.js'
import email from './email.js'

export const config = {
    ...application,
    ...jwt,
    ...email,
}
