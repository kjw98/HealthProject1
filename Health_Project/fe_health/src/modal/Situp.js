import React from "react"
import styled from "styled-components"
import { Close, Trophy } from "../image/index.js"

import Menubar from "./Menubar.js"
import SitupModal from "react-modal"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: #96a5ff;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 690px;
  position: absolute;
  top: 100px;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1350px;
  height: 100px;
  bottom: 0px;
  background-color: #b4b4b4;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const Title = styled.div`
  position: absolute;
  top: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`

const PushUpBg = styled.div`
  width: 1250px;
  height: 630px;
  position: absolute;
  left: 50px;
  top: 30px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
`

const PushUpBg2 = styled.div`
  width: 1250px;
  height: 530px;
  position: absolute;
  top: 50px;
  background-color: #ffa0ff;
`

const PushUpBg3 = styled.div`
  width: 400px;
  height: 470px;
  position: absolute;
  left: 30px;
  top: 30px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TrophyImage = styled.img`
  width: 300px;
  height: 400px;
`

const Mission = styled.div`
  width: 750px;
  height: 80px;
  position: absolute;
  right: 30px;
  border-radius: 30px;
  font-size: 30px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Mission1 = styled(Mission)`
  top: 30px;
`

const Mission2 = styled(Mission)`
  top: 150px;
`

const Mission3 = styled(Mission)`
  top: 280px;
`

const Mission4 = styled(Mission)`
  top: 410px;
`

const MissionBtn = styled.div`
  width: 100px;
  height: 40px;
  position: absolute;
  right: 30px;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`

const MissionSuccessBtn = styled(MissionBtn)`
  background-color: #a0afff;
`
const MissionFailBtn = styled(MissionBtn)`
  background-color: #cd1039;
`

const MissionResult = styled.div`
  width: 300px;
  height: 60px;
  position: absolute;
  right: 50px;
  bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const MissionSuccess = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 10px;
  background-color: #a0afff;
  border-radius: 50px;
`

const MissionSuccessText = styled.div`
  font-size: 20px;
  position: absolute;
  left: 50px;
`

const MissionFail = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 160px;
  background-color: #cd1039;
  border-radius: 50px;
`

const MissionFailText = styled.div`
  font-size: 20px;
  position: absolute;
  left: 200px;
`

const Situp = ({ isModal, setModal }) => {
  return (
    <SitupModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        content: {
          position: "relative",
          width: "1610px",
          height: "850px",
          left: "2%",
          right: "10%",
          backgroundColor: "#7FFFD4",
        },
      }}
    >
      <Menubar />

      <ModalContainer>
        <ModalHead>
          <Title>Mission</Title>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>

        <ModalBody>
          <PushUpBg>
            <PushUpBg2>
              <PushUpBg3>
                <TrophyImage src={Trophy} />
              </PushUpBg3>
              <Mission1>
                ?????????????????? ?????? 150???
                <MissionSuccessBtn>??????</MissionSuccessBtn>
              </Mission1>
              <Mission2>
                ?????????????????? 30???
                <MissionFailBtn>??????</MissionFailBtn>
              </Mission2>
              <Mission3>
                ?????????????????? 20???
                <MissionSuccessBtn>??????</MissionSuccessBtn>
              </Mission3>
              <Mission4>
                ?????????????????? ?????? 300???
                <MissionFailBtn>??????</MissionFailBtn>
              </Mission4>
            </PushUpBg2>
          </PushUpBg>
        </ModalBody>

        <ModalFooter>
          <MissionResult>
            <MissionSuccess />
            <MissionSuccessText>??????: 2???</MissionSuccessText>
            <MissionFail />
            <MissionFailText>??????: 2???</MissionFailText>
          </MissionResult>
        </ModalFooter>
      </ModalContainer>
    </SitupModal>
  )
}

export default Situp
