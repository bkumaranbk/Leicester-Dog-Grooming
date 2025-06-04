import apiRequest from "@/axios/apiRequest";
import { BlogPost } from "@/components/blog/BlogList";

const BASE_URL = "/api/blogs";


export const createBlog = async (data: Omit<BlogPost, '_id'>, token: string) => {
  return await apiRequest<BlogPost>({
    method: "POST",
    url: BASE_URL,
    data,
    token,
  });
};

export const getAllBlogs = async () => {
  return await apiRequest<BlogPost[]>({
    method: "GET",
    url: BASE_URL,
  });
};

export const getBlogById = async (id: string) => {
  return await apiRequest<BlogPost>({
    method: "GET",
    url: `${BASE_URL}/${id}`,
  });
};

export const updateBlog = async (id: string, data: Partial<BlogPost>, token: string) => {
  return await apiRequest<BlogPost>({
    method: "PUT",
    url: `${BASE_URL}/${id}`,
    data,
    token,
  });
};

export const deleteBlog = async (id: string, token: string) => {
  return await apiRequest<{ message: string }>({
    method: "DELETE",
    url: `${BASE_URL}/${id}`,
    token,
  });
};
