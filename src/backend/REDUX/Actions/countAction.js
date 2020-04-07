import { INCREMENT_USER } from "../Types/types"
//created the action and gave in reducer count;
export const setCount = (count = 3)=> {
        return {
            type: INCREMENT_USER,
             payload: count
        }
}