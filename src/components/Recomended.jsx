import React from 'react';
import styled from 'styled-components';

const Recomended = () => {
  return (
    <Container>
        <h4>Recomended for you.</h4>
        <Content>
            <div>1</div>
            <div>2</div>
            <div>Jitu</div>
            <div>4</div>
        </Content>
    </Container>
  )
}


const Container = styled.div`
    padding : 0 0 26px;
    

`
const Content = styled.div`
    
    display:grid;
    gap:25px;
    grid-gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr))

`

export default Recomended
