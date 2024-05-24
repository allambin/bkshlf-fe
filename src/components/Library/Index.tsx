import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getLibrary } from "../../api/library";


const Index: React.FC = () => { // todo rename
  const [libraryData, setLibraryData] = useState<any>(null);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const data = await getLibrary();
        setLibraryData(data);
      } catch (err) {
        console.error('Error fetching library data:', err);
      }
    };

    fetchLibrary();
  }, []);

  return (
    <div>
      <h1>Library Data</h1>
      <pre>{JSON.stringify(libraryData, null, 2)}</pre>
    </div>
  );
}

export default Index;