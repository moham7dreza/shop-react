import axios from 'axios';
import config from "../Config/app.js";

class AuthApiService {
    static API_BASE_URL = config.apiUrl;

    static getFullUrl(endpoint) {
        return `${this.API_BASE_URL}/${endpoint}`;
    }

    static async loginMobile(data) {
        try {
            const response = await axios.post(this.getFullUrl('auth-plus/login-mobile'), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async registerMobile(data) {
        try {
            const response = await axios.post(this.getFullUrl('auth-plus/register-mobile'), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async sendActivationCode() {
        try {
            const response = await axios.get(this.getFullUrl('auth-plus/request-mobile-verify'));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async verifyMobile(data) {
        try {
            const response = await axios.put(this.getFullUrl('mobile-verify'), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async loginOtp(data) {
        try {
            const response = await axios.delete(this.getFullUrl('auth-plus/login-otp'), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async logout(data) {
        try {
            const response = await axios.post(this.getFullUrl('auth-plus/logout'), data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default AuthApiService;