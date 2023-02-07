import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getBurguers } from "../../../services/api"

export default function Burguers() {
  const [burgers, setBurguers] = useState([]);

  useEffect(()=>{
    ;(async () =>{
      const burguerRequest = await getBurguers()

      setBurguers(burguerRequest.data)
    })()
  }, [])

  console.log({burgers})

  return(
  <>
    <Head title='Hamburguers' description="Nossos melhores burgueres" />
    <SnackTitle> Hamburgueres</SnackTitle>
    <Snacks snacks={burgers}/>
  </>)

}
