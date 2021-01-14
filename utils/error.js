class BadParamsError extends Error {
    constructor(...params) {
        super(...params);
    }


}

class AuthorizationError extends Error {
    constructor(...params) {
        super(...params);
    }


}

module.exports.BadParamsError = BadParamsError;
module.exports.AuthorizationError = AuthorizationError;


/* How to throw the custom error
try {
    throw new BadParamsError("password mast be minimum of 6 digits")
  } catch (error) {
    if (error instanceof BadParamsError) {
      // do something specifically for that type of error
    }
}

*/