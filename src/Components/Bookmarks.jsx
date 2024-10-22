const Bookmarks = ({bookmark,readingTime}) => {
    const {id,title}=bookmark;
    return (
        <div className="w-1/3">
            <h2>Bookmarks: {bookmark.length}</h2>
            <h1>Reading time: {readingTime}</h1>
            {
                bookmark.map(b=><p>{b.title}</p>)
            }
        </div>
    );
};

export default Bookmarks;