import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'uxg-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss']
})

export class VectorMapComponent implements  OnDestroy,OnChanges {
  @Input() countries : any;
  @Input() values : number;
  @Input() legends : any;
  @Input() colorbarTitle:any;
  @Input() colorbarColorMin: any;
  @Input() colorbarColorMax: any;
  @Input() lon: any;
  @Input() lat: any;


  private _filter: any;
  @Input() 
  set set_filter(filter){
    this._filter=filter;
    this.filterDisplayData();
  }
  get set_filter(){
    return this._filter;
  }
  graph: any;
  selected(event:any): void {
    console.log(event)
  }
  filterDisplayData(){
    const filteredData = {}///
    this.graph.data = filteredData;
  }
  
  /* ngOnInit(){
    if(this.countries && this.values){
      this.graph={
        data:[{
        type:'choropleth',
        locationmode:'ISO-3',
        locations: this.countries,
        z:this.values,
        text: this.legends,
        colorbar:{title:{text:this.colorbarTitle}},
        colorscale:[[0,this.colorbarColorMin],[1,this.colorbarColorMax]],
      }],
      layout:{
        clickmode:"select+event",
        geo:{
          showocean:true,
          oceancolor:"#dbfdff",
          showland:true,
          landcolor: "#F0DC82",
          center:{lat:this.lat, lon:this.lon},
          projection:{
            scale:2,
            type:'robinson',
          }
        }
      }
    }
  }
} */
  ngOnChanges(simpleChanges) {
    this.graph={
      data:[{
      type:'choropleth',
      locationmode:'ISO-3',
      locations: this.countries,
      z:this.values,
      text: this.legends,
      colorbar:{title:{text:this.colorbarTitle}},
      colorscale:[[0,this.colorbarColorMin],[1,this.colorbarColorMax]]
    }],
    layout:{
      clickmode:"select+event",
      geo:{
        showocean:true,
        oceancolor:"#dbfdff",
        showland:true,
        landcolor: "#F0DC82",
        center:{lat:this.lat, lon:this.lon},
        projection:{
          scale:2,
          type:'robinson',
        }
      }
    }
  }
}
  
  
  ngOnDestroy(): void {}  
}
