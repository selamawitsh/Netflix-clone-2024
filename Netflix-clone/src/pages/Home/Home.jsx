import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/banner/Banner"
import RowList from "../../components/rows/rowList/RowList"
function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>
    </>
  )
}

export default Home