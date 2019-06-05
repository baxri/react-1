import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           books: []
        };
      }
      
    componentDidMount() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=harry&fbclid=IwAR0GNT0p1cF3NPkf81hy-ZSfPcGFGRK6WdAXWoBORurTiwrACCpPUHUOSgE')
        .then(response =>  {
        this.setState({books : response.data.items});
        
        })
        .catch(error => {
        console.log(error);
        });
    }
   
    render() {
        console.log(this.state.books);
        return(
            <div>
            <Table>
                <thead>
                <tr>
                    <th>kind</th>
                    <th>Id</th>
                    <th>etag</th>
                    <th>selfLink</th>
                </tr>
                </thead>
                <tbody>
                    {
                    this.state.books.map(function(book){
                        return <tr key={book.id}>
                                <td>{book.kind}</td>
                                 <td>{book.id}</td>
                                 <td>{book.etag}</td>
                                 <td>{book.selfLink}</td>
                                 <td>
                                    <FontAwesomeIcon icon={faHeart} />
                                </td>
                                 <td><a>readmore</a></td>
                            </tr>
                        
                    })
                    }
                </tbody>
             </Table>
           
          </div>
        );
    }
}

export default Home ;