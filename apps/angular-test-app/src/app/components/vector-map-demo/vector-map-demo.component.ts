import { Component } from '@angular/core';

@Component({
  selector: 'ffdc-vector-map-demo',
  templateUrl: './vector-map-demo.template.html'
})
export class VectorMapDemoComponent {
  locale: string = '["FR","LU"]' ;

  change(){
    this.locale = '["LU"]'
  }
}

