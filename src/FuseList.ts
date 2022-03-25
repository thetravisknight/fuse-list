import { FuseListConfig } from './FuseListConfig';

export class FuseList {
	list: any = [];
	config: any = null;

	constructor(l: any, c: any = null) {
		this.list = l;
		this.config = Object.assign(new FuseListConfig(), c);
		return this;
	}

	static fuseList(l: any, c: any = null) {
		var fuseList = new FuseList(l, c);
		return fuseList.generateString();
	}

	generateString() {
		if(!this.config) return null;
		if(!this.list || !Array.isArray(this.list)) return null;

		var generatedString = "";
		var itemPrefix = this.config.itemPrefix ? this.config.itemPrefix : "";
		var itemSuffix = this.config.itemSuffix ? this.config.itemSuffix : "";
		var separator = this.config.separator ? this.config.separator : "";

		var i = 0, len = this.list.length;
    while (i < len) {
				var itemString = `${itemPrefix}${this.list[i]}`;

				if(i == (len - 1)) {
					itemString = `${itemString}${itemSuffix}`
				} else if(i == (len - 2) && this.config.finalSeparator) {
					if(this.config.separatorPosition == "beforeSuffix") {
						itemString = `${itemString}${this.config.finalSeparator}${itemSuffix}`
					} else {
						itemString = `${itemString}${itemSuffix}${this.config.finalSeparator}`
					}
				} else {
					if(this.config.separatorPosition == "beforeSuffix") {
						itemString = `${itemString}${separator}${itemSuffix}`
					} else {
						itemString = `${itemString}${itemSuffix}${separator}`
					}
				}

				generatedString = `${generatedString}${itemString}`
        i++
    }

		return generatedString;
	}

}
