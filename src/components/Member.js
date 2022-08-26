import Avatar from './Avatar';
import MemberInfo from './MemberInfo';
import Comment from './Comment';
import Posts from './Posts';

const Member = props => {
    
    const {name, age, shippingAddress, comment, posts} = props;

    return(
        <div className='member-box'>
            <h2>Tên: {name}</h2>
            <p>Tuổi: {age}</p>
            <p>Địa chỉ giao hàng: {shippingAddress}</p>
            {comment}
            <Posts {...props}/>
        </div>
    ) 
};

export default Member;