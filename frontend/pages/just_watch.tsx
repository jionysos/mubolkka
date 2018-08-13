import React from 'react'
// import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardImgOverlay, Row, Col } from 'reactstrap';

const data = [
  {
    id: 1,
    image_src: 'https://www.google.co.kr/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiYn679u-TcAhULzbwKHVMgCywQjRx6BAgBEAU&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EC%259C%25A0%25EB%25AF%25B8%25EC%259D%2598%2520%25EC%2584%25B8%25ED%258F%25AC%25EB%2593%25A4&psig=AOvVaw3hLdbNOaATqiZ-pf5YjQ1F&ust=1534058657882326',
    title: '유미의 일기장',
    stars: 9.0,
    genre: 'romance',
    num_of_join: '33',
    artist: '최영철',
    weekday: 'mon'        
  }
]


const Example = (props) => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">MUBOLKKA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Row>
        
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20180627_126/1530072185130JQkS8_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg?type=a210" alt="Card image cap" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col><Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20180627_126/1530072185130JQkS8_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg?type=a210" alt="Card image cap" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col><Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20180627_126/1530072185130JQkS8_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg?type=a210" alt="Card image cap" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col><Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20180627_126/1530072185130JQkS8_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg?type=a210" alt="Card image cap" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20180627_126/1530072185130JQkS8_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg?type=a210" alt="Card image cap" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>      
        
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20180627_126/1530072185130JQkS8_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg?type=a210" alt="Card image cap" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>   
        
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20180627_126/1530072185130JQkS8_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>   
        
        <Col sm="2">
          <CardImg height="210" src="https://webtoon-phinf.pstatic.net/20180627_126/1530072185130JQkS8_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg?type=a210" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>A Good Day to be a Dog</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
        </Col>
        
        <Col sm="2">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        
        <Col sm="2">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        
        <Col sm="2">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        
        <Col sm="2">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        
        <Col sm="2">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        
        <Col sm="2">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        
        <Col sm="2">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        
        <Col sm="2">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Example;