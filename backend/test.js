month = {}
month['01'] = 'Jan'
month['02'] = 'Feb'
month['03'] = 'Mar'
month['04'] = 'Apr'
month['05'] = 'Jun'
month['06'] = 'Jul'
month['07'] = 'Aug'
month['08'] = 'Sep'
month['09'] = 'Nov'
month['10'] = 'Oct'
month['11'] = 'Nov'
month['12'] = 'Dec'

export function dateconverter(str){
    const year = str.substring(0,4)
    const month = month[str.substring(5,7)]
    const date = str.substring(8,10)
    const output = month + " " + date + ", " + year
}
