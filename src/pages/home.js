import React, { useState } from 'react';
import "../styles/home.scss";


import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import Carousel from 'react-material-ui-carousel';

const queryClient = new QueryClient()

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;



export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetData />
    </QueryClientProvider>
  )
}


function GetData() {

  const [paintings, setPaintings] = useState([]);

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/api/paintings')
      .then(response =>
        response.json().then(data => {
          console.log(data.data)
          setPaintings(data.data);
        })
      )
  );

  if (isLoading) return (
    <div><ClipLoader loading={isLoading} css={override} size={50} /></div>
  )

  if (error) return (<div><h1>Error, please contact epgarry1@gmail.com.</h1></div>)

  return (

    <>
    <div className="page_container">
      <div className="name">
        <h1>Alan Robert Garry</h1>        
      </div>

      <Carousel indicators={false} interval={4000} stopAutoPlayOnHover={true} autoPlay={true} animation="fade">
            {
                paintings.map( (item, i) =>    <div className="home_carousel"> <img src={process.env.PUBLIC_URL +
                  "/photos/" + paintings[i]['file_name']} alt={paintings[i]["Title"]} key={i} /> 
                        </div>)
            }
      </Carousel>
      </div>

    </>


  );
}
