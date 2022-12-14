import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './page/ListPage';
import DetailPage from './page/DetailPage';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} />

            </Switch>
        </div>
    );
}

export default TodoFeature;