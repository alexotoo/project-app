import React from "react";
import { Pagination } from "react-bootstrap";

const PagePagination = ({
  projectsPerPage,
  totalProjects,
  paginator,
  currentPage,
}) => {
  let active = currentPage;

  let numberOfPages = [];
  for (
    let pages = 1;
    pages <= Math.ceil(totalProjects / projectsPerPage);
    pages++
  ) {
    numberOfPages.push(
      <Pagination.Item
        key={pages}
        onClick={() => paginator(pages)}
        active={pages === active}
      >
        {pages}
      </Pagination.Item>
    );
  }
  return <Pagination>{numberOfPages}</Pagination>;
};

export default PagePagination;
