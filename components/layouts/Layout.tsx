import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"


interface Props { 

  title?: string
}

export const Layout: FC<Props>= ({children, title}) => {

  return (
    <>
    <Head>
       <title>{ title || 'Pokemon App'}</title>
       <meta name="author" content="Walter Vivar"/>
       <meta name="description" content="Informacion de algun pokemon"/>
       <meta name="keywords" content="XXX"/>
    </Head>

    <Navbar/>

      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  )
}
