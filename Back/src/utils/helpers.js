const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const isValidName = (name) => {
const re = /^(?!\s)([A-Za-z]+(\s[A-Za-z]+)*)(?=\s*$)/;
    return re.test(name) && name.length <= 100;
};

const isValidDni = (dni) => {
    const re = /^\d{6,9}$/; // Solo números y entre 7-8 dígitos
    return re.test(String(dni));
};

module.exports = {
    isValidEmail,
    isValidName,
    isValidDni,
};
