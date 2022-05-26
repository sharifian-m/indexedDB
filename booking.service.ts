
import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingService{

  // upcomingTrips = [
  //   {
  //     id:0,
  //     name: 'GAAFU-ALIF-ATOLL',
  //     country: 'MALEDIVEN',
  //     imgUrl: './assets/images/hotel1.png',
  //     fromDate: '20.10.2022',
  //     toDate: '27.10.2022'
  //   },
  //   {
  //     id:1,
  //     name: 'Koh Kong Province',
  //     country: 'Cambodia',
  //     imgUrl: './assets/images/hotels/hotel-3.jpg',
  //     fromDate: '28.12.2022',
  //     toDate: '12.01.2023'
  //   },
  //   {
  //     id:2,
  //     name: 'Gili Air',
  //     country: 'Indonesia',
  //     imgUrl: './assets/images/hotels/hotel-1.jpg',
  //     fromDate: '01.07.2022',
  //     toDate: '07.07.2022'
  //   }

  // ];

  // pastTrips = [
  //   {
  //     id:0,
  //     name: 'Eibsee',
  //     country: 'Germany',
  //     imgUrl: './assets/images/hotels/hotel-4.jpg',
  //     fromDate: '23.04.2022',
  //     toDate: '30.04.2022'
  //   },
  //   {
  //     id:1,
  //     name: 'FWD House 1881',
  //     country: 'Hong Kong',
  //     imgUrl: './assets/images/hotels/hotel-5.jpg',
  //     fromDate: '20.01.2022',
  //     toDate: '30.01.2022'
  //   },
  //   {
  //     id:2,
  //     name: 'Punta Cana',
  //     country: 'Dominican Republic',
  //     imgUrl: './assets/images/hotels/hotel-6.jpg',
  //     fromDate: '20.01.2022',
  //     toDate: '30.01.2022'
  //   },
  //   {
  //     id:3,
  //     name: 'Caracoral Hotel Boutique & Spa',
  //     country: 'Panama',
  //     imgUrl: './assets/images/hotels/hotel-7.jpg',
  //     fromDate: '20.01.2022',
  //     toDate: '30.01.2022'
  //   },
  // ];

  // isShowModal: BehaviorSubject<'show'|'hide'> = new BehaviorSubject<'show' | 'hide'>('hide');

  constructor(private http: HttpClient) { }

  getAllUpcomingTrips(): Observable<any[]> {
    const upcomingTrips: any[] = [];
    const url = environment.trasoUrl +  'bookings/upcoming';
    return this.http.get<any>(url).pipe(map(
     res =>{
       res?.data.forEach((item: any) => {
         upcomingTrips.push(
           {
             id: item.id,
             codeDestination: item.destination.code,
             region: item.destination.region,
             name: item.meta.description,
             country: item.destination.country,
             imgUrl: './assets/images/hotels/hotel-1.jpg',
             fromDate: item.date.start,
             toDate: item.date.end,
             bookingDate: item.date.booking
           }
         )
       })

       return upcomingTrips
     }
    ));
  }
  // getAllPastTrips() {
  //   return of(this.pastTrips)
  // }



}

