import { useQuery } from 'react-query';

interface Van {
    description: String
    id: number
    imageUrl: string
    name: string
    price: number
    type: string
}

interface VansData {
    vans: Van[];
}

export function useVansData(url: any) {
  return useQuery<any>(['vans', url], async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data 
  });
  
}
