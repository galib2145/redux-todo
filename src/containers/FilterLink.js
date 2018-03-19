import { Link } from '../components'

class FilterLink extends Component {
  componentDidMount() {
    store.subscribe(() => { 
      this.unsubscribe = this.forceUpdate();
    });    
  }

  componentWillUnmount() {
    this.unsubscribe();  
  }

  render() {
    const filter = this.props.filter;
    const currentFilter = store.getState().visibilityFilter;

    return (
      <Link active={filter === currentFilter} onClick={() => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter,
        });
       }}>{this.props.children}
      </Link>  
    );  
  }    
}