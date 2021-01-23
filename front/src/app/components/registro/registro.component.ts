import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Chart from 'chart.js';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.less']
})
export class RegistroComponent implements OnInit {

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

  registro(event){

    let user = $("#user").val();

    let password = $("#password").val();

    // alert(user + password);



    const data = { user: user, password: password };

    fetch('http://localhost/pruebasLARAVEL/graficasGenerator01/back/public/registro', {
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
    .then((data) => {alert(data); this.router.navigate(['/home']);})



  }

}