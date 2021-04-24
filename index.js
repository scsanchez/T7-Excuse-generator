//Variables

function generateExcuse() {

    const pronoum = ["Mi", "El", "Tu"];
    const object = ["perro", "ordenador", "telefono"];
    const action = ["comio", "se rompio"];
    const location = ["la pierna", "galletas", "cuando estaba corriendo", "en el parque"];

    const choosenPronoumIndex = generateRandomNumberUpTo(pronoum.length);
    const choosenObjectIndex = generateRandomNumberUpTo(object.length);
    const choosenActionIndex = generateRandomNumberUpTo(action.length);
    const choosenLocationIndex = generateRandomNumberUpTo(location.length);

    const choosenPronoum = pronoum[choosenPronoumIndex]
    const choosenObject = object[choosenObjectIndex];
    const choosenAction = action[choosenActionIndex];
    const choosenLocation = location[choosenLocationIndex];

    const sentence = generateSentence(choosenPronoum, choosenObject, choosenAction, choosenLocation);

    return sentence;
}

function generateSentence(pronoum, object, action, location) {
    return `<b>${pronoum} ${object} ${action} ${location}. </b>`;
}

function showExcuse() {
    document.getElementById("excuse").innerHTML = generateExcuse();
}

function generateRandomNumberUpTo(maximun) {
    return Math.floor(Math.random() * maximun);
}

console.log(generateExcuse());