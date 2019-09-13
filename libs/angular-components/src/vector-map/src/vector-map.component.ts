import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'uxg-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss']
})

export class VectorMapComponent implements OnInit, OnDestroy {
  @Input() countries : any;
  @Input() values : number;
  @Input() width: number;
  @Input() height : number;
  @Input() text : any;
  @Input() title:any;

  graph: any;
  ngOnInit() {
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
    console.log(this.graph.data.locations)
  }
  
  ngOnDestroy(): void {}  
}
