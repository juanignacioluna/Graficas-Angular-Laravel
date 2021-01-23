<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableGraficas extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('graficas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user');
            $table->string('titulo');
            $table->string('tipo');
            $table->integer('cantidad');
            $table->integer('valor1')->nullable();
            $table->integer('valor2')->nullable();
            $table->integer('valor3')->nullable();
            $table->integer('valor4')->nullable();
            $table->integer('valor5')->nullable();
            $table->integer('valor6')->nullable();
            $table->integer('valor7')->nullable();
            $table->integer('valor8')->nullable();
            $table->integer('valor9')->nullable();
            $table->integer('valor10')->nullable();
            $table->integer('valor11')->nullable();
            $table->integer('valor12')->nullable();
            $table->integer('valor13')->nullable();
            $table->integer('valor14')->nullable();
            $table->integer('valor15')->nullable();
            $table->integer('valor16')->nullable();
            $table->integer('valor17')->nullable();
            $table->integer('valor18')->nullable();
            $table->integer('valor19')->nullable();
            $table->integer('valor20')->nullable();
            $table->integer('valor21')->nullable();
            $table->integer('valor22')->nullable();
            $table->integer('valor23')->nullable();
            $table->integer('valor24')->nullable();
            $table->integer('valor25')->nullable();
            $table->integer('valor26')->nullable();
            $table->integer('valor27')->nullable();
            $table->integer('valor28')->nullable();
            $table->integer('valor29')->nullable();
            $table->integer('valor30')->nullable();
            $table->integer('valor31')->nullable();
            $table->integer('valor32')->nullable();
            $table->integer('valor33')->nullable();
            $table->integer('valor34')->nullable();
            $table->integer('valor35')->nullable();
            $table->integer('valor36')->nullable();
            $table->integer('valor37')->nullable();
            $table->integer('valor38')->nullable();
            $table->integer('valor39')->nullable();
            $table->integer('valor40')->nullable();
            $table->integer('valor41')->nullable();
            $table->integer('valor42')->nullable();
            $table->integer('valor43')->nullable();
            $table->integer('valor44')->nullable();
            $table->integer('valor45')->nullable();
            $table->integer('valor46')->nullable();
            $table->integer('valor47')->nullable();
            $table->integer('valor48')->nullable();
            $table->integer('valor49')->nullable();
            $table->integer('valor50')->nullable();
            $table->string('nombre1')->nullable();
            $table->string('nombre2')->nullable();
            $table->string('nombre3')->nullable();
            $table->string('nombre4')->nullable();
            $table->string('nombre5')->nullable();
            $table->string('nombre6')->nullable();
            $table->string('nombre7')->nullable();
            $table->string('nombre8')->nullable();
            $table->string('nombre9')->nullable();
            $table->string('nombre10')->nullable();
            $table->string('nombre11')->nullable();
            $table->string('nombre12')->nullable();
            $table->string('nombre13')->nullable();
            $table->string('nombre14')->nullable();
            $table->string('nombre15')->nullable();
            $table->string('nombre16')->nullable();
            $table->string('nombre17')->nullable();
            $table->string('nombre18')->nullable();
            $table->string('nombre19')->nullable();
            $table->string('nombre20')->nullable();
            $table->string('nombre21')->nullable();
            $table->string('nombre22')->nullable();
            $table->string('nombre23')->nullable();
            $table->string('nombre24')->nullable();
            $table->string('nombre25')->nullable();
            $table->string('nombre26')->nullable();
            $table->string('nombre27')->nullable();
            $table->string('nombre28')->nullable();
            $table->string('nombre29')->nullable();
            $table->string('nombre30')->nullable();
            $table->string('nombre31')->nullable();
            $table->string('nombre32')->nullable();
            $table->string('nombre33')->nullable();
            $table->string('nombre34')->nullable();
            $table->string('nombre35')->nullable();
            $table->string('nombre36')->nullable();
            $table->string('nombre37')->nullable();
            $table->string('nombre38')->nullable();
            $table->string('nombre39')->nullable();
            $table->string('nombre40')->nullable();
            $table->string('nombre41')->nullable();
            $table->string('nombre42')->nullable();
            $table->string('nombre43')->nullable();
            $table->string('nombre44')->nullable();
            $table->string('nombre45')->nullable();
            $table->string('nombre46')->nullable();
            $table->string('nombre47')->nullable();
            $table->string('nombre48')->nullable();
            $table->string('nombre49')->nullable();
            $table->string('nombre50')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('graficas');
    }
}
