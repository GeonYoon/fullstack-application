module.exports = {
    highlight: async function highlight(rows,text){
        var newRows =  rows.map(function(row) {
            const splited_row = row.content.split(new RegExp(`(${text})`, 'ig'))
            var ki = 0;
            const finalrow = splited_row.map(function(item) {
                if(item.toUpperCase() === text.toUpperCase()) return `<span key={${ki++}} className=\"highlighted-text\">${item}</span>`
                else return item
            })
            return {...row,"content":finalrow }
          });
        return newRows
    },
    jsonParser: function jsonParser(stringValue) {
        var string = JSON.stringify(stringValue);
        var objectValue = JSON.parse(string); 
        return objectValue['Count(*)'];
    }
}