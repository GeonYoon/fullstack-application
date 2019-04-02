export function DateConverter(str){
    // create dictionary 
    var dic = {}
    dic['01'] = 'Jan'
    dic['02'] = 'Feb'
    dic['03'] = 'Mar'
    dic['04'] = 'Apr'
    dic['05'] = 'Jun'
    dic['06'] = 'Jul'
    dic['07'] = 'Aug'
    dic['08'] = 'Sep'
    dic['09'] = 'Nov'
    dic['10'] = 'Oct'
    dic['11'] = 'Nov'
    dic['12'] = 'Dec'
    
    const year = str.substring(0,4)
    const month = dic[str.substring(5,7)]
    const date = str.substring(8,10)

    const output = month + " " + date + ", " + year
    return output
}
