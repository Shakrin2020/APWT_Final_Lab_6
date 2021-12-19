import react,{Component} from 'react';
import Head  from './Head';

class ShowContact extends Component
{
    constructor()
    {
        super()
        this.state={
            Name:"AIUB",
            Department:"FST",
            Email:"aiub.fst@gmail.edu"
            
        }
    }
    ChangeDeptDetails()
    {
        this.setState({
            Name:"AIUB",
            Department:"FE",
            Email:"aiub.fe@gmail.edu"
            
        });
    }
    render(){
        return (
            <div>
              
               
              <h3>{this.state.Name} <br/>
              {this.state.Department}<br/>
              {this.state.Email}</h3>
            <button onClick={()=>this.ChangeDeptDetails()}>New Details</button>
            </div>
   
        )
    }
    

}
export default ShowContact;