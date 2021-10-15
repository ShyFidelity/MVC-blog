const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
    try { 
        const newComment = await Comment.create({
            ...req.body,
            content: req.session.user_id,
            entry_id: req.params.id,
           

        });
        res.status(200).json(newComment);
    } catch (error) {
        res.status(400).json(error);
    }
    });

module.exports = router;