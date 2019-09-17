import { Component , OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime,distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'ffdc-vector-map-demo',
  templateUrl: './vector-map-demo.template.html'
})
export class VectorMapDemoComponent implements OnInit {
  lon: number = 2.35;
  lat: number = 48.86;

  countries: string[] = ['FRA','CHN','AUS','USA','MAR'];
  countries$ = new Subject();

  values: number[] = [10,25,50,150,250];
  values$ = new Subject();

  legends: string[] = ['Text 1' , 'Text 2' , 'Text 3'];
  legends$= new Subject();

  colorbarTitle: string = "Title";
  colorbarTitle$ = new Subject();

  colorbarColorMin : string = "blue";
  colorbarColorMin$ = new Subject();

  colorbarColorMax : string = "red ";
  colorbarColorMax$ = new Subject();

  checked = false;
  
  //Checkbox Button for display configuration
  toggleVisibility(e){
    this.checked= e.target.checked;
  }
  
  ngOnInit() {
    //Configuration Countries
    this.countries$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((country: string) => {
      this.countries = country.split(",").map(term => term.toUpperCase()) 
    })
    //Configuration Values
    this.values$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((value: string) => {
      this.values = value.split(",").map(term => parseInt(term)) 
    })
    //Configuration Legends
    this.legends$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((texte: string) => {
      this.legends = texte.split(",").map(term => term) 
    })
    //Configiration Colorbar Title
    this.colorbarTitle$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((title: string) => {
      this.colorbarTitle = title
    })
    //Configuration ColorBar Color Minimum
    this.colorbarColorMin$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((color: string) => {
      this.colorbarColorMin = color
    })
    //Configuration ColorBar Color Maximum
    this.colorbarColorMax$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((color: string) => {
      this.colorbarColorMax = color
    })
    
    
  }
  //Configuration Center Map
  checkPosition(e){
    console.log(e.target.value)
    if(e.target.value==='Europe'){
      this.lon = 2.35;
      this.lat = 48.86;
    }
    if(e.target.value==='USA'){
      this.lon = -95.71;
      this.lat = 37.09;
    }
    if(e.target.value==='Oceanie'){
      this.lon = 151.20;
      this.lat = -33.87;
    }
    if(e.target.value==='Asie'){
      this.lon = 76.45;
      this.lat = 25.03;
    }
    if(e.target.value==='Afrique'){
      this.lon = 34.50;
      this.lat = -8.78;
    }
  }
}

