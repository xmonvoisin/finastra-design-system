import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-demo-component',
  styleUrls: ['table-demo.component.scss'],
  templateUrl: 'table-demo.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableDemoComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['select', 'name', 'count'];
  columnsSub = [
    {label:'Applications', id:'name'},{label:'Company', id:'company'}, {label:'Consent Granted', id:'consent'}, ];
  displayedColumnsSub = ['select'].concat(this.columnsSub.map(c=>c.id));
  expandedElement: Tenant | null;

  selection = new SelectionModel<Appication>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }
}


export interface Tenant {
  name: string;
  count: number;
  list: Appication[];
}

export interface Appication {
  name: string;
  company: string;
  consent: string;
}


const ELEMENT_DATA: Tenant[] = [
  {
    name: 'British Production',
    count: 10,
    list: [
      {
        name: "KYC on Blockchain V1.1",
        company: "Tradle",
        consent: "9/9/2019 11:34:26"
      },
      {
        name: "RDC",
        company: "Tradle",
        consent: "3/9/2019 09:34:26"
      },
      {
        name: "Instant Cross Border Payments V2.0",
        company: "Buckzy Payments Inc",
        consent: "3/9/2019 09:34:26"
      }
    ]
  }, {
    name: 'British UAT',
    count: 40,
    list: [
      {
        name: "KYC on Blockchain V1.1",
        company: "Tradle",
        consent: "9/9/2019 11:34:26"
      },
      {
        name: "RDC",
        company: "Tradle",
        consent: "3/9/2019 09:34:26"
      },
      {
        name: "Instant Cross Border Payments V2.0",
        company: "Buckzy Payments Inc",
        consent: "3/9/2019 09:34:26"
      }
    ]
  }, {
    name: 'British Sandbox',
    count: 4,
    list: [
      {
        name: "KYC on Blockchain V1.1",
        company: "Tradle",
        consent: "9/9/2019 11:34:26"
      },
      {
        name: "RDC",
        company: "Tradle",
        consent: "3/9/2019 09:34:26"
      },
      {
        name: "Instant Cross Border Payments V2.0",
        company: "Buckzy Payments Inc",
        consent: "3/9/2019 09:34:26"
      }
    ]
  }, {
    name: 'French Production',
    count: 54,
    list: [
      {
        name: "KYC on Blockchain V1.1",
        company: "Tradle",
        consent: "9/9/2019 11:34:26"
      },
      {
        name: "RDC",
        company: "Tradle",
        consent: "3/9/2019 09:34:26"
      },
      {
        name: "Instant Cross Border Payments V2.0",
        company: "Buckzy Payments Inc",
        consent: "3/9/2019 09:34:26"
      }
    ]
  }, {
    name: 'French UAT',
    count: 54,
    list: [
      {
        name: "KYC on Blockchain V1.1",
        company: "Tradle",
        consent: "9/9/2019 11:34:26"
      },
      {
        name: "RDC",
        company: "Tradle",
        consent: "3/9/2019 09:34:26"
      },
      {
        name: "Instant Cross Border Payments V2.0",
        company: "Buckzy Payments Inc",
        consent: "3/9/2019 09:34:26"
      }
    ]
  }
];