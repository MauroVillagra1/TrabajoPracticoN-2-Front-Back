const Students = require('../models/Student.js');
const { Op } = require('sequelize');
const {isValidEmail, isValidName, isValidDni } = require('../utils/helpers.js');



const findAll = async (search, currentPage = 1, pageSize = 5) => {
    try {
        const students = await Students.getAll(search, currentPage, pageSize);
        return students;
    } catch (error) {
        console.error('studentsServices: ' + error);
        throw error;
    }
};

const create = async (student) => {
    try {
        // Validaciones de firstname y lastname
        if (!isValidName(student.firstname) || !isValidName(student.lastname)) {
            throw new Error('El nombre y apellido deben contener solo letras y tener máximo 100 caracteres.');
        }

        // Validaciones de DNI
        if (!isValidDni(student.dni)) {
            throw new Error('El DNI debe ser un número de 7 u 8 dígitos.');
        }

        // Validaciones de email
        if (!isValidEmail(student.email)) {
            throw new Error('Formato de correo electrónico no válido.');
        }

        // Verificar si ya existe un estudiante con el mismo DNI
        const existingDni = await Students.findOne({
            where: {
                dni: student.dni,
                deleted: 0,
            },
        });

        if (existingDni) {
            throw new Error('Ya existe un estudiante con el mismo DNI.');
        }

        // Verificar si ya existe un estudiante con el mismo email
        const existingEmail = await Students.findOne({
            where: {
                email: student.email,
                deleted: 0,
            },
        });

        if (existingEmail) {
            throw new Error('Ya existe un estudiante con el mismo correo electrónico.');
        }

        // Obtener el siguiente SID y crear el estudiante
        const newSid = await Students.getNextSid();
        const newStudent = await Students.create({
            ...student,
            sid: newSid,
        });

        return newStudent;
    } catch (error) {
        console.error('studentsServices: ' + error);
        throw error;
    }
};


module.exports = {
    findAll,
    create,
};
