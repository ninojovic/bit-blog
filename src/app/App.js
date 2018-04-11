import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { AuthorsPage } from './pages/AuthorsPage'
import { SingleAuthorPage } from './pages/SingleAuthorPage'
import { SinglePostPage } from './pages/SinglePostPage'
import { NewPostPage } from './pages/NewPostPage'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/authors" component={AuthorsPage} />
          <Route exact path="/singlepost/:id" component={SinglePostPage} />
          <Route exact path="/singleauthor/:id" component={SingleAuthorPage} />
          <Route exact path="/posts/new" component={NewPostPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App;
