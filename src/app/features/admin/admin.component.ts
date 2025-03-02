import { Component } from '@angular/core';
import { AllCommunityModule, ModuleRegistry,
  themeAlpine,
  themeBalham,
  themeMaterial,
  themeQuartz,} from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import {columnDefsInventory, columnDefsOrders, columnDefsProducts, inventoryData, latestOrders, latestProducts } from './data';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-admin',
  imports: [
    AgGridAngular
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  // in component class
  public theme = themeMaterial;


  columnDefsProducts = columnDefsProducts;
  columnDefsOrders = columnDefsOrders;
  columnDefsInventory = columnDefsInventory;

  latestProducts = latestProducts;
  latestOrders = latestOrders;
  inventoryData = inventoryData;

  gridOptions = {
    rowHeight: 50,
    animateRows: true,
    suppressCellFocus: true
  };

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
