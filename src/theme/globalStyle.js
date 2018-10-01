import { injectGlobal } from "styled-components";

/* eslint-disable */
injectGlobal`
:root {
  --primaryColor: #353F60;
  --secondaryColor: #7818DE;
  --thirtyColor: #A10AD5 ;
  --borderColor: #DEE0E2;
  --grayColor: #F6F8FB;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--primaryColor);
  background: white;
}

::-webkit-scrollbar{
  width: 5px;
  height: 5px;
  cursor: pointer;
}

::-webkit-scrollbar-track{
  background-color: var(--borderColor);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb{
  background: rgba(var(--primaryColor), .2);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover{
  background: var(--primaryColor) ;
}
`;
