import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {RoutesEnum} from "./utils";
import {LandingPage, SignUpPage, SignInPage, BoardsPage, SingleBoardPage} from "./pages";

const Application = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={""} element={<LandingPage/>}/>
                <Route path={RoutesEnum.SIGN_IN} element={<SignInPage/>}/>
                <Route path={RoutesEnum.SIGN_UP} element={<SignUpPage/>}/>
                <Route path={RoutesEnum.BOARDS} element={<BoardsPage/>}/>
                <Route path={`${RoutesEnum.BOARDS}/:boardId`} element={<SingleBoardPage/>}/>
                <Route path={"*"} element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Application;