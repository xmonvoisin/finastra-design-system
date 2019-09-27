import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import {groupBy, filter, find, cloneDeep} from 'lodash';
import { MatTableDataSource } from '@angular/material';

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
export class TableDemoComponent implements OnInit{

  dataSource: ConsentsUnion[]; 

  selectionType = "tenantId";

  columnsToDisplay = ['select', this.selectionType, 'count'];

  columnsSub = [
    {label:'Applications', id:'appId'},{label:'Consent Granted', id:'lastModified'}, ];
  displayedColumnsSub = ['select'].concat(this.columnsSub.map(c=>c.id));
  expandedElement: Tenant | null;

  selection = new SelectionModel<Consent>(true, []);

  constructor(private cd: ChangeDetectorRef){

  }

  ngOnInit() {
    this.updateDataSource(ELEMENT_DATA);
  }

  updateDataSource(data){
    this.dataSource = [];
    const groupedElements = groupBy(data, "tenantId");
    for (let key in groupedElements) {
        const data = {} as  ConsentsUnion;
        data[this.selectionType] = key;
        data.consents = groupedElements[key]
        this.dataSource.push(data);
    }
  }

  //AddItem
  addItem(row ){
    console.log(row);
  }

  applyFilter(filterValue: string) {
    let filteredDataSource = cloneDeep(ELEMENT_DATA);

    let searchString = filterValue.toLowerCase();                       
    filteredDataSource = filteredDataSource.filter(function search(row) {                       
       return Object.keys(row).some((key) => {                              
           if(typeof row[key] === "string") {                                
               return row[key].toLowerCase().indexOf(searchString) > -1;     
           } else if(row[key] && typeof row[key] === "object") {             
               return search(row[key]);                                      
           }
           return false;                                                    
       });
    });

    this.updateDataSource(filteredDataSource);
  }
  
  //Selection
  onSubSelection(elementSub){
    this.selection.toggle(elementSub)
  }

  selectionHasValue(row : ConsentsUnion): boolean{
    const id = row[this.selectionType];
    const predict = {};
    predict[this.selectionType] = id;
    const numSelected = filter(this.selection.selected, predict).length;
    return numSelected===0 ?  false:true;
  }

  isAllSelected(row: ConsentsUnion): boolean {
    const id = row[this.selectionType];
    const predict = {};
    predict[this.selectionType] = id;
    const numSelected = filter(this.selection.selected, predict).length;
    const numRows = row.consents.length;
    return numSelected === numRows;
  }

  selectAllInRow(row: ConsentsUnion){
    if(this.isSomeSelected(row)){
      row.consents.forEach(consent => {
        if(this.selection.isSelected(consent)){
          this.selection.toggle(consent)
        }
      });
    }else{
      row.consents.forEach(consent => {
        this.selection.select(consent)
      });
    }
  }
  
  isSomeSelected(row): boolean{
    let found = false;
    row.consents.forEach(consent => {
      if(this.selection.isSelected(consent)){
        found=true;
      }
    });
    return found;
  }
}


export interface Tenant {
  id: number;
  name: string;
  count: number;
  list: Appication[];
}

export interface Appication {
  parentId?:number;
  name: string;
  company: string;
  consent: string;
}

export type ConsentsUnion = 
| ApplicationConsents
| TenantConsents

export interface ApplicationConsents {
  appId: string;
  consents: Consent[];
}
export interface TenantConsents {
  tenantId: string;
  consents: Consent[];
}

export interface Consent {
  appId:string;
  tenantId:string;
  flavor:string;
  consentId:string;
  issuedAt: string;
  lastModified: string;
  created: string;
  createdBy: string;
  modifiedBy: string;
  services: any;
}

