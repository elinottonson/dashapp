import React from 'react';
class Learn extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
        }
    }
    render(){
        return (
            <div class="learn" style={{width: "calc(100% - 210px)", float: "right"}}>
                <iframe src="https://trinket.io/embed/python/ab00f7efe9" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <iframe src="https://trinket.io/embed/python/f192a70d63" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Learn;
