import thunk from "redux-thunk"
import logger from "./logger"
import { applyMiddleware } from "redux"

/**
* @description to create middleware
*/

export default applyMiddleware(
    thunk,
    logger,
)