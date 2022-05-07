function Avatar() {
    return (
        <div className="avatar">
            <img src={process.env.PUBLIC_URL+"/images/avatar.jpeg"} alt="" /> 
        </div>
    )
};

export default Avatar;