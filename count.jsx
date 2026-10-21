
import {atom} from "recoil";
import { selector } from "recoil";
  export  const countAtoms= atom({
    key : "countAtoms",
    default :0
  });


    export const evenSelector=  selector({
        key : "evenselector",
        get : ({get}) =>{
             const count = get(countAtoms);
             return  count%2;
        }
    })
