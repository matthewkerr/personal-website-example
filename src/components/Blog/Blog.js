import React, {Component} from 'react';
import Butter from 'buttercms';
import { Link, withRouter } from 'react-router-dom';
import Section from '../Section/Section';
import Wrapper from '../../hoc/Wrapper';
const butter = Butter('4365t356'); // changed for your different clients

class Blog extends Component {

    state = {
        loaded: false
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    fetchPosts(page) {
        console.log('fetch posts');

        butter.post.list({page: 1, page_size: 10}).then((resp) => {
          this.setState({
            loaded: true,
            resp: resp.data
          })
        });
    }

    componentWillMount() {
        

        let page =  this.props.match.params.page || 1;
    
        this.fetchPosts(page)
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({loaded: false});
    
        let page = this.props.match.params.page || 1;
    
        this.fetchPosts(page)
    }

    render() {
        if (this.state.loaded) {
          const { next_page, previous_page } = this.state.resp.meta;
    
          return (
            <Wrapper>
            <Section label="Current Episode" class='topSection' />
            <div>
              {this.state.resp.data.map((post) => {
                return (
                  <div key={post.slug}>
                    <Link to={`/post/${post.slug}`}>{post.title}</Link>
                  </div>
                )
              })}
    
              <br />
    
              <div>
                {previous_page && <Link to={`/Blog/${previous_page}`}>Prev</Link>}
    
                {next_page && <Link to={`/Blog/${next_page}`}>Next</Link>}
              </div>
            </div>
            </Wrapper>
          );
        } else {
          return (
            <div>
              Loading...
            </div>
          )
        }
      }
    }
    
export default withRouter(Blog);
