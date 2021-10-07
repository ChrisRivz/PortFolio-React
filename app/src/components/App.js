import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Index from './Index'

function App() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/Index" component={Index}/>
                <Route exact path="/" component={Index} />
            </Switch>
        </BrowserRouter>
    )


}

export default App;