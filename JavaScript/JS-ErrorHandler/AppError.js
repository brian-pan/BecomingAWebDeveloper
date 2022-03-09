class AppError extends Error { //AppError will have properties of the native Error handler
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

module.exports = AppError;