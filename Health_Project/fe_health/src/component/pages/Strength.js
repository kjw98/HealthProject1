// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

import styled from "styled-components"
import { Calender, In_body, Scheduling, Water_alarm } from "../../image/index"

import React from "react"

// modal
import ScanModal from "../../modal/Scan.js"
import AlarmModal from "../../modal/Alarm.js"
import ScheduleModal from "../../modal/Schedule.js"
import CalendarModal from "../../modal/Calendar.js"

SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const Container = styled.div`
  width: 1740px;
  height: 970px;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};

  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`

const PhoneIcon = styled.div`
  width: 350px;
  height: 600px;
  background-color: yellow;
  border: 4px solid #333;
  border-radius: 10%;
  position: absolute;
  top: 20%;
  left: 13%;
`

const SwiperSlideStyle = styled.div`
  width: 300px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8%;
  left: 21%;
`

const Btn = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 10px;
  background-color: #fff;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  &:hover {
    background-color: gray;
    color: #fff;
    cursor: pointer;
  }
`

const Back1Btn = styled(Btn)`
  position: absolute;
  top: 75%;
  left: 30%;
`

const Back2Btn = styled(Btn)`
  position: absolute;
  top: 75%;
  left: 30%;
`

const Back3Btn = styled(Btn)`
  position: absolute;
  top: 75%;
  left: 30%;
`

const Back4Btn = styled(Btn)`
  position: absolute;
  top: 75%;
  left: 30%;
`

const ItemBox = styled.div`
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
  transition: 1s;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #ff4646;
  background-color: #ff4646;
  border-radius: 50%;
  font-size: 30px;
`

const Front1 = styled(ItemBox)`
  position: absolute;
  top: 20%;
  left: 65%;
  transform: rotateY(0deg);
`

const Front2 = styled(ItemBox)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: rotateY(0deg);
`

const Front3 = styled(ItemBox)`
  position: absolute;
  top: 40%;
  left: 80%;
  transform: rotateY(0deg);
`

const Front4 = styled(ItemBox)`
  position: absolute;
  top: 60%;
  left: 65%;
  font-size: 30px;
  transform: rotateY(0deg);
`

const Back1 = styled(ItemBox)`
  position: absolute;
  top: 20%;
  left: 65%;
  font-size: 15px;
  line-height: 30px;
  border: 2px solid #333;
  background-color: #333;
  color: #fff;
  transform: rotateY(-180deg);
`

const Back2 = styled(ItemBox)`
  position: absolute;
  top: 40%;
  left: 50%;
  font-size: 15px;
  line-height: 30px;
  color: #fff;
  border: 2px solid #333;
  background-color: #333;
  transform: rotateY(-180deg);
`

const Back3 = styled(ItemBox)`
  position: absolute;
  top: 40%;
  left: 80%;
  font-size: 15px;
  line-height: 30px;
  color: #fff;
  border: 2px solid #333;
  background-color: #333;
  transform: rotateY(-180deg);
`

const Back4 = styled(ItemBox)`
  position: absolute;
  top: 60%;
  left: 65%;
  font-size: 15px;
  line-height: 30px;
  color: #fff;
  border: 2px solid #333;
  background-color: #333;
  transform: rotateY(-180deg);
`

const Selecter1 = styled.div`
  &:hover ${Front1} {
    transform: rotateY(180deg);
  }
  &:hover ${Back1} {
    transform: rotateY(0deg);
  }
`

const Selecter2 = styled.div`
  &:hover ${Front2} {
    transform: rotateY(180deg);
  }
  &:hover ${Back2} {
    transform: rotateY(0deg);
  }
`

const Selecter3 = styled.div`
  &:hover ${Front3} {
    transform: rotateY(180deg);
  }
  &:hover ${Back3} {
    transform: rotateY(0deg);
  }
`

const Selecter4 = styled.div`
  &:hover ${Front4} {
    transform: rotateY(180deg);
  }
  &:hover ${Back4} {
    transform: rotateY(0deg);
  }
`

function StrengthSection() {
  const [ScanmodalIsOpen, setScanModalOpen] = React.useState(false)
  const [AlarmmodalIsOpen, setAlarmModalOpen] = React.useState(false)
  const [SchedulemodalIsOpen, setScheduleModalOpen] = React.useState(false)
  const [CalendarmodalIsOpen, setCalendarModalOpen] = React.useState(false)

  return (
    <div className="section">
      <Container>
        <PhoneIcon>
          <Swiper
            style={{
              height: "680px",
              width: "500px",
              position: "absolute",
              top: "-5%",
              left: "-23%",
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <SwiperSlideStyle>
                <img
                  src={Calender}
                  alt="????????? ??????"
                  width="300px"
                  height="520px"
                ></img>
              </SwiperSlideStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideStyle>
                <img
                  src={In_body}
                  alt="?????????"
                  width="300px"
                  height="520px"
                ></img>
              </SwiperSlideStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideStyle>
                <img
                  src={Scheduling}
                  alt="?????? ????????????"
                  width="300px"
                  height="520px"
                ></img>
              </SwiperSlideStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideStyle>
                <img
                  src={Water_alarm}
                  alt="??? ??????"
                  width="300px"
                  height="520px"
                ></img>
              </SwiperSlideStyle>
            </SwiperSlide>
          </Swiper>
        </PhoneIcon>

        <Selecter1>
          <Front1>????????? ??????</Front1>
          <Back1>
            ???????????? ???????????? ???????????? ?????? ????????? ????????? ????????? ??? ????????????.
            <Back1Btn onClick={() => setScanModalOpen(true)}>????????????</Back1Btn>
          </Back1>
        </Selecter1>

        <ScanModal isModal={ScanmodalIsOpen} setModal={setScanModalOpen} />

        <Selecter2>
          <Front2>??? ??????</Front2>
          <Back2>
            ?????? ????????? ???????????? ???????????? ?????? ??? ????????? ????????? ??? ????????????.
            <Back2Btn onClick={() => setAlarmModalOpen(true)}>
              ????????????
            </Back2Btn>
          </Back2>
        </Selecter2>

        <AlarmModal isModal={AlarmmodalIsOpen} setModal={setAlarmModalOpen} />

        <Selecter3>
          <Front3>?????? ????????????</Front3>
          <Back3>
            ???????????? ?????? ?????? ???????????? ?????? ??? ????????? ??? ????????????.
            <Back3Btn onClick={() => setScheduleModalOpen(true)}>
              ????????????
            </Back3Btn>
          </Back3>
        </Selecter3>

        <ScheduleModal
          isModal={SchedulemodalIsOpen}
          setModal={setScheduleModalOpen}
        />

        <Selecter4>
          <Front4>?????????</Front4>
          <Back4>
            ???????????? ???????????? ?????? ?????? ????????? ?????? ???????????? ????????? ??? ????????????.
            <Back4Btn onClick={() => setCalendarModalOpen(true)}>
              ????????????
            </Back4Btn>
          </Back4>
        </Selecter4>

        <CalendarModal
          isModal={CalendarmodalIsOpen}
          setModal={setCalendarModalOpen}
        />
      </Container>
    </div>
  )
}

export default StrengthSection
