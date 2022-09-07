// import './Attack.css'
import { Form } from 'react-bootstrap'
import WordCheck from 'check-if-word'
import Formulas from '../../Formulas'
import React, { useState, useEffect } from 'react'


export default function AttackBar({user}) {
    const [userWords, setUserWords] = useState('click')
    const [inputEl, setInputEl] = useState('')
    const [pointValue, setPointValue] = useState(0)
    const [total, setTotal] = useState(0)
    const [lastWord, setLastWord] = useState('')
    const [valid, setValid] = useState(true)
    const [local, setLocal] = useState([])
    const [localPt, setLocalPt] = useState([])

    
    useEffect(() => {
        if (total >= 50 || local.length >=10) {
            endGame()
        }
    })

    const endGame = () => {
        if (total >= 50) {
            alert(`Congratulations, ${user.username}, you won the game! You entered ${local.length} words for ${total} points! averaging ${total/local.length} points per word`)
        } else {
            alert(`Sorry, ${user.username}, you lost! You needed 50 points to win-- you only earned ${total} points! Refresh to try again`)
        }

        fetch(`https://rpg-p3-db.herokuapp.com/api/users/${user.id}/${total}`, {
            method: 'PUT',
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    // const localData = localStorage.getItem('words')
    // const local2 = JSON.parse(localData)

    const check = WordCheck('en')

    const getRandomWord = () => {
        fetch('https://rpg-p3-db.herokuapp.com/api/words/random', {
        method: 'GET',
        headers: {
            "Content-Type":"application/json"
        }
    }).then((data) => data.json()).then((res) => {
        setUserWords(res.word)
    })
    }

    const checkDuplicate = (local) => {
        const filter = local.filter(item => inputEl === item)

        if (filter.length > 0) {
            return false
        } else {
            return true
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        const wordLC = userWords.toLowerCase()
        let score = 0
        if(Formulas.areLettersInWord(inputEl, wordLC) && check.check(inputEl) && (wordLC !== inputEl) && checkDuplicate(local)) {
            try {
                score = Formulas.scoreWord(inputEl)
            } catch {
                return console.log('error')
            } finally {
                let health = document.getElementById("enemyHealth")
                health.value -= score
                setPointValue(score)
                setLastWord(inputEl)
                setTotal(total+score)
                setValid(true)
                setLocal(local => [...local, inputEl])
                setLocalPt(localPt => [...localPt, score])
                setInputEl('')
                // localStorage.setItem('words', JSON.stringify(local))
            }
        } else {
            setValid(false)
            setInputEl('')
        }
    }

    const Error = () => {
        if (valid) {
            return
        } else {
            return (<p>Must be an English word --other than the displayed word-- and contain all of the displayed word's letters</p>)
        }
    }

    const wordList = local.map((item, index) => {
        return (
        <li>{(item + ' ' + localPt[index] + 'pts   ')}</li>
        )
    })

    return (
        <section id="attackBox">
            <button onClick={getRandomWord} id="startGame">new word</button>
            <p id='userWords'>{userWords}</p>
            <p>Type a word that contains the letters above</p>
            <Form autoComplete='off' id="inputCon" onSubmit={submit}>
                <Form.Group className="row mb-2">
                    <section id="attackInput">
                        <Form.Control type="text" value={inputEl} controlId="emailInput" class="form-control" id="attackText" onChange={e=>setInputEl(e.target.value)}/>
                    </section>
                </Form.Group>
            </Form>
            <ul id='wordList'>
                {wordList}
            </ul>
            <p id="totalSent">Congratulations-- {lastWord} was worth {pointValue} points. Your running total is {total} </p>
            <Error />
        </section>
    )
};