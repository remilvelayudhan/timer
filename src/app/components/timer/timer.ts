import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { timeEnd } from 'console';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  readonly total =15;
  readonly warnAt = 10;
  readonly dangerAt = 5;


  readonly secondsRemaining =signal(this.total);
  readonly formatedRemaining =computed(()=>this.formattedTime(this.secondsRemaining()))



  constructor(){
    const  timer= setInterval(()=>{
      this.secondsRemaining.update((v)=>Math.max(v-1,0))
    },1000);

   const destroyRef =inject(DestroyRef);
   destroyRef.onDestroy(()=>clearInterval(timer));

  }




  private formattedTime(totalSeconds: number): string {
    return new Date(totalSeconds * 1000).toISOString().slice(14, 19);
  }


 


 
}
