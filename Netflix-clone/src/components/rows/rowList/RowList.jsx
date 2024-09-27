import React from 'react'
import Row from "../row/Row"
import "./rowList.css"
import requests from "../../../http/requests"

function RowList() {
  return (
    <>
    <Row
    title="Comedy Movies"
    fetchUrl={requests.ComedyMovies}
    isLarge={true}/>

<Row
    title="Action Movies"
    fetchUrl={requests.ActionMovies}
    isLarge={false}/>

<Row
    title="Trending Movies"
    fetchUrl={requests.TrendingMovie}
    isLarge={false}/>


<Row
    title="Romance Movies"
    fetchUrl={requests.RomanceMovie}
    isLarge={false}/>


<Row
    title="Horror Movies"
    fetchUrl={requests.HorrorMovies}
    isLarge={false}/>


<Row
    title="Documentaries"
    fetchUrl={requests.Documentaries}
    isLarge={false}/>


<Row
    title="NetflixOriginals"
    fetchUrl={requests.NetflixOriginals}
    isLarge={false}/>
    </>
  )
}

export default RowList