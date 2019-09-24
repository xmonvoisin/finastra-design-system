import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'ffdc-vector-map-demo',
  templateUrl: './vector-map-demo.template.html'
})
export class VectorMapDemoComponent implements OnInit {
  demoData: any[] = [
    {
      country: 'FRA',
      value: 10,
      'Market Value': 666,
      currency: 'EUR'
    },
    {
      country: 'CHN',
      value: 25
    },
    {
      country: 'PRT',
      value: 150
    },
    {
      country: 'USA',
      value: 300,
      currency: 'USA',
      text:'lorem ipsum'
    }
  ];
  displayField : string[] = ["text","currency","value","country"];
  centerPos: number[] = [2.35, 48.86];

  countries: string[] = this.demoData.map(item => item.country);
  countries$ = new Subject();

  values: number[] = this.demoData.map(item => item.value);
  values$ = new Subject();

  colorbarTitle: string = 'Colorbar Title';
  colorbarTitle$ = new Subject();

  colorbarColorMin: string = '#694ED6';
  colorbarColorMin$ = new Subject();

  colorbarColorMax: string = '#E42D1A';
  colorbarColorMax$ = new Subject();

  titleMap: string = 'TitleMap';
  titleMap$ = new Subject();

  width: number = 1400;
  width$= new Subject();

  height: number = 600;
  height$ = new Subject();

  landColor: string = '#FBEBC7';
  landColor$ = new Subject()

  countryColor : String = '#a8a8a8';
  countryColor$ = new Subject();

  clickModeStatus : String = "select+event";

  checked = false;
  showcountriesCheck = true;
  showlandCheck = true;
  showborderMap = false;
  showcoastLines = true;
  clickMode = true;

  //Checkbox Button for display configuration
  toggleVisibility(value) {
    this.checked = !value;
  }
  clickStatus(){
    if(this.clickMode === true){
      this.clickModeStatus = "event"
    }else{
      this.clickModeStatus = "select+event"
    }
  }
  ngOnInit() {

    //Configuration Land Color
    this.landColor$
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((colorLand : string)=>{
        this.landColor = colorLand;
      })
    //Configuration Country Boundaries Color
    this.countryColor$
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe((countryColors : string)=>{
      this.countryColor = countryColors;
    })
    //Configuration Countries
    this.countries$
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((countries: any) => {
        const countriesTemp = countries
          .split(',')
          .map(term => term.toUpperCase());

        countriesTemp.forEach(country => {
          const countryIndexInData = this.demoData.findIndex(
            item => item.country === country
          );

          if (countryIndexInData < 0) {
            this.demoData.push({
              country: country
            });
          }
        });
        this.resetData();
      });
    //Configuration Width of Map
    this.width$
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
      )
      .subscribe((value:number)=>{
        this.width=value;
      })
      //Configuration Height of Map
    this.height$
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
      )
      .subscribe((value:number)=>{
        this.height=value;
      })
    //Configuration Values
    this.values$
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        const valuesTemp = value.split(',').map(term => parseInt(term));

        for (let i = 0; i < valuesTemp.length; i++) {
          this.demoData[i].value = valuesTemp[i];
        }

        this.resetData();
      });

    //Configiration Colorbar Title
    this.colorbarTitle$
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((titleColorBar: string) => {
        this.colorbarTitle = titleColorBar;
      });
    //Configuration ColorBar Color Minimum
    this.colorbarColorMin$
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((color: string) => {
        this.colorbarColorMin = color;
      });
    //Configuration ColorBar Color Maximum
    this.colorbarColorMax$
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((color: string) => {
        this.colorbarColorMax = color;
      });
    //Configuration Title of Map
    this.titleMap$
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((titleMap: string) => {
        this.titleMap = titleMap;
      });
  }
  //Configuration Center Map (the first number is longitude and the second is the latitude)
  checkPosition(e) {
    if (e.target.value === 'Europe') {
      this.centerPos = [2.35, 48.86];
    }
    if (e.target.value === 'USA') {
      this.centerPos = [-95.71, 37.09];
    }
    if (e.target.value === 'Oceanie') {
      this.centerPos = [151.2, -33.87];
    }
    if (e.target.value === 'Asie') {
      this.centerPos = [76.45, 25.03];
    }
    if (e.target.value === 'Afrique') {
      this.centerPos = [34.5, -8.78];
    }
  }
  onCountryClick($event) {
    console.log($event);
  }

  resetData() {
    this.countries = this.demoData.map(item => item.country);
    this.values = this.demoData.map(item => item.value);
    this.demoData = this.demoData.slice();
  }
}
