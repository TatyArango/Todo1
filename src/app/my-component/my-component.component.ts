import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-component',
	templateUrl: './my-component.component.html',
	styleUrls: [ './my-component.component.scss' ]
})
export class MyComponentComponent implements OnInit {
	count = 0;
	imageSource = './../favicon.ico';
	enabled = true;

	constructor() {}

	ngOnInit() {}
}
