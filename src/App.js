import React from 'react'
import styled from 'styled-components'
import Header from './Components/Header'

const Page = styled.section`
  background-color: #1E2122;
  width: 100vw;
  height: 100vh;
`

const App = () => {
  return (
    <Page>
      <Header />
      <div>
        {/* <Sidebar />
        <ContentBody /> */}
      </div>
    </Page>
  )
}

export default App
