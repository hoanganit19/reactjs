function Event01(){

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <>
            <h1>Unicode Academy</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username..." />
                <button type="submit">Submit</button>
            </form>
        </>
    )

}

export default Event01;