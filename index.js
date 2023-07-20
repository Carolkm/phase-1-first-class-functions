function  receivesAFunction (day) {
    return day ()
}
receivesAFunction (function () {return "monday"})



function returnsANamedFunction () {
return function month() { return "february"}
}

function returnsAnAnonymousFunction () {
    return function () { return "anonymous" }
}







