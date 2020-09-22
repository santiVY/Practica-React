const { 
    findAllExperiences, 
    findTop5Experiencies, 
    findExperiencies } = require('../bussinesLogic/experienciesBL')

const all = async (req, res) => {
    try {
        const response = await findAllExperiences()
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const top5 = async (req, res) => {
    try {
        const response = await findTop5Experiencies()
        res.json(response)    
    } catch (error) {
        res.status(500).send(error)
    }
}

const detail = async (req, res) => {
    const { id } = req.params
    try {
        const response = await findExperiencies(id)
        res.json(response)
    } catch (error) {
        res.status(error.status).send(error.msg)
    }
}

module.exports = {
    all,
    top5,
    detail
}