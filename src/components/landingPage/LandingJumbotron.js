import React from "react";
import "./landingJumbotron.css";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer className="landJumbo container-fluid text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage
              className="img-fluid"
              src="images/June2020-chapter-hero-image.jpg"
            />
            <MDBCardBody>
              <MDBCardTitle className="h3">Featured Story</MDBCardTitle>
              <MDBCardText>
              This will have the description of featured story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed finibus lorem. Donec vel eros sagittis, iaculis leo ut, cursus diam. Integer mauris ex, ullamcorper vitae ornare malesuada, condimentum eu neque. Nulla facilisi. Vestibulum venenatis luctus sapien vel consectetur. Fusce feugiat condimentum mi in viverra. Aenean est magna, pulvinar eu blandit vel, vehicula quis justo. Ut ante tortor, gravida vitae elit vel, blandit sagittis felis. Fusce placerat lobortis facilisis. Quisque nulla enim, sagittis et ante nec, sodales interdum augue. Ut et massa sit amet mi lobortis tincidunt sit amet ut leo. Aenean posuere interdum magna, sit amet tempor mauris faucibus ut. Nullam egestas finibus dui sed dignissim. Mauris quis vulputate tortor.
              </MDBCardText>
              <MDBBtn href="#" className="btn btn-info" rounded>
                View Story
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;