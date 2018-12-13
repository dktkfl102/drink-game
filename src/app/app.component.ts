import { Component, OnInit } from '@angular/core';

import * as _ from 'underscore';
import * as s from 'underscore.string';
import { contents } from './contents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    public contents:contents = contents;
    public startTimer:number = 5;
    public wordList:Array<any> = [];

    constructor () {

    }

    ngOnInit() {
        let stringContents = contents.getContents();
        let arrayContents = stringContents.split("(");
        let wordArray:Array<any> = [];
        _.each(arrayContents, (data, idx)=> {
            wordArray.push(data.slice(-4));
        })
        this.wordList = _.reject(wordArray, (data, idx)=> {
            return data.indexOf(' ') > -1;
        })
        this.wordList = _.shuffle(this.wordList);
        console.log(this.wordList);
        // console.log(this.wordList);
    }

    public onStartGame():void {
        let startTimerInterval = setInterval(() => {
            this.startTimer--;
            if(this.startTimer == 0){
                clearInterval(startTimerInterval);
            }
        }, 1000);
    }

}
