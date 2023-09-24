import {styled} from '@linaria/react';
import {useState} from 'react';

// https://github.com/callstack/linaria
export function LinariaTest() {
	const [val, setVal] = useState(false);

	return (
		<>
			<LinariaDiv
				color={val ? 'tomato' : 'indigo'}
				onClick={() => setVal(!val)}
			/>
		</>

	)
}


const LinariaDiv = styled.div<{color: string}>`
	width: 100px;
	height: 100px;
	background: ${({color}) => color}
`;
