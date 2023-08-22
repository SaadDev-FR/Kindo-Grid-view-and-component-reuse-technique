import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent {
  employees: any[] = [];

  constructor(private employeeService: ApiServicesService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      console.log(" this.employees", this.employees);
      
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      // if(res)
      // {
      //   this.ngOnInit
      // }
    });
  }
}
