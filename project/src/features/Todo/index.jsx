import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../components/NotFound";
import DetaiPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
	const match = useRouteMatch();

	return (
		<div>

			<Switch>
				<Route path={match.path} component={ListPage} exact />
				<Route path={`${match.path}/todoId`} component={DetaiPage} exact />

				<Route component={NotFound} />
			</Switch>
		</div>
	);
}

export default TodoFeature;
