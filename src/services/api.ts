import axios from 'axios';
import type { ApiResponse } from '../types';

const BASE_URL = 'https://sonic-api.vercel.app/api';

export async function getCharacters() {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/characters`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
}