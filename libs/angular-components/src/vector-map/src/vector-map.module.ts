import { NgModule } from '@angular/core';
import { VectorMapComponent } from './vector-map.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { CommonModule} from '@angular/common';


PlotlyModule.plotlyjs = PlotlyJS;

/* PlotlyViaCDNModule.plotlyVersion = '1.49.4'; // can be `latest` or any version number (i.e.: '1.40.0')
PlotlyViaCDNModule.plotlyBundle = 'basic'; // optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance' */
@NgModule({
  imports: [CommonModule,PlotlyModule],
  declarations: [VectorMapComponent],
  exports: [VectorMapComponent]
})
export class VectorMapModule {}
