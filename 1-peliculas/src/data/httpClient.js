const API = 'https://api.themoviedb.org/3';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTMwNTFkYzgwMGY5MWJhNzY1NWY2OWUxNzJiZmVhMSIsIm5iZiI6MTc2MTYxMDkxOS40NzUwMDAxLCJzdWIiOiI2OTAwMGNhN2YwNGQzMzNkYjNkYTA1MmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n79cdHLF-w5nO3zoZ_ZxW4BDxXtM32ssb_gC0xuqpfI';

export const get = (path) => {
    return fetch(`${API}/${path}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }).then(response => response.json());
}