const router = require("express").Router();
const { Intro, About, Project, Contact, Exprience } = require("../models/portfolioModel");
const User = require("../models/userModels");
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const introData = await Intro.find();
        const aboutData = await About.find();
        const projectsData = await Project.find();
        const contactData = await Contact.find();
        const exprienceData = await Exprience.find();

        res.status(200).send({
            intro: introData[0],
            about: aboutData[0],
            projects: projectsData,
            contact: contactData[0],
            exprience: exprienceData
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});

router.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro updated Successfully"
        }
        );

    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/update-about", async (req, res) => {
    try {
        const about = await About.findOneAndUpdate({
            _id: req.body._id
        },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About Update Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//add exprience
router.post('/add-exprience', async (req, res) => {
    try {
        const newExprience = new Exprience(req.body);
        await newExprience.save();
        res.status(201).send({
            data: newExprience,
            success: true,
            message: "Experience added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//update Exprience
router.post('/update-exprience', async (req, res) => {
    try {
        const updatedExprience = await Exprience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );


        res.status(200).send({
            data: updatedExprience,
            success: true,
            message: "Experience updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//Delete Exprience
router.post('/delete-exprience', async (req, res) => {
    try {
        const deletedExprience = await Exprience.findOneAndDelete({ _id: req.body._id });

        res.status(200).send({
            data: deletedExprience,
            success: true,
            message: "Experience deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// add Project
router.post('/add-project', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).send({
            data: newProject,
            success: true,
            message: "Project added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update Project
router.post('/update-project', async (req, res) => {
    try {
        const updatedProject = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );

        res.status(200).send({
            data: updatedProject,
            success: true,
            message: "Project updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//delete Project
router.post('/delete-project', async (req, res) => {
    try {
        const deletedProject = await Project.findOneAndDelete({ _id: req.body._id });

        res.status(200).send({
            data: deletedProject,
            success: true,
            message: "Project deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update Contact

router.post("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//admin login

router.post("/admin-login", async (req, res) => {
    try {
        const users = await User.findOne(({ username: req.body.username, password: req.body.password }));
        users.password = "";
        if (users) {
            res.status(200).send({
                data: users,
                success: true,
                message: "Login Successful"
            });
        } else {
            res.status(401).send({
                data: users,
                success: false,
                message: "Invalid credentials"
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;