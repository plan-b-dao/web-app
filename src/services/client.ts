import etherscan from "./etherscan";

class Client {
    etherscan;

    constructor() {
        this.etherscan = etherscan;
    }
}

export const client = new Client();