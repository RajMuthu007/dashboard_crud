import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Movies:any;
  constructor() { }

  ngOnInit(): void {

    
    this.Movies = [
      {
        "name": "Avengers: Endgame"
      },
      {
        "name": "Good Boys"
      },
      {
        "name": "Playmobil: The Movie"
      },
      {
        "name": "Aquarela"
      },
      {
        "name": "Aladdin"
      }, 
      {
        "name": "Downton Abbey"
      }
    ];
  }

}
