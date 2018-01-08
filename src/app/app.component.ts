import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDnpKP891auDnUiz8Cz3sdpwrIbkw3ZW2Q",
      authDomain: "recipebook-df0a6.firebaseapp.com",
    });
  }
}
