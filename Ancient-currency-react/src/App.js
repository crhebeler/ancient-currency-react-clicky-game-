import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import ScoreCard from './components/ScoreCard';


/// The shuffle function makes the cards go into a random order 
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    // an array is returned as a result 
    return array;
  }

  class App extends Component {

    state = {
      names,
      score: 0,
      topScore: 0,
      clickedNames: []
    };


    clickedImage = id => {
        // assign the state of the empty array to a let to be updated
        let clickedNames = this.state.clickedNames;
        let score = this.state.score;
        let topScore = this.state.topScore;
    
        // if the clicked image has an id of the indexed characters
        if (clickedNames.indexOf(id) === -1) {
          // push that id into that id into the array to be stored
          clickedNames.push(id);
          console.log(clickedNames);
          // run the score function
          this.handleIncrement();
          // run the reshuffle function after each click
          this.makeShuffle();
        } else if (this.state.score === 12) {
          alert("You win, you clicked each form of Ancient Currency with out clicking doubles. GREAT JOB")
          this.setState({
            score: 0,
            clickedNames: []
          });
        } else {
          this.setState({
            score: 0,
            clickedNames: []
          });
          console.log("duplicate")
          alert("Sorry you clicked on the same Ancient Currency twice, start over and better luck next time !")
        }
    
        if (score > topScore) {
          this.setState({
            topScore: score
          })
        } 
      }
    
      // handleIncrement increases this.state.score by 1
      handleIncrement = () => {
        // setState updates a components states
        this.setState({ score: this.state.score + 1 });
      };
    
      // shuffle up images
      makeShuffle = () => {
        this.setState({ names: shuffle(names) })
      }
    
      // reset = () => {
      //   this.setState({ score: 0 })
      // }
      
    
      render() {
        return (
          <div>
            <Navbar
              score={this.state.score}
              topScore={this.state.topScore}
            />
            <Header />
            <Wrapper>
              {this.state.names.map(name => (
                <Nharacters 
                  key={names.id}
                  id={names.id}
                  name={names.name}
                  image={names.image}
                  clickedImage={this.clickedImage}
                />
              ))}
              </Main>
            </Wrapper>
            </Footer>  
          </div>
        )
      }
    }

export default App;

    
