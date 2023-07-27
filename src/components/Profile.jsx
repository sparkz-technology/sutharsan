import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional CSS for blur effect during loading
import profile from "../assets/profile.jpg";
// import styles from "./Profile.module.css";
import styled from "styled-components";
const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
const StyledImg = styled(LazyLoadImage)`
  height: 300px;
  width: 300px;
  border-radius: 25px;
  color: black;
  margin: 10;
`;
function Profile() {
  return (
    <StyledProfile>
      <StyledImg
        src={profile}
        alt="sutharsan"
        effect="blur" // Optional blur effect during loading
        threshold={100} // Optional, default is 100. Controls how early the image starts to load before it's visible.
      />
    </StyledProfile>
  );
}

export default Profile;
