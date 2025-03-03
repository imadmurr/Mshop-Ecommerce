import { Component } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actions-cell-renderer',
  imports: [],
  templateUrl: './actions-cell-renderer.component.html',
  styleUrl: './actions-cell-renderer.component.scss'
})
export class ActionsCellRendererComponent implements ICellRendererAngularComp {
  params!: ICellRendererParams;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  onDelete(): void {
    const productName = this.params.data.name;

    // Show confirmation dialog
    const confirmDelete = confirm(`Are you sure you want to delete ${productName}?`);

    if (confirmDelete) {
      const rowData = this.params.node.data;
      this.params.api.applyTransaction({ remove: [rowData] });
    }
  }


  onAdd(): void {
    const rowData = this.params.node.data;
    rowData.stock += 1; // Increment stock

    // Check if the product was "Out of Stock" and update status
    if (rowData.stock > 0 && rowData.status === 'Out of Stock') {
      rowData.status = 'In Stock';
    }

    this.params.api.applyTransaction({ update: [rowData] });

  }


}
