import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [pages] = useState([
    {
      name: "about"
    },
    {
      name: "order"
    },
    {
      name: "sign up"
    },
    {
      name: "log in"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
      <ApolloProvider client={client}>
      <BrowserRouter>
          <nav />
          <Switch> 
             <Route path="/" component={componentToRenderBasedOnPath} />
          </Switch>
          </BrowserRouter>
      </ApolloProvider>
    );
  };

export default App;