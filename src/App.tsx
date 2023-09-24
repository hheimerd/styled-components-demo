import {styled} from './lib/styled';
import {useState} from 'react';

function App() {
    const [val, setVal] = useState(false);

    return (
        <div onClick={() => setVal(!val)}>
            <MyDiv color={val ? 'blue' : 'red'}/>
            <MyDiv />
            <MyDiv color={'red'}/>
        </div>
    );
}

const MyDiv = styled.div<{ color?: string }>`
  width: 100px;
  height: 100px;
  background: ${({color}) => color ?? '#535bf2'};
`;

export default App;
