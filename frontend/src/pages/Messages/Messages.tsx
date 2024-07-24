import { useEffect } from "react";
import "./Messages.scss";
import { fetchMessages, selectMessages } from "../../features/message/messageSlice";
import { store } from "../../store/store";
import { useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";

const Messages: React.FC = () => {
  const messages = useAppSelector(selectMessages);
  useEffect(() => {
    store.dispatch(fetchMessages());
  }, []);
  return (
    <div className='messages section'>
      <div className='messages__container container grid'>
        <h2 className='section__title'>Messages</h2>
        <Link to='/' className='button button--flex'>
          <a>Back Home</a>
        </Link>
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div className='message__card' key={index}>
              <h3 className='message__title'>Full Name : {message?.fullName}</h3>
              <p className='message__email'>Email: {message?.email}</p>
              <p className='message__content'>{message?.message}</p>
              <p className='message__date'>
                Date :{" "}
                {new Date(message?.createdAt!).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>
            </div>
          ))
        ) : (
          <p>No messages found</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
