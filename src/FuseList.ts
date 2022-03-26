import { FuseListConfig } from './FuseListConfig';

export class FuseList {
	list: any = [];
	config: any = null;

	constructor(l: any, c: FuseListConfig) {
		this.list = l;
		this.config = Object.assign(new FuseListConfig(), c);
		return this;
	}

	static fuseList(l: any, c: any = null) {
		const fuseList = new FuseList(l, c);
		return fuseList.generateString();
	}

	generateString() {
		if(!this.config) return null;
		if(!this.list || !Array.isArray(this.list)) return null;

		let generatedString = "";
		const itemPrefix = this.config.prefix ? this.config.prefix : "";
		const itemSuffix = this.config.suffix ? this.config.suffix : "";
		const separator = this.config.separator ? this.config.separator : "";

		let i = 0;
		const len = this.list.length;
    while (i < len) {
				let itemString = `${itemPrefix}${this.list[i]}`;

				if(i === (len - 1)) {
					itemString = `${itemString}${itemSuffix}`
				} else if(i === (len - 2) && this.config.finalSeparator) {
					if(this.config.separatorPosition === "beforeSuffix") {
						itemString = `${itemString}${this.config.finalSeparator}${itemSuffix}`
					} else {
						itemString = `${itemString}${itemSuffix}${this.config.finalSeparator}`
					}
				} else {
					if(this.config.separatorPosition === "beforeSuffix") {
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
