import React, { useState, useEffect } from 'react';
import List from './List';
import Pagination from './Pagination';

export default function Home() {
  const page = 1, limit = 6;
  const sampleData = {page: page, limit: limit, total_page: 0, has_next_page: false, has_prev_page: false, next_page: null, prev_page: null, data: []}
  const [data, setData] = useState(sampleData);

  useEffect(() => {
    getList(page);
  }, [page]);

  const getList = (page) => {
    fetch(`http://localhost:5000?page=${page}&limit=${limit}`)
    .then( res => res.json() )
    .then( result => setData(result) )
    .catch( err => console.log(err) )
  }

  return (
    <>
        <List data={data.data} />
        <Pagination
          total_page={data.total_page}
          has_next_page={data.has_next_page}
          has_prev_page={data.has_prev_page}
          next_page={data.next_page}
          prev_page={data.prev_page}
          getList={getList}
        />
    </>
  )
}
