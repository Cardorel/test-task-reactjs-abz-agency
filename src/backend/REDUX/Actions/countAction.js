import { INCREMENT_USER } from "../Types/types"

export const setCount = (count = 3)=> {
        return {
            type: INCREMENT_USER,
             payload: count
        }
}