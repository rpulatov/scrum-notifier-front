import React, { Fragment } from 'react';
import Cardd from '../Components/Card';
import {Link} from 'react-router-dom'

function Authorization() {

    return (
    <Fragment>
        <Cardd/>

        <Link to="/users" style = {{margin: '60em'}}>*Временно* ссылка на users</Link>

    </Fragment>
    );
}

export default Authorization;