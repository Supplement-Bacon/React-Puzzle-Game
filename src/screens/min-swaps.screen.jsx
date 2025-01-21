import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { BoardContainer } from "../components/board-container.component";
import { Board } from "../components/board.component";
import { Button } from "../components/button.component";
import { useTilesPositionStatus } from "../hooks/tile-position-status.hook";
import { UPDATE_GAME_STATUS } from "../store/constants";

const useSwapsCount = () => {
    const [swapsDone, setSwapsDone] = useState(0);
    const isSwapped = useSelector((state) => state.game.swap);

    useEffect(() => {
        if (isSwapped) {
            setSwapsDone((swap) => swap + 1);
        }
    }, [isSwapped]);

    return swapsDone;
};

const useThresholdExceeded = (numOfSwaps) => {
    const [isThresholdExceeded, setIsThresholdExceeded] = useState(false);
    const threshold = useSelector((state) => state.game.minSwapsMode.threshold);

    useEffect(() => {
        if (numOfSwaps > threshold) {
            setIsThresholdExceeded(true);
        }
    }, [numOfSwaps, threshold]);

    return isThresholdExceeded;
};

export const MinSwapsScreen = () => {
    const swapsDone = useSwapsCount();
    const history = useHistory();

    const isThresholdExceeded = useThresholdExceeded(swapsDone);
    const threshold = useSelector((state) => state.game.minSwapsMode.threshold);
    const areTilesAligned = useTilesPositionStatus();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isThresholdExceeded || areTilesAligned) {
            dispatch({ type: UPDATE_GAME_STATUS, payload: false });
            setTimeout(() => history.push("video"), 1000);
        } else {
            dispatch({ type: UPDATE_GAME_STATUS, payload: true });
        }
    }, [isThresholdExceeded, areTilesAligned, dispatch]);

    return (
        <>
            <BoardContainer>
                <Board />
            </BoardContainer>
        </>
    );
};
