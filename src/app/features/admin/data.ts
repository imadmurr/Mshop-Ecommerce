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
  { id: 10, name: 'LED Desk Lamp', category: 'Office', price: 35, stock: 50, status: 'In Stock' },
  { id: 11, name: 'Wireless Charger', category: 'Electronics', price: 30, stock: 75, status: 'In Stock' },
  { id: 12, name: 'Bluetooth Speaker', category: 'Audio', price: 55, stock: 40, status: 'In Stock' },
  { id: 13, name: '4K Webcam', category: 'Electronics', price: 120, stock: 10, status: 'In Stock' },
  { id: 14, name: 'Graphic Tablet', category: 'Electronics', price: 150, stock: 5, status: 'In Stock' },
  { id: 15, name: 'Drawing Stylus', category: 'Accessories', price: 35, stock: 100, status: 'In Stock' },
  { id: 16, name: 'Smart Thermostat', category: 'Home', price: 200, stock: 8, status: 'In Stock' },
  { id: 17, name: 'Security Camera', category: 'Home', price: 99, stock: 12, status: 'In Stock' },
  { id: 18, name: 'VR Headset', category: 'Gaming', price: 400, stock: 0, status: 'Out of Stock' },
  { id: 19, name: 'Wireless Earbuds', category: 'Audio', price: 120, stock: 60, status: 'In Stock' },
  { id: 20, name: 'Noise-Canceling Headphones', category: 'Audio', price: 250, stock: 25, status: 'In Stock' },
  { id: 21, name: 'Gaming Monitor', category: 'Electronics', price: 350, stock: 10, status: 'In Stock' },
  { id: 22, name: 'Laptop Stand', category: 'Accessories', price: 45, stock: 80, status: 'In Stock' },
  { id: 23, name: 'Wireless Presenter', category: 'Office', price: 20, stock: 35, status: 'In Stock' },
  { id: 24, name: 'External Hard Drive', category: 'Storage', price: 120, stock: 15, status: 'In Stock' },
  { id: 25, name: 'Wireless Router', category: 'Networking', price: 90, stock: 20, status: 'In Stock' },
  { id: 26, name: 'Mechanical Pencil', category: 'Office', price: 10, stock: 200, status: 'In Stock' },
  { id: 27, name: 'Tripod Stand', category: 'Photography', price: 50, stock: 15, status: 'In Stock' },
  { id: 28, name: 'Smart Light Bulb', category: 'Home', price: 25, stock: 100, status: 'In Stock' },
  { id: 29, name: 'Coffee Maker', category: 'Kitchen', price: 80, stock: 10, status: 'In Stock' },
  { id: 30, name: 'Air Purifier', category: 'Home', price: 220, stock: 5, status: 'In Stock' },
  { id: 31, name: 'Monitor Arm', category: 'Accessories', price: 60, stock: 50, status: 'In Stock' },
  { id: 32, name: 'Smart Door Lock', category: 'Home', price: 180, stock: 7, status: 'In Stock' },
  { id: 33, name: 'Microphone Boom Arm', category: 'Audio', price: 45, stock: 20, status: 'In Stock' },
  { id: 34, name: 'High-Speed HDMI Cable', category: 'Accessories', price: 20, stock: 150, status: 'In Stock' },
  { id: 35, name: 'Adjustable Dumbbells', category: 'Fitness', price: 250, stock: 8, status: 'In Stock' },
  { id: 36, name: 'Yoga Mat', category: 'Fitness', price: 30, stock: 60, status: 'In Stock' },
  { id: 37, name: 'Electric Kettle', category: 'Kitchen', price: 40, stock: 30, status: 'In Stock' },
  { id: 38, name: 'Portable Power Bank', category: 'Electronics', price: 50, stock: 25, status: 'In Stock' },
  { id: 39, name: 'Wireless Gaming Controller', category: 'Gaming', price: 70, stock: 15, status: 'In Stock' },
  { id: 40, name: 'Graphics Card', category: 'Computers', price: 600, stock: 3, status: 'In Stock' },
  { id: 41, name: 'Smart Watch', category: 'Wearable', price: 300, stock: 12, status: 'In Stock' },
  { id: 42, name: 'Digital Drawing Pad', category: 'Accessories', price: 200, stock: 5, status: 'In Stock' },
  { id: 43, name: 'Bluetooth Car Adapter', category: 'Automotive', price: 35, stock: 40, status: 'In Stock' },
  { id: 44, name: 'Dash Cam', category: 'Automotive', price: 120, stock: 10, status: 'In Stock' },
  { id: 45, name: 'Smart Scale', category: 'Fitness', price: 50, stock: 20, status: 'In Stock' },
  { id: 46, name: 'USB Flash Drive', category: 'Storage', price: 15, stock: 100, status: 'In Stock' },
  { id: 47, name: 'Cordless Vacuum Cleaner', category: 'Home', price: 180, stock: 7, status: 'In Stock' },
  { id: 48, name: 'Smart Water Bottle', category: 'Fitness', price: 45, stock: 30, status: 'In Stock' },
  { id: 49, name: 'USB Desk Fan', category: 'Office', price: 25, stock: 50, status: 'In Stock' },
  { id: 50, name: 'Mini Projector', category: 'Electronics', price: 200, stock: 6, status: 'In Stock' }
];
