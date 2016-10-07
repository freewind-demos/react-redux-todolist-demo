import {connect} from "react-redux";
import Footer from "../components/footer.jsx";

function mapStateToProps(state) {
  return {
    hasCompleteTodos: state.todos.some(todo => !todo.active)
  }
}

export default connect(mapStateToProps)(Footer);
