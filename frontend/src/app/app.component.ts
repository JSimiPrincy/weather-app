import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location: string = '';
  weatherData: any;

  constructor(private http: HttpClient) {}
  search(form: NgForm) {
    this.location=form.value
    console.log(this.location);
    if (this.location !== '') {
      this.http.post("https://weather-backend-jsimiprincy.vercel.app/weather",this.location)
        .subscribe(
          (data) => {
            this.weatherData = data;
          },
          (error) => {
            console.log(error);
            this.weatherData = null;
          }
        );
    }
  }
 
}
