import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../controls-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    public ctrlService: ControlsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  creatControl(event: any) {
    return this.ctrlService.createControl(event).subscribe((data: {}) => {
      this.reloadComponent()
    })
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
