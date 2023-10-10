import App.css
import {userEffect ,userState} from 'react';
import {Link} from 'react-router-dom'

function App(){
  const [data, setData] = useState([]);
  userEffect(()=>{axios.get("http://localhost:3020/users").then(
    response=>setData(responce.data)
  ).catch(err=>console.log(err))
},[])
return(
  <div>
    <div className='text-end'><Link to="/add" className"btn btn-pri
    <br></br>
    <br></br>

    </div>
  </div>
)
  )})
}