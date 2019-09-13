import { Component , OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
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
  text: string[] = ['Text 1' , 'Text 2' , 'Text 3'];
  text$= new Subject();
  colorbarTitle: string = "Title";
  colorbarTitle$ = new Subject();
  colorbarColorMin : string = "blue";
  colorbarColorMin$ = new Subject();
  colorbarColorMax : string = "red ";
  colorbarColorMax$ = new Subject();

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
    this.text$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((texte: string) => {
      this.text = texte.split(",").map(term => term) 
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

