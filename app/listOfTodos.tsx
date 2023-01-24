import React from 'react'
import styles from "./listOfTodo.module.css"
interface IItem { alltasks: {description:string,isCompleted:boolean}[], refreshParent: Function, settask: Function }

const ListOfTodos = ({ alltasks, refreshParent, settask }: IItem) => {

   const changeHandle =(index:number)=>{
var TempList = alltasks;
TempList[index].isCompleted=!alltasks[index].isCompleted;
settask(TempList)
refreshParent()
}

const DeleteHandler =(index:number)=>{
    alltasks.splice(index,1)
    settask(alltasks)
    refreshParent()
    }
  return (
    <ul>
    {alltasks?.map((element:{description:string,isCompleted:boolean},index:number)=>{
    return(<li className={styles.listDesign} key={index}>
        <input type="checkbox" name="isTaskDone"  checked={element.isCompleted} onChange={()=>changeHandle(index)} id="" />
    {element.description}
    <span className={styles.addSpace} />
    <button onClick={()=>{DeleteHandler(index)}}> Delete Task</button>
    </li>  )
    })}
    
        </ul>
  )
}

export default ListOfTodos