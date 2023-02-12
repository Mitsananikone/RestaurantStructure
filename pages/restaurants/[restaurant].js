import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Restaurant() {
  const router = useRouter()
  return (
   <h1>Dynamic Restaurant Page {router.query.restaurant}</h1>
  )
}
