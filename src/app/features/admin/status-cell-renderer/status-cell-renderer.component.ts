import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-status-cell-renderer',
  templateUrl: "./status-cell-renderer.component.html",
  imports: [

  ],
  styleUrls: ['./status-cell-renderer.component.scss']
})
export class StatusCellRendererComponent implements ICellRendererAngularComp {
  public value: string = '';
  public classSelector: string = '';

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
    this.classSelector = this.value === 'In Stock' ? 'active' : 'outOfStock';
  }

  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    this.classSelector = this.value === 'In Stock' ? 'activeCircle' : 'outOfStockCircle';
    return true;
  }
}
