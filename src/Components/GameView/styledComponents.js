import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 40px;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 100px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 22px;
  font-weight: normal;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  width: 120px;
  height: 100px;
`

export const Para = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 10px;
  color: #223a5f;
`

export const NewPara = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
  margin-top: 10px;
  color: #223a5f;
`

export const TwoButtons = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  background-color: transparent;
  text-align: center;
  border: none;
  cursor: pointer;
  width: 150px;
  margin-right: 25px;
  margin-left: 25px;
`

export const Image = styled.img`
  width: 150px;
`

export const OneButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const GameImage = styled.img`
  width: 150px;
`

export const GameImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Result = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const ReplayButton = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
`

export const TriggerButton = styled.button`
  align-self: flex-end;
  background-color: #ffffff;
  border-radius: 3px;
  border: none;
  font-size: 13px;
  font-family: 'Bree Serif';
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 7px;
  padding-bottom: 7px;
  color: #223a5f;
  cursor: pointer;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding-top: 25px;
  padding-bottom: 45px;
  padding-left: 50px;
  padding-right: 50px;
`

export const RulesImage = styled.img`
  width: 600px;
`
