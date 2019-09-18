import { Component , OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime,distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'ffdc-vector-map-demo',
  templateUrl: './vector-map-demo.template.html'
})

export class VectorMapDemoComponent implements OnInit {
  data=[{
    country: ['FRA','CHN','AUS','USA','MAR'],
    value: [10,25,50,150,250]
  }]
  
  centerPos: number[] = [2.35,48.86];

  countries: string[] = this.data[0].country
  countries$ = new Subject();

  values: number[] = this.data[0].value;
  values$ = new Subject();  
  
  legends: string[] = ['Text 1' , 'Text 2' , 'Text 3'];
  legends$= new Subject();

  colorbarTitle: string = "Colorbar Title";
  colorbarTitle$ = new Subject();

  colorbarColorMin : string = "blue";
  colorbarColorMin$ = new Subject();

  colorbarColorMax : string = "red ";
  colorbarColorMax$ = new Subject();

  titleMap: string = "TitleMap";
  titleMap$ = new Subject();

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
      this.data[0].country = this.countries
    })
    //Configuration Values
    this.values$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((value: string) => {
      this.values = value.split(",").map(term => parseInt(term))
      this.data[0].value = this.values
 
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
    ).subscribe((titleColorBar: string) => {
      this.colorbarTitle = titleColorBar
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
    //Configuration Title of Map
    this.titleMap$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((titleMap: string) => {
      this.titleMap = titleMap
    })
  }
  //Configuration Center Map (the first number is longitude and the second is the latitude)
  checkPosition(e){
    console.log(e.target.value)
    if(e.target.value==='Europe'){
      this.centerPos = [2.35,48.86]
    }
    if(e.target.value==='USA'){
      this.centerPos = [-95.71,37.09]
    }
    if(e.target.value==='Oceanie'){
      this.centerPos = [151.20,-33.87]
    }
    if(e.target.value==='Asie'){
      this.centerPos = [76.45,25.03]
    }
    if(e.target.value==='Afrique'){
      this.centerPos = [34.50,-8.78]
    }
  }
  onCountryClick($event){
    console.log()
  }
}

