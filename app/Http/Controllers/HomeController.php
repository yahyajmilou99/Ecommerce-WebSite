<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    function index()
    {
        return inertia("Home/Home");
    }
}
