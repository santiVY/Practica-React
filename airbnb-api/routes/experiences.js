//objeto de router
const router = require('express').Router()
//importa un modulo con las funciones que se trae del modulo
const { all, top5, detail } = require('../controllers/experiencesCtrl')

//rutas definidas para experiences y con un metodo controlador
router.get('/', all)
router.get('/top5', top5)
router.get('/detail/:id', detail)

//forma de exportar un modulo o archivo
module.exports = router
