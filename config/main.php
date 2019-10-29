<?php

return array(
    'db' => include('db.php'),
    'views' => [
        'layoutFile' => 'layout',
        'viewsDirectory' => 'views',
    ],
    'controllers' => [
        'namespace' => 'app\\controllers',
        'errorController' => 'ErrorController'
    ]
);