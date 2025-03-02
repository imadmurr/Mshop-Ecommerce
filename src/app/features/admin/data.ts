import { ColDef } from 'ag-grid-community';
import {StatusCellRendererComponent} from './status-cell-renderer/status-cell-renderer.component';
import {ActionsCellRendererComponent} from './actions-cell-renderer/actions-cell-renderer.component';


export const columnDefsProducts: ColDef<any>[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Product Name', flex: 2 },
  { field: 'price', headerName: 'Price ($)', width: 120 },
  { field: 'stock', headerName: 'Stock', width: 100 },
  { field: 'addedDate', headerName: 'Added Date', width: 160 }
];

export const columnDefsOrders: ColDef<any>[] = [
  { field: 'orderId', headerName: 'Order ID', width: 120 },
  { field: 'customer', headerName: 'Customer', flex: 2 },
  { field: 'totalAmount', headerName: 'Total ($)', width: 120 },
  { field: 'status', headerName: 'Status', width: 140 },
  { field: 'orderDate', headerName: 'Order Date', width: 160 }
];

export const columnDefsInventory: ColDef<any>[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Product Name', flex: 2 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'price', headerName: 'Price ($)', width: 120 },
  { field: 'stock', headerName: 'Stock', width: 120 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    cellRenderer: StatusCellRendererComponent // Custom status badge
  },
  {
    field: 'actions',
    headerName: 'Actions',
    cellRenderer: ActionsCellRendererComponent,
    width: 280
  }
];

export const latestProducts = [
  { id: 1, name: 'Wireless Mouse', price: 25, stock: 150, addedDate: '2025-02-28' },
  { id: 2, name: 'Mechanical Keyboard', price: 80, stock: 50, addedDate: '2025-02-27' },
  { id: 3, name: 'Gaming Headset', price: 60, stock: 30, addedDate: '2025-02-26' }
];

export const latestOrders = [
  { orderId: 'ORD123', customer: 'John Doe', totalAmount: 150, status: 'Shipped', orderDate: '2025-02-28' },
  { orderId: 'ORD124', customer: 'Alice Smith', totalAmount: 300, status: 'Processing', orderDate: '2025-02-27' },
  { orderId: 'ORD125', customer: 'Bob Johnson', totalAmount: 90, status: 'Delivered', orderDate: '2025-02-26' }
];

export const inventoryData = [
  { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 25, stock: 150, status: 'In Stock' },
  { id: 2, name: 'Mechanical Keyboard', category: 'Electronics', price: 80, stock: 0, status: 'Out of Stock' },
  { id: 3, name: 'Gaming Headset', category: 'Accessories', price: 60, stock: 30, status: 'In Stock' },
  { id: 4, name: 'USB-C Hub', category: 'Accessories', price: 40, stock: 20, status: 'In Stock' },
  { id: 5, name: 'Ergonomic Chair', category: 'Furniture', price: 120, stock: 0, status: 'Out of Stock' },
  { id: 6, name: 'Standing Desk', category: 'Furniture', price: 300, stock: 15, status: 'In Stock' },
  { id: 7, name: 'Noise-Canceling Earbuds', category: 'Audio', price: 150, stock: 0, status: 'Out of Stock' },
  { id: 8, name: 'Portable SSD', category: 'Storage', price: 99, stock: 25, status: 'In Stock' },
  { id: 9, name: 'Smartphone Gimbal', category: 'Photography', price: 89, stock: 10, status: 'In Stock' },
  { id: 10, name: 'LED Desk Lamp', category: 'Office', price: 35, stock: 50, status: 'In Stock' }
];
