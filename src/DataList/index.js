import React from "react";
import { useEffect, useState } from "react";

export default function DataList({
  data,
  totalDataLength,
  PER_PAGE,
  setSelectedPage,
}) {
  const [paginationItems, setPaginationItems] = useState([]);

  const preparePagination = () => {
    const items = [];

    for (let i = 1; i < parseInt(totalDataLength / PER_PAGE) + 1; i++) {
      items.push(i);
      console.log(i);
    }
    setPaginationItems(items);
  };

  useEffect(() => {
    {
      preparePagination();
    }
  }, [data, totalDataLength]);

  return (
    <>
      {data.map((item, key) => {
        return (
          <div className="border border-primary mt-2 mb-2 p-2" key={key}>
            <span>{item?.id}</span>
            <h2>{item?.title}</h2>
            <p>{item?.body}</p>
          </div>
        );
      })}
      <div>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>

          {paginationItems.map((item, key2) => {
            return (
              <li
                onClick={() => {
                  setSelectedPage(item);
                }}
                key2={key2}
                className="page-item"
              >
                <a className="page-link" href="#">
                  {item}
                </a>
              </li>
            );
          })}
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
