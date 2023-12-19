import React, { useState, useEffect } from 'react';
import { usePosts } from '../hooks/usePost';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostList from '../components/PostList';
import Popup from '../components/Popup';
import PostForm from '../components/PostForm';
import Pagination from '../components/Pagination';


import { getPageCount } from '../utils/pages';
import { HashLink as Link } from 'react-router-hash-link';

export default function PostPage() {

  const [posts, setPosts] = useState([]);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [buttonOpen, setButtonOpen] = useState(false);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts();
  }, [page])

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



  function addPost(newPost) {
    setPosts([...posts, newPost]);
    setIsPopupOpened(false);
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item.id !== post.id));
  }

  function openPopup() {
    setIsPopupOpened(true);
  }

  function closePopup() {
    setIsPopupOpened(false);
  }

  function changePage(page) {
    setPage(page);
  }

  function changeButtonState() {
    setButtonOpen(!buttonOpen);
  }

  return (
    <main className="content">
      <section className="banner" id="banner">
        <div className="banner__content">
          <h1 className="banner__title">Personal blog</h1>
          <p className="banner__subtitle">
          Designed for those who want to share their experiences, thoughts and creativity. Combining ease of use, stylish design and functionality, the app provides a unique platform to express yourself and communicate with your audience.
          </p>
        </div>
      </section>
      <section className="posts">
        <h2 className="posts__title">Make your story.</h2>
        <button type="button" className="posts__button button" onClick={openPopup}>Create new post</button>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {postError &&
          <h2 className="posts__subtitle">Oops! Something went wrong: {postError}</h2>
        }
        {isPostsLoading
          ? <span className="posts__loader"></span>
          : <PostList posts={sortedAndSearchedPosts} onPostRemove={removePost} />
        }
        <Pagination
          page={page}
          totalPages={totalPages}
          changePage={changePage}
        />
      </section>
      <Popup isOpened={isPopupOpened} onClose={closePopup}>
        <PostForm onAddPost={addPost} postId={posts.length + 1} />
      </Popup>
      <Link to="#banner" className="posts__up button">Go up</Link>
    </main>
  )
}
