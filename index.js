const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(cat){cats.push(cat);}
function destructivelyPrependCat(cat){cats.unshift(cat);}
function destructivelyRemoveLastCat(cat){cats.pop(cat);}
function destructivelyRemoveFirstCat(cat){cats.shift(cat);}
function appendCat(name){
    const newCats = cats.slice();
    newCats.push(name);
    return newCats;
}
function  prependCat(name){
    const newCat = cats.slice();
    newCat.unshift(name);
    return newCat;
}
function  removeFirstCat(){
    const newCatss = cats.slice();
    newCatss.shift();
    return newCatss;
}
function removeLastCat(){
    const newCatsss = cats.slice();
    newCatsss.pop();
    return newCatsss;
}