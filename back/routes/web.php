<?php
use Illuminate\Http\Request;

use App\User;

use App\Grafica;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/100', function () {

    session(['user' => "400"]);

    return session('user');

});

Route::post('set', function (Request $request) {

    // $user = $request->user . "aa";

    session(['user' => $request->user]);

    return 'ok post';

});

Route::get('get', function () {

    return session('user');


});


Route::post('registro', function (Request $request) {


    if (User::where('user',$request->user)->count() > 0) {
        return "Ya existe un usuario con ese nombre";
     }else{

        $user = new User;
        
        $user->user = $request->user;
    
        $user->password = $request->password;
        
        $user->save();
    
        return "Usuario registrado correctamente";

     }

});

Route::get('cerrarSesion', function () {

    session()->forget('user');

    session()->flush();


});


Route::post('login', function (Request $request) {

    $matchThese = ['user' => $request->user, 'password' => $request->password];


    if (User::where($matchThese)->count() > 0) {

        session(['user' => $request->user]);

        return "Bienvenido " . session('user');

     }else{
    
        return "Datos incorrectos";

     }

});


Route::post('add', function (Request $request) {

    $grafica = new Grafica;

    $grafica->titulo = $request->titulo;

    $grafica->cantidad = $request->cantidad;
        
    $grafica->tipo = $request->tipo;



    for ($i = 0; $i < $request->cantidad; $i++) {

        $grafica->{'valor' . ''.($i+1).''} = $request->valores[$i];

    }


    for ($i = 0; $i < $request->cantidad; $i++) {

        $grafica->{'nombre' . ''.($i+1).''} = $request->nombres[$i];

    }

    $grafica->user = session('user');

    
    $grafica->save();

    return "Grafica añadida";

});



Route::get('getGraficas', function () {

    return Grafica::where('user', session('user'))->get();

});

