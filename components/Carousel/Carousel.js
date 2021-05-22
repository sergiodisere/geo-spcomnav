import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card, Button } from 'reactstrap';


import { UncontrolledCarousel } from 'reactstrap';

export default function LivePreviewExample() {
  const hero8 = "/carousel.jpg"
  const items = [
    {
      src:
      'https://www.uab.cat/Imatge/934/550/index_capcalera,0.png',
      //'https://upload.wikimedia.org/wikipedia/commons/7/71/Autonome_Universit%C3%A4t_Barcelona_Logo.svg',
      //'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: '',
      caption: '',
      key: '1'
    },
    {
      src:
      'https://scontent-mad1-1.xx.fbcdn.net/v/t1.18169-9/30531176_1545624665546494_3529187179811177342_n.png?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=mpah8Kmhe7QAX__PQEU&_nc_ht=scontent-mad1-1.xx&oh=8baf49215e692cee54668ca38fc7761a&oe=60CCAE37',
        //'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: '',
        caption: '',
        key: '2'
    },
    {
      src:
      'https://www.uab.cat/Imatge/248/8/banner1,0.jpg',
        //'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: '',
        caption: '',
        key: '3'
    },
    {
      src: '/logos/GMV.jpg',
      altText: '',
      caption: '',
      key: '4'
    },
    {
      src: '/logos/trl.png',
      altText: '',
      caption: '',
      key: '5'
    }
  ];
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper rounded-lg bg-plum-plate carouselitem ml-5 mr-5 mt-5 mb-5">
        <div className="flex-grow-1 w-100 d-flex rounded-lg align-items-center ">
          <div
            className="bg-composed-wrapper--image rounded-lg opacity-3 "
          />
          <div className="bg-composed-wrapper--bg bg-first rounded-lg opacity-3" />
          <div className="bg-composed-wrapper--content">
            <div className="container-fluid p-5">
              <Row>
                <Col xl="7" className="d-flex align-items-center">
                  <div className="text-center text-xl-left">
                    <h1 className="display-3 mb-3 font-weight-bold text-center">
                      iGNSSrx Project
                    </h1>
                    <p className="font-size-lg font-weight-bold d-block mb-5 text-black text-center">
                      This is a web page to display and download a set of samples that were obtained from different routes performed during the iGNSSrx experiment.
                    </p>
                  </div>
                </Col>
                <Col xl="5" className="d-flex align-items-center  containerCarousel ">
                  <Card className="mt-5 mt-xl-0 ">
                    <div className="p-3">
                      <UncontrolledCarousel items={items} />
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}