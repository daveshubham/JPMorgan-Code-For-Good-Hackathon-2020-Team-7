import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Landing() {
  return (
    <div className="landing">
        <Jumbotron>
        <h4 className="card-title h4 pb-2"><strong>Featured Story</strong></h4>
        <div class="view overlay my-4">
            <img src="images/June2020-chapter-hero-image.jpg"/>
            </div>
            <p>
                This will have the description of featured story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed finibus lorem. Donec vel eros sagittis, iaculis leo ut, cursus diam. Integer mauris ex, ullamcorper vitae ornare malesuada, condimentum eu neque. Nulla facilisi. Vestibulum venenatis luctus sapien vel consectetur. Fusce feugiat condimentum mi in viverra. Aenean est magna, pulvinar eu blandit vel, vehicula quis justo. Ut ante tortor, gravida vitae elit vel, blandit sagittis felis. Fusce placerat lobortis facilisis. Quisque nulla enim, sagittis et ante nec, sodales interdum augue. Ut et massa sit amet mi lobortis tincidunt sit amet ut leo. Aenean posuere interdum magna, sit amet tempor mauris faucibus ut. Nullam egestas finibus dui sed dignissim. Mauris quis vulputate tortor.
            </p>
        </Jumbotron>
    </div>
  );
}

export default Landing;