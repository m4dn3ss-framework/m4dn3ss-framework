<?php
// show errors?
if (ENV != 'production') {
	ini_set('display_errors', 1);
}

// start session
session_start();

// autoloader file
require_once __DIR__ . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

// routing
require_once __DIR__ . DIRECTORY_SEPARATOR . 'routes' . DIRECTORY_SEPARATOR . 'main.php';

// Creating new application instance
(new m4dn3ss\framework\App(__DIR__))->run();