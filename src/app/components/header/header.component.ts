import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  brand:string = 'OSTEROUSH';
  years=[
    {label: '2026', value: '2026'},
    {label: '2025', value: '2025'},
    {label: '2024', value: '2024'},
    {label: '2023', value: '2023'},
    {label: '2022', value: '2022'},
    {label: '2021', value: '2021'},
    {label: '2020', value: '2020'},
    {label: '2019', value: '2019'},
    {label: '2018', value: '2018'},
    {label: '2017', value: '2017'}
  ];
  selectedYear = this.years[0].value;
  showYear = false;

  yearSelected(e:any){
    this.placesService.getPlaces(this.selectedYear);
  }

  constructor(private router: Router, private placesService: PlacesService ) {

    this.placesService.yearToShow.subscribe((year:any)=>{
      this.selectedYear = year.toString();
    });

    this.router.events.subscribe((event:Event)=>{
      if (event instanceof NavigationEnd) {  

        if (event.url==='/home') {
          this.brand = 'Osteroush';
        }
        if (event.url==='/viewPlaces') {
          this.brand = 'View Places';
          this.placesService.getPlaces(this.selectedYear);
        } 
        if (event.url==='/addPlace') {
          this.brand = 'Add Place';
        }
        if (event.url==='/login') {
          this.brand = 'Sign In';
        }
        this.showYear = event.url === '/viewPlaces';
    }
    });
  }
}
