import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import dataJson from './mapperso.json';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';





@Component({
  selector: 'uxg-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss']
})
export class VectorMapComponent implements OnInit, OnDestroy {
  @Input() countries : any;
  @Input() describe : any;
  @Input() values : any;
  @Input() width: number;
  @Input() height : number;
  @Input() text : any;
  @Input() title:any;

  data: any = dataJson;
  graph: any;
  ngOnInit() {
    //CDN adress issue: https://cdn.plot.ly/world_110m.json
    let myDiv= document.getElementById('myDiv');
    this.graph = {
      data: [{
        type:'choropleth',
        locationmode:'ISO-3',
        locations: this.countries,
        z:this.values,
        text: this.text,
        autocolorscale: true
      }],
      layout:{
        geo:{
          projection:{
            type:'robinson'
          }
        }
      }
    }
    console.log(this.graph)
    PlotlyJS.plot(myDiv, this.graph.data, this.graph.layout, {showLink: false});
  }
  
  ngOnDestroy(): void {}  
}
