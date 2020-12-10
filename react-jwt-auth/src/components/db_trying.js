import React from "react";
import { GetStaticProps } from 'next'

 class Demo extends React.Component {
  render() {
    const { p } = this.props
    return (
      <div>demo{p}</div>
    )
  }
 };


      
  export default Demo
   