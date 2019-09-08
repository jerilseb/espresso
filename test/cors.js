module.exports = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.end("Haha, intercepted");
    next();
};