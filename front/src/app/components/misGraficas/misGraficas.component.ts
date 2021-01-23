import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';

@Component({
    selector: 'app-misGraficas',
    templateUrl: './misGraficas.component.html',
    styleUrls: ['./misGraficas.component.less']
})
export class MisGraficasComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {
    
    $(".plus").hide();
    $(".aviso").hide();

    $("#close").hide();
    $("#login").hide();

    let headers = new Headers();

    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/');


    fetch('http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/get', { 
      credentials : 'include', 
      headers: headers
    })
    .then(response => response.text())
    .then((data) => {

      if(data != ""){




        fetch('http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/getGraficas', { 
          credentials : 'include', 
          headers: headers
        })
        .then(response2 => response2.json())
        .then((data3) => {

          var i;


          for (i = 0; i < data3.length; i++) {


            let img='';


            switch(data3[i]['tipo']) {
              case 'Line':
                img = 'assets/line.png';
                break;
              case 'Bar':
                img = 'assets/bar.png';
                break;
              case 'Pie':
                img = 'assets/pie.png';
                break;
              case 'Polar Area':
                img = 'assets/polarArea.png';
                break;
              case 'Doughnut':
                img = 'assets/doughnut.png';
                break;
            }
    
    
            $(".cards").append( `
            
            <a href='http://localhost:4200/#/chart/` + data3[i]['user'] + `/` + data3[i]['id'] + `'><div class="card">

              <p>` + data3[i]['titulo'] + `</p>

              <img src="` + img + `" width="125px">


            </div></a>` 
            
            );

          }

          $(".plus").show();

          $(".cards").append( `<style>

            .cards{
              text-align: center;
            }

            .cards a{
              text-decoration: none;
            }

            .card{
              color: black;
              margin-bottom: 20px;
              margin-right: 20px;
              padding: 10px;
              display: inline-block;
              min-width: 300px;
              max-width: 250px;
              text-align: center;
              border: 1px solid transparent;
              border-color: #323232;
              border-radius: 2.5px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
              cursor: pointer;
            }


            @media screen and (max-width: 730px){

              .card{

                display: block;
                min-width: inherit;
                max-width: inherit;

              }
      
          
            }
    
          
          </style>` );
          
        })







        $("#close").show();
      }else{
        $("#login").show();
        $(".aviso").show();
      }

    })

  }

  home(event){
    this.router.navigate(['/home']);
  }

  chart(event){
    this.router.navigate(['/chart']);
  }

  new(event){
    this.router.navigate(['/new']);
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