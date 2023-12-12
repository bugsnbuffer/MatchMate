import {create} from "zustand"

export const formStepperCount=create((set)=>({

    count:0,
    goForword:()=>set((state)=>({count:state.count+1})),
    goBackword:()=>set((state)=>({count:state.count-1}))



}))


export const userFormDetails= create((set)=>({
    userform:{},
    updateform:(data)=>set((state)=>({userform:{...state.userform,...data}}))


}))