const userPassword = "jqueryismyjam";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;

// Write code under this line

if (userPassword === null) {
    message = "Отменено пользователем!";
} else if (userPassword === "jqueryismyjam") {
    message = "Добро пожаловать!";
} else if (userPassword === "bla") {
    message = "Доступ запрещен, неверный пароль!";
} else if (userPassword === "") {
    message = "Доступ запрещен, неверный пароль!";
}

console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'