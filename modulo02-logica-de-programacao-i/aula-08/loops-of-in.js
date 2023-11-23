let frutas = ["bergamota", "tangerina", "mexirica", "laranja-cravo"];

let frutasObj = {
    fruta1: "bergamota",
    fruta2: "tangerina",
    fruta3: "mexirica",
    fruta4: "laranja-cravo"
};

console.log("convertendo: ", Object.keys(frutasObj));

for (const iterator of frutas) {
    // console.log("iterator: ", iterator);
}

for (const iterator in frutasObj) {
    console.log("iterator: ", frutasObj[iterator]);
}
