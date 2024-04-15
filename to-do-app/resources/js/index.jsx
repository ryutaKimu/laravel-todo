import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main.jsx';

// index.blade.phpのid="app"を読み込む
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <Main/>
);
