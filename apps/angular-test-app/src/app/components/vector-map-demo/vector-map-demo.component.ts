import { Component , OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';

@Component({
  selector: 'ffdc-vector-map-demo',
  templateUrl: './vector-map-demo.template.html'
})
export class VectorMapDemoComponent implements OnInit {
  countries: string[] = ['FRA','BEL','ITA'];
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
  toggleVisibility(e){
    this.checked= e.target.checked;
  }
  ngOnInit() {
    this.countries$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((country: string) => {
      this.countries = country.split(",").map(term => term.toUpperCase()) 
    })
    this.values$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((value: string) => {
      this.values = value.split(",").map(term => parseInt(term)) 
    })
    this.legends$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((texte: string) => {
      this.legends = texte.split(",").map(term => term) 
    })
    this.colorbarTitle$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((title: string) => {
      this.colorbarTitle = title
    })
    this.colorbarColorMin$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((color: string) => {
      this.colorbarColorMin = color
    })
    this.colorbarColorMax$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((color: string) => {
      this.colorbarColorMax = color
    })
  }
}

