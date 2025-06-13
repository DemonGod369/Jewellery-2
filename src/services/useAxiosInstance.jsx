export default function useAxiosInstance() {
  const axiosInstance = axios.create({
    baseURL: "Your_api_base_url",
    header: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  axiosInstance.interceptor.use(
    async (config) => {
      const token = Cookies.get("link-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  return {
    axiosInstance,
  };
}
