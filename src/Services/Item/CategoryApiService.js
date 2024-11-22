import axios from 'axios';
import config from "../../Config/app.js";

class CategoryApiService {
    static API_BASE_URL = config.apiUrl;

    static getFullUrl(endpoint) {
        return `${this.API_BASE_URL}/${endpoint}`;
    }

    // Create
    static async createCategory(data) {
        try {
            const response = await axios.post(this.getFullUrl('items/categories'), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Read
    static async getCategories() {
        try {
            const response = await axios.get(this.getFullUrl('items/categories/index'));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getCategoryById(categoryId) {
        try {
            const response = await axios.get(this.getFullUrl(`items/categories/${categoryId}`));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update
    static async updateCategory(categoryId, data) {
        try {
            const response = await axios.put(this.getFullUrl(`items/categories/${categoryId}`), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete
    static async deleteCategory(categoryId) {
        try {
            const response = await axios.delete(this.getFullUrl(`items/categories/${categoryId}`));
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default CategoryApiService;