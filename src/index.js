import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';


//Initialize Apollo Client for hasura connection
const client = new ApolloClient({
  uri: 'https://my-technical-task.hasura.app/v1/graphql',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "X-Hasura-Admin-Secret":
      "WqfEJPojnnIo0kSdHt4gqzNSLgiE73EjdIxCrWVPkltoJZUm05p5AXSCwFlBl8b5",
  },
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <ApolloProvider client={client}>
    <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
