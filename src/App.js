import React from 'react'
import GlobalStyle from './Components/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import theme from './theme'
import PageBody from './Components/PageBody'

const Page = styled.section`
  background-color: #1E2122;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`

const PageContentWrapper = styled.div`
  display: flex;
  /* background-color: #181B1C; */
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header />
        <PageContentWrapper>
          <Sidebar />
          <PageBody />
        </PageContentWrapper>
      </Page>
    </ThemeProvider>
  )
}

export default App
