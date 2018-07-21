import React, { Component } from 'react'
import 'isomorphic-unfetch'

export default class extends Component {  
  static async getInitialProps ({ query: { id } }) {
      const users = await fetch('http://localhost:5000/api/users').then((res) => res.json())
      console.log(users)
      return { userId: id, users } // users: users을 줄인거 = this.props
  }

  render () { //화면에 보여지는 부분(리액트에선 )
    return <div> 
      <h1>My blog post #{this.props.userId}</h1>
      { this.props.users.map((v) => ( //users가 배열이라서 루프를 돌 수 있다. 자바스크립트에서 map은 배열을 한바퀴 돌겠다
      //div가 너무 많아서 그냥 이렇게 쓸래. 맨 겉에 있는 div묶으려고
      <React.Fragment>               
          <div>이름: {v.name}</div>
          <div>나이: {v.age}</div>
      </React.Fragment>
      //return값에는 하나의 리턴값만 있어야 한다.      
      ))
      }
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  }
}