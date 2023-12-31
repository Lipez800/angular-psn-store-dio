import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	gameCover: string = "";
	@Input()
	gameLabel: string = "";
	@Input()
	gameType: string = "XPTO | PS4";
	@Input()
	gamePrice: string = "R$ 399,90";
	@Input()
	gameTitle: string = "Gmae tststs";
	@Input()
	gamePlatformTag: string = "PSN";
	@Input ()
	gameReleaseDate: string ="29 de agosto de 2023";

	constructor() { }

	ngOnInit(): void {
	}

}
