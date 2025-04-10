const Notes = (props) => {
    return <li><button>YAY</button>{props.name} {props.number}
    <button onClick={props.delete}>Delete</button>
    
    </li>;
  };
  
export default Notes