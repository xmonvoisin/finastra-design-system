import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'uxg-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss']
})

export class VectorMapComponent implements OnInit, OnDestroy,OnChanges {
  @Input() countries : any;
  @Input() values : number;
  @Input() width: number;
  @Input() height : number;
  @Input() text : any;
  @Input() colorbarTitle:any;
  @Input() colorbarColorMin: any;
  @Input() colorbarColorMax: any;


  graph: any;
  constructor() {
    this.graph = {
      layout:{
        width: this.width,
        height: this.height,
        geo:{
          center:{lat:48.86, lon:2.35},
          projection:{
            scale:2.3,
            type:'robinson'
          }
        }
      }
    }
  }
  ngOnInit(){
    if(this.countries && this.values){
      this.graph.data=[{
        type:'choropleth',
        locationmode:'ISO-3',
        locations: this.countries,
        z:this.values,
        text: this.text,
        colorbar:{title:{text:this.colorbarTitle}},
        colorscale:[[0,this.colorbarColorMin],[1,this.colorbarColorMax]]
      }]
    }
  }
  ngOnChanges(simpleChanges) {
    this.graph.data=[{
      type:'choropleth',
      locationmode:'ISO-3',
      locations: this.countries,
      z:this.values,
      text: this.text,
      colorbar:{title:{text:this.colorbarTitle}},
      colorscale:[[0,this.colorbarColorMin],[1,this.colorbarColorMax]]
    }]
      console.log(this.graph.data)
  }
  
  ngOnDestroy(): void {}  
}
