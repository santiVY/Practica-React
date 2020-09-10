const { 
    findAllExperiences, 
    findTop5Experiencies, 
    findExperiencies } = require('../bussinesLogic/experiencesBL')

const all = (req, res) => {
    const response = findAllExperiences()
    res.json(response)
}

const top5 = (req, res) => {
    const response = findTop5Experiencies()
    res.json(response)
}

const detail = (req, res) => {
    const { id } = req.params
    try {
        const response = findExperiencies(id)
        res.json(response)
    } catch (error) {
        res.status(404).send(error)
    }
 
}

module.exports = {
    all,
    top5,
    detail
}