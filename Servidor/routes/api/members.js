const members = require('../../Members');
const uuid = require('uuid')
const express = require('express');
const router = express.Router();


//Get all members
router.get('/', (req,res) => {
    res.json(members);
});

//Get a member 
//en navegador seria localhost:5000/api/members/1
router.get('/:id',(req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(404).json({msg: `No member with that id: ${req.params.id}`});
    }
});

//Create member
router.post('/', (req,res) => {
    //res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        color: req.body.color
    }

    if (!newMember.name || !newMember.color){
        return res.status(400).json({msg: 'Please include a name and color'});
    }

    members.push(newMember);
    //res.redirect('/');
    return res.json(members);
});


//Update member
router.put('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found){
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.color = updMember.color ? updMember.color : member.color;
            }
            res.json({msg: "The member was updated", member});
        })
    }

    members.push(newMember);

    return res.json(members);
});

//delete a member 
//en navegador seria localhost:5000/api/members/1
router.delete('/:id',(req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found){
        res.json({
            msg: 'Member deleted', 
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    }
    else {
        res.status(404).json({msg: `No member with that id: ${req.params.id}`});
    }
});

module.exports = router;