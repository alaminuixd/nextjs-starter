"use client";
import { useEffect, useState } from "react";

type DataItem = {
  title: string;
};

const dummyData: DataItem[] = [
  { title: "This is from suspense." },
  { title: "Another title from suspense." },
];

export default function Suspense() {
  const [titles, setTitles] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await new Promise<DataItem[]>((resolve) => {
        setTimeout(() => {
          resolve(dummyData);
        }, 2000);
      });

      setTitles(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {titles.length === 0 ? (
        <p>Loading...</p>
      ) : (
        titles.map((item, index) => <p key={index}>{item.title}</p>)
      )}
    </div>
  );
}
