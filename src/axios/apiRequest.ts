import {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";
import api from "./axiosInstance";

interface ApiRequestOptions {
  method: AxiosRequestConfig["method"];
  url: string;
  data?: unknown;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  contentType?: string;
  token?: string;
  isFormData?: boolean;
  onUploadProgress?: (progressEvent: ProgressEvent) => void;
  signal?: AbortSignal;
}

const apiRequest = async <T = unknown>({
  method,
  url,
  data,
  params,
  headers = {},
  contentType,
  token,
  isFormData = false,
  signal,
}: ApiRequestOptions): Promise<T | { error: string }> => {
  try {
    const mergedHeaders = new AxiosHeaders({
      ...(isFormData ? {} : { "Content-Type": contentType || "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    });

    if (isFormData) {
      mergedHeaders.delete("Content-Type");
    }

    const config: InternalAxiosRequestConfig = {
      method,
      url,
      data,
      params,
      signal,
      headers: mergedHeaders,
    };

    const response: AxiosResponse<T> = await api(config);
    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    let errorMessage = "API request failed.";

    if (error.response?.data) {
      const data = error.response.data as { errors?: Record<string, string[]>; error?: string; message?: string; detail?: string };
      if (data.errors) {
        errorMessage = Object.values(data.errors).flat().join(", ");
      } else {
        errorMessage = data.error || data.message || data.detail || JSON.stringify(data);
      }
    } else if (error.request) {
      errorMessage = "No response from server.";
    } else {
      errorMessage = error.message || "Unknown error";
    }

    console.error("API Error:", errorMessage);
    return { error: errorMessage };
  }
};

export default apiRequest;