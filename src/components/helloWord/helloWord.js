import React from 'react'
import './helloWorld.css'

class HelloWorld extends React.Component{
    render() {
        return(
            <div>
                <button className="button-font">点击我</button>
            </div>
        )
    }
}

export default HelloWorld