import React from 'react'
import Link from 'next/link'

export default () => (
  <div className="w-100">
    <div className="main-image">
      <div className="d-flex justify-content-between">
        <div className="logo">netplix</div>
        <div>
          <a href = "https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fcomic.naver.com%2Findex.nhn" className="btn btn-danger login-button login-form">로그인</a> 
        </div>
      </div>
      <div>
          <h1 className ="text-form1">취향저격 웹툰을 한 곳에서!</h1>
          <p className = "text-form2">왔다갔다 하지말고 한 곳에서 보세요</p>
        </div>
      <div>
        <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="btn bnt-danger btn-form">그냥 볼래요</a>
            </li>
            <Link href="/recommends">
              <a className="btn bnt-danger btn-form">추천받아 볼래요</a>
            </Link>

        </ul>
      </div>    
    </div>
    <style jsx>{`{
      .mb-10 {
        margin-bottom: 200px; 
      }
      .login-button {
        padding: 5px 15px;
        color: #fff;
        background-color: #e50914 !important;
      }
      .head {
        background: 0 0;
        border: 0;
        position: absolute;
        z-index: 5;
        width: 100%;
      }
      .main-image {
        height: 100vh;
        background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/21201051-e34b-42e5-be96-02283a6a5d7c/a52c36e9-0335-43bd-a052-2eb46f0829d9/KR-en-20180723-popsignuptwoweeks-perspective_alpha_website_small.jpg");
      }
      .login-form {
        line-height: normal;
        margin: 18px 25.958px;
        padding: 7px 17px;
        font-weight: 400;
        border-radius: 3px;
        font-size: 16px;
      }
      .btn-form{
        padding: 5px 15px;
        background-color: #e50914 !important;
        color: #fff !important;
        line-height: normal;
        margin: 35px 28px;
        padding: 10px 30px;
        font-weight: 400;
        border-radius: 3px;
        font-size: 18px;
        font-weight: 750;

      }
      .text-form1{
        font-size: 80px;
        margin: 0 0 30px;
        color: #fff !important;
        margin: 0 0 .2em;
        line-height: 1.1em;
        font-weight: 700;
        text-align: center;
        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
        direction: ltr;
        margin-bottom: 30px; 
        margin-top: 100px; 
        text-shadow: 1px 1px 10px #000;
      }
      .text-form2{
        font-weight: 450;
        text-align: center;
        font-size: 29px;
        margin: 0 0 30px;
        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
        letter-spacing: .3px;
        color: #fff !important;
      }
      .logo{
        color: #e50914;
        padding: 7px 17px;
        font-weight: 400;
        font-size: 16px;
      }
      .fade{
        style="display: block;
      }
    }`}</style>
  </div>
)