import { handleCors, handleBodyRequestParsing, handleCompression } from './common'
import { handle404Error, handleClientError, handleServerError } from './error-handlers'

export default [
	handleCors,
	handleBodyRequestParsing,
	handleCompression,
	handle404Error,
	handleClientError,
	handleServerError,
]
