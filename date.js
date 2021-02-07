
exports.getDate = function (){
    let today = new Date();
    let options = {
        weekday: "long",
        day:  "numeric",
        month:  "long"
    };
    return today.toLocaleDateString("en-IN", options);
}

exports.day = function (){
    let date = new Date()
    let options = {
        weekday:'long'
    }

    return date.toLocaleDateString('hi-IN', options)
}