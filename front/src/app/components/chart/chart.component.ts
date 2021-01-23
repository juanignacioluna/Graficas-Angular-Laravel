import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Chart from 'chart.js';


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {

  id;

  user;

  info;


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

    this.activatedRoute.params.subscribe( params => {

      this.id = params['id'];

      this.user = params['user'];

    });



    fetch('http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/getGraficas', { 
      credentials : 'include', 
      headers: headers
    })
    .then(response2 => response2.json())
    .then((data3) => {

      var i;


      for (i = 0; i < data3.length; i++) {

        if(data3[i]['id']==this.id){

          console.log(data3[i]);

          this.info = data3[i];

        }

      }

    })
    .then((data4) => {

      this.cargarChart();

    })



  }


  random_rgba() {
      var o = Math.round, r = Math.random, s = 255;
      return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }



  cargarChart(){


    var tipo;


    switch(this.info['tipo']) {
      case 'Line':
        tipo = 'line';
        break;
      case 'Bar':
        tipo = 'bar';
        break;
      case 'Pie':
        tipo = 'pie';
        break;
      case 'Polar Area':
        tipo = 'polarArea';
        break;
      case 'Doughnut':
        tipo = 'doughnut';
        break;
    }



    var nombres = [];

    var valores = [];

    var colores = [];


    var i;


    for (i = 0; i < this.info['cantidad']; i++) {

      nombres[i] = this.info['nombre' + (i+1)];

      valores[i] = this.info['valor' + (i+1)];

      colores[i] = this.random_rgba();

    }




    var ctx2= document.getElementById('myChart')as HTMLCanvasElement;
    var ctx = ctx2.getContext('2d');
    var myChart = new Chart(ctx, {
        type: tipo,
        data: {
            labels: nombres,
            datasets: [{
                label: this.info['titulo'],
                data: valores,
                backgroundColor: colores,
                borderColor: colores,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


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

}