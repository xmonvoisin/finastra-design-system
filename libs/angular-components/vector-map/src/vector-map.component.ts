import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

@Component({
  selector: 'uxg-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss']
})
export class VectorMapComponent implements OnInit, OnChanges {
  @Input() data: any[];
  @Input() displayField: string[];
  @Input() width :number;
  @Input() height : number;
  @Input() showcountriesCheck : boolean;
  @Input() showlandCheck : boolean;
  @Input() showborderMap : boolean;
  @Input() showcoastLines:boolean;
  @Input() landColor : string;
  @Input() countryColor : string;
  @Input() clickModeStatus : string;
  @Input() colorbarTitle: any;
  @Input() colorbarColorMin: any;
  @Input() colorbarColorMax: any;
  @Input() titleMap: string;
  @Input() centerPos: number[]; 
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  
  private _filter: any;
  @Input()
  set set_filter(filter) {
    this._filter = filter;
    this.filterDisplayData();
  }
  get set_filter() {
    return this._filter;
  }
  graph: any;
  filterDisplayData() {
    const filteredData = {};
    this.graph.data = filteredData;
  }

  emitterData(e) {
    const clickCountryIndexs = e.data[0].selectedpoints || [];
    const selectData = [];
    for (let i = 0; i < clickCountryIndexs.length; i++) {
      selectData.push(this.data[clickCountryIndexs[i]]);
    }
    this.onClick.emit({
      data: selectData
    });

    console.log(selectData);
  }
  ngOnInit(): void {}
  ngOnChanges(simpleChanges) {
    console.log(this.displayField);
    this.graph = {
      data: [
        {
          type: 'choropleth',
          locationmode: 'ISO-3',
          locations: this.data.map(dataItem => dataItem.country), //this.countries,
          z: this.data.map(dataItem => dataItem.value), //this.values
          text: this.data.map(dataItem => {
            let text = '';
            this.displayField.forEach( field => {
              text += "<br>" + dataItem[field] ;
            })  
            return text 
          }), 
          colorbar: { title: { text: this.colorbarTitle ? this.colorbarTitle:"ColorBar Title" } },
          colorscale: [[0, this.colorbarColorMin ? this.colorbarColorMin:"#694ED6"], [1, this.colorbarColorMax ? this.colorbarColorMax:"#E42D1A"]]
        }
      ],
      layout: {
        clickmode: this.clickModeStatus ? this.clickModeStatus : "select+event",
        title: this.titleMap ? this.titleMap:"Title Map",
        autosize: false,
        width:  this.width ? this.width:1400,
        height: this.height ? this.height:600,
        geo: {
          bgcolor:"#D6EFF5",
          showland: this.showlandCheck ,
          landcolor: this.landColor ? this.landColor : '#FBEBC7',
          showcountries: this.showcountriesCheck ,
          countrycolor: this.countryColor? this.countryColor:'#a8a8a8',
          showframe: this.showborderMap ,
          showcoastlines: this.showcoastLines,
          center: { lat: this.centerPos[1], lon: this.centerPos[0] },
          projection: {
            scale: 3,
            type: 'mercator'
          }
        }
      }
    };
  }

  ngOnDestroy(): void {}
}
