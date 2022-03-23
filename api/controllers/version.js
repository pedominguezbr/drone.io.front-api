module.exports.getVersion = async (req, res) => {
    const { version } = require('../package.json');
    res.status(201).json({  version });

}