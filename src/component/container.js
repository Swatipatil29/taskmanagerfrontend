import { useReducer } from "react";
import taskContext from "../context/context";
import TaskForm from "./taskform";
import TaskList from "./TaskList";
import { Row, Col} from "reactstrap"

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TASK": {
      return { ...state, data: [...state.data, action.payload] };
    }
    case "LIST_TASK": {
      return { ...state, data: action.payload };
    }
    case "REMOVE_TASK": {
      const newData = state.data.filter(task => task._id !== action.payload);
      return { ...state, data: newData };
    }
    case "UPDATE_TASK": {
      const updatedData = state.data.map(task => {
        if (task._id === action.payload._id) {
          return action.payload;
        } else {
          return task;
        }
      });
      return { ...state, data: updatedData };
    }
    default: {
      return state;
    }
  }
};


function Container(){
    const[tasks, dispatch] = useReducer(reducer, { data:[]})

    return(
        <Row>
          <taskContext.Provider value={{dispatch, tasks}}>
          <Col md={6}>
          <TaskList/>
          </Col>
          <Col md={6}>
          <TaskForm/>
          </Col>
          </taskContext.Provider>
          </Row>
    )

    
}

export default Container