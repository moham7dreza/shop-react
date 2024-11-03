import axios from 'axios';
import config from "../../Config/app.js";

class ShopApiService {
    static API_BASE_URL = config.apiUrl;

    static getFullUrl(endpoint) {
        return `${this.API_BASE_URL}/${endpoint}`;
    }

    // Create
    static async createShop(data) {
        try {
            const response = await axios.post(this.getFullUrl('shops'), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Read
    static async getShops() {
        try {
            const response = await axios.get(this.getFullUrl('shops'));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getShopById(shopId) {
        try {
            const response = await axios.get(this.getFullUrl(`shops/${shopId}`));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update
    static async updateShop(shopId, data) {
        try {
            const response = await axios.put(this.getFullUrl(`shops/${shopId}`), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete
    static async deleteShop(shopId) {
        try {
            const response = await axios.delete(this.getFullUrl(`shops/${shopId}`));
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default ShopApiService;