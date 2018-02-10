import React from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todoItem: ""
        };
    }

    // When the component mounts, load all todos and save them to this.state.todo
    componentDidMount() {
        this.loadTodos();
    }


    // Loads all todos  and sets them to this.state.todo
    loadTodos = () => {
        API.getTodos()
            .then(res =>
                this.setState({ todos: res.data, todoItem: "" })
            )
            .catch(err => console.log(err));
    };

    // Deletes a todo from the database with a given id, then reloads todos from the db
    deleteTodo = id => {
        API.deleteTodo(id)
            .then(res => this.loadTodos())
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.todoItem) {
            API.saveTodo({
                todoItem: this.state.todoItem,
            })
                .then(res => this.loadTodos())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
        // <Container fluid>
        <Row>
          <Col size="md-4">
            {/* <Jumbotron> */}
              <h1>Add a Todo</h1>
            {/* </Jumbotron> */}
            <form>
              <Input
                value={this.state.todoItem}
                onChange={this.handleInputChange}
                name="TodoItem"
                placeholder="Send invites, order food, etc"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Add to list
              </FormBtn>
              
            </form>
            </Col>
            <Col size="md-8 sm-12">
              <h1>To Do List</h1>
            {this.state.todos.length ? (
              <List>
                {this.state.todos.map(todo => {
                  return (
                    <ListItem key={todo._id}>
                      <a href={"party/todo/" + todo._id}>
                        <strong>
                          {todo.todoItem}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(todo._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
              </Col>
            </Row>
            // </Container>
        );
    }
}
export default Todo;


// const Todo = () =>

// <div>
// <h1 className="text-center">To Do</h1>
// <p>
//     Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii
// partiendo sed ne, no mutat ludus aperiri mea, per in choro dolorem
// electram. Invidunt reprimique assueverit quo ne, eruditi graecis pro ut.
// Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
// </p>
// </div>;














