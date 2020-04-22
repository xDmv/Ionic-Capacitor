import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: 'splashscreen.page.html',
  styleUrls: ['splashscreen.page.scss'],
})
export class SplashscreenPage {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    setTimeout(
      ()=>{this.onLinktoLogin()}, 
      2000);
  }

  onLinktoLogin(){
    this.router.navigate(['/login']);
  }
}
