import {Button as MuiButton, Typography as MuiTypography, styled} from "@mui/material";


export const Button = styled(MuiButton)`
    my: 2;
    color: white;
    display: block;
  margin-left: 2em;
    `;

export const Typography = styled(MuiTypography)`
  mr: 2;
  xs: none;
  md: flex;
  fontFamily: monospace;
  fontWeight: 700;
  letterSpacing: .3rem;
  color: inherit;
  textDecoration: none;
`;
