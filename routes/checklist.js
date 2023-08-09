const express = require('express')
const router = express.Router()
const Checklist = require('../collection/checklist')

// GET PEGA
router.get('/', async (req,res) => {
    try {
        let checklists = await Checklist.find({})
    res.status(200).json(checklists)
    res.status(200).render("checklists/index", { checklists: checklists})

} catch (error) {
    res.status(200).render("pages/error", { error: 'erro ao executar as Listas'})
}
})
    
//ADICIONA
router.post('/', async (req,res) => {
    let { name } = req.body
    try {
        let checklist = await Checklist.create({name})
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
    
})

//PEGA PELO ID
router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render("checklists/show", { checklist : checklist})
    } catch (error) {
        res.status(200).render("pages/error", { error : 'erro ao executar as Listas'})
    }
   
})


//PUT ATUALIZA
router.put('/:id', async (req, res) => {
    let { name } = req.body
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name })
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
})

// ROTA DELETE
router.delete(':/id', async (req,res) => {
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
    
})
module.exports = router