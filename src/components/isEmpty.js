const isEmpty =Object.create(null, {
    checkFields: {
        value: function (...args){
            for (let i = 0; i < args.length; i++) {
                const element = args[i];
                if(element === ""){
                    return alert("You missed a field. Please enter all fields")

                }
            }
        }
    }
})
