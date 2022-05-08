
import { Swiper, SwiperSlide } from "swiper/react" // basic
import styled from "styled-components"

const Questions = styled.div`
  width: 400px;
  height: 100px;
  position: relative;
  margin-top: 80px;
  left: 70px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  font-family: serif;
`

const Answer = styled.div`
  width: 400px;
  height: 200px;
  left: 70px;
  background-color: orange;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  line-height: 60px;
  font-family: serif;
`

const Inquiry = styled.div`
  width: 1400px;
  height: 200px;
  background-color: gray;
  color: #fff;
  position: absolute;
  bottom: 200px;
  left: 170px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const btn = styled.div`
  width: 150px;
  height: 40px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  &:hover {
    background-color: #fff;
    color:#333;
    cursor:pointer;
  }
`

const Inquiry_btn = styled(btn)`

  position: absolute;
  bottom: 220px;
  left: 800px;
`

function QuestionSection() {
  return (
    <div className="section">

      <h3>자주 묻는 질문</h3>

      <Swiper
        style={{ height: "450px" }}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <Questions>로그인은 어디서 하나요?</Questions>
          <Answer>오른쪽 상단 내정보 아이콘에서 로그인 가능 합니다.</Answer>
        </SwiperSlide>
        <SwiperSlide>
          <Questions>내 정보는 어디서 확인할 수 있나요?</Questions>
          <Answer>오른쪽 상단 내정보 아이콘에서 확인 가능 합니다.</Answer>
        </SwiperSlide>
        <SwiperSlide>
          <Questions>캘린더 수정은 어떻게 하나요?</Questions>
          <Answer>
            오른쪽 상단 내정보 아이콘에서 캘린더 탭 클릭하면 수정 가능 합니다.
          </Answer>
        </SwiperSlide>

        <SwiperSlide>
          <Questions>공지사항은 어디에 있나요?</Questions>
          <Answer>
            오른쪽 상단 내정보 아이콘에서 공지사항 확인 가능 합니다.
          </Answer>
        </SwiperSlide>
        <SwiperSlide>
          <Questions>챌린지 참여는 어떻게 하나요?</Questions>
          <Answer>
            오른쪽 상단 내정보 아이콘에서 챌린지 참여 가능 합니다.
          </Answer>
        </SwiperSlide>
        <SwiperSlide>
          <Questions>이 웹 사이트에서는 무엇을 제공하나요?</Questions>
          <Answer>
            저희 웹 사이트에서는 건강 및 헬스 관련 정보들을 제공 합니다.
          </Answer>
        </SwiperSlide>
      </Swiper>

      <Inquiry>
        자주 묻는 질문 외에 다른 질문을 문의 하고 싶다면 아래 버튼을 클릭하여
        관리자에게 직접 문의 해주세요.
      </Inquiry>
      <Inquiry_btn>관리자에게 문의</Inquiry_btn>

    </div>
  )
}

export default QuestionSection