import TinyEmitter from "tiny-emitter";
import request from "browser-request";

class NTask extends TinyEmitter {
	constructor() {
		super();
		this.request = request;
		this.URL = "https://moversappserver.herokuapp.com";
	}
}

module.exports = NTask;