require('./../connection/connectionDB')
const ExperienceModel = require('./../model/experiences_model')
const EXPERIENCES_REPOSITORY = require('./../repository/experiencesRepository')

const experiencesPopulate = () => {
    try {
        EXPERIENCES_REPOSITORY.map( async el => {
          await ExperienceModel(el).save()
          console.log('Populate', el)
        })
    } catch (error) {
        console.error('Error:', error)
    }
}

experiencesPopulate()