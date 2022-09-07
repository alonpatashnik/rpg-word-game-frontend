const Formulas = {
    areLettersInWord: (word, userWord) => {
        const cpuLetters = userWord.split("")
        const userLetters = word.split("")
        const recreate = []
        for (let i = 0; i<userLetters.length; i++) {
            for (let j = 0; j<cpuLetters.length; j++) {
                if (userLetters[i] === cpuLetters[j]) {
                    recreate.push(userLetters[i])
                    break
                }
            }
        }

        const newWord = recreate.join('')

        if (newWord === word) {
            return true
        } else {
            return false
        }
    },

    scoreWord: (word) => {
        const pointKey = {
            a: 1,
            b: 2,
            c: 2,
            d: 2,
            e: 1,
            f: 2,
            g: 2,
            h: 3,
            i: 1,
            j: 5,
            k: 3,
            l: 1,
            m: 2,
            n: 1,
            o: 1,
            p: 2,
            q: 5,
            r: 1,
            s: 1,
            t: 1,
            u: 3,
            v: 3,
            w: 3,
            x: 5,
            y: 4,
            z: 5
        
        }

        const split = word.split('')
        let points = 0

        for (let i = 0; i<split.length; i++) {
            for (const j in pointKey) {
                if (split[i] === j) {
                points += pointKey[split[i]]
            }
            }
        }
        return points
    }
}

export default Formulas