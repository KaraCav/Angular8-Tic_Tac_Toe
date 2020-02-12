import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'tic-tac-toe';
  public currentPlayer = "Blue";
  public board = [];
  isCool : boolean;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.startNewGame();
  }
  startNewGame(){
    this.currentPlayer = "Blue";
    this.board = [];
  }
}

function buttMunch(){
  
}
