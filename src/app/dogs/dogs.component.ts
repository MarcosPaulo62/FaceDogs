import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs: any; 
  
  public ngOnInit() {
    this.buscarDadosDaAPI().subscribe(res => {
      this.dogs = res;
    })
  }
  
  constructor(private http: HttpClient) {
  }

  buscarDadosDaAPI(): Observable<any> {
    const url = 'https://64ed0889f9b2b70f2bfb3b99.mockapi.io/dogs/users'; 

    return this.http.get(url);
  }

  toggleLike(dog: any): void {
    dog.liked = !dog.liked;
  }

}
