 <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>laravelView側タイトル</title>
    @viteReactRefresh
    @vite([
    'resources/scss/app.scss',
    'resources/js/index.jsx',
    ])
</head>
<body>
    <div id="app"></div>
</body>
</html>
