import React from "react";

const Header = () => {
  return (
    <div>
      <Container>
        <Logo src="images/logo.png"></Logo>
        <Wrapper>
          <a>
            <img src="images/home-icon.svg" />
            <span>Home</span>
          </a>

          <a>
            <img src="images/series-icon.svg" />
            <span>Series</span>
          </a>

          <a>
            <img src="images/movie-icon.svg" />
            <span>Movies</span>
          </a>

          <a>
            <img src="images/search-icon.svg" />
            <span>Search</span>
          </a>

          <a>
            <img src="images/original-icon.svg" />
            <span>Original</span>
          </a>

          <a>
            <img src="images/watchlist-icon.svg" />
            <span>WatchList</span>
          </a>
        </Wrapper>
        <Profile>
          <img src="images/slider-scale.jpg" />
          <span>Home</span>
        </Profile>
      </Container>
      ); };
    </div>
  );
};

export default Header;

const Container = styled.div`
  background-color: #090b13;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;


  }
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 70px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 10px;
  

  img {
    width: 20px;
    height: 30px;
    object-fit: contain;
    opacity: 0.6;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    opacity: 1;
    margin: 0 5px;
    position: relative;
    opacity: 0.7;
    

    :after {
      height: 2px;
      content: "";
      position: absolute;
      top: 20px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: white;
      transition: all 350ms;
      opacity: 0;
    }
    }
  } :hover{
    span{
      opacity: 1;
    }
    span:after{
        opacity: 1;
    }

    img{
      opacity: 1;
    }
  }
}
`;

const Logo = styled.img`
  width: 100px;
  height: 60px;
  object-fit: contain;
  margin: 0 30px;
`;

const Profile = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  img {
    width: 50px;
    heigth: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }
`;
