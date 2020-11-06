const obj = {
    log(){
        console.log("logging")
    },
    dir(){
        console.log("dirring")
    }
}


if (location.port == 5500) {
    obj.log()
} else {
    obj.dir()
}

