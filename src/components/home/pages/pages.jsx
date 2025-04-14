import React, { useState } from "react";
import PagesSlide from "../pages/pageslide";


const pages = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    
      <div className="file-list-section">
       
        <PagesSlide key={refresh} />
      </div>

  );
};

export default pages;
