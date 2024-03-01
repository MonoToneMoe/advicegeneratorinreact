import exp from "constants"
import Advice from "../Interfaces/Interfaces"

const getData = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice')
    const data: Advice = await promise.json()
    return data
}

export default getData;