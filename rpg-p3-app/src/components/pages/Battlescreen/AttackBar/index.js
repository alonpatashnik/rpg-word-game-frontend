import './Attack.css'
import { Form } from 'react-bootstrap'
import WordCheck from 'check-if-word'
import Formulas from '../../Formulas'
import React, { useState, useEffect, useRef } from 'react'


export default function AttackBar({user}) {
    const [userWords, setUserWords] = useState('click')
    const [inputEl, setInputEl] = useState('')
    const [pointValue, setPointValue] = useState(0)
    const [total, setTotal] = useState(0)
    const [lastWord, setLastWord] = useState('')
    const [valid, setValid] = useState(true)
    const [local, setLocal] = useState([])

    
    

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

    const submit = async (e) => {
        e.preventDefault();
        const wordLC = userWords.toLowerCase()
        let score = 0
        if(Formulas.areLettersInWord(inputEl, wordLC) && check.check(inputEl) && (wordLC !== inputEl)) {
            try {
                score = Formulas.scoreWord(inputEl)
            } catch {
                return console.log('error')
            } finally {
                setPointValue(score)
                setLastWord(inputEl)
                setTotal(total+score)
                setValid(true)
                setLocal(local => [...local, inputEl])
                // localStorage.setItem('words', JSON.stringify(local))
            }
        } else {
            setValid(false)
        }
    }

    const Error = () => {
        if (valid) {
            return
        } else {
            return (<p>Must be an English word --other than the displayed word-- and contain all of the displayed word's letters</p>)
        }
    }

    const wordList = local.map(item => {
        return (
        <li>{item}</li>
        )
    })

    return (
        <section id="attackBox">
            <button onClick={getRandomWord}>Click to start</button>
            <p>{userWords}</p>
            <p>Type a word that contains the letters above</p>
            <Form id="inputCon" onSubmit={submit}>
                <Form.Group className="row mb-2">
                    <section className="col-sm-10">
                        <Form.Control type="text" value={inputEl} controlId="emailInput"class="form-control" id="attackText" onChange={e=>setInputEl(e.target.value)}/>
                    </section>
                </Form.Group>
            </Form>
            <ul>
                {wordList}
            </ul>
            <p>Congratulations-- {lastWord} was worth {pointValue} points. Your running total is {total} </p>
        </section>
    )
};