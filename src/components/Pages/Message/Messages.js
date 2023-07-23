import React, { useState } from 'react'
import classes from "./Messages.module.css";
import Header from '../../Header/Header';
import { IoMdSend } from "react-icons/io";
function Messages() {
    const [contactArray, setContactArray] = useState([1, 2, 3, 4, 5]);
    const [messageArray, setMessageArray] = useState([1, 2, 3, 4, 5]);
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

              <div
                className={`${classes.list_search_user_chat}`}
              >
                <div className={classes.user_chat} data-username="Maria Dennis">
                  <div class={classes.user_chat_img}>
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <div className={classes.offline}></div>
                  </div>

                  <div className={classes.user_chat_text}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Maria Dennis</strong>
                    </p>
                    <small>Hi, how are you?</small>
                  </div>
                </div>
                <div className={classes.user_chat} data-username="Maria Dennis">
                  <div class={classes.user_chat_img}>
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <div className={classes.offline}></div>
                  </div>

                  <div className={classes.user_chat_text}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Maria Dennis</strong>
                    </p>
                    <small>Hi, how are you?</small>
                  </div>
                </div>
                <div className={classes.user_chat} data-username="Maria Dennis">
                  <div class={classes.user_chat_img}>
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <div className={classes.offline}></div>
                  </div>

                  <div className={classes.user_chat_text}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Maria Dennis</strong>
                    </p>
                    <small>Hi, how are you?</small>
                  </div>
                </div>
                <div className={classes.user_chat} data-username="Maria Dennis">
                  <div class={classes.user_chat_img}>
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <div className={classes.offline}></div>
                  </div>

                  <div className={classes.user_chat_text}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Maria Dennis</strong>
                    </p>
                    <small>Hi, how are you?</small>
                  </div>
                </div>
                <div className={classes.user_chat} data-username="Maria Dennis">
                  <div class={classes.user_chat_img}>
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <div className={classes.offline}></div>
                  </div>

                  <div className={classes.user_chat_text}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Maria Dennis</strong>
                    </p>
                    <small>Hi, how are you?</small>
                  </div>
                </div>

                <div
                  className={classes.user_chat}
                  data-username="Jorge Harrinson"
                >
                  <div className={classes.user_chat_img}>
                    <img
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <div className={classes.online}></div>
                  </div>

                  <div className={classes.user_chat_text}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Jorge Harrinson</strong>
                    </p>
                    <small>Hi, how are you?</small>
                  </div>
                </div>

                <div className={classes.user_chat} data-username="Carla Terry">
                  <div className={classes.user_chat_img}>
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <div className={classes.offline}></div>
                  </div>

                  <div className={classes.user_chat_text}>
                    <p className={`${classes.mt_0} ${classes.mb_0}`}>
                      <strong>Carla Terry</strong>
                    </p>
                    <small>Hi, how are you?</small>
                  </div>
                </div>
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