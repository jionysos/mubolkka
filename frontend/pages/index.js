import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <div className="d-flex justify-content-between mb-10">
      <div>netplix</div>
      <a href = "http://" className="jiwon">로그인</a> 
  
    </div>
    <div>
      <div>언제어디서나 ~~</div>
      <div>다양한 디바이스~`</div>
      <div>한달 무료얌 ~~</div>
    </div>
    <style jsx>{`{
      .mb-10 {
        margin-bottom: 200px; 
      }
    }`}</style>

    <style jsx>{`{
      .jiwon {
        color: #fff !important;
        background-color: #e50914;
        line-height: normal;
        margin: 18px 3% 0;
        padding: 7px 17px;
        font-weight: 400;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        font-size: 16px;
      }
    }`}</style>
  </div>
)