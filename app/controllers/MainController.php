<?php

namespace app\controllers;

use m4dn3ss\framework\Controller;

class MainController extends Controller
{
    public function index()
    {
        $this->render('main', ['name' => 'm4dn3ss']);
    }
}