import React,{useState} from 'react';
import './App.css';
import Hello from './components/Hello';
import Wrapper from './components/wrapper';
import MessageBox from './components/MessageBox';
import Counter from './components/Counter';
import InputSample from './components/inputSample';
import UseRef from './components/UseRef';
import UserList from './components/UserList';


function App() {
  const obj = {
    header: ["품목", "가격(원)", "수량(개)"],
    data: [
      { fruit: "사과", price: "10000원", ea: "5" },
      { fruit: "딸기", price: "8000원", ea: "25" },
      { fruit: "복숭아", price: "15000원", ea: "6" },
      { fruit: "바나나", price: "3000원", ea: "1" },
      { fruit: "메론", price: "30000원", ea: "1" },
      { fruit: "수박", price: "22000원", ea: "1" },
      { fruit: "참외", price: "4000원", ea: "2" },
      { fruit: "체리", price: "6000원", ea: "30" },
      { fruit: "포도", price: "7000원", ea: "3" },
      { fruit: "배", price: "4000원", ea: "1" },
    ],
  };
  const style ={
    color:"skyblue",
    font:"bold"
  };
  const [folding,setFolding] = useState(true);
  const foldMessage = () =>{
    setFolding((show) => !show)
  };
  return (
    <>
    <UserList></UserList>
    <UseRef></UseRef>
    <InputSample></InputSample>
    <Wrapper>     
    <Counter></Counter>
      <Counter></Counter>
      <MessageBox folding={folding}></MessageBox>     
    <div>
      <br></br>
      <button onClick={foldMessage}>{folding?"접기":"펴기"}</button>
      <Hello name="name 표시O(1)" isSpecial></Hello>
      <Hello name="name 표시X(2)" isSpecial={false}></Hello>
      <Hello name="name 표시O(3)" isSpecial={true}></Hello>
      <div style={style}>{obj.header.toString().split("")}</div>
      <div style={{ color: "red", fontSize: "500px" }} className='as'>test</div>
    </div>
    <div className='test-box'></div>
    </Wrapper>
    {/* <table>
      <thead>
        <tr>
          {obj.header.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {obj.data.map((item)=>{
          return (
                <tr>
                  <td>{item.fruit}</td>
                  <td>{item.price}</td>
                  <td>{item.ea}</td>
                </tr>);
        })}
      </tbody>
    </table> */}
    </>
    
  );
}

export default App;
