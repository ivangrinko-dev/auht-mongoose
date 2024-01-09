function buildresponse(res, message, number) {
    res.status(number).send(message)
}

module.exports = {buildresponse}