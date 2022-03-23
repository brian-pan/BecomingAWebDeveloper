const bcrypt = require('bcrypt');

//make salt and then hash password:
// const hashPassword = async (password) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(password, salt);
//     console.log(salt);
//     console.log(hash);
// }
//another way:
const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

//compare password
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('Logged in!');
    } else {
        console.log('Incorrect Password.');
    }
}

hashPassword('Monkey');