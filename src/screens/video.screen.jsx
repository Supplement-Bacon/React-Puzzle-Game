import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";

import { LayoutScreen } from "./layout.screen";
import { Button } from "../components/button.component";
import { useDispatch } from "react-redux";
import { useSelectedGameMode } from "../hooks/selected-game-mode.hook";
import {
    gameMode,
    gameModeUrlMap,
    SELECT_GAME_MODE,
    SET_BOARD_DIMENSIONS,
} from "../store/constants";

const Heading = styled.h1`
    text-align: center;
    color: white;
`;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    padding: 1em;
    padding-bottom: 0;
    justify-content: center;
    border-radius: 7px;
    align-items: center;
    flex: 1;
`;

export const StyledButton = styled(Button)`
    min-width: 10em;
`;

export const BodyContent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useSelectedGameMode();
    const selectedGameMode = useSelectedGameMode();

    useEffect(() => {
        const payload = {
            rows: 3,
            columns: 3,
        };
        dispatch({ type: SELECT_GAME_MODE, payload: gameMode.minSwaps });
        dispatch({ type: SET_BOARD_DIMENSIONS, payload });
    }, []);

    const handleClick = () => {
        console.log(selectedGameMode);
        console.log(selectedGameMode);

        history.push(gameModeUrlMap[selectedGameMode]);
    };

    return (
        <Container>
            <ButtonsContainer>Teaser</ButtonsContainer>
        </Container>
    );
};

export const VideoScreen = () => {
    return <LayoutScreen hideNavbar body={<BodyContent />} />;
};
