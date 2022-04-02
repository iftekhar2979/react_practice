import './App.css';
import Person from './component/Person';

function App() {
  const detail=[{
    name:'alomgir',
    age:35,
    img:'https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?cs=srgb&dl=pexels-channnsy-11143927.jpg&fm=jpg',
    nayoka:'shabana',
    key:'asdf1'
  },
  {
    name:'Dijol',
    age:55,
    img:'https://images.pexels.com/photos/11468525/pexels-photo-11468525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    nayoka:'bobita',
    key:'asdf2'
  },
  {
    name:'manna',
    age:53,
    img:'https://images.pexels.com/photos/7606285/pexels-photo-7606285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    nayoka:'purnima',
    key:'asdf3'
  },{
    name:'Shah Rukh Khan',
    age:60,
    img:'https://images.pexels.com/photos/8519311/pexels-photo-8519311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    nayoka:'anjali',
    key:'asdf4'
  }]

  return (
    <div className="App">
      {
        detail.map(det=><Person name={det.name} age={det.age} key={det.key} girls={det.nayoka} image={det.img}></Person>)
      }
    </div>
  );
}


export default App;
