import React from 'react';
import ReactDOM from 'react-dom/client';

import router from "./router/router";
import {RouterProvider} from "react-router-dom";
import {LocaleProvider} from "./contexts/LocaleContext";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LocaleProvider>
        <RouterProvider router={router}/>
    </LocaleProvider>
);
