import React from 'react'
import Container from './Components/Container'
import Header from './Components/Header'
import Form from './Components/Form'
import Table from './Components/Table'
import Footer from './Components/Footer'
import CreateDrawer from './Components/CreateDrawer'

const App = () => {
  return (
    <Container>
        <Header/>
        <Form/>
        <Table/>
        <Footer/>
        <CreateDrawer/>
    </Container>
  )
}

export default App