import { ctx, w, h, PI2 } from './canvas';

export class Planet {
	x: number;
	y: number;
	origX: number;
	origY: number;
	radius: number;
	cradius: number;
	mv: number;

	constructor() {
		this.x = w / 2;
		this.y = h / 2;
		this.origX = this.x;
		this.origY = this.y;
		this.radius = 100;
		this.cradius = this.radius + 50;
		this.mv = 20;
	}

	drawBackCircle(radius: number, y?: number) {
		y = y || 0;
		ctx.beginPath();
		ctx.moveTo(this.x - radius,this.y - this.mv);
		ctx.bezierCurveTo(
			this.x - radius, this.y - y - 50 - this.mv,
			this.x + radius, this.y - y - 50 + this.mv,
			this.x + radius, this.y + this.mv
		);
		ctx.stroke();
	}

	drawFrontCircle(radius: number, y?: number) {
		y = y || 0;
		ctx.beginPath();
		ctx.moveTo(this.x - radius,this.y - this.mv);
		ctx.bezierCurveTo(
			this.x - radius, this.y + y + 50 - this.mv,
			this.x + radius, this.y + y + 50 + this.mv,
			this.x + radius, this.y + this.mv
		);
		ctx.stroke();
	}

	draw() {
		this.drawBackCircle(this.cradius);
		this.drawBackCircle(this.cradius + 10, 4);
		
		ctx.beginPath();
		ctx.arc(this.x, this.y, 100, 0, PI2);
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.stroke();
		
		this.drawFrontCircle(this.cradius);
		this.drawFrontCircle(this.cradius + 10, 12);
	}

	think(x: number, y: number) {
		// this.mv = y / 50;
		// this.mv = y / 50;
		this.mv = y / 100 + x / 100;
		this.x = this.origX + x / 30;
		this.y = this.origY + y / 30;
	}
}