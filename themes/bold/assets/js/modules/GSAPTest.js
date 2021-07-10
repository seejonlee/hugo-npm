import gsap from 'gsap';

console.log('testing js and npm');
console.log({gsap});

export default class GSAPTest {
	constructor(id) {
		this.nodeId = id;
	}

	run() {
		console.log(document.getElementById(`${ this.nodeId }`));
		gsap.to(`#${ this.nodeId }`, {duration: 1, x: 200});
	}
}
