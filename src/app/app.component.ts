import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  showParagraph: boolean = false;
  buttonClicks: any[] =[];
  

  resetUsername(){
    this.username = '';
  }

  onClick(){
    this.showParagraph = !this.showParagraph;//altera o valor da propriedade
    this.buttonClicks.push(new Date()); //adiiona data a matriz
  }

}
