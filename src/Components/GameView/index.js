import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  BgContainer,
  ResponsiveContainer,
  Header,
  Heading,
  ScoreContainer,
  Para,
  Score,
  TwoButtons,
  Button,
  Image,
  OneButton,
  ImagesContainer,
  GameImage,
  GameImageContainer,
  Text,
  Result,
  ReplayButton,
  TriggerButton,
  CloseButton,
  RulesContainer,
  RulesImage,
  NewPara,
} from './styledComponents'

class GameView extends Component {
  state = {
    isPlaying: true,
    score: 0,
    playerImage: '',
    opponentImage: '',

    result: '',
  }

  buttonClicked = (id, image) => {
    const {choicesList} = this.props
    const randomChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const oppId = randomChoice.id

    console.log(id)
    console.log(oppId)

    if (id === 'ROCK') {
      if (oppId === 'ROCK') {
        this.setState({result: 'IT IS DRAW'})
      } else if (oppId === 'SCISSORS') {
        this.setState(prevState => ({
          result: 'YOU WON',
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          result: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      }
    } else if (id === 'PAPER') {
      if (oppId === 'ROCK') {
        this.setState(prevState => ({
          result: 'YOU WON',
          score: prevState.score + 1,
        }))
      } else if (oppId === 'SCISSORS') {
        this.setState(prevState => ({
          result: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      } else {
        this.setState({
          result: 'IT IS DRAW',
        })
      }
    } else if (id === 'SCISSORS') {
      if (oppId === 'ROCK') {
        this.setState(prevState => ({
          result: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      } else if (oppId === 'SCISSORS') {
        this.setState({
          result: 'IT IS DRAW',
        })
      } else {
        this.setState(prevState => ({
          result: 'YOU WON',
          score: prevState.score + 1,
        }))
      }
    }

    this.setState({
      playerImage: image,
      opponentImage: randomChoice.imageUrl,

      isPlaying: false,
    })
  }

  renderButtons = () => {
    const {choicesList} = this.props
    return (
      <>
        <TwoButtons>
          <Button
            data-testid="rockButton"
            onClick={() =>
              this.buttonClicked(choicesList[0].id, choicesList[0].imageUrl)
            }
          >
            <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </Button>
          <Button
            data-testid="scissorsButton"
            onClick={() =>
              this.buttonClicked(choicesList[1].id, choicesList[1].imageUrl)
            }
          >
            <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </Button>
        </TwoButtons>
        <OneButton>
          <Button
            data-testid="paperButton"
            onClick={() =>
              this.buttonClicked(choicesList[2].id, choicesList[2].imageUrl)
            }
          >
            <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </Button>
        </OneButton>
      </>
    )
  }

  resetGame = () => {
    this.setState({
      isPlaying: true,
      playerImage: '',
      opponentImage: '',

      result: '',
    })
  }

  renderGame = () => {
    const {playerImage, opponentImage, result} = this.state
    return (
      <>
        <ImagesContainer>
          <GameImageContainer>
            <NewPara>YOU</NewPara>
            <GameImage src={playerImage} alt="your choice" />
          </GameImageContainer>
          <GameImageContainer>
            <NewPara>OPPONENT</NewPara>
            <GameImage src={opponentImage} alt="opponent choice" />
          </GameImageContainer>
        </ImagesContainer>
        <Text>
          <Result>{result}</Result>
          <ReplayButton type="button" onClick={this.resetGame}>
            PLAY AGAIN
          </ReplayButton>
        </Text>
      </>
    )
  }

  render() {
    const {score, isPlaying} = this.state
    return (
      <BgContainer>
        <ResponsiveContainer>
          <Header>
            <div>
              <Heading>
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
              </Heading>
            </div>
            <ScoreContainer>
              <Para>Score</Para>
              <Score>{score}</Score>
            </ScoreContainer>
          </Header>
          {isPlaying ? this.renderButtons() : this.renderGame()}

          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
          >
            {close => (
              <RulesContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine size="20" color="#616e7c" />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            )}
          </Popup>
        </ResponsiveContainer>
      </BgContainer>
    )
  }
}

export default GameView
