import React, { useState, useEffect } from "react";
import {Values} from '../interfaces';

const PageContext = React.createContext({
    //change types
  onSubmit: (data: Values) => {},
  onClick: (data: Values) => {},
  page: 0,
  data: {
    name: "",
    email: "",
    phone: "",
    picked: "",
    toggle: false,
    addons: []
  },
});

export const PageContextProvider = (props: any) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
      name: "",
      email: "",
      phone: "",
      picked: "",
      toggle: false,
      addons: []
    })

  // useEffect(() => {
  //   const pageChosen = JSON.parse(localStorage.getItem('page'));
  //   setPage(pageChosen);

  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('page', JSON.stringify(page));
  // }, [page]);

  const submitHandler = (newData: Values) => {
    setData((prevData) => ({...prevData, ...newData}));
    setPage((prevPage) => prevPage + 1)
  };
  const clickHandler = (newData: Values) => {
    setData((prevData) => ({...prevData, ...newData}));
    setPage((prevPage) => prevPage - 1)
  };
  return (
    <PageContext.Provider value={{ onSubmit: submitHandler, onClick: clickHandler, page, data }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContext;
