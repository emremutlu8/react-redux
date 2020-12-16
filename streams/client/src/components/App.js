import React from "react";
import { Router, Route, Switch} from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

// Client ID
// 943092448602-turnf1dvbd2aj0kob1buim7di4419ple.apps.googleusercontent.com

// NEVER USE ANCHER TAG => <a href...>, Instead of use Link from react-router
// Eğer exact kelimesini yazmasaydık, oradaki / ,işaretini aşağıdaki /pagetwo da içerdiği için buradaki içerik /pagetwo sayfasının içinde de görünebilecekti
//exact demek exact={true} demenin kısa halidir

const App = () => {
  return (
    <div className={`ui container`}>
      <Router history = {history}> {/* History'yi kullanabilmek için BrowserRouter'ı Router ile değiştirdik. */}
        <div>
          <Header />
            <Switch>
              <Route path={`/`} exact component={StreamList} />
              <Route path={`/stream/new`} exact component={StreamCreate} />
              <Route path={`/stream/edit/:id`} exact component={StreamEdit} />
              <Route path={`/stream/delete/:id`} exact component={StreamDelete} />
              <Route path={`/stream/:id`} exact component={StreamShow} />
            </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;