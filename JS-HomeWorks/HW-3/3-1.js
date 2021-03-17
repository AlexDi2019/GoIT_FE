let message = "";
const user = {
    age: 20,
    hobby: "html",
    name: "Mango",
    premium: true,
};

//Write code under this line
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
user[`full time`] = true;

const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
    message += `${key}:${user[key]}\n`
}

console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */