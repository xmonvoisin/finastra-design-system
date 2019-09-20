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
    this.graph = {
      data: [
        {
          type: 'choropleth',
          locationmode: 'ISO-3',
          locations: this.data.map(dataItem => dataItem.country), //this.countries,
          z: this.data.map(dataItem => dataItem.value), //this.values
          text: this.data.map(dataItem => {
            let text = '';
            Object.keys(dataItem).forEach(item => {
              text += item + ':' + dataItem[item] + '<br>';
            });
            return text;
          }), //this.legends,
          colorbar: { title: { text: this.colorbarTitle } },
          colorscale: [[0, this.colorbarColorMin], [1, this.colorbarColorMax]]
        }
      ],
      layout: {
        clickmode: 'select+event',
        title: this.titleMap,
        autosize: true,
        width: 1200,
        height: 600,
        geo: {
          showland: true,
          landcolor: '#d4d4d4',
          showcountries: true,
          countrycolor: '#a8a8a8',
          showframe: false,
          showcoastlines: false,
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
