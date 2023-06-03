import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Angular-vk2';


  ngOnInit() {
    // this.geolocation();
    this.indexedDb();
  }

  indexedDb() {
    const req = indexedDB.open("testDb");  // indexedDB: ha nagy mennyiségű adatot kell kliens oldalon kezelni, tárolni, pl. ha lassú a szerver

  }

  geolocation() {
    if(navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        (position)=>{
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("Coords: ", latitude, ", ", longitude);
        },
        (error)=>{
          console.log(error);
          
        }
      )
    }
    else {
      console.log("geolocation not supported");
      
    }

  }

  notification() {
    if(Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission)=> {
        if(permission === 'granted') {
          const notification = new Notification('Értesítés címe', {
            body: 'Értesítés body',
            icon: '../favicon.ico'
          })
          notification.addEventListener('click', ()=> {
            console.log('click');
            
          })
        }
        else {

        }
        
      })
    }
    else {

    }
  }
}
