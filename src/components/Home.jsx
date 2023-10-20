import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recomended from "./Recomended";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName } from "../redux/Reducers/userSlice";
import { setMovies } from "../redux/Reducers/movieSlice";
import { storage } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieQuery = query(
          collection(storage, "movies"),
          where("type", "in", ["recommend", "new", "original", "trending"])
        );
        const snapshot = await getDocs(movieQuery);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(data);
        const categorizedMovies = {
          recommend: data.filter((movie) => movie.type === "recommend"), // Use "recommend" here
          newDisney: data.filter((movie) => movie.type === "new"),
          original: data.filter((movie) => movie.type === "original"),
          trending: data.filter((movie) => movie.type === "trending"),
        };
        console.log(categorizedMovies.recommend);
        console.log(categorizedMovies.newDisney);
        console.log(categorizedMovies.original);
        console.log(categorizedMovies.trending);
        dispatch(
          setMovies({
            recommend: categorizedMovies.recommend,
            newDisney: categorizedMovies.newDisney,
            original: categorizedMovies.original,
            trending: categorizedMovies.trending,
          })
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    };
    if (userName) {
      fetchData();
    }
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      {loading ? <h2>Loading ...</h2> : <Recomended />}
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
