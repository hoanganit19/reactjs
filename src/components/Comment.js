function Comment(props) {
    return (
        <div className="comment">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
};

export default Comment