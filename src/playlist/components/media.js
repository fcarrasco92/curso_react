import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css'
class Media extends PureComponent {
     // ES6
    /*constructor(props){
        super();        
    //    this.handleClick = this.handleClick.bind(this);
        this.state = {
            author: props.author
        }
    }*/
    // ES6
    /*handleClick(event){
        console.log(this.props.image);
    }*/
    // ES7
    state ={
        author: 'Felipe Carrasco'
    } 
    // handleClick = (event)=>{
    //     //console.log(this.props.image);
    //     // this.setState({
    //     //     author: 'Enrique Carrasco',
    //     // })
    // }
    render(){
        const styles = {
            container:{                
                color:'#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return(
            <div className="Media" onClick={this.props.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                        src={this.props.cover}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}
Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
}
export default Media;