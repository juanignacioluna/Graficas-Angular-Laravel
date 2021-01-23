import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Chart from 'chart.js';


@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.less']
})
export class NewComponent implements OnInit {

  cantidad=false;

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

    $("#close").hide();
    $("#login").hide();

    let headers = new Headers();

    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/');


    fetch('http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/get', { 
      
      // headers: headers,
      credentials : 'include', 
      headers: headers
    })
    .then(response => response.text())
    .then((data) => {

      if(data != ""){
        $("#close").show();
      }else{
        $("#login").show();
      }

    })
  }



  add(event){


    let llenos = true;

    $('input').each(function() {

      if ($(this).val() == '') {
        llenos = false;
      }

    });

    if(llenos && this.cantidad){


      var valores = [];

      var i;
      for (i = 0; i < $("#cantidad").val(); i++) {
  
        valores[i] = parseInt($("#valor"+(i+1)+"").val());
  
  
      }
  
      console.log(valores);
  
  
  
      var nombres = [];
  
      var i;
      for (i = 0; i < $("#cantidad").val(); i++) {
  
        nombres[i] = $("#name"+(i+1)+"").val();
  
  
      }
  
      console.log(nombres);



      let titulo = $("#titulo").val();

      let tipo = $("select").val();

      let cantidad = $("#cantidad").val();
  
  
      const data = { titulo: titulo, tipo: tipo, cantidad: cantidad, valores: valores, nombres: nombres };
  
      fetch('http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/add', {
          method: 'POST', 
          credentials : 'include', 
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/'
  
            
          },
          body: JSON.stringify(data),
      })
      .then(response => response.text())
      .then((data) => {this.router.navigate(['/misGraficas']);})


      // alert("todos tienen valores");
    }else{
      alert("Ingrese todos los valores");
      // alert("algunos o todos estan vacio");
    }



  }
  

  okNro(event){


    if($("#cantidad").val()>0 && $("#cantidad").val()<50){


      $(".fila").empty();



      var i;


      for (i = 0; i < $("#cantidad").val(); i++) {


        $(".fila").append( `<div>

          <h6 class="nro">` + (i+1) + `</h6>

          <input placeholder="Nombre del campo" type="text" name="name` + (i+1) + `" id="name` + (i+1) + `" class="name nroElement">

          <input class="valorNro nroElement" placeholder="Valor numerico" type="number" name="valor` + (i+1) + `" id="valor` + (i+1) + `">
      
        </div>` );


      }

      $(".fila").append( `<style>

      .nroElement::-webkit-input-placeholder {
        color: white
      }

      .nroElement{
        text-indent: 1.15em;
        min-width: 300px;
        min-height: 25px;
        margin-bottom: 10px;
        background: #959595;
        color: white;
        font: bold 1.5em "Verdana", Geneva, sans-serif;

        &::placeholder { 
            color: white;
        }

        border: 1px solid transparent;
        border-color: darken(#959595, 5%);
        border-radius: 2.5px;
      }

      .nro{

        display:inline-block; 
        font-size: 1.25em;

      }


      @media screen and (max-width: 750px){

        .contenedor{

            .grid(20px, 3, auto, 5, auto);
    

            grid-template-areas:    "navbar         navbar              navbar              navbar"
                                    "titulo         titulo              titulo              titulo"
                                    "side1          info                info                side2"
                                    "fila          fila                 fila                 fila"
                                    "side1          add                 add                 side2";

    
        }

        .fila *{
              font-size: 0.9em;
              min-width: 10px;
          
      }
    
      }

      
      </style>` );


    }else{
      alert("Numero incorrecto");
    }



    this.cantidad=true;


  }


  
  cerrarSesion(event){

    let headers = new Headers();

    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/');


    fetch('http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/cerrarSesion', { 
      
      // headers: headers,
      credentials : 'include', 
      headers: headers
    })
    .then((response) => {
      console.log(response.text());
    })


  }

  misGraficas(event){
    this.router.navigate(['/misGraficas']);
  }

  home(event){
    this.router.navigate(['/home']);
  }


  login(event){
    this.router.navigate(['/login']);
  }

}