
const EXPERIENCES = require('../repository/experiencesRepository')

//funciones que corresponden a la implementacion logica del servicio. (Logica de negocio)

const findAllExperiences = () => {
    return { experiencies: EXPERIENCES }
}

const findTop5Experiencies = () => {
    //ordenar el codigo por el score
    const experiencesSort = EXPERIENCES.sort((a, b) => {
        if(a.score < b.score) return 1
        if(a.score > b.score) return -1
        return 0
        //EXPERIENCES.sort((el1, el2) => {return el2.score - el1.score }); 
    })

    //toma del arreglo las primeras 5 posiciones.
    const top5Experiences = experiencesSort.slice(0,5)

    return { top5: top5Experiences}
}

const findExperiencies = (id) => {
    const experiencie = EXPERIENCES.find( experience => experience.id === Number(id))
    if (experiencie === undefined) throw('not found')
    return { experiencie } // return { experiencie: experiencie }
}

module.exports = {
    findAllExperiences,
    findTop5Experiencies,
    findExperiencies
}