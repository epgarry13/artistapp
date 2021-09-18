import { useState, useEffect } from "react";
import "../styles/portfolio.scss";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import { Link } from "react-router-dom";

const queryClient = new QueryClient();

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

export default function Portfolio(props) {
  useEffect(() => {
    props.setHighlight(1);
  }, [props]);

  return (
    <div className="page_container">
      <QueryClientProvider client={queryClient}>
        <GetData setHighlight={props.setHighlight} />
      </QueryClientProvider>
    </div>
  );
}

function GetData(props) {
  const [paintings, setPaintings] = useState([]);
  const [show, setShow] = useState(0);

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("/api/paintings").then((response) =>
      response.json().then((data) => {
        console.log(data.data);
        setPaintings(data.data);
      })
    )
  );

  if (isLoading || paintings.length === 0)
    return (
      <div>
        <MoonLoader loading={isLoading} css={override} size={50} />
      </div>
    );

  if (error)
    return (
      <div>
        <h1>Error, please contact epgarry1@gmail.com.</h1>
      </div>
    );

  return (
    <>
      <div className="header">
        <h1 className="titles">{paintings[show]["Title"]}</h1>
      </div>
      <div className="carousel_container">
        <div className="back">
          <ArrowBackIosIcon
            onClick={() => {
              if (show === 0) {
                setShow(paintings.length - 1);
              } else {
                setShow(show - 1);
              }
            }}
          />
        </div>
        <div className="displayed_image">
          <img
            src={paintings[show]["url"]}
            alt={paintings[show]["Title"]}
          />
        </div>
        <div className="forward">
          <ArrowForwardIosIcon
            onClick={() => {
              if (show === paintings.length - 1) {
                setShow(0);
              } else {
                setShow(show + 1);
              }
            }}
          />
        </div>
      </div>
      <div className="attribute_container">
        <div>{paintings[show]["Description"]}</div>
        <div>
          {paintings[show]["H"]} x {paintings[show]["W"]}
        </div>
        <div>{paintings[show]["Price"]}</div>
        <div className="mt-5">{paintings[show]["Comment"]}</div>
      </div>
    </>
  );
}
