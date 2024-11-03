import axios from 'axios';
import config from "../../Config/app.js";

class BannerApiService {
    static API_BASE_URL = config.apiUrl;

    static getFullUrl(endpoint) {
        return `${this.API_BASE_URL}/${endpoint}`;
    }

    // Create
    static async createBanner(data) {
        try {
            const response = await axios.post(this.getFullUrl('banners'), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Read
    static async getBanners() {
        try {
            const response = await axios.get(this.getFullUrl('banners'));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getBannerById(bannerId) {
        try {
            const response = await axios.get(this.getFullUrl(`banners/${bannerId}`));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update
    static async updateBanner(bannerId, data) {
        try {
            const response = await axios.put(this.getFullUrl(`banners/${bannerId}`), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete
    static async deleteBanner(bannerId) {
        try {
            const response = await axios.delete(this.getFullUrl(`banners/${bannerId}`));
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default BannerApiService;