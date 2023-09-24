import styled from 'styled-components';

// https://styled-components.com/docs/api#css-prop
export function CssProp() {
	
	return (
		<div css={'display:flex; justify-content: space-between; width: 500px; margin: auto;'}>
			<Circle/>
			<Circle/>
			<Circle/>
		</div>
	)
}

const Circle = styled.div`
	width: 40px;
	height: 40px;
	background: #535bf2;
	border-radius: 100%;
`
