import {useState} from 'react';
import styled from 'styled-components';

export const PropsDemo = () => {
	const [colorSwitchEnabled, setColorSwitchEnabled] = useState(false);

	const switchColor = () => setColorSwitchEnabled(!colorSwitchEnabled);

	return (
		<ColoredButton
			onClick={switchColor}
			colorSwitchEnabled={colorSwitchEnabled}
			borderColor={'yellow'}
		>
			Click me
		</ColoredButton>
	)
}

const ColoredButton = styled.button<{colorSwitchEnabled: boolean, borderColor: string}>`
	margin: 10px;
	
	background: ${(props) => props.colorSwitchEnabled ? '#535bf2' : 'gray'};
	
	border: 2px solid ${({borderColor}) => borderColor};
	
	box-shadow: ${({disabled}) => disabled ? 'none' : '0 0 5px 0 white'};
`
