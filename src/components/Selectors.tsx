import styled from 'styled-components';

export function Selectors() {
	return (
		<Parent>
			<Children/>
			<Children/>
			<Children/>
		</Parent>
	)
}

const Children = styled.div`
	width: 100px;
	height: 100px;
	background: tomato;
`

const Parent = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	flex-direction: row;
	width: 400px;
	transition: 0.4s;
	
	${Children}:nth-child(2) {
		background-color: chartreuse;
	}
	
	&:hover {
		background: darkslateblue;
	}

	& > div {
		transition: 0.4s;
		&:hover {
			transform: rotateZ(40deg);
		}
	}
	
	@media screen and (max-width: 800px) {
		& > div {
			display: none;
		}

		& > div:nth-child(1) {
			display: block;
		}
	}
`