const ELEMENT_DATA: Consent[] =  [
      {
        "appId": "380fe1e1-1673-4692-8ddf-782bccda44be",
        "tenantId": "d666fd2e-a1c1-4db2-9cf0-6884694387e0",
        "flavor": "DEV",
        "services": {
          "payment-util-uetr-v1": {
            "scopes": [
              "payments:read"
            ],
            "eventsData": {
              "events": [
                "new-payment"
              ]
            },
            "issuedAt": "2019-02-17T16:10:36.875Z"
          },
          "platform fxrate-v1": {
            "scopes": [
              "currencies:read"
            ],
            "eventsData": {
              "events": [
                "new-account",
                "deleted-account"
              ]
            },
            "issuedAt": "2019-02-17T16:10:36.875Z"
          }
        },
        "consentId": "865dda89-a659-41c6-ae12-b2c5fa18dcff",
        "issuedAt": "2019-02-17T16:10:36.875Z",
        "createdBy": "user1",
        "modifiedBy": "user1",
        "created": "2019-02-17T16:10:36.875Z",
        "lastModified": "2019-02-17T16:10:36.875Z"
      },
     {
        "appId": "480fe1e1-1673-4692-8ddf-782bccda44be",
        "tenantId": "d666fd2e-a1c1-4db2-9cf0-6884694387e0",
        "flavor": "DEV",
        "services": {
          "payment-util-uetr-v1": {
            "scopes": [
              "payments:read"
            ],
            "eventsData": {
              "events": [
                "new-payment"
              ]
            },
            "issuedAt": "2019-02-17T16:10:36.875Z"
          },
          "platform fxrate-v1": {
            "scopes": [
              "currencies:read"
            ],
            "eventsData": {
              "events": [
                "new-account",
                "deleted-account"
              ]
            },
            "issuedAt": "2019-02-17T16:10:36.875Z"
          }
        },
        "consentId": "865dda89-a659-41c6-ae12-b2c5fa18dcff",
        "issuedAt": "2019-02-17T16:10:36.875Z",
        "createdBy": "user1",
        "modifiedBy": "user1",
        "created": "2019-02-17T16:10:36.875Z",
        "lastModified": "2019-02-17T16:10:36.875Z"
      },
     {
        "appId": "580fe1e1-1673-4692-8ddf-782bccda44be",
        "tenantId": "d666fd2e-a1c1-4db2-9cf0-6884694387e0",
        "flavor": "DEV",
        "services": {
          "payment-util-uetr-v1": {
            "scopes": [
              "payments:read"
            ],
            "eventsData": {
              "events": [
                "new-payment"
              ]
            },
            "issuedAt": "2019-02-17T16:10:36.875Z"
          },
          "platform fxrate-v1": {
            "scopes": [
              "currencies:read"
            ],
            "eventsData": {
              "events": [
                "new-account",
                "deleted-account"
              ]
            },
            "issuedAt": "2019-02-17T16:10:36.875Z"
          }
        },
        "consentId": "865dda89-a659-41c6-ae12-b2c5fa18dcff",
        "issuedAt": "2019-02-17T16:10:36.875Z",
        "createdBy": "user1",
        "modifiedBy": "user1",
        "created": "2019-02-17T16:10:36.875Z",
        "lastModified": "2019-02-17T16:10:36.875Z"
      },
     {
        "appId": "680fe1e1-1673-4692-8ddf-782bccda44be",
        "tenantId": "E666fd2e-a1c1-4db2-9cf0-6884694387e0",
        "flavor": "DEV",
        "services": {
          "payment-util-uetr-v1": {
            "scopes": [
              "payments:read"
            ],
            "eventsData": {
              "events": [
                "new-payment"
              ]
            },
            "issuedAt": "2019-02-17T16:10:36.875Z"
          },
          "platform fxrate-v1": {
            "scopes": [
              "currencies:read"
            ],
            "eventsData": {
              "events": [
                "new-account",
                "deleted-account"
              ]
            },
            "issuedAt": "2019-02-17T16:10:36.875Z"
          }
        },
        "consentId": "865dda89-a659-41c6-ae12-b2c5fa18dcff",
        "issuedAt": "2019-02-17T16:10:36.875Z",
        "createdBy": "user1",
        "modifiedBy": "user1",
        "created": "2019-02-17T16:10:36.875Z",
        "lastModified": "2019-02-17T16:10:36.875Z"
      }
    ];