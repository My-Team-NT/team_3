import { User, OTP } from "../schema/index.js"
import {
    generateOtp,
    sendMail,
    accessTokenSing,
    refreshTokenSing,
} from "../utils/index.js"
import {
    loginValidation,
    registerValidation,
    verifyValidation,
} from "../validators/index.js"

export const registerController = async (req, res, next) => {
    try {
        const { error, value } = registerValidation(req.body)
        if (error) {
            return res
                .status(400)
                .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" })
        }
        const { email } = req.body
        const currentUser = await User.findOne({ email })
        if (currentUser) {
            return res.status(409).send({ msg: "bunday email tizimda mavjud" })
        }
        const otp = generateOtp()
        sendMail(
            email,
            "OTP",
            `<h1>
            This Your otp: 
            <h2 style="background: yellow;color: rgb(0, 0, 0);width: 7%;">${otp}</h2>
            </h1>`,
        )
        const user = new User(req.body)
        await user.save()
        const otp_db = new OTP({
            user_id: user._id,
            otp_code: otp,
        })
        await otp_db.save()
        return res.status(201).send({ status: "Created" })
    } catch (error) {
        next(error)
    }
}

export const loginController = async (req, res, next) => {
    try {
        const { error, value } = loginValidation(req.body)
        if (error) {
            return res.status(400).send({ msg: "Malumotlarni toliq kiriting " })
        }
        const { email, password } = req.body
        const currentUser = await User.findOne({ email })
        if (!currentUser) {
            return res
                .status(404)
                .send({ msg: "Bunday foydalanuvchi topilmadi" })
        }
        if (currentUser.is_active === false) {
            return res.status(403).send("User is not active")
        }
        const passwordIsEqual = await currentUser.compare(password)
        if (!passwordIsEqual) {
            return res.status(403).send({ msg: "Eamil Yoki Parol Xato" })
        }
        const payload = {
            id: currentUser._id,
            sub: email,
            role: currentUser.role,
        }
        const accessToken = accessTokenSing(payload)
        const refreshToken = refreshTokenSing(payload)
        return res.status(200).send({ accessToken, refreshToken })
    } catch (error) {
        next(error)
    }
}

export const verifyToken = async (req, res, next) => {
    try {
        const { otp, email } = req.body
        const { error, value } = verifyValidation(req.body)
        if (error) {
            return res.status(400).send({ msg: "Mlumotlarni togri kiritig" })
        }
        const currentUser = await User.findOne({ email })
        if (!currentUser) {
            return res.status(404).send({ msg: "Foudalanuvchi topilmadi" })
        }
        const currentOtp = await OTP.find({ user_id: currentUser._id })
        if (new Date() > currentOtp.expires_at) {
            return res
                .status(403)
                .send({ msg: "Sizni Otp Codeginzni Vohti tugagan" })
        }

        if (currentOtp.otp === otp) {
            return res.status(401).send({ msg: "Otp xato kiritilgan" })
        }
        await OTP.deleteOne({ user_id: currentUser._id })
        await User.updateOne({ email }, { is_active: true })
        return res.status(200).send({ msg: "User is Actived" })
    } catch (error) {
        next(error)
    }
}
