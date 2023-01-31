import React, { useEffect } from 'react';

const MangaChapterImage = ({ page }) => {

console.log(page)


  return (
    <div>
      <img src={page.url} alt="" />
    </div>
  );
};

export default MangaChapterImage;