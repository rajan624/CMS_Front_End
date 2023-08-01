import React, { useRef, useState } from "react";
import classes from "./Messages.module.css";
import Header from "../../Header/Header";
import { IoMdSend } from "react-icons/io";
import { GetType } from "../../../utilities/context/authContext";
import { useEffect } from "react";
import io from "socket.io-client";
import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import { Box } from "@mui/material";
import messageDefaultImg from "../../../utilities/images/priscilla-du-preez-xM4wUnvbCKk-unsplash.jpg";
import TimeAgo from "timeago-react";
var socket;
function Messages() {
  const cookies = new Cookies();
  const scrollableDivRef = useRef(null);
  const [messages, setMessages] = useState("");
  const [contactArray, setContactArray] = useState([]);
  const [messageArray, setMessageArray] = useState([]);
  const [userData, setUserData] = useState({});
  const user = GetType();
  useEffect(() => {
    if (user._id) {
      socket = io(process.env.REACT_APP_API_IMAGE);
      socket?.emit("setup", { id: user._id });
      socket?.on("connected", (data) => {
        console.log("connected", data);
      });
    }
  }, [user]);

  useEffect(() => {
    const getAllChat = async () => {
      const token = cookies.get("token");
      console.log(token);
      if (!token) {
        return;
      }
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/user/fetchChats`, {
            headers: { Authorization: `${token}` },
          })
          .then((data) => {
            console.log("🚀 ~ file: ViewBlog.js:75 ~ ).then ~ data:", data);
            setContactArray(data.data);
          })
          .catch((error) => {
            toast.error("Something went Wrong");
          });
      } catch (error) {
        console.log(error);
      }
    };
    if (user._id) {
      getAllChat();
    }
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      sender: user._id,
      content: messages,
      chat: userData.chatId,
    };
    socket?.emit("newMessages", data);
    setMessageArray([...messageArray, data]);
    setMessages("");
  };
  useEffect(() => {
    socket?.on("broadcast", (data) => {
      console.log("🚀 ~ file: Messages.js:66 ~ socket?.on ~ data:", data);
      setMessageArray([...messageArray, data]);
    });
  });
  const getSenderDetails = (data) => {
    const foundObject = data.find((obj) => obj._id != user._id);
    return foundObject || {};
  };

  const getAllMessage = async (id) => {
    const token = cookies.get("token");
    console.log(token);
    if (!token) {
      return;
    }
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/user/fetchMessages/${id}`, {
          headers: { Authorization: `${token}` },
        })
        .then((data) => {
          setMessageArray(data.data);
        })
        .catch((error) => {
          toast.error("Something went Wrong");
        });
    } catch (error) {
      console.log(error);
    }
  };
  const scrollToBottom = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messageArray]);
  return (
    <>
      <Header />
      <div className={classes.mainDiv}>
        <div className={`${classes.content_chat}`}>
          <div className={classes.content_chat_user}>
            <div className={classes.head_search_chat}>
              <h4 className={classes.text_center}>Chat Finder</h4>
            </div>
            <div className={`${classes.search_user} ${classes.mt_30}`}>
              <input
                id="search-input"
                type="text"
                placeholder="Search..."
                name="search"
                className={classes.search}
              />
              <span>
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>

            <div className={`${classes.list_search_user_chat}`}>
              {contactArray.map((data, index) => {
                return (
                  <div
                    onClick={() => {
                      setUserData({
                        profileImage: getSenderDetails(data?.users)
                          ?.profileImage,
                        name: getSenderDetails(data?.users)?.name,
                        chatId: data._id,
                      });
                      getAllMessage(data._id);
                      socket?.emit("joinChat", data._id);
                    }}
                    className={`${classes.user_chat} ${
                      data._id == userData.chatId ? classes.active : ""
                    }`}
                  >
                    <div class={classes.user_chat_img}>
                      <img
                        src={getSenderDetails(data?.users)?.profileImage}
                        alt=""
                      />
                      <div className={classes.offline}></div>
                    </div>
                    <div className={classes.user_chat_text}>
                      <p className={`${classes.mt_0} ${classes.mb_0}`}>
                        <strong>{getSenderDetails(data?.users)?.name}</strong>
                      </p>
                      <small>{data?.latestMessage?.content}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`${classes.content_chat_message_user}  ${classes.active}`}
          >
            {userData?.name ? (
              <>
                <div className={classes.head_chat_message_user}>
                  <img src={userData?.profileImage} alt="" />
                  <div className={classes.message_user_profile}>
                    <p
                      className={`${classes.mt_0} ${classes.text_white} ${classes.mb_0}`}
                    >
                      <strong>{userData?.name}</strong>
                    </p>
                    <small className={classes.text_white}>
                      <p
                        className={`${classes.online} ${classes.mt_0} ${classes.mb_0}`}
                      ></p>
                      Online
                    </small>
                  </div>
                </div>
                <div
                  ref={scrollableDivRef}
                  className={classes.body_chat_message_user}
                >
                  {messageArray.map((data, index) => {
                    return (
                      <div
                        className={`${
                          data.sender == user._id
                            ? classes.message_user_right
                            : classes.message_user_left
                        }`}
                      >
                        <div
                          className={`${
                            data.sender == user._id
                              ? classes.message_user_right_img
                              : classes.message_user_left_img
                          }`}
                        >
                          <img
                            src={
                              data.sender == user._id
                                ? user?.profileImage
                                : userData?.profileImage
                            }
                            alt=""
                          />
                          <p className={`${classes.mt_0} ${classes.mb_0}`}>
                            <strong>
                              {data.sender == user._id
                                ? user?.name
                                : userData?.name}
                            </strong>
                          </p>
                          <TimeAgo
                            datetime={data.createdAt}
                            locale="en"
                          />
                          <small>mié 17:59</small>
                        </div>
                        <div
                          className={
                            data.sender == user._id
                              ? classes.message_user_right_text
                              : classes.message_user_left_text
                          }
                        >
                          <strong>{data?.content}</strong>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  className={classes.footer_chat_message_user}
                >
                  <div className={classes.message_user_send}>
                    <input
                      onChange={(e) => {
                        setMessages(e.target.value);
                      }}
                      value={messages}
                      type="text"
                      placeholder="Type Messages"
                    />
                  </div>
                  <button type="submit">
                    <IoMdSend />
                  </button>
                </Box>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "87vh",
                }}
              >
                <img
                  style={{ borderRadius: "16px" }}
                  src={messageDefaultImg}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
