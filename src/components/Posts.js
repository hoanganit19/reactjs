function Posts({posts, name}){
    
    const postsJsx = posts.map((post, index) => {
        return (
            <div key={index}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p><i>Post By: {name}</i></p>
            </div>
        );
    });

    return (
        <>
            <h3>Danh sách bài viết</h3>
            {postsJsx}
        </>
    )
}

export default Posts;