import styled from 'styled-components';

export function Basic() {
    return (
        <Wrapper>
            <Icon src={'/vite.svg'}/>
            <Title>My title</Title>
            <Button>OK</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-around;
  
  background: gray;
  
  border-radius: 1rem;
  width: 10rem;
`

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const Title = styled.span`
  font-family: arial, sans-serif;
  font-weight: bold;
  color: white;
`;

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 0.5rem;
`
