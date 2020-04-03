import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
const CalendarLayout = lazy(() =>
  import("../components/Pages/Calendar/CalendarLayout"),
);

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path='/calendar' component={CalendarLayout} />
      </Switch>
    </Suspense>
  );
};

export default Router;
