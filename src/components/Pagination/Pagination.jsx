import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({ currentPage, paginateNext, paginatePrev }) => {
  return (
    <div className={styles.navigationContainer}>
      <button onClick={() => paginatePrev()} style={{ marginRight: "20px" }}>
        Previous
      </button>
      <div className={styles.pageNumber}>{currentPage}</div>
      <button onClick={() => paginateNext()} style={{ marginLeft: "20px" }}>
        Next
      </button>
    </div>
  );
};