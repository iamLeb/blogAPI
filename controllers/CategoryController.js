const Category = require('../models/Category');
const createCategory = async (req, res) => {
   try {
       // get form
       const { name } = req.body;
       let slug = name.toLowerCase().replaceAll(' ', '_');

       const category= await Category.create({
           name, slug
       });
       return res.status(201).json(category);
   } catch (e) {
       res.status(400).json({ error: e });
   }
}

const readCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json(categories);
    } catch (e) {
        res.status(400).json({ error: e});
    }
}

const readCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findById(id);
        if (!category) res.status(404).json({error: 'Category not found'});
        return res.status(200).json(category);
    } catch (e) {
        res.status(400).json({ error: e });
    }

}

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const { name } = req.body;
        const cat = await Category.findByIdAndUpdate(id, {name, slug: name.toLowerCase().replaceAll(' ', '_')});
        if (!cat) res.status(404).json({error: 'Category not found'});

        // get updated Version
        const category = await Category.findById(id);
        res.status(200).json(category);
    } catch (e) {
        res.status(400).json({ error: e });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findByIdAndDelete(id);
        if (!category) res.status(404).json({error: 'Category not found'});
        res.status(200).json(category);
    } catch (e) {
        res.status(400).json({ error: e });
    }
}


module.exports = {
    createCategory,
    readCategories,
    readCategory,
    updateCategory,
    deleteCategory,
}