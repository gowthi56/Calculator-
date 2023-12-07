import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent {
  display: string = '';
  calculatorThemeClass: string = 'dark-theme';
  changeTheme() {
    this.calculatorThemeClass = this.calculatorThemeClass === 'dark-theme' ? 'light-theme' : 'dark-theme';
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    // Check the pressed key and perform the corresponding action
    switch (key) {
      case 'Enter':
        this.calculateResult();
        break;
      case 'Backspace':
        this.removeLastCharacter();
        break;
      case 'C':
        this.clearDisplay();
        break;
      case '1':
        this.appendToDisplay('1');
        break;
      case '2':
        this.appendToDisplay('2');
        break;
      case '3':
        this.appendToDisplay('3');
        break;
      case '/':
        this.appendToDisplay('/');
        break;
      case '4':
        this.appendToDisplay('4');
        break;
      case '5':
        this.appendToDisplay('5');
        break;
      case '6':
        this.appendToDisplay('6');
        break;
      case '*':
        this.appendToDisplay('*');
        break;
      case '7':
        this.appendToDisplay('7');
        break;
      case '8':
        this.appendToDisplay('8');
        break;
      case '9':
        this.appendToDisplay('9');
        break;
      case '-':
        this.appendToDisplay('-');
        break;
      case '0':
        this.appendToDisplay('0');
        break;
      case '.':
        this.appendToDisplay('.');
        break;
      case '+':
        this.appendToDisplay('+');
        break;
    }
  }

  appendToDisplay(value: string) {
    this.display += value;
  }

  clearDisplay() {
    this.display = '';
  }

  calculateResult() {
    try {
      const result = eval('(' + this.display + ')');

      if (!isNaN(result)) {
        this.display = String(result);
      } else {
        this.display = 'Error';
      }
    } catch (error) {
      this.display = 'Error';
    }
  }

  private removeLastCharacter() {
    this.display = this.display.slice(0, -1);
  }
}
