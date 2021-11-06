import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Index from './Index'
import CommentsForm from './CommentsForm'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Index" component={Index}/>
                <Route exact path="/" component={Index} />
                <Route exact path="/Comments" component={CommentsForm}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;