import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ReactQueryDevtools} from "react-query/devtools";
import { Home } from "./components/Home";
import Navigation from "./Navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const Main = () => {
    const client = new QueryClient();
    return (
        <Box>
            <Navigation></Navigation>
            <BrowserRouter>
                <QueryClientProvider client={client}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    {/* <ReactQueryDevtools></ReactQueryDevtools> */}
                </QueryClientProvider>
            </BrowserRouter>
        </Box>
    );
};

export default Main;
