import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {
  private readonly cards: string[];
  private board: HTMLElement | null;
  private result: HTMLElement|null;
  private cardsFlipped: number[];
  private matches: number;
  private attempts: number;

  constructor(private route:Router) {
    this.cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
    this.board = document.querySelector('.game-board');
    this.result = document.querySelector('.game-result');
    this.cardsFlipped = [];
    this.matches = 0;
    this.attempts = 0;
    this.shuffleCards();
    this.renderCards();
    this.addClickHandlers();
  }

  private shuffleCards(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  private renderCards(): void {
    if (!this.board) return;
    this.cards.forEach((card, index) => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.dataset['cardIndex'] = index.toString();
      div.innerText = card;
      this.board?.appendChild(div);
    });
  }

  private addClickHandlers(): void {
    if (!this.board) return;
    this.board?.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('card')) {
        const cardIndex = Number(target.dataset['cardIndex']);
        if (this.cardsFlipped.length < 2 && !this.cardsFlipped.includes(cardIndex)) {
          target.classList.add('card-flipped');
          this.cardsFlipped.push(cardIndex);
          if (this.cardsFlipped.length === 2) {
            setTimeout(() => this.checkCards(), 1000);
          }
        }
      }
    });
  }

  private checkCards(): void {
    const [firstCard, secondCard] = this.cardsFlipped;
    if (this.cards[firstCard] === this.cards[secondCard]) {
      this.matches++;
      if (this.result && this.result.innerText) {
        this.result.innerText = `Matches: ${this.matches}, Attempts: ${this.attempts}`;
      }
      if (this.matches === this.cards.length / 2) {
        if (this.result && this.result.innerText) {
          this.result.innerText = 'YOU WON';
        }
      }
    } else {
      const firstCardElement = this.board?.querySelector(`[data-card-index="${firstCard}"]`)
   }
  }

  nextPage()
  {
     this.route.navigate(['winningPage']);
  }
}
 
