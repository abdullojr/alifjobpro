import React, { useState, useEffect } from 'react';
import './style.scss';
import 'antd/dist/antd.css';
import axios from 'axios';
import Posts from '../Posts/Posts';
import { Pagination } from 'antd';
import App from '@mui/material/AppBar'

const Product = () => {
  const [posts, setPosts] = useState([]);

  const [total, setTotal] = useState('');
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const indexLastPage = page + postPerPage;
  const indexFirstPage = indexLastPage - postPerPage;
  const currentPosts = posts.slice(indexFirstPage, indexLastPage);

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize);
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setPosts(response.data);
        setTotal(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>Below you can see the posts coming from database.</h2>
      <Posts posts={currentPosts} />
      <div className='pagination-style'>
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={postPerPage}
          total={total}
          current={page}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
        />
      </div>


    </>
  );
};

export default Product;