module.exports = {
    sayHelloInEnglish: function(ex,text) {
        var ex = ex.split(text).reduce((result, value, index) => {
            return (index !== 0) ? result.concat([text, value]) : result.concat(value)
        }, [])
        return ex
}