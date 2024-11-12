import "./App.css"

const App = ({nm,em,mb}) => {
  return (
    <div id="disp">
        <h1>Name: {nm}</h1>
        <h2>Emailid: {em}</h2>
        <h2>Mobile No: {mb}</h2>
    </div>
  )
}
export default App
