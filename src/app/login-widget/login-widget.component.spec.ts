/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { LoginWidgetComponent } from './login-widget.component';

let component: LoginWidgetComponent;
let fixture: ComponentFixture<LoginWidgetComponent>;

describe('loginWidget component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LoginWidgetComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(LoginWidgetComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});