import axios from 'axios';

export default {
    setupInterceptors: (baseUrl) => {
        if (baseUrl) {
            axios.defaults.baseURL = baseUrl;
        }
        axios.interceptors.request.use(
            (config) => {
                const $csrf = document.querySelector('meta[name="csrf-token"]');
                if ($csrf) {
                    config.headers['csrf-token'] = $csrf.getAttribute('content');
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
    },
};
