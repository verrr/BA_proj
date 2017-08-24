import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";
import {NgForm} from "@angular/forms";
import {ServerService} from "../server.service";


@Component({
    selector: 'app-page-module-chatbox',
    templateUrl: './page-module-chatbox.component.html',
    styleUrls: ['./page-module-chatbox.component.sass'],
    animations: [
        trigger('chatState', [
            state('hidden', style({
                'visibility': 'hidden',
                backgroundColor: 'transparent'
            })),
            state('highlighted', style({
                'visibility': 'visible',
                backgroundColor: '#f3f3f3'
            })),
            transition('hidden => highlighted', animate(300)),
            transition('highlighted => hidden', animate(300))
        ])
    ]
})
export class PageModuleChatboxComponent implements OnInit {
    chatOpened = false;
    state = 'hidden';
    chatbox: any =
        {
            header: 'If you have any questions, ask me over here!',
            buttons: [
                {title: 'New project'},
                {title: 'Migrate Project'},
                {title: 'Help Me!'},
                {title: 'Humor Me'}
            ]

        };

    aiCards: any[] =
        [
            {
                aiText: 'Welcome to your dashboard, here you can build your own website'
            },
            {
                aiText: 'I have been trained to answer any tech question, like how to create a page, edit content, add' +
                ' images, change menus, add functionality,configure settings. Anything really!'
            },
            {
                aiText: 'What would you like to do first?'
            },

        ];
    form: NgForm;
    userCard: any[] = [];
    userSession: any[] = [];
    elementToScroll: HTMLElement;
    @ViewChild('scrollChat') onScrollBox: ElementRef;

    ngOnInit() {

    }


    onOpenChatbox() {
        this.chatOpened = !this.chatOpened;
        !this.chatOpened ? this.onClearChat() : console.log('chat is opened')

    }

    onAnimateContainer() {
        this.state == 'hidden' ? this.state = 'highlighted' : this.state = 'hidden';
    }

    onChatSubmit(form) {
        console.log(this.onScrollBox);
        console.log(form.value.userInput);
        (<HTMLInputElement>document.getElementById("userInputField")).value = "";

        this.onCreateCard(form.value.userInput.toString());
        form.value.userInput = null;

    }

    onCreateCard(x) {

        this.userCard.push(x);
        setTimeout(() => {
            this.elementToScroll = document.getElementById('card-container');
            this.elementToScroll.scrollTop = this.elementToScroll.scrollHeight;
            console.log('something')
        }, 300)

    }

    onClearChat() {
        /*let node = (<HTMLCollection>document.getElementsByClassName("userCard"));
         while(node.length > 0){
         node[0].parentNode.removeChild(node[0]); */
        /*=>old chat refresh*/
        this.userSession = this.userCard.slice();
        while (this.userCard.length > 0) {

            this.userCard.forEach((item, index, array) => {
                this.userCard.pop()
            })
        }
        this.onSave();
    }

    constructor(private serverService: ServerService) {

    }

    onSave() {

        this.serverService.storeUserSessions(this.userSession)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }

}
