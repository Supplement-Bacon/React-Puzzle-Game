import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { useTransition, animated } from "react-spring";

import { MemoryRouter as Router, Route, Switch, useLocation } from "react-router-dom";

import { MainMenuScreen } from "./screens/main-menu.screen";
import { DifficultyLevelScreen } from "./screens/difficulty-level.screen";
import { TimeLimitScreen } from "./screens/time-limit.screen";
import { MinSwapsScreen } from "./screens/min-swaps.screen";

import "./styles.css";
import store from "./store";
import { ModeSelectScreen } from "./screens/mode-select.screen";
import { gameModeUrlMap, gameMode } from "./store/constants";
import { VideoScreen } from "./screens/video.screen";

function App() {
    const location = useLocation();
    const transitions = useTransition(location, (location) => location.pathname, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 500,
    });

    return (
        <div className="App">
            {transitions.map(({ item, key, props: style }) => (
                <animated.div
                    key={key}
                    style={{
                        ...style,
                        width: "100vw",
                        height: "100vh",
                    }}
                >
                    <Switch location={item}>
                        <Route path={gameModeUrlMap[gameMode.minSwaps]}>
                            <MinSwapsScreen />
                        </Route>

                        <Route path={gameModeUrlMap[gameMode.timeLimit]}>
                            <TimeLimitScreen />
                        </Route>

                        <Route path="/difficulty-level">
                            <DifficultyLevelScreen />
                        </Route>

                        <Route path="/mode-select">
                            <ModeSelectScreen />
                        </Route>

                        <Route path="/video">
                            <VideoScreen />
                        </Route>

                        <Route path="/" exact>
                            <MainMenuScreen />
                        </Route>
                    </Switch>
                </animated.div>
            ))}
        </div>
    );
}

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
