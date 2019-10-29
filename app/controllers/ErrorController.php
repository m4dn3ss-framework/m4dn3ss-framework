<?php

namespace app\controllers;

use app\framework\Controller;

class ErrorController extends Controller
{
    public function index($code)
    {
        header("HTTP/1.0 $code");
        $this->render('error', ['code' => $code]);
    }
}