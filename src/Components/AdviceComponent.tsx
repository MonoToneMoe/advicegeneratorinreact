import React, { useEffect, useState } from 'react'
import Advice from '../Interfaces/Interfaces'
import getData from '../DataServices/DataService'
import pattern_divider_desktop from "../images/pattern-divider-desktop.svg"
import pattern_divider_mobile from "../images/pattern-divider-mobile.svg"

const AdviceComponent = (props: {id: number, advice: string}) => {
        const [advice, setAdvice] = useState<Advice>()

        const getAdvice = () => {

        }

    return (
        <div className='box'>
            <h3>ADVICE #{props.id}</h3>
            <h1>"{props.advice}"</h1>
            <img className='divider-desktop' src={pattern_divider_desktop} alt="" />
            <img className='divider-mobile' src={pattern_divider_mobile} alt="" />
        </div>
    )
}

export default AdviceComponent