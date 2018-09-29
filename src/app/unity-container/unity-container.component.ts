import { Component, NgZone } from '@angular/core';
declare var $: any;
declare const UnityLoader;
@Component({
    selector: 'app-unity-container',
    templateUrl: './unity-container.component.html'
})
/** unity-container component*/
export class UnityContainerComponent {
  public gameObject: any;
    /** unity-container ctor */
    constructor(private ngZone: NgZone) {
     
  }

  public ngOnInit(): void {
    this.init();
  }

  private init() {
    $.getScript('assets/MajorBalloon_Game/Build/UnityLoader.js').done(function (bla, text) {
      this.gameObject =
        UnityLoader.instantiate('gameContainer', 'assets/MajorBalloon_Game/Build/MajorBalloon_Game.json');
      //gameObject not undefined at this stage..
    });
  }
}
