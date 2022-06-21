function extensibleObject() {

    let obj = {};

    obj.extend = (template) => {
        const parent = Object.getPrototypeOf(obj)
        for (const prop in template) {
            let propValue = template[prop]
            if(typeof propValue === 'function'){
                parent[prop] = propValue
            }else{
                obj[prop] = propValue
            }
        }
    };


    return obj;
}

