import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from "ui";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let ctr = 0;
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Button />
      </main>
      <div>
        <button onClick={() => {
          ctr++;
        }}>click count {ctr} </button>
      </div>
    </>
  )
}
