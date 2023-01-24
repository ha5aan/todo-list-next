"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import AddNewItem from './addNewItem'
import ListOfTodos from './listOfTodos';
import { useRouter } from "next/navigation";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [allTasks, setAllTasks] = useState<{ description: string, isCompleted: boolean }[]>([]);
  const router = useRouter();
  useEffect(() => {
    setAllTasks([{ description: "asd", isCompleted: false }, { description: "asd", isCompleted: true }])
  }, [])

  const reRenderParent = () => {
    router.refresh()
  }
  //let alltasks :{description:string,isCompleted:Boolean}[];
  return (

    <main >
      <AddNewItem alltasks={allTasks} refreshParent={reRenderParent} settask={setAllTasks} />
      <ListOfTodos alltasks={allTasks} refreshParent={reRenderParent} settask={setAllTasks} />
    </main>
  )
}
