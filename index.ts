const parser = (dataString: string): void => {
    if (dataString[0] == ' ') {
        console.error('Found space on the start')
        return
    }
    dataString.trim()
    let array: Array<string> = dataString.split("")
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] === ' ') {
            console.error(`Found space on ${i + 1} position`)
            return
        }
        if (array[i] === '{') {
            while (array[i] !== '}') {
                if (array[i] === '&') {
                    console.log('looks like a start of special character')
                    //this is a place for special character
                }
            }
        }
    }

}

let data: Array<string> = ['qwdqwdqwd', 'qwdqwdqwdqwd', '   qwdqwdqwd   ', 'dqwdwdqwq w dqwd qwd qd']
data.forEach((elem) => {
    parser(elem)
})