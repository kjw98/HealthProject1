import React from "react"
import styled from "styled-components"
import { Close, SignupImg } from "../image/index.js"

import Menubar from "./Menubar.js"
import SignupModal from "react-modal"

import { LoginTrue } from "../component/navigation.js"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1350px;
  height: 150px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 690px;
  position: absolute;
  top: 150px;
  display: flex;
  justify-content: center;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1350px;
  height: 50px;
  bottom: 0px;
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

const UserIcon = styled.img`
  width: 100px;
  height: 100px;
`

const SignupTop = styled.div`
  width: 1010px;
  height: 170px;
  position: absolute;
  top: 20px;
  border: 3px solid black;
  border-radius: 10px;
`

const SignupMiddle = styled.div`
  width: 1010px;
  height: 220px;
  position: absolute;
  top: 230px;
  border: 3px solid black;
  border-radius: 10px;
`

const SignupBottom = styled.div`
  width: 1010px;
  height: 110px;
  position: absolute;
  bottom: 90px;
  border: 3px solid black;
  border-radius: 10px;
`

const Btn = styled.button`
  background-color: #333;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border-radius: 10px;
  &:hover {
    background-color: #df75db;
    color: #333;
    cursor: pointer;
  }
`

const GenderBtn = styled.button`
  background-color: #fff;
  color: #333;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border-radius: 10px;
  &:hover {
    background-color: #b4b4b4;
    color: #fff;
    cursor: pointer;
  }
`

const ManBtn = styled(GenderBtn)`
  width: 500px;
  height: 50px;
  margin-left: 5px;
  font-size: 30px;
  borderradius: 10px;
`

const WomanBtn = styled(GenderBtn)`
  width: 500px;
  height: 50px;
  position: absolute;
  left: 505px;
  top: 55px;
  font-size: 30px;
  borderradius: 10px;
`

const Certified = styled(GenderBtn)`
  width: 190px;
  height: 55px;
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 30px;
  borderradius: 10px;
`

const SignupBtn = styled(Btn)`
  width: 150px;
  height: 50px;
  position: absolute;
  bottom: 20px;
`

const Signup = ({ isModal, setModal }) => {
  return (
    <SignupModal
      isOpen={isModal}
      onRequestClose={() => setModal}
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
          <UserIcon src={SignupImg}></UserIcon>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>

        <ModalBody>
          <SignupTop>
            <input
              type="text"
              name="userId"
              placeholder="UserID"
              style={{
                width: "1000px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />
            <input
              type="password"
              name="userPW"
              placeholder="PassWorld"
              style={{
                width: "1000px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />
            <input
              type="password"
              name="userPW"
              placeholder="Confirm PassWord"
              style={{
                width: "1000px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />
          </SignupTop>

          <SignupMiddle>
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              style={{
                width: "1000px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />

            <ManBtn>남자</ManBtn>
            <WomanBtn>여자</WomanBtn>

            <input
              type="text"
              name="userBirthday"
              value={"생년월일"}
              style={{
                width: "130px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />

            <input
              type="text"
              name="year"
              placeholder="년 (4자)"
              style={{
                width: "120px",
                height: "50px",
                position: "relative",
                top: "-3px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />
            <input
              type="text"
              name="month"
              value={"월"}
              style={{
                width: "363px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />

            <input
              type="text"
              name="date"
              value={"일"}
              style={{
                width: "363px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />

            <input
              type="text"
              name="userEmail"
              placeholder="Email Address"
              style={{
                width: "1000px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />
          </SignupMiddle>

          <SignupBottom>
            <input
              type="text"
              value={"+82"}
              style={{
                width: "100px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />
            <input
              type="text"
              placeholder="Phone Number"
              style={{
                width: "700px",
                height: "50px",
                marginLeft: "3px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />

            <Certified>인증</Certified>

            <input
              type="text"
              name="userName"
              placeholder="인증번호"
              style={{
                width: "1000px",
                height: "50px",
                fontSize: "30px",
                borderRadius: "10px",
              }}
            />
          </SignupBottom>
          <SignupBtn
            onClick={() => {
              setModal(false)
              LoginTrue()
            }}
          >
            Sign Up
          </SignupBtn>
        </ModalBody>

        <ModalFooter />
      </ModalContainer>
    </SignupModal>
  )
}

export default Signup
