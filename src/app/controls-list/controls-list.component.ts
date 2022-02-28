import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../controls-service.service'
@Component({
  selector: 'app-controls-list',
  templateUrl: './controls-list.component.html',
  styleUrls: ['./controls-list.component.scss']
})
export class ControlsListComponent implements OnInit {

  Controls: any = [];

  constructor(
    public ctrlService: ControlsService
  ) { }

  ngOnInit(): void {
    this.loadControls()
  }

  // Get employees list
  loadControls() {
    return this.ctrlService.getControls().subscribe((data: {}) => {
      this.Controls = data;
    })
  }
}
