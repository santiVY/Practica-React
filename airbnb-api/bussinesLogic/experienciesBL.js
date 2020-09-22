const ExperienceModel = require('../model/experiences_model')
//consultando a la base de datos Mongo

const findAllExperiences = async () => {
    try {
        const experiencies = await ExperienceModel.find() 
        return { experiencies }  
    } catch (error) {
        throw error
    }
}

const findTop5Experiencies = async () => {
    try {
        const top5 = await ExperienceModel.find().sort({ score: 'desc' }).limit(5)
        return { top5 }
    } catch (error) {
        throw error
    }
}

const findExperiencies = async (id) => {
    try {
        const experiencie = await ExperienceModel.findById(id)
        if(experiencie == '') throw { status: 404, msg: 'Experience not found'} 
        return { experiencie }
    } catch (error) {
        throw { status: 500, msg: error}
    }
}

module.exports = {
    findAllExperiences,
    findTop5Experiencies,
    findExperiencies
}