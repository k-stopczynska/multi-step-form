import React, { useState, useEffect } from "react";


const PageContext = React.createContext({
    //change types
  onClick: (offset: any) => {},
  page: 1,
});

export const PageContextProvider = (props: any) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const pageChosen = JSON.parse(localStorage.getItem('page') || '');
    setPage(pageChosen);
  }, []);

  useEffect(() => {
    localStorage.setItem('page', JSON.stringify(page));
  }, [page]);

  const pageHandler = (offset: any) => {
    return offset === 1
      ? setPage((prevPage) => prevPage + 1)
      : setPage((prevPage) => prevPage - 1);
  };
  return (
    <PageContext.Provider value={{ onClick: pageHandler, page: page }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContext;
