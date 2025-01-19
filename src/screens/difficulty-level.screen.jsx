import React from "react";
import styled from "styled-components";

import { LayoutScreen } from "./layout.screen";
import { Button } from "../components/button.component";
import { DefaultNavContent } from "../components/default-nav-content.component";
import { DifficultyChooser } from "../components/difficulty-chooser.component";

const Heading = styled.h1`
    text-align: center;
    color: white;
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
`;

export const DifficultyLevelScreen = () => {
    return (
        <LayoutScreen navbar={<DefaultNavContent />}>
            <Heading>Difficulty Level</Heading>

            <ButtonsContainer>
                <DifficultyChooser level={1}>
                    <Button>Facile</Button>
                </DifficultyChooser>

                <DifficultyChooser level={2}>
                    <Button>Medium</Button>
                </DifficultyChooser>

                <DifficultyChooser level={3}>
                    <Button>Hard</Button>
                </DifficultyChooser>
            </ButtonsContainer>
        </LayoutScreen>
    );
};
