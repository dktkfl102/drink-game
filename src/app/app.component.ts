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
    public startTimer:number = 6;
    public wordList:Array<any> = [];
    public quizWord:string;
    public wordOrder:number = 0;
    public isStop:boolean = false;
    private gameInterval;

    constructor () {

    }

    ngOnInit() {
        this.initializeGame();
    }

    private initializeGame():void {
        this.wordOrder = 0;
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
        this.quizWord = this.wordList[this.wordOrder];
    }

    private onStartQuiz():void {
        this.gameInterval = setTimeout(() => {
            let wrapperAnimation = document.getElementById("wrapperAni");
            wrapperAnimation.className = "fade";
            this.onContinueQuiz();
        }, 3000);
    }

    private onContinueQuiz():void {
        this.gameInterval = setTimeout(() => {
            let wrapperAnimation = document.getElementById("wrapperAni");
            wrapperAnimation.classList.remove("fade");
            this.wordOrder++;
            this.quizWord = this.wordList[this.wordOrder];
            this.onStartQuiz();
        }, 1000);
    }

    public onPauseGame():void {
        clearTimeout(this.gameInterval);
        this.isStop = true;
    }

    public onResumeGame():void {
        this.startTimer = 6;
        this.isStop = false;
        this.initializeGame();
    }

    public onStartGame():void {
        let timerAnimation = document.getElementById("startTimerAni");
        let startTimerInterval = setInterval(() => {
            if(this.startTimer == 6){
                timerAnimation.className = "fade";
            }
            this.startTimer--;
            if(this.startTimer == 0){
                clearInterval(startTimerInterval);
                this.onStartQuiz();
            }
        }, 1000);
    }

}
