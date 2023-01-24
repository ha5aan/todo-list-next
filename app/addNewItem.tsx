"use client";
import React from 'react'
import { useState } from "react";

interface IItem { alltasks: { description: string, isCompleted: boolean }[], refreshParent: Function, settask: Function }
const AddNewItem = ({ alltasks, refreshParent, settask }: IItem) => {


    const [task, setTask] = useState("")
    const addToList = (e: any) => {
        e.preventDefault()
        console.log(task, alltasks)
        let allTask: { description: string, isCompleted: boolean }[] = alltasks;
        let temp: { description: string, isCompleted: boolean } = { description: task, isCompleted: false };
        allTask.unshift(temp)
        settask(allTask)
        setTask("")
        refreshParent()
        console.log(task, alltasks)
    }
    return (
        <div>AddNewItem
            <form onSubmit={addToList}>     <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type='submit'> Submit button</button>
            </form>

        </div>
    )
}

export default AddNewItem