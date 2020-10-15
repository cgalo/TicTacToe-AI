import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: string[][];
  currentPlayer: string;
  winner: string;
  isGameDone: boolean;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame = () => {
    this.isGameDone = false;
    this.winner = null;
    this.currentPlayer = 'X';
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
  }

  changePlayer = () => {
    this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : 'X';
  }

  makeMove = (row: number, col: number) => {
    if (!this.board[row][col]){
      this.board[row][col] = this.currentPlayer;
      this.changePlayer();
    }
  }

}
