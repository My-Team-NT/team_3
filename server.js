import app from "./src/app.js"
import { logger } from "./src/utils/index.js"

const startApp = async () => {
    try {
        app.listen(3000, () => {
            logger.info(`Server started on port  ${3000}`)
        })
    } catch (error) {
        logger.error(error.message)
    }
}

startApp()
