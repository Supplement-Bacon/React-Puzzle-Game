import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { LayoutScreen } from "./layout.screen";
import { Button } from "../components/button.component";

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
    return (
        <Container>
            <ButtonsContainer>
                <Link to="/mode-select">
                    <StyledButton>New Game</StyledButton>
                </Link>

                {/* <StyledButton>Settings</StyledButton> */}
            </ButtonsContainer>
        </Container>
    );
};

export const MainMenuScreen = () => {
    return <LayoutScreen hideNavbar body={<BodyContent />} />;
};
