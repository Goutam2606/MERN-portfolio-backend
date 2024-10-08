const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    caption: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
});

const aboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String,
        require: true
    },
    description1: {
        type: String,
        require: true
    },
    description2: {
        type: String,
        require: true
    },
    skills: {
        type: Array,
        required: true
    }
});

const exprienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    }
});

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = {
    Intro: mongoose.model("intros", introSchema),
    About: mongoose.model("abouts", aboutSchema),
    Exprience: mongoose.model("expriences", exprienceSchema),
    Project: mongoose.model('projects', projectSchema),
    Contact: mongoose.model('contacts', contactSchema)
};
