import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  optionValues = [
    {
      value: 100,
    },
    {
      value: 250,
    },
    {
      value: 625,
    },
    {
      value: 1562,
    },
    {
      value: 3905,
    },
  ];
  optionSubValues = [
    {
      value: 100,
    },
    {
      value: 350,
    },
    {
      value: 975,
    },
    {
      value: 2537,
    },
    {
      value: 6442,
    },
  ];
  coef = null;
  answerVal = 0;
  arrayOfVal: number[] = [];
  countOfBets = 0;
  countOfBots = 0;
  form: FormGroup;
  subForm: FormGroup;

  constructor() {
    this.form = new FormGroup({
      coef: new FormControl(null),
      selectCoef: new FormControl(null),
      answer: new FormControl(null),
      substract: new FormControl(null),
    });
    this.subForm = new FormGroup({
      substring: new FormControl(null),
    });
  }

  multiplyVal(selectedOptionValue: number, coefValue: number | null): void {
    if (coefValue) {
      let result: number;
      switch (selectedOptionValue) {
        case 100:
          result = selectedOptionValue * coefValue - 100;
          this.arrayOfVal.push(result);
          break;
        case 250:
          result = selectedOptionValue * coefValue - 350;
          this.arrayOfVal.push(result);
          break;
        case 625:
          result = selectedOptionValue * coefValue - 975;
          this.arrayOfVal.push(result);
          break;
        case 1562:
          result = selectedOptionValue * coefValue - 2537;
          this.arrayOfVal.push(result);
          break;
        case 3905:
          result = selectedOptionValue * coefValue - 6442;
          this.arrayOfVal.push(result);
          break;
      }
      this.form.reset();
    }
    this.answerVal = Math.floor(
      this.arrayOfVal.reduce((acc, el) => acc + el, 0)
    );
    this.countOfBets = this.arrayOfVal.length;
    const botsSum = this.answerVal / 500;
    this.countOfBots = Number(botsSum.toFixed(1));
  }

  substring(selectedOption: number): void {
    let res = this.answerVal - selectedOption;
    const botsSumAfterSub = this.answerVal / 500;
    this.countOfBots = Number(botsSumAfterSub.toFixed(1));
    this.answerVal = res;
    if (selectedOption) {
      this.subForm.reset();
    }
  }

  resetForm(): void {
    this.answerVal = 0;
    this.countOfBets = 0;
    this.countOfBots = 0;
  }
}
