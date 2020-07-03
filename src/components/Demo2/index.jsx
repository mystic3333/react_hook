import React,{useState} from 'react'

export default function Demo2() {
    const letters = ['a', 'b', 'c', 'd']

    const [letter, setLetter] = useState(letters[0]) 

    function changeLetter() {
        let randomIndex = Math.floor(Math.random() * letters.length)
        setLetter(letters[randomIndex])
        console.log(randomIndex)
    }

    return(
        <div>
            current letter: { letter }
            <button onClick={changeLetter}>change user</button>
        </div>
    )

}

