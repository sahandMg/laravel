<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function time(){


        $today = Carbon::now();
        $tomorrow = Carbon::now();
        $tomorrow = $tomorrow->addDays(30);
        echo  $today->diffInDays($tomorrow);
//       echo $today->toFormattedDateString();
//

//        return view('home',compact('time'));
    }
}
