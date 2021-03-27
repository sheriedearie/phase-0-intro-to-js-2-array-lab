var cats = ["Milo", "Otis", "Garfield"];  
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    var cats2 = [...cats];
    cats2.push(name);
    return cats2;
}
function prependCat(name){
    var cats2 = [...cats];
    cats2.unshift(name);
    return cats2;
}
function removeLastCat(name){
    var cats2 = [...cats];
    cats2.pop(name);
    return cats2;
}
function removeFirstCat(name){
    var cats2 = [...cats];
    cats2.shift(name);
    return cats2;
}