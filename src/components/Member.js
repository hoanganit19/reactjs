import Avatar from './Avatar';
import MemberInfo from './MemberInfo';
import Comment from './Comment';

function Member(){
    return(
        <div className='member-box'>
            <Avatar />
            <MemberInfo />
            <Comment />
        </div>
    ) 
};

export default Member;