import React, { useState, useEffect } from 'react';
// import socketIOClient from 'socket.io-client';
import List from '../../Components/ProductList';
import Pagination from '../../Components/Pagination';
import Title from '../../Components/Title';
import PerPage from '../../Components/PerPage';

export default function Home({setDetailsID}) {

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const sampleData = {totalItem: 0, data: []}
  const [data, setData] = useState(sampleData);
  const totalPage = Math.ceil(data.totalItem / limit );  

  useEffect(() => {
    fetch(`http://localhost:5000?page=${page}&limit=${limit}`)
    .then( res => res.json() )
    .then( result => setData(result) )
    .catch( err => console.log(err) )
  }, [page, limit]);

  const setPerPage = number => {
    setLimit(number);
    setPage(1)
  }

  return (
    <main id="home">
      <Title title="List Products" />
      <PerPage size={limit} onChangePerPage={setPerPage} />
      <List data={data.data} setDetailsID={setDetailsID} />
      <Pagination
        size={totalPage}
        current={page}
        onPageChange={setPage}
      />
    </main>
  )
}
