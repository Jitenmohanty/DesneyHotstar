import React, { useEffect } from "react";
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
  let recommend = [];
  let original = [];
  let newDisneys = [];
  let trending = [];

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const navigate = useNavigate();

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
        console.log(data)
        const categorizedMovies = {
          recommend: data.filter((movie) => movie.type === "recommend"),
          newDisney: data.filter((movie) => movie.type === "new"),
          original: data.filter((movie) => movie.type === "original"),
          trending: data.filter((movie) => movie.type === "trending"),
        };

        dispatch(setMovies(categorizedMovies));
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
      <Recomended />
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
