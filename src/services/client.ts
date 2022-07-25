import etherscan from "./etherscan";
import contentfulAPI from "./contentful";

class Client {
    etherscan;
    contentful;

    constructor() {
        this.etherscan = etherscan;
        this.contentful = contentfulAPI;
    }
}

export const client = new Client();