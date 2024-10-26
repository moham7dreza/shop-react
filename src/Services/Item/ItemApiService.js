import axios from 'axios';
import config from "../../Config/app.js";

class ItemApiService {
    static API_BASE_URL = config.apiUrl;

    static getFullUrl(endpoint) {
        return `${ItemApiService.API_BASE_URL}/${endpoint}`;
    }

    // Create
    static async createItem(data) {
        try {
            const response = await axios.post(this.getFullUrl('items'), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Read
    static async getItems() {
        try {
            const response = await axios.get(this.getFullUrl('items/index'));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getItemById(itemId) {
        try {
            const response = await axios.get(this.getFullUrl(`items/${itemId}`));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update
    static async updateItem(itemId, data) {
        try {
            const response = await axios.put(this.getFullUrl(`items/${itemId}`), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete
    static async deleteItem(itemId) {
        try {
            const response = await axios.delete(this.getFullUrl(`items/${itemId}`));
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default ItemApiService;