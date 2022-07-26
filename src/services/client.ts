import etherscanAPI from "./etherscan";
import contentfulAPI from "./contentful";

class Client {
    etherscan;
    contentful;

    constructor() {
        this.etherscan = etherscanAPI;
        this.contentful = contentfulAPI;
    }
}

export const client = new Client();