import styled, {ThemeProvider} from 'styled-components';
import {defaultTheme} from '../styles/defaultTheme';

export function Themes() {
    return (
        <div>
            <Button>Normal</Button>

            <ThemeProvider theme={defaultTheme}>
                <Button>Themed</Button>
            </ThemeProvider>
        </div>
    );
}

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.colors.main};
  border: 2px solid ${props => props.theme.colors.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
    theme: {
        colors: {
            main: '#5e788d'
        }
    },
};
