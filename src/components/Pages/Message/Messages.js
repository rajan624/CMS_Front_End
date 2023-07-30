import React, { useState } from 'react'
import classes from "./Messages.module.css";
import Header from '../../Header/Header';
import { IoMdSend } from "react-icons/io";
import { GetType } from '../../../utilities/context/authContext';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useRef } from 'react';
import Cookies from 'universal-cookie';
import { GTranslate } from '@material-ui/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
function Messages() {
  const cookies = new Cookies();
    const [contactArray, setContactArray] = useState([]);
  const [messageArray, setMessageArray] = useState([1, 2, 3, 4, 5]);
  var socket
  const user = GetType();
  useEffect(() => {
    if (user._id) {  
      socket = io(process.env.REACT_APP_API_IMAGE);
      socket.emit("setup", {id:user._id});
      socket.on("connected", () => {
        console.log("connected")
  });
      socket.on("typing", () => {
        console.log("connected");
      });
      socket.on("stop typing", () => {
        console.log("connected");
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
         await axios.get(`${process.env.REACT_APP_API_URL}/user/fetchChats`, {
             headers: { Authorization: `${token}` },
           })
           .then((data) => {
             console.log("🚀 ~ file: ViewBlog.js:75 ~ ).then ~ data:", data);
             setContactArray(data.data)
           })
           .catch((error) => {
             toast.error("Something went Wrong");
           });
       } catch (error) {
         console.log(error);
       }
    };
    getAllChat();
  },[])
  
  const send = () => {

  //   let data = {
  //     content:
  //     sender:
  //   }
  //   socket.emit("newMessages", data);
   }

  // useEffect(() => {
  //    socket.on("broadcast", (data) => console.log(data));
  // },[])
  const getSenderDetails = (data) => {
    const foundObject = data.find((obj) => obj._id != user.id);
    return foundObject || {};
  }
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
                      className={classes.user_chat}
                      data-username="Maria Dennis"
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
                        <small>Hi, how are you?</small>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={classes.content_chat_message_user}
              data-username="Maria Dennis"
            >
              <div className={classes.head_chat_message_user}>
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className={classes.message_user_profile}>
                  <p
                    className={`${classes.text_white} ${classes.mt_0} ${classes.mb_0}`}
                  >
                    <strong>Maria Dennis</strong>
                  </p>
                  <small className={classes.text_white}>
                    <p
                      className={`${classes.offline} ${classes.mt_0} ${classes.mb_0}`}
                    ></p>
                    Offline
                  </small>
                </div>
              </div>
              <div className={classes.body_chat_message_user}>
                <div className={classes.message_user_left}>
                  <div className={classes.message_user_left_img}>
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Maria Dennis</strong>
                    </p>
                    <small>mié 17:59</small>
                  </div>
                  <div className={classes.message_user_left_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>

                <div className={classes.message_user_left}>
                  <div className={classes.message_user_left_img}>
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Maria Dennis</strong>
                    </p>
                    <small>mié 17:59</small>
                  </div>
                  <div className={classes.message_user_left_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
              </div>
              <div className={classes.footer_chat_message_user}>
                <div className={classes.message_user_send}>
                  <input type="text" placeholder="Aa" />
                </div>
                <button type="button">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>

            <div
              className={`${classes.content_chat_message_user} ${classes.active}`}
              data-username="Jorge Harrinson"
            >
              <div className={classes.head_chat_message_user}>
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className={classes.message_user_profile}>
                  <p
                    className={`${classes.mt_0} ${classes.text_white} ${classes.mb_0}`}
                  >
                    <strong>Jorge Harrinson</strong>
                  </p>
                  <small className={classes.text_white}>
                    <p
                      className={`${classes.online} ${classes.mt_0} ${classes.mb_0}`}
                    ></p>
                    Online
                  </small>
                </div>
              </div>
              <div className={classes.body_chat_message_user}>
                <div className={classes.message_user_left}>
                  <div className={classes.message_user_left_img}>
                    <img
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Jorge Harrinson</strong>
                    </p>
                    <small>mié 17:59</small>
                  </div>
                  <div className={classes.message_user_left_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>

                <div className={classes.message_user_left}>
                  <div className={classes.message_user_left_img}>
                    <img
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Jorge Harrinson</strong>
                    </p>
                    <small>mié 17:59</small>
                  </div>
                  <div className={classes.message_user_left_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
              </div>
              <div className={classes.footer_chat_message_user}>
                <div className={classes.message_user_send}>
                  <input type="text" placeholder="Aa" />
                </div>
                <button type="button">
                  <button type="button">
                    <IoMdSend />
                  </button>
                </button>
              </div>
            </div>

            <div
              className={classes.content_chat_message_user}
              data-username="Carla Terry"
            >
              <div className={classes.head_chat_message_user}>
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className={classes.message_user_profile}>
                  <p
                    className={`${classes.mt_0} ${classes.mb_0} ${classes.text_white}`}
                  >
                    <strong>Carla Terry</strong>
                  </p>
                  <small className={classes.text_white}>
                    <p
                      className={`${classes.offline}  ${classes.mt_0} ${classes.mb_0}`}
                    ></p>
                    Offline
                  </small>
                </div>
              </div>
              <div className={classes.body_chat_message_user}>
                <div className={classes.message_user_left}>
                  <div className={classes.message_user_left_img}>
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Carla Terry</strong>
                    </p>
                    <small>mié 17:59</small>
                  </div>
                  <div className={classes.message_user_left_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>

                <div className={classes.message_user_left}>
                  <div className={classes.message_user_left_img}>
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Carla Terry</strong>
                    </p>
                    <small>mié 17:59</small>
                  </div>
                  <div className={classes.message_user_left_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
                <div className={classes.message_user_right}>
                  <div className={classes.message_user_right_img}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Luis Angel Solano Rivera</strong>
                    </p>
                    <small>mié 17:59</small>
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className={classes.message_user_right_text}>
                    <strong>Hola, ¿Cómo estás?</strong>
                  </div>
                </div>
              </div>
              <div className={classes.footer_chat_message_user}>
                <div className={classes.message_user_send}>
                  <input type="text" placeholder="Aa" />
                </div>
                <button type="button">
                  <IoMdSend style={{ background: "black" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Messages