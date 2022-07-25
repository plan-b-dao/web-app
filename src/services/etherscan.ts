import axios, { AxiosInstance } from "axios";
import { config } from "../utils/config";

class EtherscanAPI {
    private etherscan: AxiosInstance;
    private readonly key: string;
    constructor(private readonly apiKey: string) {
        this.etherscan = axios.create({baseURL: 'https://api.etherscan.io/api'});
        this.key = apiKey;
    }

    getGases = async (): Promise<any> => {
        try {
            const response = await this.etherscan.get('', {
                params: {
                    module: 'gastracker',
                    action: 'gasoracle',
                    apikey: this.key
                }
            });
            return response.data.result.ProposeGasPrice;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new EtherscanAPI(config.etherscanAPIKey);