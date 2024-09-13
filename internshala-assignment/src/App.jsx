import React from 'react'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import Container from './Container';
function App() {
  

  return (
    <div className='w-full overflow-x-scroll flex ' >
        <div className="w-1/2 hidden lg:block"></div>
        <div className="w-full lg:w-1/2 p-4">
     {/* <TopSection></TopSection> */}
     
          <Container >
            <TopSection></TopSection>
          </Container>
          <Container>
            <BottomSection></BottomSection>
          </Container>
        </div>
     </div>
  )
}

export default App
