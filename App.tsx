import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export function useSheetData<T>(csvUrl: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!csvUrl) {
      setLoading(false);
      return;
    }

    Papa.parse(csvUrl, {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data as T[]);
        setLoading(false);
      },
      error: (error: any) => {
        setError(error);
        setLoading(false);
      }
    });
  }, [csvUrl]);

  return { data, loading, error };
}
